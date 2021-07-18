import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Amol from "./components/Amol/Amol";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import History from "./components/History/History";
import Home from "./components/Homepage/Home";
import ErrorPage from "./components/NotFount/ErrorPage";
import QuestionRender from "./components/Question/QuestionRender";
import QurbaniDetails from "./components/QurbaniDetails/QurbaniDetails";
import Qurbanipdf from "./components/QurbaniDetails/Qurbanipdf";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/question" component={QuestionRender} />
          <Route path="/details" component={QurbaniDetails} />
          <Route path="/history" component={History} />
          <Route path="/amol" component={Amol}/>
          <Route path="/pdf" component={Qurbanipdf} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
