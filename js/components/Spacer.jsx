import React from 'react';

export default class Spacer extends React.Component {
  render() {
    return <div key={this.props.seat.seatId} className="seatChart-cell seatChart-spacer" />
  }

}
