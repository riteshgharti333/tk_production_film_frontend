import "./HomeBanner.scss";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

// Import hooks and components
import { useHomeBanners, useMobileBanners } from "../../services/hooks";
import Loader from "../../components/Loader/Loader";
import ErrorFallback from "../../components/Error/ErrorFallback";
import { bigBanner } from "../../assets/data";

const HomeBanner = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const [initialized, setInitialized] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Use React Query hooks instead of direct API calls
  const { 
    data: homeBanners, 
    isLoading: homeLoading, 
    isError: homeError, 
    error: homeErrorObj,
    refetch: refetchHome 
  } = useHomeBanners({
    enabled: !isMobile,
  });

  const { 
    data: mobileBanners, 
    isLoading: mobileLoading, 
    isError: mobileError, 
    error: mobileErrorObj,
    refetch: refetchMobile 
  } = useMobileBanners({
    enabled: isMobile,
  });

  // Determine which data and loading state to use
  const isLoading = isMobile ? mobileLoading : homeLoading;
  const isError = isMobile ? mobileError : homeError;
  const error = isMobile ? mobileErrorObj : homeErrorObj;
  const data = isMobile ? mobileBanners : homeBanners;
  const refetch = isMobile ? refetchMobile : refetchHome;

  // Handle Resize for Mobile/Desktop Switch
  useEffect(() => {
    const handleResize = () => {
      const isMobileNow = window.innerWidth <= 480;
      if (isMobileNow !== isMobile) {
        setIsMobile(isMobileNow);
        refetch();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile, refetch]);

  // Loading State
  if (isLoading) return <Loader />;

  // Error State with ErrorFallback
  if (isError) {
    return (
      <ErrorFallback
        message={error?.message || "Failed to load banners. Please try again."}
        onRetry={refetch}
        fullScreen={false}
      />
    );
  }

  return (
    <div className="homeBanner">
      <Swiper
        modules={[EffectFade, Pagination, Navigation, Autoplay]}
        effect="fade"
        loop={true}
        speed={1200}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="swiper-container"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onInit={() => setInitialized(true)}
      >
        {data.map((slide, index) => (
          <SwiperSlide key={slide.id || index} className="slide">
            <div className="homeBanner-imgs">
              <img src={slide.image} alt={slide.title || "Banner"} loading="lazy" />
            </div>
            {slide.link && (
              <Link to={slide.link}>
                <div
                  className={`homeBanner-desc ${
                    initialized && index === activeIndex ? "animate" : ""
                  }`}
                ></div>
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-prev">Prev</div>
      <div className="swiper-button-next">Next</div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default HomeBanner;