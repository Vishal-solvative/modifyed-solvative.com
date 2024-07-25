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
      <div class="row">
        <div class="col-lg-20">
          <div class="box-image mt-30 mb-30">
            <a
              class="popup-youtube btn-play-video btn-play-middle"
              onClick={openModal}
            ></a>
            <img
              class="img-responsive bdrd-16"
              src={props?.image}
              alt="Agon"
              data-tina-field={tinaField(props, "image")}
            />
          </div>
        </div>
      </div>

      {modalOpen && (
        <section class="modal__bg" onClick={closeModal}>
          <div class="modal__align">
            <div class="modal__content">
              <div class="modal__video-align">
                <div class="modal__spinner">
                  <i class="fi-rr-refresh"></i>
                </div>
                <iframe
                  class="modal__video-style"
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
    <section class="section-box mt-50 mb-50">
      <div class="container" data-tina-field={tinaField(fields, "career")}>
        <div class="content-detail">
          <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-lg-8">
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
          <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-lg-8">
              <div class="border-bottom mt-50 mb-50"></div>
              <div class="media-block">
                <a
                  class="btn btn-green-900 color-white text-heading-6 icon-arrow-right-white mr-20"
                  href="#"
                >
                  Apply Now
                </a>
                <a class="btn btn-default icon-arrow-right" href="/contact-us">
                  Contact Us
                </a>
                <div class="float-start float-lg-end mt-30">
                  <a class="btn btn-media mr-10" href="/#">
                    <img
                      src="/assets/imgs/template/icons/facebook-share.svg"
                      alt="Agon"
                    />{" "}
                    Share
                  </a>
                  <a class="btn btn-media mr-10" href="/#">
                    <img
                      src="/assets/imgs/template/icons/twitter-share.svg"
                      alt="Agon"
                    />{" "}
                    Tweet
                  </a>
                  <a class="btn btn-media" href="/#">
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
