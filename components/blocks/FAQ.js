import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import { useState } from "react";
import { useActivePage } from "../../hooks/useActivePage";

const FAQComponent = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { activePage, updateActivePage } = useActivePage();

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="section-box pt-140 pb-50 box-animation fade-up-desktop fade-mobile animation">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mb-40">
            <h3
              className="text-heading-1"
              data-tina-field={tinaField(data, "primaryHeading")}
            >
              {data?.primaryHeading}
            </h3>
            <p
              className="text-body-text color-gray-600 mt-30"
              data-tina-field={tinaField(data, "secondaryHeading")}
            >
              {data?.secondaryHeading}
            </p>
            <div className="row">
              {data?.contents?.map((content, index) => (
                <div key={index} className="col-lg-12 mt-50">
                  <h4
                    className="text-heading-6 icon-leaf"
                    data-tina-field={tinaField(content, "heading")}
                  >
                    {content?.heading}
                  </h4>
                  <p
                    className="text-body-excerpt color-gray-600 mt-15"
                    data-tina-field={tinaField(content, "content")}
                  >
                    {content?.content}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-60">
              <Link
                className="btn btn-black icon-arrow-right-white"
                href={data?.btn1Link || "#"}
                data-tina-field={tinaField(data, "btn1Link")}
                onClick={() => updateActivePage(data?.btn1Link || "#")}
              >
                {data?.btn1Title}
              </Link>
              <Link
                className="btn btn-link text-heading-6"
                href={data?.btn2Link || "#"}
                data-tina-field={tinaField(data, "btn2Link")}
                onClick={() => updateActivePage(data?.btn2Link || "#")}
              >
                {data?.btn2Title}
              </Link>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="accordion" id="accordionFAQ">
              {data?.questions?.map((question, index) => (
                <div key={index} className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button text-heading-5 ${
                        activeIndex === index ? "" : "collapsed"
                      }`}
                      onClick={() => handleClick(index)}
                      data-tina-field={tinaField(question, "question")}
                    >
                      {question?.question}
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${
                      activeIndex === index ? "show" : ""
                    }`}
                  >
                    <div
                      className="accordion-body"
                      data-tina-field={tinaField(question, "answer")}
                    >
                      {question?.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FAQ = ({ data }) => {
  return <FAQComponent data={data} />;
};

export const FAQBlockSchema = {
  label: "FAQ",
  name: "FAQ",
  ui: {
    itemProps: (item) => {
      return { label: item.sectionName };
    },
    previewSrc: "/thumbnails/faq.png",
  },
  fields: [
    {
      type: "string",
      name: "sectionName",
      label: "Section Name",
    },
    {
      type: "string",
      name: "primaryHeading",
      label: "Primary Heading",
      required: true,
    },
    {
      type: "string",
      name: "secondaryHeading",
      label: "Secondary Heading",
      required: true,
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
      type: "object",
      name: "contents",
      label: "Contents",
      list: true,
      fields: [
        {
          type: "string",
          name: "heading",
          label: "Heading",
          required: true,
        },
        {
          type: "string",
          name: "content",
          label: "Content",
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "questions",
      label: "Questions",
      list: true,
      fields: [
        {
          type: "string",
          name: "question",
          label: "Question",
          required: true,
        },
        {
          type: "string",
          name: "answer",
          label: "Answer",
          required: true,
        },
      ],
    },
  ],
};
