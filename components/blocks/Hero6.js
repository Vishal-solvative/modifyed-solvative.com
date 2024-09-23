import { tinaField } from "tinacms/dist/react";
import Link from "next/link";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useActivePage } from "../../hooks/useActivePage";

SwiperCore.use([Autoplay, Navigation]);
export const Hero6 = ({ data }) => {
  const { activePage, updateActivePage } = useActivePage();
  return (
    <div>
      <div className="section-box">
        <div className="banner-hero banner-homepage6">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 mt-50 pb-120">
                <span
                  className="tag-1 bg-green-900"
                  data-tina-field={tinaField(data, "tag")}
                >
                  {data?.tag}
                </span>
                <h1
                  className="text-display-2 mt-20"
                  data-tina-field={tinaField(data, "heading1")}
                >
                  {data?.heading1}
                </h1>
                <p
                  className="text-body-lead-large color-gray-500 mt-30 pr-40"
                  data-tina-field={tinaField(data, "heading2")}
                >
                  {data?.heading2}
                </p>
                <div className="mt-40">
                  <Link href={data?.btn1Link || "#"} legacyBehavior>
                    <a
                      className="btn btn-black shape-square icon-arrow-right-white"
                      data-tina-field={tinaField(data, "btn1Text")}
                      onClick={() => updateActivePage(data?.btn1Link || "#")}
                    >
                      {data?.btn1Text}
                    </a>
                  </Link>
                  <Link href={data?.btn2Link || "#"} legacyBehavior>
                    <a
                      className="btn btn-link icon-triangle color-gray-900 ml-40"
                      data-tina-field={tinaField(data, "btn2Text")}
                      onClick={() => updateActivePage(data?.btn2Link || "#")}
                    >
                      {data?.btn2Text}
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-5 d-none d-lg-block">
                <div className="banner-imgs">
                  <div className="block-1 shape-1">
                    <img
                      src={data?.leftImage}
                      alt="Agon"
                      data-tina-field={tinaField(data, "leftImage")}
                    />
                  </div>
                  <div className="block-2 shape-3">
                    <img
                      src={data?.rightImage}
                      alt="Agon"
                      data-tina-field={tinaField(data, "rightImage")}
                    />
                  </div>
                  <img
                    className="img-banner img-responsive shape-2"
                    alt="Agon"
                    src={data?.centerImage}
                    data-tina-field={tinaField(data, "centerImage")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-box box-slider-3 d-none d-lg-flex">
        <div className="container">
          <div className="block-slider-bottom-banner">
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
                    prevEl: ".swiper-button-prev-5",
                    nextEl: ".swiper-button-next-5",
                  }}
                  className="swiper-wrapper pt-5"
                >
                  <SwiperSlide>
                    <div className="row">
                      {data?.cards?.map((card, i) => (
                        <div
                          key={i}
                          className={
                            card?.description
                              ? `col-12 swiper-slide-2`
                              : `col-12 swiper-slide-1`
                          }
                        >
                          <div className="grid-category grid-category-style-2">
                            <div className="grid-image-left-category">
                              <Link href={card?.url || "#"} legacyBehavior>
                                <a
                                  onClick={() =>
                                    updateActivePage(card?.url || "#")
                                  }
                                >
                                  <div className="category-image">
                                    <span
                                      className={card?.logosvg}
                                      data-tina-field={tinaField(
                                        card,
                                        "logosvg"
                                      )}
                                    ></span>
                                  </div>
                                  <div className="category-info">
                                    <h3
                                      className="text-heading-6 mt-15"
                                      data-tina-field={tinaField(card, "title")}
                                    >
                                      {card?.title}
                                    </h3>
                                    {card?.description ? (
                                      <div>
                                        <p
                                          className="text-body-lead-large color-gray-500 mt-10"
                                          data-tina-field={tinaField(
                                            card,
                                            "description"
                                          )}
                                        >
                                          {card?.description}
                                        </p>
                                        <span className="icon-arrow-right-thin"></span>
                                      </div>
                                    ) : null}
                                  </div>
                                </a>
                              </Link>
                            </div>
                            <div className="grid-image-bottom">
                              <Link href={card?.url || "#"} legacyBehavior>
                                <a
                                  onClick={() =>
                                    updateActivePage(card?.url || "#")
                                  }
                                >
                                  <img
                                    src={card?.mainImage}
                                    alt="solvative"
                                    data-tina-field={tinaField(
                                      card,
                                      "mainImage"
                                    )}
                                  />
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="swiper-button-next swiper-button-next-5" />
              <div className="swiper-button-prev swiper-button-prev-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Hero6BlockSchema = {
  label: "Hero6",
  name: "Hero6",
  ui: {
    itemProps: (item) => {
      return { label: item.sectionName };
    },
    previewSrc: "/thumbnails/hero6.png",
  },
  fields: [
    {
      type: "string",
      name: "sectionName",
      label: "Section Name",
    },
    {
      type: "string",
      name: "tag",
      lebel: "Tag",
    },
    {
      type: "string",
      name: "heading1",
      label: "Heading",
    },
    {
      type: "string",
      name: "heading2",
      label: "Sub Heading",
    },
    {
      type: "image",
      name: "leftImage",
      label: "Left Image",
    },
    {
      type: "image",
      name: "rightImage",
      label: "Right Image",
    },
    {
      type: "image",
      name: "centerImage",
      label: "Center Image",
    },
    {
      type: "object",
      name: "cards",
      label: "Card List",
      list: true,
      fields: [
        {
          type: "string",
          name: "logosvg",
          label: "Logo",
          options: ["for-office", "for-software", "for-design"],
        },
        {
          type: "image",
          name: "mainImage",
          label: "Image",
        },
        {
          type: "string",
          name: "url",
          label: "Redirect Link",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
        },
      ],
    },
    {
      type: "string",
      name: "btn1Text",
      label: "Button1 Text",
    },
    {
      type: "string",
      name: "btn1Link",
      label: "Button1 Link",
    },
    {
      type: "string",
      name: "btn2Text",
      label: "Button2 Text",
    },
    {
      type: "string",
      name: "btn2Link",
      label: "Button2 Link",
    },
  ],
};
