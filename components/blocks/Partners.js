import { tinaField } from "tinacms/dist/react";
import Link from "next/link";
import { useActivePage } from "../../hooks/useActivePage";

export const Partners = ({ data }) => {
  const { activePage, updateActivePage } = useActivePage();
  return (
    <section className="section-box overflow-visible mt-70 box-animation fade-up-desktop fade-mobile animation">
      <div className="container">
        <h2
          className="text-heading-3 text-center color-gray-900 mb-60"
          data-tina-field={tinaField(data, "heading")}
        >
          {data?.heading}
        </h2>
        <div className="row">
          <div className="col-lg-12">
            <ul className="list-partners">
              {data?.companys?.map((company, index) => (
                <li key={index}>
                  <Link href={company?.url || "#"} legacyBehavior>
                    <a
                      className="item-logo box-hover-shadow"
                      onClick={() => updateActivePage(company?.url)}
                    >
                      <img
                        alt="Agon"
                        src={company?.logo}
                        data-tina-field={tinaField(company, "logo")}
                      />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export const PartnersBlockSchema = {
  label: "Partners",
  name: "partners",
  ui: {
    itemProps: (item) => {
      return { label: item.sectionName };
    },
    previewSrc: "/thumbnails/partners.png",
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
      type: "object",
      name: "companys",
      label: "Companies",
      list: true,
      fields: [
        {
          type: "image",
          name: "logo",
          label: "Company Logo",
        },
        {
          type: "string",
          name: "companyName",
          label: "Company Name",
        },
        {
          type: "string",
          name: "url",
          label: "URL",
        },
      ],
    },
  ],
};
