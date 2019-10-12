import React from 'react';

const NavBar = () => {

  const handleClick = () => {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
    });
  };

  return (
    <div id="content">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

          <button type="button" id="sidebarCollapse" className="btn btn-info" onClick={handleClick}>
            <i className="fas fa-align-left"></i>
            <span>☰</span>
          </button>

        </div>
      </nav>

      <div className="wrapper">
        <nav id="sidebar">
          <ul className="list-unstyled components">
            <li className="active">
              <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" >Log in</a>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  );
};

export default NavBar;