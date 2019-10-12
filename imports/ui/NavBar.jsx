import React from 'react';

const NavBar = () => {

  const handleClickToogle = () => {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
    });
  };

  return (
    <div id="content">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button type="button" id="sidebarCollapse" className="btn btn-info" onClick={handleClickToogle}>
            <i className="fas fa-align-left"></i>
            <span>☰</span>
          </button>
          <h2>Chat App!</h2>
        </div>
      </nav>

      
    </div>
  );
};

export default NavBar;