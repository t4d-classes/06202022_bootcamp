import { Link, Outlet } from 'react-router-dom';

import "./Layout.css";

export const Layout = () => {

  return (

    <div class="container">

      <header id="page-header">
        <h1>Tools App</h1>
      </header>

      <nav id="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/color-tool">Color Tool</Link></li>
        </ul>
      </nav>

      <main id="content">
        <Outlet />
      </main>

      <aside id="sidebar">
        Sidebar
      </aside>

      <footer id="page-footer">
        <small>
          &copy; 2022 A Cool Company, Inc.
        </small>
      </footer>


    </div>


  );

};