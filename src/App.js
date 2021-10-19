
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Pages/Home/Home/Header/Header';
import Footer from './Pages/Home/Home/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Detail from './Pages/Home/Home/Details/Detail';
import Login from './Pages/Home/Login/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Pages/Home/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/Home/Home/NotFound/NotFound';
import Cabin from './Pages/Home/Home/Cabin/Cabin';
import OurService from './Pages/Home/Home/OurService/OurService';

function App() {
  return (
    <div className="">
      
      <AuthProvider>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path ="/ourservice">
            <OurService></OurService>
          </Route>
          <PrivateRoute path="/cabin">
            <Cabin></Cabin>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path ="/detail/:servicId">
            <Detail></Detail>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
