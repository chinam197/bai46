const InfoProduct = () => {
  return (
    <div>
      <div id="single-product-container">
        <div className="flex-item">
          <img
            src="https://picsum.photos/200?_id=u69Zh669acaaTre8t59420o8o1nh"
            alt="product image"
          />
        </div>
        <div id="details" className="flex-item">
          <h2 id="brand">Zara</h2>
          <h2 id="title">Thể thao nước Zara</h2>
          <h2 id="description">
            "ipsum dolor sit amet, consectetur adipisicing elit. Molestias nam
            debitis laboriosam quod deserunt dicta sequi adipisci doloribus
            odio, cumque eveniet repellendus magni iste voluptate praesentium
            accusamus repudiandae! Enim eum optio accusamus cum beatae illum
            sapiente voluptate hic praesentium iste, quis assumenda
            necessitatibus vero cumque quam"
          </h2>
          <span>category: Thể thao nước</span>
          <button>Go home</button>
          <div id="price-container">
            <h2 id="price">
              <span>$</span>336,523
            </h2>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoProduct;
