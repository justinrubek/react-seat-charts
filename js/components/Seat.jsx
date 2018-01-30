import React from 'react';
import { Button } from 'semantic-ui-react';

export default class Seat extends React.Component {
  render() {
    let seat = <div className="seatChart-cell seatChart-seat available">{this.props.label}</div>
    //return <Button className="seatChart-seat seatChart-cell available" color='green' key={this.props.seatId} size='mini'>{this.props.label}</Button>
    //return <div key={this.props.seatId} className="seatChart-seat seatChart-cell regular-seat available" role="checkbox" aria-checked="false" focusable="true" tabIndex="-1">{this.props.label}</div>

    return <div key={this.props.seatId} className="seatChart-cell">{seat}</div>
  }

}
