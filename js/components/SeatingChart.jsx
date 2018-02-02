import React from 'react';
import { Grid } from 'semantic-ui-react';
import shortid from 'shortid';

import SeatingRow from './SeatingRow';

export default class SeatingChart extends React.Component {
  constructor(props) {
    super(props);

    let seats = props.seats;
    let naming = props.naming;
    let original = Object.assign({}, seats);

/*
    let original = [];
    for (let i = 0; i < seats.length; i++) {
      let row = []
      for (let j = 0; j < seats[i].length; j++) {
        row[j] = {...seats[i][j]};
      }
      original[i] = row;
    }
*/
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

    this.onSeatClick = this.onSeatClick.bind(this);
  }

  onSeatClick(row, column) {
    let seats = this.state.seats.slice();
    let seat = seats[row][column];
    
    if (seat.seatType === "selected") {

      seat.seatType = "regular"; //original[row][column].seatType;
    }
    else {
      seat.seatType = "selected";
    }

    this.setState({seats: seats});
  }

  render() {
    return (
      <div className="seatChart-container">
      {this.state.seats.map(function(row, i) {
        return <SeatingRow seats={row} onSeatClick={this.onSeatClick} key={shortid.generate()} num={i} /> 
      }, this)}
      </div>
    )
  }
}
