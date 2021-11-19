import logo from "../logo.svg";
import Articles from "./HomePages/Articles";
import {BrowserRouter, Routes, Route} from "react-router-dom";

export default function Home() {
  return <div className="home-page">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </div>
}