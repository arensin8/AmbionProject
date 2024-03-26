import { Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect, Suspense } from "react";
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
import image2 from "./components/Hero/back5.png";
import Loader from "./components/newLoader";
import { gsap } from "gsap";

function App() {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState(null);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  const location = useLocation();

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true),
      });
      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  return (
    <div className="App">
      {!loaderFinished ? (
        <Loader timeline={timeline} />
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
