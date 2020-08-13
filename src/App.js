import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className="body">
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__logo">
              <img src="img/logo.png" alt="logo" />
            </div>

            <nav className="nav">
              <a className="nav__link" href="#">cycling training</a>
              <a className="nav__link" href="#">travel</a>
              <a className="nav__link" href="#">POWER TRAINING</a>
              <a className="nav__link" href="#">RUN training</a>
              <a className="nav__link" href="#">Photo</a>
            </nav>

            {/* <button className="burger" type="button">
                <span className="burger__item">menu</span>
            </button> */}
          </div>
        </div>
      </header>
        <div className="bar">
          <div className="sideBar">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
        </div>

    </div>
  );
}

export default App;
