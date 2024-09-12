/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from "next/link";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const TeamSlider = ({ teamMembers = [] }) => {
  const data = [
    {
      img: "9.jpg",
      avatar: "1.jpg",
      title: "Liguid Wave",
      author: "Sound Box",
    },
    {
      img: "10.jpg",
      avatar: "2.jpg",
      title: "Liguid Wave",
      author: "Sound Box",
    },
    {
      img: "11.jpg",
      avatar: "3.jpg",
      title: "Liguid Wave",
      author: "Sound Box",
    },
    {
      img: "12.jpg",
      avatar: "4.jpg",
      title: "Liguid Wave",
      author: "Sound Box",
    },
  ];

  return (
    <>
      <div className="box-swiper">
        <div className="swiper-container swiper-group-1">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".swiper-button-prev-4",
              nextEl: ".swiper-button-next-4",
            }}
            className="swiper-wrapper pb-70 pt-5"
          >
            <SwiperSlide>
              <div className="swiper-slide active">
                <div className="row">
                  {teamMembers?.map((item, i) => (
                    <div className="col-lg-3 col-md-6 col-sm-6" key={i}>
                      <div className="card-grid-style-5 hover-up">
                        <div className="grid-5-img mb-15">
                          <img src={item?.avatar} alt="Agon" />
                        </div>
                        <span className="text-body-text-md color-gray-500">
                          {item?.position}
                        </span>
                        <h3 className="text-heading-5 mb-5 mt-5">
                          {item?.name}
                        </h3>
                        <p className="text-body-excerpt text-desc color-gray-500 mt-15 mb-20">
                          {item?.description}
                        </p>
                        {item?.socialLinks && (
                          <span className="text-body-text-md color-gray-600">
                            Let’s Connect
                          </span>
                        )}
                        {item?.socialLinks && (
                          <div className="social-bottom">
                            {item?.socialMedia?.map((link, index) => (
                              <Link href={link?.link || "#"} legacyBehavior>
                                <a
                                  className={`icon-socials icon-${link?.name.toLowerCase()}`}
                                ></a>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="swiper-button-next swiper-button-next-4" />
        <div className="swiper-button-prev swiper-button-prev-4" />
      </div>
    </>
  );
};

export default TeamSlider;
