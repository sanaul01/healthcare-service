import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Pages/Home/Home/Header/Header';
import Footer from './Pages/Home/Home/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Detail from './Pages/Home/Home/Details/Detail';
import Login from './Pages/Home/Login/Login/Login';
import AuthProvider from './Contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      
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
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path ="/detail/:servicId">
            <Detail></Detail>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
