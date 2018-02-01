import React from 'react';
import { Grid } from 'semantic-ui-react';

import shortid from 'shortid';

import Seat from './Seat.jsx'
import Spacer from './Spacer.jsx'

export default class SeatingRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    let seats = this.props.seats.map((seat, i) => {

      let seatId = seat.id;
      let onClick = this.props.onSeatClick;
      let key = shortid.generate();
      let type = seat.seatType;

      let row = this.props.num;

      if (type == 'spacer') {
        return <Spacer seatId={seat.id} key={key}/>
      }
      else if (type == 'accessible') {
        return <Seat.Accessible seatId={seatId} label={seat.label} key={key} onSeatClick={onClick} row={row} column={i}/>
      }
      else {
        return <Seat seatId={seatId} type={type} label={seat.label} key={key} onSeatClick={onClick} row={row} column={i}/>
      }
    })

    let row = <div className="seatChart-row" key={shortid.generate()}>{seats}</div>
      return row;
  }
}
