import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Booking from './Pages/Booking/Booking';
import AuthProvider from './Context/AuthProvider';
import FeedbackDetails from './Pages/FeedbackDetails/FeedbackDetails';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Registration></Registration>
          </Route>
          <Route path="/feedbackDetails">
            <FeedbackDetails></FeedbackDetails>
          </Route>
          <Route path="/booking">
            <Booking></Booking>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
