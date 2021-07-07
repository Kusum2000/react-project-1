
import './App.css';
import Nav from './nav';
import Home from './home';
import About from './about';
import Contact from './contact';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
        <Route path='/react-project-1' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>      
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;
