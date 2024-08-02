import { tinaField } from "tinacms/dist/react";
import Link from "next/link";
import { LinkTemp } from "../GlobalTemplates/LinkTemp";
import { formatDate } from "../../util/date";

const Categories = {
  props: {
    label: "Categories",
    name: "Categories",
    ui: {
      itemProps: (item) => {
        return { label: item.sectionName };
      },
      previewSrc: "/thumbnails/categories.png",
    },
    fields: [
      {
        type: "string",
        name: "sectionName",
        label: "Section Name",
      },
      {
        type: "string",
        name: "heading",
        label: "Heading",
        required: true,
      },
      {
        type: "string",
        name: "subHeading",
        label: "Sub Heading",
        required: true,
      },
      {
        type: "object",
        name: "categories",
        label: "Categories",
        list: true,
        fields: [
          {
            label: "Image",
            name: "categoryImage",
            type: "image",
            required: true,
          },
          {
            label: "Link",
            name: "link",
            type: "string",
          },
          {
            label: "Title",
            name: "title",
            type: "string",
          },
          {
            label: "Category Text",
            name: "text",
            type: "string",
          },
          {
            label: "Category Link",
            name: "readmore",
            type: "string",
          },
          {
            name: "created_at",
            label: "Created At",
            type: "datetime",
          },
        ],
      },
      { ...LinkTemp, label: "Load more resource" },
    ],
  },

  template: (fields) => (
    <div className="section-box mt-140 box-animation fade-up-desktop fade-mobile animation">
      <div className="container text-center">
        <h2
          className="text-heading-1 color-gray-900"
          data-tina-field={tinaField(fields, "heading")}
        >
          {fields?.heading}
        </h2>
        <p
          className="text-body-lead-large color-gray-600 mt-20 text-center px-5"
          data-tina-field={tinaField(fields, "subHeading")}
        >
          {fields?.subHeading}
          {/* We provide many categories, choose a category according to
            <br className="d-lg-block d-none" />
            your expertise to make it easier to find a job. */}
        </p>
      </div>
      <div className="container list-category-homepage7 mt-70">
        <div className="row">
          {fields?.categories?.map((categorie, inx) => (
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" key={inx}>
              <div className="grid-category-2">
                <div className="grid-category-image hover-effect">
                  <Link href={categorie?.link || "#"} legacyBehavior>
                    <a>
                      <img
                        className="main-img"
                        src={categorie?.categoryImage}
                        data-tina-field={tinaField(categorie, "categoryImage")}
                      />
                    </a>
                  </Link>
                </div>
                <Link href={categorie?.link || "#"} legacyBehavior>
                  <a
                    className="text-heading-5 color-gray-900"
                    data-tina-field={tinaField(categorie, "title")}
                  >
                    {categorie?.title}
                  </a>
                </Link>

                <div className="category-info-bottom">
                  <div className="link-category">
                    <Link href={categorie?.link || "#"} legacyBehavior>
                      <a
                        className="mr-20"
                        data-tina-field={tinaField(categorie, "text")}
                      >
                        {categorie?.text}
                      </a>
                    </Link>
                    <span
                      className="text-date"
                      data-tina-field={tinaField(categorie, "created_at")}
                    >
                      {formatDate(categorie?.created_at)}
                    </span>
                  </div>
                  <div className="link-readmore">
                    <Link href={categorie?.readmore || "#"} legacyBehavior>
                      <a data-tina-field={tinaField(categorie, "readmore")}>
                        READ MORE
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-30">
          <Link href={fields?.link?.url || "#"} legacyBehavior>
            <a
              className={`btn btn-black ${
                fields?.link?.icon && "icon-arrow-right-white"
              }`}
              data-tina-field={tinaField(fields?.link, "text")}
            >
              {fields?.link?.text}
            </a>
          </Link>
        </div>
      </div>
    </div>
  ),
};
export default Categories;
