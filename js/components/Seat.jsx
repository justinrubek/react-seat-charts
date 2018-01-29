import React from 'react';
import { Button } from 'semantic-ui-react';

export default class Seat extends React.Component {
  render() {
    return <Button color='green' key={this.props.id + this.props.label}>{this.props.label}</Button>
  }

}
