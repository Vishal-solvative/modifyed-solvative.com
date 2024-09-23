import { useState } from "react";
import { tinaField } from "tinacms/dist/react";
import Link from "next/link";
import { useActivePage } from "../../hooks/useActivePage";

const VideoStoryComponent = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { activePage, updateActivePage } = useActivePage();

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
                {data?.tag ? (
                  <span
                    className="tag-1 bg-6 color-green-900"
                    data-tina-field={tinaField(data, "tag")}
                  >
                    {data?.tag}
                  </span>
                ) : null}
                <h1
                  className={
                    data?.tag
                      ? "text-display-2 color-gray-900 mt-30"
                      : "text-display-2 color-gray-900"
                  }
                  data-tina-field={tinaField(data, "primaryHeading")}
                >
                  {data?.primaryHeading}
                </h1>
                <p
                  className="text-heading-4 color-gray-600 mt-40"
                  data-tina-field={tinaField(data, "secondaryHeading")}
                >
                  {data?.secondaryHeading}
                </p>
                {(data?.btn1Title && data?.btn1Link) ||
                (data?.btn2Title && data?.btn2Link) ? (
                  <div className="mt-50">
                    {data?.btn1Link && data?.btn1Title ? (
                      <Link
                        className="btn btn-black icon-arrow-right-white mb-15 mr-20"
                        href={data?.btn1Link}
                        data-tina-field={tinaField(data, "btn1Link")}
                        onClick={() => updateActivePage(data?.btn1Link)}
                      >
                        {data?.btn1Title}
                      </Link>
                    ) : null}
                    {data?.btn2Link && data?.btn2Title ? (
                      <Link
                        className="btn btn-default icon-arrow-right color-gray-900 btn-mb mb-15"
                        href={data?.btn2Link}
                        data-tina-field={tinaField(data, "btn2Link")}
                        onClick={() => updateActivePage(data?.btn2Link)}
                      >
                        {data?.btn2Title}
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
                  src={data?.image}
                  alt="Agon"
                  data-tina-field={tinaField(data, "image")}
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
                  src={data?.videoLink}
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

export const VideoStory = ({ data }) => {
  return <VideoStoryComponent data={data} />;
};

export const VideoStoryBlockSchema = {
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
};
