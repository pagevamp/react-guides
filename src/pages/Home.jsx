import logo from "../logo.svg";
import {useEffect} from "react";
export default function Home() {
  useEffect(() => {

  }, [])

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