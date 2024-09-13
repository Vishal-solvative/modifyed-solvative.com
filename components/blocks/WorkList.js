"use client";

import { tinaField } from "tinacms/dist/react";
import { LinkTemp } from "../../tina/GlobalTemplates/LinkTemp";
import Link from "next/link";
import { useState } from "react";

export const WorkList = ({ data }) => {
  console.log("worklist", data);
  const [activeIndex, setActiveIndex] = useState(1);
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
  };
  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };
  return (
    <section className="section-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-sm-1 col-12" />
          <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
            <h2
              className="text-heading-1 color-gray-900"
              data-tina-field={tinaField(data, "firstTitle")}
            >
              {data?.firstTitle}
              <br className="d-lg-block d-none" />
              {data?.belowTitle}
            </h2>
            <p
              className="text-body-lead-large color-gray-600 mt-20"
              data-tina-field={tinaField(data, "description")}
            >
              {data?.description}
            </p>
          </div>
          <div className="col-lg-2 col-sm-1 col-12" />
        </div>
      </div>
      <div className="container">
        <div className="text-center mt-90">
          <ul className="nav" role="tablist">
            {data?.services?.map((service, index) => (
              <li
                onClick={(e) => {
                  e.preventDefault();
                  handleOnClick(index + 1);
                }}
                key={index}
              >
                <Link href="#" legacyBehavior>
                  <a
                    className={
                      activeIndex === index + 1
                        ? "btn btn-default btn-bd-green-hover btn-select active"
                        : "btn btn-default btn-bd-green-hover btn-select"
                    }
                    data-tina-field={tinaField(service, "text")}
                  >
                    {service?.text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="tab-content">
          {data?.work?.map((w, index) => (
            <div
              className={
                activeIndex === index + 1
                  ? "tab-pane fade  active show"
                  : "tab-pane fade "
              }
              key={index}
            >
              <div className="bg-2 panel-box mt-50">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="box-optimized">
                      <h3
                        className="text-heading-2"
                        data-tina-field={tinaField(w, "title")}
                      >
                        {w?.title}
                      </h3>
                      <p
                        className="text-body-excerpt mt-30"
                        data-tina-field={tinaField(w, "description")}
                      >
                        {w?.description}
                      </p>
                      <div className="mt-40">
                        <Link href={"#"} legacyBehavior>
                          <a className="btn btn-default btn-white icon-arrow-right">
                            Learn more
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div
                      className="block-video icon-pattern"
                      data-tina-field={tinaField(w, "image")}
                    >
                      <a
                        className="popup-youtube btn-play-video"
                        onClick={openModal}
                      ></a>
                      <img
                        className="img-responsive"
                        src={w?.image}
                        alt="Agon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WorkListBlockSchema = {
  label: "Work List",
  name: "workList",
  ui: {
    previewSrc: "/thumbnails/work-list.png",
    defaultItem: {
      firstTitle: "See why we are trusted",
      belowTitle: "the world over",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.",
    },
  },
  fields: [
    {
      type: "string",
      name: "firstTitle",
      label: "First Title",
      required: true,
    },
    {
      type: "string",
      name: "belowTitle",
      label: "Below Title",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      required: true,
    },
    {
      type: "object",
      name: "services",
      label: "Services",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.text };
        },
        defaultItem: {
          text: "Work Name",
        },
      },
      fields: [
        {
          type: "string",
          name: "text",
          label: "Text",
          required: true,
        },
        {
          type: "string",
          name: "url",
          label: "Url",
        },
      ],
    },
    {
      type: "object",
      name: "work",
      label: "Work",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.title };
        },
        defaultItem: {
          title: "Optimize and scale, easy to start",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          required: true,
        },
        {
          type: "image",
          name: "image",
          label: "Image",
          required: true,
        },
        {
          type: "string",
          name: "url",
          label: "Url",
        },
      ],
    },
  ],
};
