import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
   <div className="head">
        <img src="https://www.pngkit.com/png/full/194-1944124_miss-dior-blooming-bouquet-miss-dior-cherie-logo.png"/>
  </div>
  <span></span>
    <div class="bar">
    <nav className="navbar navbar-default" role="navigation">
      <div className="container-fluid">
                <div className="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar">2</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand">Dior</a>
        </div>
            <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav">
            <li><a >Home</a></li>
            <li className="Products">
            <a className="dropdown-toggle" data-toggle="dropdown">Products <b className="caret"></b></a>
              <ul className="dropdown-menu">
                <li><a>Nước hoa nữ</a></li>
                <li><a>Nước hoa nam</a></li>
                <li><a>túi xách</a></li>
                <li><a>Các sản phẩm khác</a></li>
              </ul>
            </li>
          </ul>
          <form className="navbar-form navbar-left" role="search">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search"/>
            </div>
            <button type="submit" className="btn btn-default">Search</button>
          </form>
          <ul className="nav navbar-nav navbar-right">
            <li><a>Link</a></li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
              <ul className="dropdown-menu">
                <li><a>Action</a></li>
                <li><a>Another action</a></li>
                <li><a>Something else here</a></li>
                <li><a>Separated link</a></li>
              </ul>
            </li>
          </ul>
        </div>
              </div>
    </nav>
        </div>
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
