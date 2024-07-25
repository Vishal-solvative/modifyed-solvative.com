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
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const { blogs } = data;
  const { section } = blogs;
  const isFooterVisible = !!blogs.isFooterVisible;
  const isHeaderVisible = !!blogs.isHeaderVisible;
  return <RenderSections sections={section} />;
};

export default TinaComp;
