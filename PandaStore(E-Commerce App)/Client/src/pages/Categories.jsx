import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Chat } from "../components/Chatbot";
const Categories = () => {
  const navigate = useNavigate();

  const [featuredProducts, setFeaturedProducts] = useState([
    {
      id: 1,
      name: "Blazers",
      image:
        "https://blackberrys.com/cdn/shop/files/textured-formal-blazer-in-bottle-green-felix-blackberrys-clothing-1.jpg?v=1685953192",
    },
    {
      id: 2,
      name: "Wedding",
      image:
        "https://i.etsystatic.com/19536903/c/749/749/0/108/il/acb2fb/3051921000/il_300x300.3051921000_mhcm.jpg",
    },
    {
      id: 3,
      name: "Style",
      image:
        "https://www.apetogentleman.com/wp-content/uploads/2019/03/wear-denim-jacket-men-1.jpg",
    },
    {
      id: 4,
      name: "T-shirt",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20230623/yIYc/64950ae0d55b7d0c63afcc08/-473Wx593H-464931934-grey-MODEL.jpg",
    },
    {
      id: 5,
      name: "Trousers",
      image: "https://m.media-amazon.com/images/I/61go4LL2vSL._AC_UY1100_.jpg",
    },
  ]);
  const [featureProducts, setFeatureProducts] = useState([
    {
      id: 1,
      name: "Saree",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2021/1/EK/JT/CX/11282460/sukanya-7502.jpg",
    },
    {
      id: 2,
      name: "Kurta",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/ethnic-set/y/j/h/l-38193-libas-original-imagr6xwagzsygvg.jpeg?q=20",
    },
    {
      id: 3,
      name: "Lehenga",
      image:
        "https://www.fashionvibes.net/cdn/shop/products/trendy-pure-georgette-sequin-hand-work-lehenga-lehenga-fashionvibes-15543222763569_500x.jpg?v=1618027068",
    },
    {
      id: 4,
      name: "Western-tops",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/top/n/g/2/s-6204-radhalaxmikurti-original-imaghg9tdukvzvxc.jpeg?q=90",
    },
    {
      id: 5,
      name: "Pants",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/9/BU/ZQ/AH/160160371/fancy-ladies-trousers.jpg",
    },
  ]);
  const [featurProducts, setFeaturProducts] = useState([
    {
      id: 1,
      name: "Girl",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20230516/m2bu/6462a7b142f9e729d789f4ef/-286Wx359H-466155833-orange-MODEL.jpg",
    },
    {
      id: 2,
      name: "Boy",
      image:
        "https://googogaaga.com/pub/media/catalog/product/cache/a2eb84394200c37c2aac585cfc556697/3/_/3_1_35.jpg",
    },
    {
      id: 3,
      name: "Casual-wear",
      image:
        "https://thumbs.dreamstime.com/b/little-positive-blond-baby-girl-boy-stylish-casual-clothing-accessories-standing-hugging-each-other-feeling-cheerful-177634649.jpg",
    },
    {
      id: 4,
      name: "Festive-wear",
      image: "https://m.media-amazon.com/images/I/51FHLD5U+-L._AC_UY1100_.jpg",
    },
    {
      id: 5,
      name: "Spring-clothes",
      image: "https://m.media-amazon.com/images/I/6136MQ1oawL._AC_UY1100_.jpg",
    },
  ]);

  return (
    <>
      <div>
        <Navbar />
        <br></br>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://sportskhabri.com/wp-content/uploads/2019/05/Virat-Kohli-Anushka-Sharma-Virushka-brand-ambassador-endorsements-list-advertising-couple-brand-value-brands-Virushka-advertise-for-together-cover.png"
              class="d-block w-100"
              width="800"
              height="400"
              alt="..."
            />
          </div>
        </div>

        <div id="products" className="featured-products">
          <h2>Men's collections</h2>
          <div className="product-list">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product">
                <img
                  src={product.image}
                  alt={product.name}
                  width="100px"
                  height="150px"
                />
                <h3>{product.name}</h3>
                <button
                  className="button-add-to-cart"
                  onClick={() =>
                    navigate("/mens-collection", {
                      state: { category: product.name },
                    })
                  }
                >
                  Shop now
                </button>
              </div>
            ))}
          </div>
        </div>

        <div id="products" className="featured-products">
          <h2>Women's collections</h2>
          <div className="product-list">
            {featureProducts.map((product) => (
              <div key={product.id} className="product">
                <img
                  src={product.image}
                  alt={product.name}
                  width="100px"
                  height="150px"
                />
                <h3>{product.name}</h3>
                <button
                  className="button-add-to-cart"
                  onClick={() =>
                    navigate("/womens-collection", {
                      state: { category: product.name },
                    })
                  }
                >
                  Shop now
                </button>
              </div>
            ))}
          </div>
        </div>
        <div id="products" className="featured-products">
          <h2>Babies/Kids collections</h2>
          <div className="product-list">
            {featurProducts.map((product) => (
              <div key={product.id} className="product">
                <img
                  src={product.image}
                  alt={product.name}
                  width="100px"
                  height="150px"
                />
                <h3>{product.name}</h3>
                <button
                  className="button-add-to-cart"
                  onClick={() =>
                    navigate("/baby-collection", {
                      state: { category: product.name },
                    })
                  }
                >
                  Shop now
                </button>
              </div>
            ))}
          </div>
        </div>
        <Chat />
        <Footer />
      </div>
    </>
  );
};
export default Categories;
