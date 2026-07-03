import "./OurCore.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import { useTeams } from "../../services/hooks";
import Loader from "../../components/Loader/Loader";
import ErrorFallback from "../../components/Error/ErrorFallback";

const OurCore = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { 
    data, 
    isLoading, 
    isError, 
    error, 
    refetch 
  } = useTeams();

  if (isLoading) {
    return (
      <div className="ourCore">
        <div className="ourCore-top">
          <h1>Our Team</h1>
          <p>
            At <span className="bold-text">TK Production Film</span>, we're
            passionate about capturing your precious memories, preserving your
            love, and celebrating every beautiful moment of life.
          </p>
        </div>
        <Loader loaderSize="teamLoader" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="ourCore">
        <div className="ourCore-top">
          <h1>Our Team</h1>
          <p>
            At <span className="bold-text">TK Production Film</span>, we're
            passionate about capturing your precious memories, preserving your
            love, and celebrating every beautiful moment of life.
          </p>
        </div>
        <ErrorFallback
          message={error?.message || "Failed to load team members. Please try again."}
          onRetry={refetch}
          fullScreen={false}
        />
      </div>
    );
  }

  return (
    <div className="ourCore">
      <div className="ourCore-top">
        <h1>Our Team</h1>
        <p>
          At <span className="bold-text">TK Production Film</span>, we're
          passionate about capturing your precious memories, preserving your
          love, and celebrating every beautiful moment of life.
        </p>
      </div>

      {data?.length > 0 ? (
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            speed={1200}
            modules={[Navigation, Autoplay]}
            className="ourCore-slider"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              400: { slidesPerView: 1.5, spaceBetween: 10 },
              480: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 2.5, spaceBetween: 15 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
          >
            {data.map((member, index) => (
              <SwiperSlide key={member._id || index} className="ourCore-slider-card">
                <img
                  src={member.image}
                  alt={member.name || "Team Member"}
                  loading="lazy"
                />
                <h2>{member.name}</h2>
                <p>{member.title}</p>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-prev">
            <BsArrowLeft className="core-icon" />
          </div>
          <div className="custom-next">
            <BsArrowRight className="core-icon" />
          </div>
        </>
      ) : (
        <ErrorFallback
          message="No team members available at the moment."
          onRetry={refetch}
          fullScreen={false}
        />
      )}
    </div>
  );
};

export default OurCore;