import React from 'react';
import axios from 'axios';

export default class Acapy extends React.Component {
  state = {
    connections: []
  }

  componentDidMount() {
    axios.get(`http://34.224.165.20:3000/topic/connections`)
      .then(res => {
        const connections = res.data.results;
        this.setState({ connections });
      }).catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <ul>
        {
          this.state.connections
            .map(connection =>
              <li key={connection.connection_id}>{`id: ${connection.connection_id}, rfc23_state: ${connection.rfc23_state}`}</li>
            )
        }
      </ul>
    )
  }
}