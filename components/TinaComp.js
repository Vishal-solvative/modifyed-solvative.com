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
  const { page } = data;
  const { section } = page;
  const isFooterVisible = !!page.isFooterVisible;
  const isHeaderVisible = !!page.isHeaderVisible;

  const useIntersectionObserver = (callback, options) => {
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add("animate");
            return;
          }
        });
      }, options);

      const elements = document.querySelectorAll(".animation");
      elements.forEach((el) => {
        if (el) {
          observer.observe(el);
        }
      });

      return () => {
        elements.forEach((el) => {
          observer.unobserve(el);
        });
      };
    }, [callback, options]);
  };

  useIntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add("animate");
          return;
        }
      });
    },
    { threshold: 0.2 }
  );

  return <RenderSections sections={section} />;
};

export default TinaComp;
