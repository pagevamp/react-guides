import './scss/app.scss';
import {lazy, Suspense} from 'react'
import {Link, BrowserRouter as Router, Routes , Route} from "react-router-dom";

const routes = [
  {
    name: 'Home',
    path: '/',
    element: lazy(() => import('./pages/Home')),
  },
  {
    name: 'About Us',
    path: '/about',
    element: lazy(() => import('./pages/About')),
  },
  {
    name: 'Contact',
    path: '/contact',
    element: lazy(() => import('./pages/Contact')),
  },
];

function App() {
  return (
    <div className="App">
    <Router>

        <header className="App-header">
          <ul>
            {
              routes.map((route, index) => {
                return <><li key={route.path + index}>
                  <Link to={route.path}>{route.name}</Link>
                </li></>
              })
            }
          </ul>
        </header>
        <div className="page-content">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {
                routes.map((route,index) => <Route path={route.path} key={route.path + index} element={<route.element />} />)
              }
            </Routes>
          </Suspense>
        </div>
      </Router>
    </div>
  );
}

export default App;
