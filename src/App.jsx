import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Homepage from "./pages/Homepage/Homepage.jsx";
import About from "./pages/About/About.jsx";

import Contact from "./pages/Contact/Contact.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import { useEffect } from "react";

import { Toaster } from "react-hot-toast";
import { ScrollProvider, useScrollContext } from "./context/ScrollContext.jsx";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ServicePage from "./pages/ServicesPage/ServicePage.jsx";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    const { skipScroll, setSkipScroll } = useScrollContext();

    useEffect(() => {
      if (!skipScroll) {
        window.scrollTo(0, 0);
      }
      setSkipScroll(false);
    }, [pathname]);

    return null;
  };

  const queryClient = new QueryClient();

  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <ScrollProvider>
            <BrowserRouter>
              <ScrollToTop />
              <Navbar />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/portfolio" element={<Gallery />} />

                {/* services */}
                <Route path="/services/:slug" element={<ServicePage />} />

              </Routes>
              <Footer />

              <Toaster
                toastOptions={{
                  className: "",
                  style: {
                    fontFamily: "Sora, serif",
                    fontSize: "18px",
                    fontWeight: "600",
                  },
                }}
              />
            </BrowserRouter>
          </ScrollProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
