import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { formatDate } from "../../util/date";

SwiperCore.use([Autoplay, Navigation]);
const BlogCarousel = {
  props: {
    label: "Blog carousel",
    name: "BlogCarousel",
    ui: {
      itemProps: (item) => {
        return { label: item.title };
      },
      previewSrc: "/thumbnails/blog-carousel.png",
    },
    fields: [
      {
        type: "string",
        name: "title",
        label: "Section title",
      },
      {
        type: "rich-text",
        name: "subTitle",
        label: "Section content",
      },
      {
        type: "object",
        name: "cards",
        label: "Cards",
        list: true,
        fields: [
          {
            type: "reference",
            name: "blog",
            label: "Blog",
            collections: ["blogs"],
          },
        ],
      },
    ],
  },

  template: (fields) => {
    return (
      <section className="section-box box-animation fade-up-desktop fade-mobile animation">
        <div className="container mt-70">
          <div className="row">
            <div className="col-lg-1 col-sm-1 col-12" />
            <div className="col-lg-10 col-sm-10 col-12 text-center">
              <h2
                className="text-heading-1 color-gray-900 mb-10"
                data-tina-field={tinaField(fields, "title")}
              >
                {fields?.title}
              </h2>
              <p
                className="text-heading-6 color-gray-600 mt-20"
                data-tina-field={tinaField(fields, "subTitle")}
              >
                <TinaMarkdown content={fields?.subTitle} />
              </p>
            </div>
            <div className="col-lg-1 col-sm-1 col-12" />
          </div>
        </div>
        <div className="container mt-70">
          <div className="slider-news">
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
                  prevEl: ".swiper-button-prev-5",
                  nextEl: ".swiper-button-next-5",
                }}
                className="swiper-wrapper pb-70 pt-5"
              >
                {fields?.cards?.map((card, i) => (
                  <SwiperSlide key={i}>
                    <div className="swiper-slide active">
                      <div className="block-news">
                        <div className="item-news">
                          <div className="row">
                            <div className="col-xl-6 col-lg-12">
                              <div className="img-news">
                                <Link
                                  href={`blog/${
                                    card?.blog?._sys?.filename || "#"
                                  }`}
                                  legacyBehavior
                                  data-tina-field={tinaField(
                                    card?.blog,
                                    "link"
                                  )}
                                >
                                  <a>
                                    <img
                                      data-tina-field={tinaField(
                                        card?.blog,
                                        "blogImage_1290x1506"
                                      )}
                                      src={card?.blog?.blogImage_1290x1506}
                                      alt="Solvative"
                                    />
                                  </a>
                                </Link>
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                              <div className="right-news card-grid-style-4 mb-0">
                                <span
                                  className="tag-dot"
                                  data-tina-field={tinaField(
                                    card?.blog,
                                    "blogTag"
                                  )}
                                >
                                  {card?.blog?.blogTag}
                                </span>
                                <Link
                                  href={`blog/${
                                    card?.blog?._sys?.filename || "#"
                                  }`}
                                  legacyBehavior
                                  data-tina-field={tinaField(
                                    card?.blog,
                                    "link"
                                  )}
                                >
                                  <a
                                    className="text-heading-4"
                                    data-tina-field={tinaField(
                                      card?.blog,
                                      "blogTitle"
                                    )}
                                  >
                                    {card?.blog?.blogTitle}
                                  </a>
                                </Link>

                                <p
                                  className="text-body-text color-gray-500 text-desc-fix-h"
                                  data-tina-field={tinaField(
                                    card?.blog,
                                    "blogDescription"
                                  )}
                                >
                                  {card?.blog?.blogDescription}
                                </p>
                                <div className="blog-img-user">
                                  <div className="img-user img-user-round">
                                    <img
                                      data-tina-field={tinaField(
                                        card?.blog,
                                        "authorAvatar"
                                      )}
                                      src={card?.blog?.authorAvatar}
                                      alt="Solvative"
                                    />
                                  </div>
                                  <h4
                                    className="text-heading-6 color-gray-900"
                                    data-tina-field={tinaField(
                                      card?.blog,
                                      "authorName"
                                    )}
                                  >
                                    {card?.blog?.authorName}
                                  </h4>
                                  <p
                                    className="text-body-small color-gray-500"
                                    data-tina-field={tinaField(
                                      card?.blog,
                                      "blogDate"
                                    )}
                                  >
                                    {formatDate(card?.blog?.blogDate)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="swiper-button-next swiper-button-next-5" />
            <div className="swiper-button-prev swiper-button-prev-5" />
          </div>
        </div>
      </section>
    );
  },
};

export default BlogCarousel;
