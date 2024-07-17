export const IdeaTemp = {
  label: "Ideas",
  name: "ideas",
  ui: {
    itemProps: (item) => {
      return { label: item.sectionName };
    },
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
      name: "features",
      label: "Features",
      list: true,
      fields: [
        {
          label: "Logo",
          name: "logo",
          type: "image",
        },
        {
          label: "Title",
          name: "title",
          type: "string",
        },
        {
          label: "Description",
          name: "description",
          type: "string",
        },
      ],
    },
  ],
};
