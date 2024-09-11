import { BlogBlockSchema } from "../../components/blocks/Blog";
import { CategoriesBlockSchema } from "../../components/blocks/Categories";
import { WelcomeHeroBlockSchema } from "../../components/blocks/WelcomeHero";

const Page = {
  label: "Pages",
  name: "page",
  path: "content/pages",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      if (document?._sys?.filename === "home") {
        return "/";
      }
      return document?._sys?.relativePath.replace(/\.mdx$/, "");
    },
  },
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
      name: "pageTitle",
      label: "Page title",
    },
    {
      type: "string",
      name: "pageDescription",
      label: "Page description",
    },
    {
      type: "object",
      name: "section",
      label: "Section",
      list: true,
      ui: {
        visualSelector: true,
      },
      templates: [
        WelcomeHeroBlockSchema,
        BlogBlockSchema,
        CategoriesBlockSchema,
      ],
    },
  ],
};

export default Page;
