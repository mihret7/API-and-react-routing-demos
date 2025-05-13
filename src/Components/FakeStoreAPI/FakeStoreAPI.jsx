import React, { useEffect, useState } from 'react'
import "./FakeStoreAPI.css"




function FakeStoreAPI() {

                             
    const [products, setProducts] = useState([])

   
        const fetchUser = () => {
          fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
              // Shuffle the array
              const shuffled = data.sort(() => 0.5 - Math.random());
              // Pick first 5 items from the shuffled array
              setProducts(shuffled.slice(0, 5));
            });
        };



    useEffect(() => {
        fetchUser();
      }, []);

  return (
    <>
      <div className="productWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper fw-bold product-title-wrapper">
                Products
              </div>
            </div>

            {products.map((singleproduct, i) => {
              let id = singleproduct.id;
              let productTitle = singleproduct.title;
              let price = singleproduct.price;
              let img = singleproduct.image;
              return (
                <div key={id} className="col-sm-12 col-md-4">
                  <div className="singleProductWrapper">
                    <div className="imageWrapper">
                      <img src={img} />
                    </div>

                    <div className="productInfoWrapper">
                      <div className="productTitle fw-bold">{productTitle}</div>

                      <div className="productDesc fw-bold">${price}</div>
                    </div>

                    <a
                      href={`/API-and-react-routing-demos/fake/${id}`}
                      className="more-btn"
                    >
                      more
                    </a>
                  </div>
                </div>
              );
            })}
            <button className="refresh-btn" onClick={fetchUser}>
              Refresh
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FakeStoreAPI
