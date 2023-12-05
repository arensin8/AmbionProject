import { Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import "./App.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import NewsPages from "./pages/News/NewsPages";
import Roadmap from "./pages/roadmap/Roadmap";
import { AnimatePresence } from "framer-motion";
import Singlenews from "./pages/News/singleNews/Singlenews";
import Login from "./pages/login/Login";
import Error from "./pages/error/Error";

import Plx from "react-plx";
import { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import image2 from "./components/Hero/back6.png";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  const location = useLocation();

  return (
    <div className="App">
      {loading ? (
        // <ClimbingBoxLoader
        //   color="#fff"
        //   style={{ margin: "0 auto" }}
        //   size={30}
        // />
        <span className="mainLoader"></span>
      ) : (
        <>
          <Plx
            parallaxData={[
              {
                start: 0,
                end: 4000,
                properties: [
                  {
                    startValue: 1,
                    endValue: 1.2,
                    property: "scale",
                  },
                ],
              },
            ]}
            style={{
              position: "fixed",
              left: 0,
              top: 0,
              width: "100%",
              height: "100vh",
              zIndex: -100,
            }}
          >
            <img
              style={{ width: "100%", height: "100%", backgroundSize: "auto" }}
              src={image2}
              alt="background"
            />
          </Plx>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />}></Route>

              <Route path="/news" element={<NewsPages />}></Route>
              <Route path="/news/:id" element={<Singlenews />} />
              <Route path="/roadmap" element={<Roadmap />}></Route>
              <Route path="/about-us" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="*" element={<Error />}></Route>
            </Routes>
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

export default App;
