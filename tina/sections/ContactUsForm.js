import Link from "next/link";
import { tinaField } from "tinacms/dist/react";

const ContactUsForm = {
  props: {
    label: "ContactUs Form",
    name: "ContactUsForm",
    ui: {
      itemProps: (item) => {
        return { label: item.sectionName };
      },
      previewSrc: "/thumbnails/contact-us-form.png",
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
        type: "string",
        name: "tag",
        label: "Tag",
      },
      {
        type: "string",
        name: "companyName",
        label: "Company Name",
      },
      {
        type: "string",
        name: "address",
        label: "Address",
      },
      {
        type: "string",
        name: "mobile",
        label: "Mobile",
      },
      {
        type: "string",
        name: "email",
        label: "Email",
      },
      {
        type: "string",
        name: "terms",
        label: "Terms and Condtions",
      },
    ],
  },
  template: (fields) => (
    <section className="section-box box-animation fade-up-desktop fade-mobile animation">
      <div className="container mb-20 mt-140">
        <div className="bdrd-58 box-gray-100 icon-wave">
          <div className="row">
            <div className="col-lg-12 mb-60">
              <span
                className="text-body-capitalized text-uppercase"
                data-tina-field={tinaField(fields, "tag")}
              >
                {fields?.tag}
              </span>
              <h2
                className="text-heading-3 color-gray-900 mt-10"
                data-tina-field={tinaField(fields, "primaryHeading")}
              >
                {fields?.primaryHeading}
              </h2>
              <p
                className="text-body-text color-gray-600 mt-20"
                data-tina-field={tinaField(fields, "secondaryHeading")}
              >
                {fields?.secondaryHeading}
              </p>
            </div>
            <div className="col-lg-4 mb-40">
              <h4
                className="text-heading-6 color-gray-900 icon-home mb-10 mt-10"
                data-tina-field={tinaField(fields, "companyName")}
              >
                {fields?.companyName}
              </h4>
              <p
                className="text-body-text color-gray-600"
                data-tina-field={tinaField(fields, "address")}
              >
                {fields?.address}
              </p>
              <p
                className="text-body-text color-gray-600"
                data-tina-field={tinaField(fields, "mobile")}
              >
                {fields?.mobile}
              </p>
              <p
                className="text-body-text color-gray-600"
                data-tina-field={tinaField(fields, "email")}
              >
                {fields?.email}
              </p>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Company (optional)"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input className="form-control" placeholder="Your email" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Tell us about yourself"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-12 mt-15">
                  <button
                    className="btn btn-black icon-arrow-right-white mr-40 mb-20"
                    type="submit"
                  >
                    Send Message
                  </button>
                  <span
                    className="text-body-text-md color-gray-500 mb-20"
                    data-tina-field={tinaField(fields, "terms")}
                  >
                    {fields?.terms}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ),
};

export default ContactUsForm;
