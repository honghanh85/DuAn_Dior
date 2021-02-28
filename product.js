//import React,{ Compoent } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import App from 'src./App';

function Product(props){

  return (
    <div>
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
    	<div className="thumbnail">
    		<img alt="" src={props.image}/>
    		<div className="caption">
    			<h3>
				{props.children}

    			</h3>
    			<p>
    				{props.price} VNĐ
    			</p>
    			<p>
    				<a className="btn btn-primary">Action</a>
    				<a className="btn btn-default">Action</a>
    			</p>
    		</div>
    	</div>
    </div>
          </div>
  );
}
export default Product;
