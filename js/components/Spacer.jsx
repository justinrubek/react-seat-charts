import React from 'react';
import shortid from 'shortid';

export default class Spacer extends React.Component {
  render() {
    return <div key={shortid.generate()} className="seatChart-cell seatChart-spacer" />
  }

}
