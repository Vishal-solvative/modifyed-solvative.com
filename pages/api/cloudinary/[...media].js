import {
  mediaHandlerConfig,
  createMediaHandler,
} from "next-tinacms-cloudinary/dist/handlers";
// No need to import 'isAuthorized' since we are not using it
// import { isAuthorized } from "@tinacms/auth";
export const runtime = 'edge';

export const config = mediaHandlerConfig;

export default createMediaHandler({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  authorized: async (req, _res) => {
    // Always return true to bypass authentication
    return true;
  },
});
