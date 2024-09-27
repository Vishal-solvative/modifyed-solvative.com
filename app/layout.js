import { client } from "../tina/__generated__/client";
import Layout from "../components/layout/Layout";
import "../public/assets/css/style.css";
import "../public/assets/css/scroll-up-animation.css";
import "../public/assets/css/modal.css";
import "../public/assets/css/swiper-custom.css";
import ClientLayout from "./client-layout";

export const metadata = {
  title: "Solvative real",
  description: "Solvative real is a IT solutions provider",
};

export default async function RootLayout({ children }) {
  const globalQuery = await client.queries.global({
    relativePath: "global.mdx",
  });
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.4.0/animate.min.css"
        />
      </head>

      <body>
        {globalQuery && (
          <Layout
            data={JSON.parse(JSON.stringify(globalQuery.data))}
            query={globalQuery.query}
            variables={globalQuery.variables}
          >
            {children}
          </Layout>
        )}
      </body>
    </html>
  );
}
