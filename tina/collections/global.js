import { LinkTemp } from "../GlobalTemplates/LinkTemp";

const Global = {
  label: "Global",
  name: "global",
  path: "content/global",
  format: "mdx",
  ui: {
    global: true,
  },
  fields: [
    {
      type: "object",
      label: "Footer",
      name: "footer",
      fields: [
        {
          type: "string",
          name: "pageTitle",
          label: "Page title",
          required: true,
        },
        {
          type: "string",
          name: "pageDescription",
          label: "Page description",
          required: true,
        },
        {
          type: "image",
          name: "logo",
          label: "Logo",
        },
        {
          type: "string",
          name: "footerText",
          label: "Footer text",
        },
        { ...LinkTemp, label: "Create Account", name: "createAccount" },
        {
          type: "string",
          name: "contact",
          label: "Contact",
        },
        {
          type: "string",
          name: "address",
          label: "Address",
        },
        {
          type: "string",
          name: "phone",
          label: "Phone",
        },
        {
          type: "string",
          name: "email",
          label: "Email",
        },
        {
          type: "object",
          name: "otherLinks",
          label: "Other Links",
          list: true,
          templates: [
            {
              name: "otherLink",
              label: "Other Link",
              ui: {
                itemProps: (item) => ({
                  label: item?.title,
                }),
              },
              fields: [
                {
                  type: "string",
                  name: "title",
                  label: "Title",
                },
                {
                  type: "object",
                  name: "link",
                  label: "Link",
                  list: true,
                  templates: [{ ...LinkTemp, label: "Link", name: "link" }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "object",
      label: "Header",
      name: "header",
      fields: [
        {
          type: "string",
          name: "pageTitle",
          label: "Page title",
          required: true,
        },
        {
          type: "string",
          name: "pageDescription",
          label: "Page description",
          required: true,
        },
        {
          type: "image",
          name: "logo",
          label: "Logo",
        },
        {
          type: "object",
          name: "navLinks",
          label: "Nav Links",
          list: true,
          templates: [
            {
              name: "navLink",
              label: "Nav Link",
              ui: {
                itemProps: (item) => ({
                  label: item?.title,
                }),
              },
              fields: [
                {
                  type: "string",
                  name: "title",
                  label: "Title",
                  required: true,
                },
                {
                  type: "string",
                  name: "link",
                  label: "Link",
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default Global;