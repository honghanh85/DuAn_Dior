//import React,{ Compoent } from 'react';
//import logo from './logo.svg';
import './App.css';
import Product from './compoents/product';

 
function App() {
function handleClick(e) {
    e.preventDefault();
    console.log('đây là app nước hoa');
  }

    const products =[
    {id:1,
        name: 'Nước Hoa Dior Miss Dior Eau De Parfum Cho Nữ, 100ml',
        price:'2.540.000',
        image: 'https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2020/07/nuoc-hoa-dior-miss-dior-eau-de-parfum-cho-nu-100ml-5f10201aa1eb9-16072020163834.jpg',
        state: true
    },
    {id:2,
        name: 'Nước Hoa Miss Dior Absolutely Blooming 100ml',
        price:'2.690.000',
        image: 'https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/12/nuoc-hoa-miss-dior-absolutely-blooming-5e006213680e3-23122019134331.jpg',
        state: true
    },
    {id:3,
        name: 'Nước Hoa Miss Dior Absolutely Blooming 100ml',
        price:'2.290.000',
        image: 'https://cdn.vuahanghieu.com/unsafe/0x500/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2019/06/nuoc-hoa-dior-miss-dior-edt-100ml-5cf1d58af2940-01062019083154.jpg',
        state: true
    },
];
let elements=products.map((product, index) => {
    let result='';
    if(product.state){
    result =<Product
            key={product.id}
            price={product.price}
            image={ product.image}>
            {product.name}
            </Product>;} return result;
});
  return (
    <div className="App">
    <div className="container-fluid">
      <div className="row">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {elements}
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button type="button" className="btn btn-warning" onClick={handleClick} >click me </button>
          
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
export default App;
