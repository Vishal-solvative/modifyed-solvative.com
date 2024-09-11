"use client";
import { useTina } from "tinacms/dist/react";
import { Blocks } from "../../components/blocks";
import { useEffect } from "react";

export default function ClientPage(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

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

  return <Blocks {...data?.page} />;
}
