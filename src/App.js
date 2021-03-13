import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ShowDetail from './Components/ShowDetail/ShowDetail';

function App() {
  return (
    <div className="App">
       <Router>
         <Switch>
           <Route exact path='/'>
             <Home></Home>
           </Route>
           <Route path='/explore/:strTeam'>
             <ShowDetail></ShowDetail>  
           </Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
