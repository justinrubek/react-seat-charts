import React from 'react';
import { Grid } from 'semantic-ui-react';

import Seat from './Seat.jsx'
import Spacer from './Spacer.jsx'

export default class SeatingRow extends React.Component {
  render() {
    let seats = this.props.seats.map((seat, index) => {
      if (seat.seatType == 'spacer')
        return <Spacer seatId={seat.id}/>
      else
        return <Seat seatId={seat.id} type={seat.seatType} label={seat.label}/>
    })

    let row = <div className="seatChart-row">{seats}</div>
    return row;
  }
}
