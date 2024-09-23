import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import { useActivePage } from "../../hooks/useActivePage";

export const PartnerList = ({ data }) => {
  const { activePage, updateActivePage } = useActivePage();
  return (
    <div className="section-box overflow-visible mt-70">
      <div className="container">
        <div className="row justify-content-md-center">
          {data?.companies?.map((company, i) => (
            <div
              className="col-lg-2 col-md-3 col-sm-4 col-6 text-center"
              key={i}
            >
              <Link href={company?.url || "#"}>
                <a
                  className="item-logo box-hover-shadow hover-up"
                  onClick={() => updateActivePage(company?.url)}
                >
                  <img
                    alt="Agon"
                    src={company?.logo}
                    data-tina-field={tinaField(company, "logo")}
                  />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const PartnerListBlockSchema = {
  label: "Partner List",
  name: "PartnerList",
  ui: {
    itemProps: (item) => {
      return { label: item.sectionName };
    },
    previewSrc: "/thumbnails/partner-list.png",
  },
  fields: [
    {
      type: "string",
      name: "sectionName",
      label: "Section Name",
    },
    {
      type: "object",
      name: "companies",
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
          name: "url",
          label: "URL",
        },
      ],
    },
  ],
};
