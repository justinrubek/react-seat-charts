import React from 'react';
import { Grid } from 'semantic-ui-react';
import shortid from 'shortid';

import SeatingRow from './SeatingRow';

function copyObject(obj) {
  return Object.assign({}, obj);
}

function cloneDoubleNested(list) {
  return list.map(row => {
    return row.map(item => copyObject(item));
  });
}

export default class SeatingChart extends React.Component {
  constructor(props) {
    super(props);

    let seats = props.seats;
    let original = cloneDoubleNested(seats);

    let naming = props.naming;
    if (naming == null) {
      let rows = [];
      let columns = [];
      for (let i = 0; i < seats.length; i++) {
        rows.push(i.toString());
        columns.push(i.toString());
      }

      naming.rows = rows;
      naming.columns = columns;
    }

    this.state = {
      naming: naming,
      seats: seats,

      original: original
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleClick(row, column) {
    let seats = cloneDoubleNested(this.state.seats);

    let seat = seats[row][column];

    if (seat.seatType === "selected") {

      let original = copyObject(this.state.original[row][column]);
      seat.seatType = original.seatType;
    }
    else {
      seat.seatType = "selected";
    }

    if (this.props.onClick != undefined) {
      this.props.onClick(row, column, seats);
    }

    this.setState({seats: seats});
  }

  handleFocus(row, column) {
    let seats = cloneDoubleNested(this.state.seats);

    let seat = seats[row][column];

    if (seat.status === "available") {
      seat.status = "focused";
    }
    else {
      let original = copyObject(this.state.original[row][column]);
      seat.status = original.status;
    }

    if (this.props.onFocus != undefined) {
      this.props.onFocus(row, column, seats);
    }

    this.setState({seats: seats});
  }

  render() {
    return (
      <div className="seatChart-container">
      {this.state.seats.map(function(row, i) {
        return <SeatingRow seats={row} onSeatClick={this.handleClick} onSeatFocus={this.handleFocus} key={shortid.generate()} num={i} /> 
      }, this)}
      </div>
    )
  }
}
