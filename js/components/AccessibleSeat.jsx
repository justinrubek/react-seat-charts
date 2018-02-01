import React from 'react';

export default class AccessibleSeat extends React.Component {
  render() {
    let seat = <div className="seatChart-seat available accessible" onClick={this.props.onSeatClick}>{this.props.label}</div>

    return <div key={this.props.seatId} className="seatChart-cell">{seat}</div>
  }

}
