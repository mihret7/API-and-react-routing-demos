import React, { useEffect, useState } from 'react'
import "./FakeStoreAPI.css"
import { useParams } from 'react-router-dom'




function SingleFake() {

    let {id}=useParams()
    const [products, setProducts] = useState([])

    useEffect(()=>{
      
  fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => response.json())
  .then(data => {
    let ourArray = [data]
    setProducts(ourArray)
  });
    }, [])

  return (
    <>
      <div className="productWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold product-title-wrapper">
                Products 
              </div>

              
            </div>

            {products.map((singleproduct, i) => {
              let id = singleproduct.id;
              let productTitle = singleproduct.title;
              let price = singleproduct.price;
              let img = singleproduct.image
              return (
                <div key={id} className="col-sm-12 col-md-6">
                  <div className="singleProductWrapper">
                    <div className="imageWrapper">
                      
                        <img src={img} />
                      
                    </div>

                    <div className="productInfoWrapper">
                      <div className="productTitle fw-bold">{productTitle}</div>

                      <div className="productDesc fw-bold">${price}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleFake;
