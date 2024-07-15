"use client";
import React from "react";
import { useTina } from "tinacms/dist/react";
import RenderSections from "../tina/RenderSections";
export const TINA_DEFAULT_PAGES = {
  HOME: "home",
  404: "404.mdx",
  500: "500.mdx",
};
const TinaComp = (props) => {
  const { data } = useTina(props);
  const { page } = data;
  const { section } = page;
  const isFooterVisible = !!page.isFooterVisible;
  const isHeaderVisible = !!page.isHeaderVisible;
  return <RenderSections sections={section} />;
};

export default TinaComp;
