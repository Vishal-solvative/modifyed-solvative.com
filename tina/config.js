import {
  UsernamePasswordAuthJSProvider as UsernamePasswordAuthJSProvider,
  TinaUserCollection as TinaUserCollection,
} from "tinacms-authjs/dist/tinacms";
import {
  defineConfig as defineConfig,
  LocalAuthProvider as LocalAuthProvider,
} from "tinacms";
import sections from "./sections";
import { LinkTemp } from "./GlobalTemplates/LinkTemp";
import DemoGlobal from "./collections/global";
import blogs from "./collections/blogs";
const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";
export default defineConfig({
  contentApiUrlOverride: "/api/tina/gql",
  authProvider: isLocal
    ? new LocalAuthProvider()
    : new UsernamePasswordAuthJSProvider(),
  client: {
    referenceDepth: 1,
  },
  branch,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-s3");
      return pack.TinaCloudS3MediaStore;
    },
  },

  schema: {
    collections: [
      TinaUserCollection,
      {
        label: "Pages",
        name: "page",
        path: "content/page",
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
            templates: Object.values(sections).map((e) => e.props),
          },
        ],
      },
      DemoGlobal,
      blogs,
    ],
  },
});
