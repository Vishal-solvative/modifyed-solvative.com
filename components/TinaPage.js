"use client";
import { useEffect, useState } from "react";
import { client } from "../tina/__generated__/client";
import Layout from "./layout/Layout";
import { useTina } from "tinacms/dist/react";
import RenderSections from "../tina/RenderSections";
import { useRouter } from "next/navigation";
import Preloader from "./elements/Preloader";

//This component will fetch the page content from the Tina CMS and render inside the layout.
export const TINA_DEFAULT_PAGES = {
  HOME: "home",
  404: "404.mdx",
  500: "500.mdx",
};

const TinaContent = (Props) => {
  const { data } = useTina(Props);
  const { page } = data;
  const { section } = page;

  const isFooterVisible = !!page.isFooterVisible;
  const isHeaderVisible = !!page.isHeaderVisible;

  return (
    <Layout isFooterVisible={isFooterVisible} isHeaderVisible={isHeaderVisible}>
      <RenderSections sections={section} />
    </Layout>
  );
};

const TinaPage = ({ slug = [] }) => {
  const { push } = useRouter();

  const [pageData, setPageData] = useState(null);
  const [footerData, setFooterData] = useState(null);
  // Function to fetch the page content from Tina CMS using relative path
  const setContent = async (relativePath) => {
    try {
      const response = await client.queries.page({
        relativePath,
      });
      setPageData({ ...response });

      // const footerResponse = await client.queries.footer({
      //     relativePath: 'footer.md'
      // })
      // if (response && footerResponse) {
      //     setPageData({
      //         data: {
      //             page: response.data.page,
      //             footer: footerResponse.data.footer
      //         }
      //     })
      // }
    } catch (e) {
      if (relativePath !== TINA_DEFAULT_PAGES[500]) {
        console.error("Error while fetching the page content.", e);
        setContent(TINA_DEFAULT_PAGES[500]);
      }
    }
  };

  // On mount of the application, we will get list of all pages in the CMS, compare their path with the slug provided.
  // If it matches, we will load the content else show the 404 not found page
  useEffect(() => {
    const loadPageContent = async () => {
      // Edge case check for home page
      if (!slug || slug.length === 0) {
        return setContent(TINA_DEFAULT_PAGES.HOME);
      }

      const pagePath = slug.join("/");

      const pageResponse = await client.queries.pageConnection();
      const pageMetaArray = pageResponse.data.pageConnection.edges.map(
        (e) => e.node._sys
      );
      const pageMeta = pageMetaArray.find(
        (e) => e.path === `content/${pagePath}.mdx`
      );
      // Edge check for page not found
      if (!pageMeta) {
        return setContent(TINA_DEFAULT_PAGES[404]);
      }
      return setContent(pageMeta.relativePath);
    };

    loadPageContent();
  }, []);

  if (!pageData) return <Preloader />;

  return <TinaContent {...pageData} />;
};

export default TinaPage;
