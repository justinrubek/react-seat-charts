import React from 'react';
import AccessibleSeat from './AccessibleSeat'
import Spacer from './Spacer'

import shortid from 'shortid';

export default class Seat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }

    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleClick() {
    let row = this.props.row;
    let column = this.props.column;

    let click = this.props.onSeatClick;
    click(row, column);
  }

  handleFocus() {
    let row = this.props.row;
    let column = this.props.column;

    let focus = this.props.onSeatFocus;
    focus(row, column);
  }

  render() {
    let type = this.props.seat.seatType;
    let status = this.props.seat.status;
    let classNames = "seatChart-seat" + " " + type + " " + status;
    let key = shortid.generate();
    let text = this.props.seat.label;

    let seat = <div className={classNames} key={key} onClick={this.handleClick} onFocus={this.handleFocus}>{text}</div>

    return <div key={shortid.generate()} className="seatChart-cell">{seat}</div>
  }

}

Seat.Accessible = AccessibleSeat;
Seat.Spacer = Spacer;
