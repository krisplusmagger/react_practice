import './App.css';
import React from 'react';
import CardList from './CardList';
import Scroll from './Scroll'
import SearchBox from './SearchBox';
import 'tachyons';

//https://jsonplaceholder.typicode.com/users

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: '',
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
    })
    .then(users => {
      this.setState({ robots: users})
    });  
    
  }
  onSearchChange = (event) => {
    
    this.setState({searchfield: event.target.value})
    
  }
  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (!this.state.robots.length) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>RobotFriend</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
    );
    }
  }
}

export default App;
