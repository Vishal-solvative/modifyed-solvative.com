import {
  UsernamePasswordAuthJSProvider as UsernamePasswordAuthJSProvider,
  TinaUserCollection as TinaUserCollection,
} from "tinacms-authjs/dist/tinacms";
import {
  defineConfig as defineConfig,
  LocalAuthProvider as LocalAuthProvider,
} from "tinacms";
import Global from "./collections/global";
import Page from "./collections/page";
import Blogs from "./collections/blogs";
const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";
const config = defineConfig({
  token: process.env.TINA_TOKEN,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,

  // contentApiUrlOverride: "/api/tina/gql",
  // authProvider: isLocal
  //   ? new LocalAuthProvider()
  //   : new UsernamePasswordAuthJSProvider(),
  client: {
    referenceDepth: 1,
  },
  branch,
  tina: {
    publicFolder: "public",
    mediaRoot: "uploads",
  },
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    // If you wanted AWS S3 Bucket do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-s3");
    //   return pack.TinaCloudS3MediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },

  schema: {
    collections: [TinaUserCollection, Page, Global, Blogs],
  },
});

export default config;
