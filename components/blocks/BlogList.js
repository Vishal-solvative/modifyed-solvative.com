import { tinaField } from "tinacms/dist/react";
import Link from "next/link";
import { LinkTemp } from "../../tina/GlobalTemplates/LinkTemp";
import { useActivePage } from "../../hooks/useActivePage";

export const BlogList = ({ data }) => {
  const { activePage, updateActivePage } = useActivePage();
  return (
    <section className="section-box box-animation fade-up-desktop fade-mobile animation">
      <div className="container mt-30">
        <div className="row">
          <div className="col-lg-8">
            <h3
              className="text-heading-1 mb-10"
              data-tina-field={tinaField(data, "primaryHeading")}
            >
              {data?.primaryHeading}
            </h3>
            <p
              className="text-body-lead-large color-gray-600"
              data-tina-field={tinaField(data, "secondaryHeading")}
            >
              {data?.secondaryHeading}
            </p>
          </div>
          <div className="col-lg-4 text-lg-end text-start pt-30">
            {data?.viewMore && (
              <Link href={data?.viewMore?.url || "#"} legacyBehavior>
                <a
                  className="btn btn-black icon-arrow-right-white"
                  data-tina-field={tinaField(data?.viewMore, "text")}
                  onClick={() => updateActivePage(data?.viewMore?.url)}
                >
                  {data?.viewMore?.text}
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="container mt-90">
        <div className="row">
          {data?.blogList?.map((blog, index) => (
            <div key={index} className="col-lg-4 col-sm-12 pr-30">
              <div className="card-grid-style-4">
                <span
                  className="tag-dot"
                  data-tina-field={tinaField(blog, "blogTag")}
                >
                  {blog?.blogTag}
                </span>
                <Link href={`blogs/${blog?.url || "#"}`} legacyBehavior>
                  <a
                    className="text-heading-4"
                    href="#"
                    data-tina-field={tinaField(blog, "blogTitle")}
                    onClick={() =>
                      updateActivePage(`blogs/${blog?.url || "#"}`)
                    }
                  >
                    {blog?.blogTitle}
                  </a>
                </Link>

                <div className={`grid-4-img ${blog?.bgcolor}`}>
                  <Link href={`blog/${blog?.url || "#"}`} legacyBehavior>
                    <a
                      onClick={() =>
                        updateActivePage(`blogs/${blog?.url || "#"}`)
                      }
                    >
                      <img
                        src={blog?.blogImage_1290x1506}
                        alt="Agon"
                        data-tina-field={tinaField(blog, "blogImage_1290x1506")}
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
  );
};

export const BlogListBlockSchema = {
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
          type: "string",
          name: "blogTitle",
          label: "Blog Title",
        },
        {
          type: "string",
          name: "url",
          label: "Blog Link(just add blogname)",
        },
        {
          type: "string",
          name: "blogTag",
          label: "Blog Tag",
        },
        {
          type: "image",
          name: "blogImage_1290x1506",
          label: "Blog Image (1290x1506)",
        },
        {
          type: "string",
          name: "bgcolor",
          label: "Background color",
          options: [
            "color-bg-0",
            "color-bg-1",
            "color-bg-2",
            "color-bg-3",
            "color-bg-4",
            "color-bg-5",
            "color-bg-6",
            "color-bg-7",
            "color-bg-8",
          ],
        },
      ],
    },
  ],
};
