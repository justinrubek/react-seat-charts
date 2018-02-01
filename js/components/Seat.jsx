import React from 'react';
import AccessibleSeat from './AccessibleSeat'
import Spacer from './Spacer'

import shortid from 'shortid';

class Seat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let row = this.props.row;
    let column = this.props.column;

    let click = this.props.onSeatClick;
    click(row, column);
  }

  render() {
    let type = this.props.type;
    let classNames = "seatChart-seat" + " " + type;
    let key = shortid.generate();
    let text = this.props.label;

    let seat = <div className={classNames} key={key} onClick={this.handleClick}>{text}</div>

    return <div key={shortid.generate()} className="seatChart-cell">{seat}</div>
  }

}

Seat.Accessible = AccessibleSeat;
Seat.Spacer = Spacer;

export default Seat;
