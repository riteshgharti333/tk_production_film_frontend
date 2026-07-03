import "./PhotoAlbums.scss";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useState } from "react";
import { usePhotoAlbums } from "../../services/hooks";
import Loader from "../../components/Loader/Loader";
import ErrorFallback from "../../components/Error/ErrorFallback";

const PhotoAlbums = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { 
    data, 
    isLoading, 
    isError, 
    error, 
    refetch 
  } = usePhotoAlbums();

  if (isLoading) {
    return <Loader loaderSize="photoAlbumLoader" />;
  }

  if (isError) {
    return (
      <ErrorFallback
        message={error?.message || "Failed to load photo albums. Please try again."}
        onRetry={refetch}
        fullScreen={false}
      />
    );
  }

  return (
    <div className="photoAlbums">
      <h1>Photo Albums</h1>
      <p className="photoAlbums-desc">
        Collection of photos - All of Our Best Works
      </p>
      
      <div className="photoAlbums-cards">
        {data?.length > 0 ? (
          <>
            <Swiper
              slidesPerView={2}
              centeredSlides={false}
              spaceBetween={20}
              loop={true}
              speed={2500}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Autoplay, Navigation]}
              className="photoAlbums-slider album-swiper"
              navigation={{
                nextEl: ".pa-swiper-next",
                prevEl: ".pa-swiper-prev",
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
            >
              {data.map((album, index) => (
                <SwiperSlide key={album._id} className="photoAlbums-card">
                  <div className="photoAlbums-card-content">
                    <img
                      src={album.image}
                      alt={album.title || "Album Image"}
                      loading="lazy"
                    />
                    <div
                      className={`homeBanner-desc ${
                        index === activeIndex ? "animate" : ""
                      }`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="pa-swiper-prev">❮</div>
            <div className="pa-swiper-next">❯</div>
          </>
        ) : (
          <ErrorFallback
            message="No photo albums available at the moment."
            onRetry={refetch}
            fullScreen={false}
          />
        )}
      </div>
    </div>
  );
};

export default PhotoAlbums;