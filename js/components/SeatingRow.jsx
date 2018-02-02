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

      let type = seat.seatType;
      let onClick = this.props.onSeatClick;
      let onFocus = this.props.onSeatFocus;
      let key = shortid.generate();

      let row = this.props.num;

      if (seat.seatType == 'spacer') {
        return <Spacer seat={seat} key={key}/>
      }
      else if (type == 'accessible') {
        return <Seat.Accessible seat={seat} key={key} onSeatClick={onClick} onSeatFocus={onFocus} row={row} column={i}/>
      }
      else {
        return <Seat seat={seat} key={key} onSeatClick={onClick} onSeatFocus={onFocus} row={row} column={i}/>
      }
    })

    let row = <div className="seatChart-row" key={shortid.generate()}>{seats}</div>
      return row;
  }
}
