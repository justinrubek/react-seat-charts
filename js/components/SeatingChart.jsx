import React from 'react';
import { Grid } from 'semantic-ui-react';
import shortid from 'shortid';

import SeatingRow from './SeatingRow';

export default class SeatingChart extends React.Component {
  constructor(props) {
    super(props);

    let seats = props.seats;
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
      seats: seats
    };

    this.onSeatClick = this.onSeatClick.bind(this);
  }

  onSeatClick(row, column) {
    console.log("Row: " + row);
    console.log("Column: " + column);
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
