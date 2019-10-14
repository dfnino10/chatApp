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
          <h2>Chat App!</h2>
        </div>
      </nav>

      
    </div>
  );
};

export default NavBar;