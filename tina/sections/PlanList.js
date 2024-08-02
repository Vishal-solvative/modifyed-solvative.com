import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import { useState } from "react";

const PlanListComponent = ({ fields }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section className="section-box mt-70 box-animation fade-up-desktop fade-mobile animation">
      <div className="container mt-50">
        <h3
          className="text-heading-1 text-center mb-10"
          data-tina-field={tinaField(fields, "heading1")}
        >
          {fields?.heading1}
        </h3>
      </div>
      <div className="container mt-20">
        <div className="text-center block-bill-2 mt-10">
          <span
            className="text-lg text-billed"
            data-tina-field={tinaField(fields, "cb1")}
          >
            {fields?.cb1}
          </span>
          <label className="switch ml-20 mr-20">
            <input
              id="cb_billed_type"
              type="checkbox"
              name="billed_type"
              onChange={handleCheckboxChange}
            />
            <span className="slider round"></span>
          </label>
          <span
            className="text-lg text-billed"
            data-tina-field={tinaField(fields, "cb2")}
          >
            {fields?.cb2}
          </span>
        </div>
        <div className="block-pricing block-pricing-2 mt-70">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="row">
                {fields?.plans?.map((plan, index) => (
                  <div
                    key={index}
                    className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn"
                    data-wow-delay=".1s"
                  >
                    <div className="box-pricing-item hover-up">
                      <div className="box-info-price">
                        <span
                          className="text-heading-3 for-month display-month"
                          data-tina-field={tinaField(plan, "price")}
                        >
                          {!isChecked ? plan?.month_price : plan?.annual_price}
                        </span>
                        <span className="text-month for-month text-body-small color-gray-400 display-month">
                          {!isChecked ? "/ Month" : `/ Year`}
                        </span>
                      </div>
                      <div className="line-bd-bottom">
                        <h4
                          className="text-heading-5 mb-15"
                          data-tina-field={tinaField(plan, "title1")}
                        >
                          {plan?.title1}
                        </h4>
                        <p
                          className="text-body-small color-gray-400"
                          data-tina-field={tinaField(plan, "title2")}
                        >
                          {plan?.title2}
                        </p>
                      </div>
                      <ul className="list-package-feature">
                        {plan?.features?.map((feature, index) => (
                          <li
                            key={index}
                            data-tina-field={tinaField(feature, "title")}
                          >
                            {feature?.title}
                          </li>
                        ))}
                      </ul>
                      <div>
                        <Link
                          className="btn btn-black text-body-lead icon-arrow-right-white"
                          href={plan?.btnLink || "#"}
                          data-tina-field={tinaField(plan, "btnLink")}
                        >
                          {plan?.btnText}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PlanList = {
  props: {
    label: "Plan List",
    name: "PlanList",
    ui: {
      itemProps: (item) => {
        return { label: item.sectionName };
      },
      previewSrc: "/thumbnails/plan-list.png",
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
        label: "Primary Heading",
      },
      {
        type: "string",
        name: "cb1",
        label: "Checkbox text1",
        required: true,
      },
      {
        type: "string",
        name: "cb2",
        label: "Checkbox text1",
        required: true,
      },
      {
        type: "object",
        name: "plans",
        label: "Plans",
        list: true,
        fields: [
          {
            type: "string",
            name: "month_price",
            label: "Mothly price with sign",
            required: true,
          },
          {
            type: "string",
            name: "annual_price",
            label: "Annual price with sign",
            required: true,
          },
          {
            type: "string",
            name: "title1",
            label: "Title1",
            required: true,
          },
          {
            type: "string",
            name: "title2",
            label: "Title2",
            required: true,
          },
          {
            type: "string",
            name: "btnText",
            label: "Button Text",
            required: true,
          },
          {
            type: "string",
            name: "btnLink",
            label: "Button Link",
            required: true,
          },
          {
            type: "object",
            name: "features",
            label: "Features",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Feature title",
                required: true,
              },
            ],
          },
        ],
      },
    ],
  },
  template: (fields) => <PlanListComponent fields={fields} />,
};

export default PlanList;
