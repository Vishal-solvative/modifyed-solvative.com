import CounterUp from "../../components/elements/CounterUp";
import { tinaField } from "tinacms/dist/react";

export const WorkList = ({ data }) => {
  return (
    <div className="section-box mt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              {data?.cards?.map((card, i) => (
                <div
                  key={i}
                  className="col-lg-6 col-md-6 col-sm-6 col-12 pr-mb-70 mb-30"
                >
                  <h3 className="text-display-3">
                    <span
                      className="count"
                      data-tina-field={tinaField(card, "number")}
                    >
                      {card?.number}
                    </span>
                  </h3>
                  <span
                    className="text-body-quote"
                    data-tina-field={tinaField(card, "cardTitle")}
                  >
                    {card?.cardTitle}
                  </span>
                  <p
                    className="text-body-text"
                    data-tina-field={tinaField(card, "description")}
                  >
                    {card?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 pdl-md">
            <h3
              className="text-heading-1"
              data-tina-field={tinaField(data, "headingText")}
            >
              {data?.headingText}
            </h3>
            <div className="mt-40 box-mw-610">
              <div className="form-newsletter-2">
                <form>
                  <input
                    className="input-newsletter"
                    placeholder="Enter your email ..."
                    value=""
                  />
                  <button
                    className="btn btn-newsletter icon-arrow-right-white"
                    type="submit"
                  >
                    Get A Quote
                  </button>
                </form>
              </div>
            </div>
            <div className="mt-40">
              <ul className="list-icon-3">
                {data?.tagList?.map((tag, i) => (
                  <li
                    key={i}
                    className="text-body-text-md"
                    data-tina-field={tinaField(tag, "tag")}
                  >
                    {tag?.tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const WorkListBlockSchema = {
  label: "Work List",
  name: "WorkList",
  ui: {
    itemProps: (item) => {
      return { label: item.sectionName };
    },
    previewSrc: "/thumbnails/work-list.png",
  },
  fields: [
    {
      type: "string",
      name: "sectionName",
      label: "Section Name",
    },
    {
      type: "string",
      name: "headingText",
      label: "Primary Heading",
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
          name: "cardTitle",
          label: "Title",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
        },
      ],
    },
    {
      type: "object",
      name: "tagList",
      label: "Tags",
      list: true,
      fields: [
        {
          type: "string",
          name: "tag",
          label: "Tag",
        },
      ],
    },
  ],
};
