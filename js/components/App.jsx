import React from "react";
import { Button, Loader } from 'semantic-ui-react';
import SeatingChart from './SeatingChart';
import axios from 'axios';

var seatsJson = '{"seats": [[{"seatType": "handicapped","label": "5","id": "0_0" }, {"seatType": "regular","label": "3","id": "0_1"}, {"seatType":"spacer","size": 1}],[{"seatType": "regular","label": "21","id": "1_0"},{"seatType": "regular","label": "22","id": "1_1"},{"seatType": "regular","label": "23","id": "1_2"}]], "naming": {"rows": ["A", "B"],"columns": ["1", "2", "3"]}}'


export default class App extends React.Component {
  constructor(props) {
    super(props);

    let chartInfo = JSON.parse(seatsJson);

    this.state = {
      received: false 
    }

  }

  componentDidMount() {
    axios.get('/js/seats.json').then(response => this.setState({seats: response.data.seats, naming: response.data.naming, received: true})).catch(error => console.log(error));
  }

  render() {
    let seat = this.state.received ? <SeatingChart seats={this.state.seats} naming={this.state.naming}/> : <Loader active/>
    return (
      <div>
        <Button color='red'>Hello semantic-ui in React! </Button>
        {seat} 
      </div>
    )
  }
}
