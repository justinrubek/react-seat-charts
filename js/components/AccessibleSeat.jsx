import React from 'react';

export default class AccessibleSeat extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    };

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
    let label = this.props.seat.label;
    let classes = "seatChart-seat " + this.props.seat.status + " accessible " + "available";
    let seat = <div className={classes} onClick={this.handleClick} onFocus={this.handleFocus}>{label}</div>

    return <div key={this.props.seatId} className="seatChart-cell">{seat}</div>
  }

}
