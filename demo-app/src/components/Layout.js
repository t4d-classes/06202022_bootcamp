import { Link, Outlet } from 'react-router-dom';

import "./Layout.css";

export const Layout = () => {

  return (

    <div class="container">

      <header id="page-header">
        <h1>Tools App</h1>
      </header>

      <nav id="menu">
        <ul className="menuBar">
          <li className="menuItem"><Link to="/">Home</Link></li>
          <li className="menuItem"><Link to="/color-tool">Color Tool</Link></li>
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