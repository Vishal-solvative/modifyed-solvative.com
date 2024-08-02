import { tinaField } from "tinacms/dist/react";
import Link from "next/link";

const LargeBlogCatalog = {
  props: {
    label: "Large blog catalog",
    name: "LargeBlogCatalog",
    ui: {
      itemProps: (item) => {
        return { label: item.title };
      },
      previewSrc: "/thumbnails/large-blog.png",
    },
    fields: [
      {
        type: "string",
        name: "title",
        label: "Section title",
      },
      {
        type: "string",
        name: "content",
        label: "Section content",
      },
      {
        type: "string",
        name: "buttonText",
        label: "Button text",
      },
      {
        type: "string",
        name: "buttonLink",
        label: "Button link",
      },
      {
        type: "object",
        name: "cards",
        label: "Cards",
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

  template: (fields) => {
    return (
      <section className="section-box box-animation fade-up-desktop fade-mobile animation">
        <div className="container mt-30">
          <div className="row">
            <div className="col-lg-1 col-sm-1 col-12" />
            <div className="col-lg-10 col-sm-10 col-12 text-center">
              <h2
                className="text-heading-1 color-gray-900 mb-10"
                data-tina-field={tinaField(fields, "title")}
              >
                {fields?.title}
              </h2>
              <p
                className="text-body-lead-large color-gray-600 mt-20"
                data-tina-field={tinaField(fields, "content")}
              >
                {fields?.content}
              </p>
            </div>
            <div className="col-lg-1 col-sm-1 col-12" />
          </div>
        </div>
        <div className="container mt-90">
          <div className="row">
            {fields?.cards?.map((card, i) => (
              <div className="col-lg-4 col-sm-12 pr-30 mb-50" key={i}>
                <div className="card-grid-style-4">
                  <span
                    className="tag-dot"
                    data-tina-field={tinaField(card?.blog, "blogTag")}
                  >
                    {card?.blog?.blogTag}
                  </span>
                  <Link
                    href={`blog/${card?.blog?._sys?.filename} || '#'`}
                    legacyBehavior
                  >
                    <a
                      className="text-heading-4"
                      data-tina-field={tinaField(card?.blog, "blogTitle")}
                    >
                      {card?.blog?.blogTitle}
                    </a>
                  </Link>

                  <div className={`grid-4-img ${card?.blog?.bgcolor}`}>
                    <Link
                      href={`blog/${card?.blog?._sys?.filename} || '#'`}
                      legacyBehavior
                      data-tina-field={tinaField(card?.blog, "link")}
                    >
                      <a>
                        <img
                          src={card?.blog?.blogImage_1290x1506}
                          alt="Agon"
                          data-tina-field={tinaField(
                            card?.blog,
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
          <div className="mt-20 mb-30 text-center">
            <Link
              href={fields?.buttonLink || "#"}
              legacyBehavior
              data-tina-field={tinaField(fields, "buttonLink")}
            >
              <a
                className="btn btn-black icon-arrow-right-white"
                data-tina-field={tinaField(fields, "buttonText")}
              >
                {fields?.buttonText}
              </a>
            </Link>
          </div>
        </div>
      </section>
    );
  },
};

export default LargeBlogCatalog;
