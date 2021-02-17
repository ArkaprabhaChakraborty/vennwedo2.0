
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LandingLeft from './LandingLeft';
import LandingRight from './LandingRight';
import Login from './Login';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <div className="app_page">      
              <LandingLeft/>
              <LandingRight/>
            </div>
          </Route>
          <Route path="/login">
            <div className="app_page">
              <Login/>
            </div>
          </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
