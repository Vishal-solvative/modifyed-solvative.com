"use client";
import React, { useEffect } from "react";
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const WOW = require("wowjs");
      new WOW.WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: true,
        live: true,
      }).init();
    }
  }, []);

  return <RenderSections sections={section} />;
};

export default TinaComp;
