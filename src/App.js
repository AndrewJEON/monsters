import React, {Component } from 'react';
import { CardList  } from './components/card-list/card-list-components';
import { SearchBox } from './components/search-box/search-box.component';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  constructor() {
    super();

    this.state = {
      message : "test",
      search:"",
      monsters: []
    }

    // this.handleChange = this.handleChange.bind(this)
    this.handleClick2 = this.handleClick1.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( users => this.setState({ monsters: users }))
  }

  handleClick1() {
    console.log('button 1 clicked');
  }

  handleClick3 = () => console.log('button3 clicked');

  handleChange = (e) => {
    this.setState( {search : e.target.value});
  }

  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes( search.toLowerCase()));

      return (
      <div className="App">

        <h1>Monsters Rolodex</h1>

        <button onClick={this.handleClick1()}>Click1</button>
        <button onClick={this.handleClick1}>Click2</button>
        <button onClick={this.handleClick2}>Click3</button>
        <button onClick={this.handleClick3}>Click4</button>
        <br/>

        <SearchBox placeholder="input name" handleChange={  this.handleChange } />
        <CardList monsters={filteredMonsters} />
       </div>
    );
  }
}

export default App;
