import React from 'react';
import { Grid } from 'semantic-ui-react';

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
  }

  render() {
    return (
      <div className="seatChart-container">
      {this.state.seats.map(function(row, index) {
        return <SeatingRow seats={row} key={index}/> 
      })}
      </div>
    )
  }
}
