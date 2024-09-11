

const Author = {
  label: "Authors",
  name: "author",
  path: "content/authors",
  format: "mdx",
  fields: [
    {
      type: "string",
      label: "Name",
      name: "name",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      label: "Avatar",
      name: "avatar",
    },
  ],
};
export default Author;
