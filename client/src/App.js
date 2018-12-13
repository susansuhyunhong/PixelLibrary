import React, { Component } from 'react';
import NavBar from './NavBar.js';
import GridList from './GridList.js';
import PageNavBar from './PageNavBar.js';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    console.log('component did mount');
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    console.log('api called');
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    console.log('render');
    return (
      <div>
        <NavBar/>
        <GridList/>
        <p>{this.state.response}</p>
        <PageNavBar/>
      </div>
    );
  }
}

export default App;
