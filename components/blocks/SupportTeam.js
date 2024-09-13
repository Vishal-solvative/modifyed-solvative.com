import { tinaField } from "tinacms/dist/react";

export const SupportTeam = ({ data }) => {
  return (
    <section className="section-box mt-100">
      <div className="container text-center">
        <h3
          className="text-heading-1 mb-10"
          data-tina-field={tinaField(data, "heading1")}
        >
          {data?.heading1}
        </h3>
        <p
          className="text-body-lead-large color-gray-600 mt-30"
          data-tina-field={tinaField(data, "heading2")}
        >
          {data?.heading2}
        </p>
      </div>
      <div className="container mt-70">
        <div className="row">
          {data?.members?.map((member, i) => (
            <div className="col-lg-3 col-md-6 col-12">
              <div
                className={`card-grid-style-3 ${member?.bg} hover-up wow animate__animated animate__fadeIn`}
                data-wow-delay=".1s"
              >
                <div className="grid-3-img">
                  <img
                    src={member?.avatar}
                    alt="Agon"
                    data-tina-field={tinaField(member, "avatar")}
                  />
                </div>
                <h3
                  className="text-heading-6 mb-5 mt-20"
                  data-tina-field={tinaField(member, "name")}
                >
                  {member?.name}
                </h3>
                <span
                  className="text-body-small d-block"
                  data-tina-field={tinaField(member, "designation")}
                >
                  {member?.designation}
                </span>
                <p
                  className="text-body-text text-desc color-gray-500 mt-20"
                  data-tina-field={tinaField(member, "intro")}
                >
                  {member?.intro}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SupportTeamBlockSchema = {
  label: "Support Team",
  name: "SupportTeam",
  ui: {
    itemProps: (item) => {
      return { label: item.sectionName };
    },
    previewSrc: "/thumbnails/support-team.png",
  },
  fields: [
    {
      type: "string",
      name: "sectionName",
      label: "Section Name",
    },
    {
      type: "string",
      name: "heading1",
      label: "Primary Heading",
    },
    {
      type: "string",
      name: "heading2",
      label: "Secondary Heading",
    },
    {
      type: "object",
      name: "members",
      label: "Support Members",
      list: true,
      fields: [
        {
          type: "image",
          name: "avatar",
          label: "Member Avatar",
        },
        {
          type: "string",
          name: "name",
          label: "Member Name",
        },
        {
          type: "string",
          name: "designation",
          label: "Member Designation",
        },
        {
          type: "string",
          name: "bg",
          label: "Border color",
          options: ["bd-bg-5", "bd-bg-6", "bd-bg-9", "bd-bg-10"],
        },
        {
          type: "string",
          name: "intro",
          label: "Member Intro",
        },
      ],
    },
  ],
};
