import { useState } from "react";
import { tinaField } from "tinacms/dist/react";
import Link from "next/link";

const VideoStoryComponent = ({ fields }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <section className="section-box box-animation fade-up-desktop fade-mobile animation">
        <div className="banner-hero bg-about-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                {fields?.tag ? (
                  <span
                    className="tag-1 bg-6 color-green-900"
                    data-tina-field={tinaField(fields, "tag")}
                  >
                    {fields?.tag}
                  </span>
                ) : null}
                <h1
                  className={
                    fields?.tag
                      ? "text-display-2 color-gray-900 mt-30"
                      : "text-display-2 color-gray-900"
                  }
                  data-tina-field={tinaField(fields, "primaryHeading")}
                >
                  {fields?.primaryHeading}
                </h1>
                <p
                  className="text-heading-4 color-gray-600 mt-40"
                  data-tina-field={tinaField(fields, "secondaryHeading")}
                >
                  {fields?.secondaryHeading}
                </p>
                {(fields?.btn1Title && fields?.btn1Link) ||
                (fields?.btn2Title && fields?.btn2Link) ? (
                  <div className="mt-50">
                    {fields?.btn1Link && fields?.btn1Title ? (
                      <Link
                        className="btn btn-black icon-arrow-right-white mb-15 mr-20"
                        href={fields?.btn1Link}
                        data-tina-field={tinaField(fields, "btn1Link")}
                      >
                        {fields?.btn1Title}
                      </Link>
                    ) : null}
                    {fields?.btn2Link && fields?.btn2Title ? (
                      <Link
                        className="btn btn-default icon-arrow-right color-gray-900 btn-mb mb-15"
                        href={fields?.btn2Link}
                        data-tina-field={tinaField(fields, "btn2Link")}
                      >
                        {fields?.btn2Title}
                      </Link>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-box mt-40 box-animation fade-up-desktop fade-mobile animation">
        <div className="container">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
              <div className="box-image">
                <a
                  className="popup-youtube btn-play-video btn-play-middle"
                  onClick={openModal}
                ></a>
                <img
                  className="img-responsive bdrd-16"
                  src={fields?.image}
                  alt="Agon"
                  data-tina-field={tinaField(fields, "image")}
                />
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="modal__bg" onClick={closeModal}>
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
                  src={fields?.videoLink}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const VideoStory = {
  props: {
    label: "Video Story",
    name: "VideoStory",
    ui: {
      itemProps: (item) => {
        return { label: item.sectionName };
      },
      previewSrc: "/thumbnails/video-story.png",
    },
    fields: [
      {
        type: "string",
        name: "sectionName",
        label: "Section Name",
      },
      {
        label: "Primary Heading",
        name: "primaryHeading",
        type: "string",
        required: true,
      },
      {
        label: "Tag",
        name: "tag",
        type: "string",
      },
      {
        label: "Button1 Title",
        name: "btn1Title",
        type: "string",
      },
      {
        label: "Button1 Link",
        name: "btn1Link",
        type: "string",
      },
      {
        label: "Button2 Title",
        name: "btn2Title",
        type: "string",
      },
      {
        label: "Button2 Link",
        name: "btn2Link",
        type: "string",
      },
      {
        label: "Secondary Heading",
        name: "secondaryHeading",
        type: "string",
        required: true,
      },
      {
        label: "Image",
        name: "image",
        type: "image",
        required: true,
      },
      {
        label: "Video Link",
        name: "videoLink",
        type: "string",
        required: true,
      },
    ],
  },
  template: (fields) => <VideoStoryComponent fields={fields} />,
};

export default VideoStory;
