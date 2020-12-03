import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

/* Pages */
import Login from '../../pages/Login/index.jsx';
import Menu from '../../pages/Menu/index.jsx'
import Tables from '../../pages/Tables/index.jsx'
import Profiles from '../../pages/Profiles/index.jsx'
import Kitchen from '../../pages/Kitchen/index.jsx'

/* Constants */
import { TOKEN } from '../constants/itemsLocalStorage'
import ROUTES from '../constants/routes'

/* Hooks */
import useGetItemFromLocalStorage from '../../Hooks/useGetItemFromLocalStorage'

const App = () => {
  const [token] = useGetItemFromLocalStorage(TOKEN)

  return (
    <Router>
      <Switch>
        <Route exact path="/Login"><Login /></Route>
        <Route exact path="/Menu"><Menu/></Route>
        <Route exact path="/Tables"><Tables/></Route>
        <Route exact path="/Profiles"><Profiles/></Route>
        <Route exact path="/Kitchen"><Kitchen/></Route>
        {/* <Route exact path={ROUTES.SIGN_IN}>
          {token ? <Redirect to={ROUTES.TABLES} /> : <Login />}
        </Route>
        <Route exact path={ROUTES.MENU}>
          {!token ? <Redirect to={ROUTES.SIGN_IN} /> : <Menu/>}
        </Route>
        <Route exact path={ROUTES.TABLES}>
          {!token ? <Redirect to={ROUTES.SIGN_IN} /> : <Tables/>}
        </Route>
        <Route exact path={ROUTES.PROFILES}>
          {!token ? <Redirect to={ROUTES.SIGN_IN} /> : <Profiles/>}
        </Route>
        <Route>
          <Redirect to={ROUTES.SIGN_IN} /> : <Profiles/>
        </Route> */}
      </Switch>
    </Router>
  )
};

export default App;
