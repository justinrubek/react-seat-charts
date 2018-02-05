# React Seat Charts
React Seat Charts is a library powered by React to create interactive seat selectors.

[Example](https://justinrubek.github.io/react-seat-charts-example/) 

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
  	// SeatingChart requires a double nested array of seat objects
	let seats = [ [{seatType: "regular", status: "available", label: "5"}],
				  [{seatType: "spacer"}] ];
	
	// Naming is optional
	let naming = { rows: ["A"], columns: ["1"]};
    
    // Let there be seats
    let seatingChart = <SeatingChart seats={seats} naming={naming}/>;
    return <div>{seatingChart}</div>;
  }
}
```
This renders to:
```html
<div>
	<div class="seatChart-container">
		<div class="seatChart-row">
			<div class="seatChart-cell">
				<div class="seatChart-seat regular available">5</div>
			</div>
		</div>
		<div class="seatChart-row">
			<div class="seatChart-cell seatChart-spacer"></div>
		</div>
	</div>
</div>
```

See the [Wiki](https://github.com/justinrubek/react-seat-charts/wiki) for more information about the components included.
