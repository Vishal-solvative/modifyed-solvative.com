import { tinaField } from "tinacms/dist/react";
import Link from "next/link";
import { LinkTemp } from "../GlobalTemplates/LinkTemp";

const BlogList = {
  props: {
    label: "Blog List",
    name: "BlogList",
    ui: {
      itemProps: (item) => {
        return { label: item.sectionName };
      },
      previewSrc: "/thumbnails/blog-list.png",
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
      { ...LinkTemp, label: "View More", name: "viewMore" },
      {
        type: "object",
        name: "blogList",
        label: "Blog List",
        list: true,
        fields: [
          {
            type: "reference",
            name: "blog",
            label: "Blog",
            collections: ["blogs"],
          },
        ],
      },
    ],
  },
  template: (fields) => (
    <section className="section-box box-animation fade-up-desktop fade-mobile animation">
      <div className="container mt-30">
        <div className="row">
          <div className="col-lg-8">
            <h3
              className="text-heading-1 mb-10"
              data-tina-field={tinaField(fields, "primaryHeading")}
            >
              {fields?.primaryHeading}
            </h3>
            <p
              className="text-body-lead-large color-gray-600"
              data-tina-field={tinaField(fields, "secondaryHeading")}
            >
              {fields?.secondaryHeading}
            </p>
          </div>
          <div className="col-lg-4 text-lg-end text-start pt-30">
            {fields?.viewMore && (
              <Link href={fields?.viewMore?.url || "#"} legacyBehavior>
                <a
                  className="btn btn-black icon-arrow-right-white"
                  data-tina-field={tinaField(fields?.viewMore, "text")}
                >
                  {fields?.viewMore?.text}
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="container mt-90">
        <div className="row">
          {fields?.blogList?.map((blog, index) => (
            <div key={index} className="col-lg-4 col-sm-12 pr-30">
              <div className="card-grid-style-4">
                <span
                  className="tag-dot"
                  data-tina-field={tinaField(blog?.blog, "blogTag")}
                >
                  {blog?.blog?.blogTag}
                </span>
                <Link
                  href={`blog/${blog?.blog?._sys?.filename || "#"}`}
                  legacyBehavior
                >
                  <a
                    className="text-heading-4"
                    href="#"
                    data-tina-field={tinaField(blog?.blog, "blogTitle")}
                  >
                    {blog?.blog?.blogTitle}
                  </a>
                </Link>

                <div className={`grid-4-img ${blog?.blog?.bgcolor}`}>
                  <Link
                    href={`blog/${blog?.blog?._sys?.filename || "#"}`}
                    legacyBehavior
                  >
                    <a>
                      <img
                        src={blog?.blog?.blogImage_1290x1506}
                        alt="Agon"
                        data-tina-field={tinaField(
                          blog?.blog,
                          "blogImage_1290x1506"
                        )}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
};

export default BlogList;
