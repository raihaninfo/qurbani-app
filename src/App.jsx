import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Home from "./components/Homepage/Home";
import QuestionRender from "./components/Question/QuestionRender";
import HistoryOfQurbani from "./components/QurbaniDetails/HistoryOfQurbani";
import QurbaniDetails from "./components/QurbaniDetails/QurbaniDetails";
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/question" component={QuestionRender} />
          <Route path="/details" component={QurbaniDetails} />
          <Route path='/history' component={HistoryOfQurbani} />
        </Switch>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
