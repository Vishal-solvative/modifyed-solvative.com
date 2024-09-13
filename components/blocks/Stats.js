import CounterUp from "../../components/elements/CounterUp";
import { tinaField } from "tinacms/dist/react";

export const Stats = ({ data }) => {
  return (
    <div className="section-box mt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-1" />
          <div className="col-lg-10">
            <div className="bd-bottom pb-20 mb-40 text-mb-center">
              <div className="row">
                {data?.cards?.map((card, i) => (
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30">
                    <span className="text-display-3 color-green-900">
                      +
                      <CounterUp
                        count={card?.number}
                        time={3}
                        data-tina-field={tinaField(card, "number")}
                      />
                      {card?.k ? "k" : ""}
                    </span>
                    <p
                      className="text-body-text color-gray-500 pl-40t"
                      data-tina-field={tinaField(card, "text")}
                    >
                      {card?.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-1" />
        </div>
      </div>
    </div>
  );
};

export const StatsBlockSchema = {
  label: "Stats",
  name: "Stats",
  ui: {
    itemProps: (item) => {
      return { label: item.sectionName };
    },
    previewSrc: "/thumbnails/stats.png",
  },
  fields: [
    {
      type: "string",
      name: "sectionName",
      label: "Section Name",
    },
    {
      type: "object",
      name: "cards",
      label: "Data",
      list: true,
      fields: [
        {
          type: "string",
          name: "number",
          label: "Number",
        },
        {
          type: "string",
          name: "text",
          label: "Text",
        },
        {
          type: "boolean",
          name: "k",
          label: "In Thousand?",
        },
      ],
    },
  ],
};
