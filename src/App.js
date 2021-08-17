import { Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './views/Home';
import About from './views/About';
import Kekambas66 from './views/Kekambas66';

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor Method Ran')
    this.state = {
      myName: 'Ankit',
      racers: [],
      Kekambas66: []
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
    fetch(' https://kekambas-bs.herokuapp.com/kekambas')
    .then(res=>res.json())
    .then(data => {
      console.log(data);
      this.setState({
        class: data.MRData.StandingsTable.StandingsLists[0].Kekambas66
      })
    })

  }

  render() {
    console.log('Render Method Ran')
    const myName = this.state.myName;
    return (
      <div>
        <Navbar myName={myName} />
        <div className="container">
          <Switch>
            <Route exact path='/classname'>
              <Home myName={myName} updateName={this.updateName} Kekambas66={this.state.className}/>
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
