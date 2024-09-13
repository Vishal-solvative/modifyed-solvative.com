import { tinaField } from "tinacms/dist/react";
import { useState } from "react";

const VideoStoryComponent = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="section-box mt-70 box-animation fade-up-desktop fade-mobile animation">
        <div className="container">
          <div className="box-bg-bottom">
            <div className="box-video-homepage6">
              <div className="box-image mt-30 mb-30">
                <a
                  className="popup-youtube btn-play-video btn-play-middle"
                  onClick={openModal}
                ></a>
                <img
                  className="img-responsive bdrd-16"
                  src={data?.thumbnail}
                  data-tina-field={tinaField(data, "thumbnail")}
                  alt="solvative"
                />
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
            <div className="row">
              {data?.cards?.map((card, i) => (
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="list-icons mt-50">
                    <div className="item-icon none-bd">
                      <span className="icon-left">
                        <img
                          src={card?.image}
                          data-tina-field={tinaField(card, "image")}
                        />
                      </span>
                      <h4
                        className="text-heading-4"
                        data-tina-field={tinaField(card, "title")}
                      >
                        {card?.title}
                      </h4>
                      <p
                        className="text-body-text color-gray-600 mt-15"
                        data-tina-field={tinaField(card, "details")}
                      >
                        {card?.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const OurIdea = ({ data }) => {
  return <VideoStoryComponent data={data} />;
};

export const OurIdeaBlockSchema = {
  label: "Our Idea",
  name: "OurIdea",
  ui: {
    itemProps: (item) => {
      return { label: item.sectionName };
    },
    previewSrc: "/thumbnails/our-idea.png",
  },
  fields: [
    {
      type: "string",
      name: "sectionName",
      label: "Section Name",
    },
    {
      label: "Image",
      name: "thumbnail",
      type: "image",
    },
    {
      label: "Video Link",
      name: "url",
      type: "string",
    },
    {
      type: "object",
      name: "cards",
      label: "Data",
      list: true,
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "details",
          label: "Details",
        },
      ],
    },
  ],
};
