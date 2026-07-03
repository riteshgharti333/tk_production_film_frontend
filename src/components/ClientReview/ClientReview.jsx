import "./ClientReview.scss";

import React, { useState, useRef, useEffect } from "react";

import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import reviewBgImg from "../../assets/images/reviewbgimg.jpeg";
import { useReviews } from "../../services/hooks";
import Loader from "../../components/Loader/Loader";
import ErrorFallback from "../../components/Error/ErrorFallback";

const ClientReview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedReview, setExpandedReview] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setExpandedReview(null);
      }
    };

    if (expandedReview) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expandedReview]);

  const { 
    data, 
    isLoading, 
    isError, 
    error, 
    refetch 
  } = useReviews();

  return (
    <div className="clientReview">
      <div className="clientReview-img">
        <img src={reviewBgImg} alt="Client Background" loading="lazy" />

        <div className="clientReview-card">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={1200}
            navigation={{
              prevEl: ".client-prev",
              nextEl: ".client-next",
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {isLoading ? (
              <SwiperSlide className="swiper-slide-loader">
                <Loader loaderSize="clientLoader" />
              </SwiperSlide>
            ) : isError ? (
              <SwiperSlide className="swiper-slide-error">
                <ErrorFallback
                  message={error?.message || "Failed to load reviews. Please try again."}
                  onRetry={refetch}
                  fullScreen={false}
                />
              </SwiperSlide>
            ) : data?.length > 0 ? (
              data.map((review, index) => (
                <SwiperSlide key={review._id}>
                  <ReviewCard
                    review={review}
                    isActive={index === activeIndex}
                    onExpand={() => setExpandedReview(review)}
                  />
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide className="swiper-slide-empty">
                <ErrorFallback
                  message="No reviews available at the moment."
                  onRetry={refetch}
                  fullScreen={false}
                />
              </SwiperSlide>
            )}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="client-prev">
            <BsArrowLeft className="client-icon" />
          </div>
          <div className="client-next">
            <BsArrowRight className="client-icon" />
          </div>
        </div>
      </div>

      {/* Overlay Modal for Full Review */}
      {expandedReview && (
        <div className="clientReview-overlay">
          <div className="clientReview-modal" ref={modalRef}>
            <button
              className="close-btn"
              onClick={() => setExpandedReview(null)}
            >
              ✖
            </button>
            <p>" {expandedReview.review} "</p>
          </div>
        </div>
      )}
    </div>
  );
};

const ReviewCard = ({ review, isActive, onExpand }) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    if (element) {
      const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
      const maxHeight = lineHeight * 3;
      setIsTruncated(element.scrollHeight > maxHeight);
    }
  }, [review]);

  return (
    <div className="clientReview-card-desc">
      <div className="clientReview-card-top">
        <div className="clientReview-card-stars">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="star" />
          ))}
        </div>

        <div className="clientReview-card-quotes">
          <RiDoubleQuotesR className="quotes" />
        </div>
      </div>

      <p ref={textRef} className="reviews">
        " {review.review} "
      </p>

      {isTruncated && (
        <button className="read-more-btn" onClick={onExpand}>
          Read More
        </button>
      )}

      <hr className="line" />

      <div className="review-name">
        <img src={review.image} alt={review.name} loading="lazy" />
        <div className="review-name-desc">
          <p>{review.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;