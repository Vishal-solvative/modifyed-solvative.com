"use client";
import React from "react";
import { useTina } from "tinacms/dist/react";
import Layout from "./layout/Layout";
import RenderSections from "../tina/RenderSections";
export const TINA_DEFAULT_PAGES = {
  HOME: "home",
  404: "404.mdx",
  500: "500.mdx",
};
const TinaComp = (props) => {
  const { data } = useTina(props);
  console.log("data : ", data);
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

export default TinaComp;
