import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import { useState } from "react";

const VideoComponent = ({ props }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <div className="row">
        <div className="col-lg-20">
          <div className="box-image mt-30 mb-30">
            <a
              className="popup-youtube btn-play-video btn-play-middle"
              onClick={openModal}
            ></a>
            <img
              className="img-responsive bdrd-16"
              src={props?.image}
              alt="Agon"
              data-tina-field={tinaField(props, "image")}
            />
          </div>
        </div>
      </div>

      {modalOpen && (
        <section className="modal__bg" onClick={closeModal}>
          <div className="modal__align">
            <div className="modal__content">
              <div className="modal__video-align">
                <div className="modal__spinner">
                  <i className="fi-rr-refresh"></i>
                </div>
                <iframe
                  className="modal__video-style"
                  loading="lazy"
                  width="800"
                  height="500"
                  src={props?.videoLink}
                  data-tina-field={tinaField(props, "videoLink")}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

const CareerDetails = {
  props: {
    label: "Career Details",
    name: "CareerDetails",
    ui: {
      itemProps: (item) => {
        return { label: item.sectionName };
      },
      previewSrc: "/thumbnails/career-details.png",
    },
    fields: [
      {
        type: "rich-text",
        name: "career",
        label: "Career Detail",
        templates: [
          {
            name: "video",
            label: "Video",
            fields: [
              {
                label: "Image",
                name: "image",
                type: "image",
              },
              {
                label: "Video Link",
                name: "videoLink",
                type: "string",
              },
            ],
          },
        ],
      },
    ],
  },
  template: (fields) => (
    <section className="section-box mt-50 mb-50 ">
      <div className="container" data-tina-field={tinaField(fields, "career")}>
        <div className="content-detail">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <TinaMarkdown
                content={fields?.career}
                components={{
                  h2: (props) => <h2 className="text-heading-4" {...props} />,
                  p: (props) => <p className="text-body-text" {...props} />,
                  video: (props) => <VideoComponent props={props} />,
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className="border-bottom mt-50 mb-50"></div>
              <div className="media-block">
                <a
                  className="btn btn-green-900 color-white text-heading-6 icon-arrow-right-white mr-20"
                  href="#"
                >
                  Apply Now
                </a>
                <a
                  className="btn btn-default icon-arrow-right"
                  href="/contact-us"
                >
                  Contact Us
                </a>
                <div className="float-start float-lg-end mt-30">
                  <a className="btn btn-media mr-10" href="/#">
                    <img
                      src="/assets/imgs/template/icons/facebook-share.svg"
                      alt="Agon"
                    />{" "}
                    Share
                  </a>
                  <a className="btn btn-media mr-10" href="/#">
                    <img
                      src="/assets/imgs/template/icons/twitter-share.svg"
                      alt="Agon"
                    />{" "}
                    Tweet
                  </a>
                  <a className="btn btn-media" href="/#">
                    <img
                      src="/assets/imgs/template/icons/pinterest-share.svg"
                      alt="Agon"
                    />{" "}
                    Pin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ),
};

export default CareerDetails;
