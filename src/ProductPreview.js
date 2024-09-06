import React, { useState } from 'react';
import './ProductPreview.css'; // Assuming you've saved your CSS in ProductPreview.css

const productData = {
  id: "1",
  name: "Men Navy Blue Solid Sweatshirt",
  preview: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  photos: [
    // URLs here
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"

  ],
  description: "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  brand: "United Colors of Benetton",
  price: 2599
};

const ProductPreview = () => {
  const [mainImage, setMainImage] = useState(productData.photos[0]);

  return (
    <div id="landing-page">
      <article id="image-preview">
        <img id="main-image" src={mainImage} alt="Product" />
      </article>
      <article id="preview-details">
        <h1 id="prod-name">{productData.name}</h1>
        <h3 id="brand-name">{productData.brand}</h3>
        <h3 id="price">Price: Rs <span id="value">{productData.price}</span></h3>
        <h3 id="desc-heading">Description</h3>
        <p id="desc">{productData.description}</p>
        <h3 id="prod-heading">Product Preview</h3>
        <div id="samples">
          {productData.photos.map((photo, index) => (
            <img
              key={index}
              className="sample-images"
              src={photo}
              alt={`Preview ${index + 1}`}
              onClick={() => setMainImage(photo)}
              style={{ border: mainImage === photo ? '2px solid rgb(0,150,136)' : 'none' }}
            />
          ))}
        </div>
      </article>
    </div>
  );
};

export default ProductPreview;
