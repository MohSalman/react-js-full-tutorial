import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ForgotPassword from "./Auth/ForgotPassword";
import Login from "./Auth/Login";
import ResetPassword from "./Auth/ResetPassword";
import Signup from "./Auth/Signup";
import { RouterConstant } from "./constants/RouteConstant";
import Layout from "./Layout";


const PrivateRoute = ({ component: Component }) =>
  <Route  render={(props) => localStorage.getItem("testToken") ? <Component {...props} /> : <Redirect to={RouterConstant.Login} />}
  />

const PublicRoute = ({ component: Component }) =>
  <Route  render={(props) => !localStorage.getItem("testToken") ? <Component {...props} /> : <Redirect to={RouterConstant.Home} />}
  />
  

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path={RouterConstant.Login} component={Login} />
        <PublicRoute exact path={RouterConstant.Signup} component={Signup} />
        <PublicRoute exact path={RouterConstant.ForgotPassword} component={ForgotPassword} />
        <PublicRoute exact path={RouterConstant.ResetPassword} component={ResetPassword} />
        <PrivateRoute path={RouterConstant.Home} component={Layout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
