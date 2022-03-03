import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import About from './page/About/index.tsx';
import Home from './page/Home/index.tsx';
// import Post from './page/Post/index.tsx';
import NoMatch from './page/NoMatch/index.tsx';

const Post = React.lazy(() => import('./page/Post/index.tsx'))

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="post" element={
              <React.Suspense fallback={<>加载中。。。</>}>
                <Post />
              </React.Suspense>
            } />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Ref使用</Link>
          </li>
          <li>
            <Link to="/post">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}