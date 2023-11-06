import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "../css/Main.css";
import { Chat } from "../components/Chatbot";
import logo from "../image/logo.png";
import Footer from "../components/footer";
const Main = () => {
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

  return (
    <>
      <div>
        <header>
          <h1>
            <img src={logo} alt="" width="150px" height="100px" />
            <i>Panda Shop</i>
          </h1>
          <nav className="nav-main">
            <a className="logout-button" onClick={Logout}>
              Logout
            </a>
          </nav>
        </header>
      </div>
      <div className="about-us centered-content">
        <div className="gif-card">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6126aa55565051.5989e4d115c23.gif"
            alt="GIF"
          />
        </div>
        <div className="text-card">
          <div className="hero">
            <h2>Discover the Latest Trends</h2>
            <p>
              Fashion is only the attempt to realize art in living forms and
              social intercourse
            </p>
            <a className="cta-button" href="/home">
              Get Started
            </a>
          </div>
        </div>
      </div>
      <Chat />
      <Footer />
    </>
  );
};

export default Main;
