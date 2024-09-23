import { tinaField } from "tinacms/dist/react";
import { LinkTemp } from "../../tina/GlobalTemplates/LinkTemp";
import Link from "next/link";
import { useActivePage } from "../../hooks/useActivePage";

export const ClientTestimony = ({ data }) => {
  const { activePage, updateActivePage } = useActivePage();
  return (
    <div className="section-box pt-100 pb-100 mt-100 bg-6 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mb-30">
            <span
              className="tag-1 bg-3 color-gray-900"
              data-tina-field={tinaField(data, "secondaryHeading")}
            >
              {data?.secondaryHeading}
            </span>
            <h3
              className="text-heading-1 mt-30 box-animation fade-up-desktop fade-mobile animation"
              data-tina-field={tinaField(data, "heading")}
            >
              {data?.heading}
            </h3>
            <p
              className="text-body-lead-large color-gray-600 mt-30 box-animation fade-up-desktop fade-mobile animation"
              data-tina-field={tinaField(data, "subHeading")}
            >
              {data?.subHeading}
            </p>
            {data?.link && (
              <div className="mt-40">
                <Link href={data?.link?.url || "#"} legacyBehavior>
                  <a
                    className={`btn btn-default btn-white ${
                      data?.link?.icon && "icon-arrow-right"
                    }`}
                    data-tina-field={tinaField(data?.link, "text")}
                    onClick={() => updateActivePage(data?.link?.url || "#")}
                  >
                    {data?.link?.text}
                  </a>
                </Link>
              </div>
            )}
          </div>
          <div className="col-lg-7">
            <div className="row">
              {data?.authors?.map((auth, inx) => (
                <div
                  className="col-lg-6 col-md-12 col-sm-12 hover-effect box-animation fade-left-desktop fade-mobile animation"
                  key={inx}
                >
                  <div className="card-grid-style-2 card-square mb-20">
                    <p
                      className="text-body-text color-gray-600 text-comment"
                      data-tina-field={tinaField(auth, "quote")}
                    >
                      {auth?.quote}
                    </p>
                    <div className="box-img-user">
                      <div className="img-user img-user-round">
                        <img
                          src={auth?.authorImage}
                          alt="Agon"
                          data-tina-field={tinaField(auth, "authorImage")}
                        />
                      </div>
                      <h4
                        className="text-body-lead color-gray-900 mb-5"
                        data-tina-field={tinaField(auth, "author")}
                      >
                        {auth?.author}
                      </h4>
                      <p
                        className="text-body-text-md"
                        data-tina-field={tinaField(auth, "company")}
                      >
                        {auth?.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ClientTestimonyBlockSchema = {
  label: "Client Testimony",
  name: "clientTestimony",
  ui: {
    itemProps: (item) => {
      return { label: item.sectionName };
    },
    previewSrc: "/thumbnails/client-testimony.png",
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
      name: "secondaryHeading",
      label: "secondary heading",
      required: true,
    },
    {
      type: "string",
      name: "subHeading",
      label: "Sub Heading",
      required: true,
    },
    { ...LinkTemp, label: "Load more" },
    {
      type: "object",
      name: "authors",
      label: "Authors",
      list: true,
      fields: [
        {
          label: "Author Image",
          name: "authorImage",
          type: "image",
        },
        {
          label: "Author",
          name: "author",
          type: "string",
        },
        {
          label: "Company",
          name: "company",
          type: "string",
        },
        {
          label: "Quote",
          name: "quote",
          type: "string",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ],
};
