import { tinaField } from "tinacms/dist/react";
import { useState } from "react";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
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
    <section className="section-box">
      <div className="banner-hero banner-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <TinaMarkdown
                content={data?.main_heading}
                data-tina-field={tinaField(data, "main_heading")}
                components={{
                  h1: (props) => <h1 className="text-display-2" {...props} />,
                  bold: (props) => (
                    <span className="color-green-900" {...props} />
                  ),
                }}
              />
              <p
                className="text-body-lead-large color-gray-500 mt-40 pr-40"
                data-tina-field={tinaField(data, "heading2")}
              >
                {data?.heading2}
              </p>
              <div className="mt-40">
                <Link href={data?.btn1Link || "#"} legacyBehavior>
                  <a
                    className="btn btn-black icon-arrow-right-white"
                    data-tina-field={tinaField(data, "btn1Text")}
                    onClick={() => updateActivePage(data?.btn1Link || "#")}
                  >
                    {data?.btn1Text}
                  </a>
                </Link>
                <Link href={data?.btn2Link || "#"} legacyBehavior>
                  <a
                    className="btn btn-link icon-arrow-right color-gray-900 text-heading-6"
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
                <div className="video-block shape-1">
                  <a
                    className="popup-youtube btn-play-video"
                    onClick={openModal}
                  ></a>
                  <span
                    className="text-heading-4"
                    data-tina-field={tinaField(data, "thumbnail")}
                  >
                    {data?.thumbnail}
                  </span>
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
                            src={data?.url}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <img
                  className="img-responsive shape-2"
                  alt="Agon"
                  src={data?.mainImage}
                  data-tina-field={tinaField(data, ",mainImage")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Hero4 = ({ data }) => {
  return <VideoStoryComponent data={data}></VideoStoryComponent>;
};
export const Hero4BlockSchema = {
  label: "Hero4",
  name: "Hero4",
  ui: {
    itemProps: (item) => {
      return { label: item.sectionName };
    },
    previewSrc: "/thumbnails/hero4.png",
  },
  fields: [
    {
      type: "string",
      name: "sectionName",
      label: "Section Name",
    },
    {
      type: "rich-text",
      name: "main_heading",
      label: "Heading",
    },
    {
      type: "string",
      name: "heading2",
      label: "Sub Heading",
    },
    {
      type: "image",
      name: "mainImage",
      label: "Image",
    },
    {
      label: "Thumbnail Text",
      name: "thumbnail",
      type: "string",
    },
    {
      label: "Video Link",
      name: "url",
      type: "string",
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
