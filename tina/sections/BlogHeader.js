import { tinaField } from "tinacms/dist/react";
import Link from "next/link";

const BlogHeader = {
  props: {
    label: "Blog Header",
    name: "BlogHeader",
    ui: {
      itemProps: (item) => {
        return { label: item.sectionName };
      },
      previewSrc: "/thumbnails/blog-header.png",
    },
    fields: [
      {
        type: "image",
        name: "bgImage",
        label: "Background Image",
      },
      {
        type: "reference",
        name: "blog",
        label: "Blog",
        collections: ["blogs"],
      },
    ],
  },
  template: (fields) => (
    <section className="section-box ">
      <div
        className="banner-hero banner-head-image"
        data-tina-field={tinaField(fields, "bgImage")}
        style={{ backgroundImage: `url(${fields?.bgImage})` }}
      >
        <div className="container">
          <div className="text-center">
            <span
              className="tag-1 bg-6 color-green-900"
              data-tina-field={tinaField(fields?.blog, "blogTag")}
            >
              {fields?.blog?.blogTag}
            </span>
            <h1
              className="text-heading-1 color-white mt-30"
              data-tina-field={tinaField(fields?.blog, "blogTitle")}
            >
              {fields?.blog?.blogTitle}
            </h1>
          </div>
        </div>
      </div>
    </section>
  ),
};

export default BlogHeader;
