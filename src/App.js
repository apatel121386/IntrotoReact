import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './views/Home';
import About from './views/About';

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor Method Ran')
    this.state = {
      myName: 'Ankit'
    }
  }
  updateName=()=> {
    const newName = prompt('What is your name?')
    this.setState({
      myName: newName
    })
  }

  componentDidMount(){
    console.log('Component Did Mount...')
    this.setState(
      {
        myName: 'Ankit'
      }
    )
  }

  render() {
    console.log('Render Method Ran')
    const myName = this.state.myName;
    return (
      <div>
        <Navbar myName={myName} />
        <div className="container">
          <Switch>
            <Route exact path='/'>
              <Home myName={myName} updateName={this.updateName}/>
          </Route>
          <Route path='/about'>
            <About/>
           </Route>
           </Switch>
        </div>
        
      </div>
    )
  }
}
