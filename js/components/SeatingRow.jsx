import React from 'react';
import { Grid } from 'semantic-ui-react';

import Seat from './Seat.jsx'

export default class SeatingRow extends React.Component {
  render() {
    let seats = this.props.seats.map((seat, index) => {
      
      if (seat.seatType == 'spacer') {
        return <Grid.Column key={'spacer' + index}><Seat type={seat.seatType} label={'_'}/></Grid.Column>
      }
      else {
        return <Grid.Column key={seat.id}><Seat type={seat.seatType} label={seat.label}/></Grid.Column>
      }
    })

    
    let row = <Grid.Row>{seats}</Grid.Row>
    return seats;
  }
}
