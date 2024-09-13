"use client";

import { tinaField } from "tinacms/dist/react";
import TeamSlider from "../slider/Team";

export const OurTeam = ({ data }) => {
  return (
    <section className="section-box">
      <div className="container mt-110">
        <div className="row">
          <div className="col-lg-9 col-sm-8">
            <h3
              className="text-heading-1 mb-10"
              data-tina-field={tinaField(data, "teamTitle")}
            >
              {data?.teamTitle}
            </h3>
            <p
              className="text-body-lead-large color-gray-600"
              data-tina-field={tinaField(data, "description")}
            >
              {data?.description}
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-80">
        <TeamSlider teamMembers={data?.teamMembers} />
      </div>
    </section>
  );
};

export const OurTeamBlockSchema = {
  label: "Our Team",
  name: "ourTeam",
  ui: {
    previewSrc: "/thumbnails/our-team.png",
    defaultItem: {
      teamTitle: "Our Team",
      description: "Decades of experience in design and development",
    },
  },
  fields: [
    {
      type: "string",
      name: "teamTitle",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      required: true,
    },
    {
      type: "object",
      name: "teamMembers",
      label: "Team Members",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.name };
        },
        defaultItem: {
          name: "Name",
          position: "Position",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      },
      fields: [
        {
          type: "image",
          name: "avatar",
          label: "Avatar",
          required: true,
        },
        {
          type: "string",
          name: "position",
          label: "Position",
        },
        {
          type: "string",
          name: "name",
          label: "Name",
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Description",
        },
        {
          type: "boolean",
          label: "Social Links",
          name: "socialLinks",
        },
        {
          type: "object",
          name: "socialMedia",
          label: "Social Media",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item.name };
            },
            defaultItem: {
              name: "Linkdin",
            },
          },
          fields: [
            {
              type: "string",
              name: "name",
              label: "Social Media Name",
            },
            {
              type: "string",
              name: "link",
              label: "Link",
            },
          ],
        },
      ],
    },
  ],
};
