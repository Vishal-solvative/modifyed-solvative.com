import { tinaField } from "tinacms/dist/react";
import { useState } from "react";
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
    <section className="section-box">
      <div className="banner-hero banner-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h1
                className="text-display-2 color-white"
                data-tina-field={tinaField(data, "heading1")}
              >
                {data?.heading1}
              </h1>
              <p
                className="text-body-lead-large color-white mt-30 pr-40"
                data-tina-field={tinaField(data, "heading2")}
              >
                {data?.heading2}
              </p>
              <div className="mt-40">
                <Link href={data?.btn1Link || "#"} legacyBehavior>
                  <a
                    className="btn btn-pink icon-arrow-right-white text-heading-6"
                    data-tina-field={tinaField(data, "btn1Text")}
                    onClick={() => updateActivePage(data?.btn1Link || "#")}
                  >
                    {data?.btn1Text}
                  </a>
                </Link>
                <Link href={data?.btn2Link || "#"} legacyBehavior>
                  <a
                    className="btn btn-link color-white text-heading-6 btn-link-inter"
                    data-tina-field={tinaField(data, "btn2Text")}
                    onClick={() => updateActivePage(data?.btn2Link || "#")}
                  >
                    {data?.btn2Text}
                  </a>
                </Link>
              </div>
              <div className="mt-60">
                <div className="row">
                  {data?.cards?.map((card, i) => (
                    <div key={i} className="col-lg-3 col-sm-4 col-4">
                      <h3
                        className="text-heading-2 color-white mb-15"
                        data-tina-field={tinaField(card, "number")}
                      >
                        {card?.number}
                      </h3>
                      <p
                        className="text-body-normal color-gray-300"
                        data-tina-field={tinaField(card, "title")}
                      >
                        {card?.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block">
              <div className="banner-imgs">
                <a
                  className="popup-youtube btn-play-video-2"
                  onClick={openModal}
                ></a>
                <img
                  className="img-responsive shape-2"
                  alt="Agon"
                  src={data?.mainImage}
                  data-tina-field={tinaField(data, "mainImage")}
                />
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Hero5 = ({ data }) => {
  return <VideoStoryComponent data={data}></VideoStoryComponent>;
};
export const Hero5BlockSchema = {
  label: "Hero5",
  name: "Hero5",
  ui: {
    itemProps: (item) => {
      return { label: item.sectionName };
    },
    previewSrc: "/thumbnails/hero5.png",
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
    {
      type: "object",
      name: "cards",
      label: "Card List",
      list: true,
      fields: [
        {
          type: "string",
          name: "number",
          label: "Number",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
      ],
    },
  ],
};
