import logo from "./logo.svg";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";
import Community from "./pages/Community";
import Enroll from "./pages/Enroll";
import Testimonial from "./pages/Testimonial";
import Footer from "./components/Footer";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const routes = [
    { path: "/", component: Home },
    { path: "/about", component: AboutUs },
    { path: "/courses", component: Courses },
    { path: "/testimonial", component: Testimonial },
    { path: "/community", component: Community },
    { path: "/enroll", component: Enroll },
  ];

  const [hidden, setHidden] = useState(false);

  return (
    <div className="App">
      <Router>
        <NavBar hidden={hidden} setHidden={setHidden} />
        <div className="position-relative">
          {!hidden && <div className="position-fixed overlay"></div>}
          <Routes>
            {routes.map((route, i) => {
              const Component = route.component;
              return (
                <Route key={i} path={route.path} element={<Component />} />
              );
            })}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
