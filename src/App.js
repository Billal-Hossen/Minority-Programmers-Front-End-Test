import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Incubator from './components/IncubatorPage/Incubator';
import Home from './Home/Home';
import LearnPages from './components/LearnPages/LearnPages';
import IntroBlockchainPages from './components/LearnPages/IntroBlockchainPages/IntroBlockchainPages';
import WeekPrograss from './components/LearnPages/IntroBlockchainPages/WeekPrograss';
import BlockchainVideo from './components/LearnPages/IntroBlockchainPages/BlockchainVideo';
import AuthorInfo from './components/IncubatorPage/IncubatorPages/AuthorInfo';
import IncubatorFundStartup from './components/IncubatorPage/IncubatorPages/IncubatorFundStartup';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
           
          </Route>
          <Route exact path='/home'>
            <Home/>
           
          </Route>
          <Route path="/incubator">
             <Incubator/>
          </Route > 
          <Route path="/learn">
             <LearnPages/>
          </Route > 
          <Route path="/introBlockchainpages/:id">
            <IntroBlockchainPages/>
          </Route>
          <Route path="/weekPrograss">
            <WeekPrograss/>
          </Route>
          <Route path="/blockchainVideo/:selectId">
            <BlockchainVideo/>
          </Route>
          <Route path="/about/:id">
            <AuthorInfo/>
          </Route>
          <Route path="/fundStartup">
            <IncubatorFundStartup/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
