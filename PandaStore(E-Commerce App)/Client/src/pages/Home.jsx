import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../css/Home.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import slider1 from '../image/slider1.jpg'
import slider3 from '../image/sliderr3.jpg'
const Home = () => {
  console.log("Home component rendered")
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/login");
  };
  const [featuredProducts, setFeaturedProducts] = useState([
    { id: 1, name: 'JANASYA', description:'Girl clothes', price: 1599, image: 'https://down-sg.img.susercontent.com/file/69a902899e550abc12d9b827af4e9101' },
    { id: 2, name: 'Love&Lem', description:'Mermaid dress', price: 2899, image: 'https://www.kleinfeldbridal.com/wp-content/uploads/2023/08/Theia_WREN_Front.jpg' },
    { id: 3, name: 'BONSOIR', description:'Blue knitted blazer', price: 3999, image: 'https://www.bonsoir.co.in/cdn/shop/products/BLAZERB-223_1_large.jpg?v=1648618726' },
    { id: 4, name: 'Glamcci',description:'Polka dot dress', price: 429, image: 'https://m.media-amazon.com/images/I/71Z76L-e0xL._SY679_.jpg' },
    { id: 5, name: 'Fashionista',description:'Stylish women jeans', price: 739, image: 'https://images.meesho.com/images/products/278328108/cxizb_512.webp' },
  ]);
  const [featureProducts, setFeatureProducts] = useState([
    { id: 1, name: 'FUGAZEE',description:'Baggy cargo', price: 2999, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCj_dA_cWy4wVxxMGejBfYt5eGY-QAxoaTQ&usqp=CAU' },
    { id: 2, name: 'Techwear',description:'Cargo pants', price: 1999, image: 'https://5.imimg.com/data5/SELLER/Default/2021/2/EH/TT/ND/93879609/dark-grey-multi-pocket-buckled-cargo-pant-500x500.jpg' },
    { id: 3, name: 'Sophia',description:'Off shoulder', price: 5999, image: 'https://www.sophiatolli.com/uploads/filemanager/spring_2022_thumbnails/Y12248_black_f_d.jpg' },
    { id: 4, name: 'Tokyotalkies',description:'Ethnic dress', price: 699, image: 'https://assets.ajio.com/medias/sys_master/root/20230620/BVTA/6491ea0fd55b7d0c637ce770/-288Wx360H-463086147-blue-MODEL.jpg' },
    { id: 5, name: 'Tior',description:'Dresses and frocks', price: 600, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPggV6dsyd9bzSNEz828Fg1sPwjPs84wb1Kw&usqp=CAU' },
  ]);
  const carouselImages = [
    slider1,
    'https://marketplace.canva.com/EAFHG6sbLsQ/1/0/1600w/canva-brown-beige-simple-special-sale-banner-lQfPvhnznqs.jpg' ,
    slider3
];
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

  return (
    <>
     <div>
      <Navbar/>
     
            <br></br>
            <Slider {...carouselSettings}>
                {carouselImages.map((image, index) => (
                    <div key={index} className="carousel-image">
                      <center>
                        <img src={image} alt={`Carousel Image ${index + 1}`} />
                        </center>
                    </div>
                    
                ))}
            </Slider>

      <div className="hero">
        <h2>Discover the Latest Trends</h2>
        <p>Shop our collection of premium products.</p>
        <a className="cta-button" href="#products">
                Shop Now
            </a>
      </div>

      <div id="products" className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name}  width="100px" height="150px"/>
              <h3>{product.name}</h3>
              <p>{product.description}.</p>
              <p>₹{product.price}</p>
              <button className="button-add-to-cart">Shop Now</button>
            </div>
          ))}
        </div>
      </div>

      <div id="products" className="feature-products">
        <h2>Recently Viewed</h2>
        <div className="product-list">
          {featureProducts.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name}  width="100px" height="150px"/>
              <h3>{product.name}</h3>
              <p>{product.description}.</p>
              <p>₹{product.price}</p>
              <button className="button-add-to-cart">Shop Now</button>
            </div>
          ))}
        </div>
      </div>

     <Footer/>
    </div>
      
    </>
  );
};
export default Home;