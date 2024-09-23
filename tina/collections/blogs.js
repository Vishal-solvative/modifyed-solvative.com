import sections from "../sections";

const Blogs = {
  label: "Blogs",
  name: "blogs",
  path: "content/blogs",
  ui: {
    router: ({ document }) => {
      return `/blogs/${document._sys.breadcrumbs.join("/")}`;
    },
  },
  format: "mdx",
  fields: [
    {
      type: "boolean",
      name: "isHeaderVisible",
      label: "Show header",
    },
    {
      type: "boolean",
      name: "isFooterVisible",
      label: "Show footer",
    },
    {
      type: "string",
      name: "blogTitle",
      label: "Blog Title",
    },
    {
      type: "string",
      name: "blogTag",
      label: "Blog Tag",
    },
    {
      type: "datetime",
      name: "blogDate",
      label: "Blog Date",
    },
    {
      type: "string",
      name: "blogDescription",
      label: "Blog Description",
    },
    {
      type: "image",
      name: "blogImage_1290x1506",
      label: "Blog Image (1290x1506)",
    },
    {
      type: "image",
      name: "blogImage_360x360",
      label: "Blog Image (360x360)",
    },
    {
      type: "image",
      name: "blogImage_1290x825",
      label: "Blog Image (1290x825)",
    },
    {
      type: "image",
      name: "blogImage_1740x1263",
      label: "Blog Image (1740x1263)",
    },
    {
      type: "string",
      name: "authorName",
      label: "Author Name",
    },
    {
      type: "image",
      name: "authorAvatar",
      label: "Author Avatar",
    },
    {
      type: "image",
      name: "bgImage",
      label: "Background Image",
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
    {
      type: "rich-text",
      name: "blogContent",
      label: "Blog Content",
      templates: [
        {
          name: "quoteBox",
          label: "Quote",
          fields: [
            {
              type: "string",
              name: "quoteText",
              label: "Quote Text",
            },
            {
              type: "string",
              name: "authorName",
              label: "Authoe Name",
            },
            {
              type: "image",
              name: "authorAvatar",
              label: "Author Avatar",
            },
          ],
        },
        {
          name: "tags",
          label: "Tags",
          fields: [
            {
              type: "object",
              name: "tagList",
              label: "Tag List",
              list: true,
              templates: [
                {
                  label: "Tag",
                  name: "tag",
                  fields: [
                    {
                      type: "string",
                      name: "tag",
                      label: "Tag",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "threeImage",
          label: "Three Image Container",
          fields: [
            {
              type: "string",
              name: "desc",
              label: "Image Description",
            },
            {
              type: "image",
              name: "image_1197x1347",
              label: "Image (1197x1347)",
            },
            {
              type: "image",
              name: "image1_1182x627",
              label: "Image1 (1182x627)",
            },
            {
              type: "image",
              name: "image2_1182x627",
              label: "Image2 (1182x627)",
            },
          ],
        },
        {
          name: "sideImage",
          label: "Side Image",
          fields: [
            {
              type: "string",
              name: "text1",
              label: "Text1",
            },
            {
              type: "string",
              name: "text2",
              label: "Text2",
            },
            {
              type: "image",
              name: "image",
              label: "Image",
            },
          ],
        },
      ],
      isBody: true,
    },
  ],
};

export default Blogs;
