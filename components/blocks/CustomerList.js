import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { tinaField } from "tinacms/dist/react";

SwiperCore.use([Autoplay, Navigation]);
export const CustomerList = ({ data }) => {
  return (
    <section className="section-box">
      <div className="container mt-110">
        <div className="row">
          <div className="col-lg-9 col-sm-8">
            <h3
              className="text-heading-1 mb-10"
              data-tina-field={tinaField(data, "heading1")}
            >
              {data?.heading1}
            </h3>
            <p
              className="text-body-lead-large color-gray-600"
              data-tina-field={tinaField(data, "heading2")}
            >
              {data?.heading2}
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-80">
        <div className="box-swiper">
          <div className="swiper-container swiper-group-4">
            <Swiper
              slidesPerView={4}
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
              {data?.reviews?.map((review, i) => (
                <SwiperSlide key={i}>
                  <div className="swiper-slide active">
                    <div
                      className={`card-grid-style-3 hover-up ${review?.bg} `}
                    >
                      {/* <div className=""> */}
                      <img
                        src={review?.avatar}
                        alt="Agon"
                        data-tina-field={tinaField(review, "avatar")}
                      />
                      <h3
                        className="text-heading-6 mb-5 mt-20"
                        data-tina-field={tinaField(review, "name")}
                      >
                        {review?.name}
                      </h3>
                      <span
                        className="text-body-small d-block"
                        data-tina-field={tinaField(review, "company")}
                      >
                        {review?.company}
                      </span>
                      <p
                        className="text-body-text text-desc color-gray-500 mt-20"
                        data-tina-field={tinaField(review, "review")}
                      >
                        {review?.review}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="swiper-button-next swiper-button-next-4"></div>
          <div className="swiper-button-prev swiper-button-prev-4"></div>
        </div>
      </div>
    </section>
  );
};

export const CustomerListBlockSchema = {
  label: "Customer List",
  name: "CustomerList",
  ui: {
    itemProps: (item) => {
      return { label: item.sectionName };
    },
    previewSrc: "/thumbnails/customer-list.png",
  },
  fields: [
    {
      type: "string",
      name: "sectionName",
      label: "Section Name",
    },
    {
      type: "string",
      name: "heading1",
      label: "Primary Heading",
    },
    {
      type: "string",
      name: "heading2",
      label: "Secondary Heading",
    },
    {
      type: "object",
      name: "reviews",
      label: "Customer Reviews",
      list: true,
      fields: [
        {
          type: "image",
          name: "avatar",
          label: "Customer Avatar",
        },
        {
          type: "string",
          name: "name",
          label: "Customer Name",
        },
        {
          type: "string",
          name: "company",
          label: "Customer Company",
        },
        {
          type: "string",
          name: "bg",
          label: "Border color",
          options: ["bd-bg-5", "bd-bg-6", "bd-bg-9", "bd-bg-10"],
        },
        {
          type: "string",
          name: "review",
          label: "Customer Review",
        },
      ],
    },
  ],
};
