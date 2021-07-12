import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import allData from "./allData";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import Home from "./components/Homepage/Home";
import Question from "./components/Question/Question";
function App() {
  const first20 = allData.slice(0, 20);
  const [question] = useState(first20);

  console.log(question);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/a" component={Question} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
