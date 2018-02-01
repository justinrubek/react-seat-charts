import React from 'react';
import AccessibleSeat from './AccessibleSeat'
import Spacer from './Spacer'

import shortid from 'shortid';

class Seat extends React.Component {
  render() {
    let type = this.props.type;
    let classNames = "seatChart-seat" + " " + type;
    let key = shortid.generate();
    let onClick = this.props.onSeatClick;
    let text = this.props.label;

    let seat = <div className={classNames} key={key} onClick={onClick}>{text}</div>

    return <div key={shortid.generate()} className="seatChart-cell">{seat}</div>
  }

}

Seat.Accessible = AccessibleSeat;
Seat.Spacer = Spacer;

export default Seat;
