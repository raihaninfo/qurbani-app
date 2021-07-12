import { useState } from 'react';
import allData from "./allData";
import './App.css';
import Navbar from './components/Header/Navbar';
import Home from './components/Homepage/Home';
import Question from './components/Question/Question';
function App() {
  const first20 = allData.slice(0,20)
  const [question] = useState(first20)

  console.log(question)
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Question></Question>
    </div>
  );
}

export default App;
