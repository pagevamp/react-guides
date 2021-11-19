import './scss/app.scss';
import {lazy, Suspense} from 'react'
import {Link, BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Articles from "./pages/HomePages/Articles";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));


function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/home/articles">Articles</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </header>
        <div className="page-content">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path={`/`} element={<Home />} />
              <Route exact path="/home" caseSensitive={false}>
                <Route path={``} element={<Home />} />
                <Route path={`articles`} element={<Articles />} />
              </Route>
              <Route exact path="/contact" caseSensitive={false} element={<Contact />} />
              <Route exact path="/about" caseSensitive={false} element={<About />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </div>
  );
}

export default App;
