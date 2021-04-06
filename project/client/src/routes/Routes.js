import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import DefaultLayout from '../layouts/DefaultLayout';
import Home from '../pages/Home';
import Training from '../pages/Training';

/**
 * Her har jeg laget en "rute" til "/" og bruker Home komponenten i pages mappen
 */

const Routes = () => (
  <Router>
    <Navigation />
    <DefaultLayout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/trening">
          <Training />
        </Route>
      </Switch>
    </DefaultLayout>
  </Router>
);

export default Routes;
