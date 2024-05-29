import React from "react";
import classNames from "./reviews.module.scss";

//packages
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Reviews = () => {
  return (
    <div className={classNames.ourReview} id="testimonial">
      <div className={classNames.wrapper}>
        <div className={classNames.title}>
          Happy <span>Customer</span>
        </div>
        <div className={classNames.desc}>
          Our testimonials are a testament to our unwavering commitment to
          customer satisfaction. We take pride in our work and strive to build
          lasting relationships with our clients, ensuring that every project is
          a success story worth sharing.
        </div>
        <div className={classNames.reviewContainer}>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 1,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            <div className={classNames.eachReview}>
              <img src="" alt="" />
              <div className={classNames.desc}>
                Recently chose SK builders for our house project. They are the
                most affordable and responsible builders I have worked with. The
                house was exactly as I requested and they kept me updated on the
                progress step by step. Not only until handover, they were very
                supportive and responsive when we requested for a few other
                maintenances after handover. I would definitely choose this
                builders for every other project I work with. Such a pleasant
                experience. Thank you.
              </div>
              <div className={classNames.name}>Christina Jeny</div>
              <div className={classNames.area}>Thoothukudi</div>
              <div className={classNames.bannerBorder}></div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
