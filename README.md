# React Seat Charts
React Seat Charts is a library powered by ReactJS to create interactive seating maps.

## Installation
To install, use npm:
```bash
$ npm install react-seat-charts
```

## Usage
Import and render a SeatingChart component:
```javascript
import React from "react";
import { SeatingChart } from 'react-seat-charts';

export default class App extends React.Component {
  render() {
	let seats = [ [{seatType: "regular", status: "available", label: "5"}],
				  [{seatType: "spacer"}] ];
	let naming = { rows: ["A"], columns: ["1"]};
    let seatingChart = <SeatingChart seats={seats} naming={naming}/>;
    return <div>{seatingChart}</div>;
  }
}
```

See the [Wiki](https://github.com/justinrubek/react-seat-charts/wiki) for more information about the components included.
