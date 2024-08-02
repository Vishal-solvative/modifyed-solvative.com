import { tinaField } from "tinacms/dist/react";
import { LinkTemp } from "../GlobalTemplates/LinkTemp";
import { IdeaTemp } from "../GlobalTemplates/IdeaTemp";
import OfferSlider from "../../components/slider/Offer";

const Offer = {
  props: {
    ...IdeaTemp,
    name: "offer",
    label: "Offer",
    ui: {
      previewSrc: "/thumbnails/offer.png",
    },
  },

  template: (fields) => (
    <section className="section-box box-animation fade-up-desktop fade-mobile animation">
      <div className="container mt-120">
        <div className="bg-2 bdrd-58 pattern-white none-pattern pb-60">
          <div className="row">
            <div className="col-lg-2 col-sm-1 col-12" />
            <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
              <h2
                className="text-heading-1 color-gray-900"
                data-tina-field={tinaField(fields, "heading")}
              >
                {fields?.heading}
              </h2>
              <p
                className="text-body-lead-large color-gray-600 mt-20"
                data-tina-field={tinaField(fields, "subHeading")}
              >
                {fields?.subHeading}
              </p>
            </div>
            <div className="col-lg-2 col-sm-1 col-12" />
          </div>
          <div className="container mt-70">
            <OfferSlider data={fields?.features} />
          </div>
        </div>
      </div>
    </section>
  ),
};

export default Offer;
