"use client";

import { tinaField } from "tinacms/dist/react";
import Link from "next/link";
import { formatDate } from "../../util/date";
import { useActivePage } from "../../hooks/useActivePage";

export const ExploreBlog = ({ data }) => {
  const { activePage, updateActivePage } = useActivePage();
  return (
    <div className="section-box box-animation fade-up-desktop fade-mobile animation">
      <div className="container mt-130">
        <div className="row">
          <div className="col-lg-1 col-sm-1 col-12"></div>
          <div
            className="col-lg-10 col-sm-10 col-12 text-center"
            data-tina-field={tinaField(data, "heading")}
          >
            <h2 className="text-heading-1 color-gray-900 mb-10">
              {data?.heading}
            </h2>
            <p
              className="text-body-lead-large color-gray-600 mt-20"
              data-tina-field={tinaField(data, "subHeading")}
            >
              {data?.subHeading}
            </p>
          </div>
          <div className="col-lg-1 col-sm-1 col-12"></div>
          <div>{data?.blog?.name}</div>
        </div>
      </div>
      <div className="container mt-90">
        <div className="row">
          {data?.primaryBlogs?.map((primary, inx) => (
            <div className="col-lg-4 col-sm-6 pr-30 mb-50" key={inx}>
              <div className="card-grid-style-4">
                <div className={`grid-4-img mb-20 ${primary?.bgcolor}`}>
                  <Link href={`blogs/${primary?.url || "#"}`} legacyBehavior>
                    <a
                      onClick={() =>
                        updateActivePage(`blogs/${primary?.url || "#"}`)
                      }
                    >
                      <img
                        src={primary?.blogImage_1290x825}
                        alt="Agon"
                        data-tina-field={tinaField(
                          primary,
                          "blogImage_1290x825"
                        )}
                      />
                    </a>
                  </Link>
                </div>
                <Link href={`blogs/${primary?.url || "#"}`} legacyBehavior>
                  <a
                    className="text-heading-4"
                    data-tina-field={tinaField(primary, "blogTitle")}
                    onClick={() =>
                      updateActivePage(`blogs/${primary?.url || "#"}`)
                    }
                  >
                    {primary?.blogTitle}
                  </a>
                </Link>

                <p
                  className="text-body-text color-gray-500"
                  data-tina-field={tinaField(primary, "blogDescription")}
                >
                  {primary?.blogDescription}
                </p>
                <div className="blog-img-user">
                  <div className="img-user img-user-round">
                    <img
                      src={primary?.authorAvatar}
                      alt="Agon"
                      data-tina-field={tinaField(primary, "authorAvatar")}
                    />
                  </div>
                  <h4
                    className="text-heading-6 color-gray-900"
                    data-tina-field={tinaField(primary, "authorName")}
                  >
                    {primary?.authorName}
                  </h4>
                  <p
                    className="text-body-small color-gray-500"
                    data-tina-field={tinaField(primary, "blogDate")}
                  >
                    {formatDate(primary?.blogDate)}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-4 col-sm-12 pr-30 mb-50 fade-left-desktop fade-mobile animation">
            {data?.secondaryBlogs?.map((secondary, inx) => (
              <div className="card-list-style-1" key={inx}>
                <Link href={`blogs/${secondary?.url || "#"}`} legacyBehavior>
                  <a
                    className="text-heading-6"
                    data-tina-field={tinaField(secondary, "blogTitle")}
                    onClick={() =>
                      updateActivePage(`blogs/${secondary?.url || "#"}`)
                    }
                  >
                    {secondary?.blogTitle}
                  </a>
                </Link>

                <div className="blog-img-user">
                  <div className="img-user img-user-round">
                    <img
                      src={secondary?.authorAvatar}
                      alt="Agon"
                      data-tina-field={tinaField(secondary, "authorAvatar")}
                    />
                  </div>
                  <h4
                    className="text-body-lead color-gray-500"
                    data-tina-field={tinaField(secondary, "authorName")}
                  >
                    {secondary?.authorName}
                  </h4>
                  <p
                    className="text-body-small color-gray-500"
                    data-tina-field={tinaField(secondary, "blogDate")}
                  >
                    {formatDate(secondary?.blogDate)}
                  </p>
                </div>
                <div className={`style-1-img ${secondary?.bgcolor} `}>
                  <Link href={`blog/${secondary?.url || "#"}`} legacyBehavior>
                    <a
                      onClick={() =>
                        updateActivePage(`blogs/${secondary?.url || "#"}`)
                      }
                    >
                      <img
                        src={secondary?.blogImage_360x360}
                        alt="Agon"
                        data-tina-field={tinaField(
                          secondary,
                          "blogImage_360x360"
                        )}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ExploreBlogBlockSchema = {
  label: "Explore Blog",
  name: "exploreBlog",
  ui: {
    itemProps: (item) => {
      return { label: item.sectionName };
    },
    previewSrc: "/thumbnails/explore-blogs.png",
  },
  fields: [
    {
      type: "string",
      name: "sectionName",
      label: "Section Name",
    },
    {
      type: "string",
      name: "heading",
      label: "Heading",
      required: true,
    },
    {
      type: "string",
      name: "subHeading",
      label: "Sub Heading",
      required: true,
    },
    // {
    //   type: "object",
    //   name: "primaryBlogs",
    //   label: "Primary Blogs",
    //   list: true,
    //   fields: [
    //     {
    //       type: "reference",
    //       name: "blog",
    //       label: "Blog",
    //       collections: ["author"],
    //     },
    //   ],
    // },
    // {
    //   type: "object",
    //   name: "secondaryBlogs",
    //   label: "Secondary Blogs",
    //   list: true,
    //   fields: [
    //     {
    //       type: "reference",
    //       name: "blog",
    //       label: "Blog",
    //       collections: ["blogs"],
    //     },
    //   ],
    // },
    {
      type: "object",
      name: "primaryBlogs",
      label: "Primary Blogs",
      list: true,
      fields: [
        {
          type: "string",
          name: "blogTitle",
          label: "Blog Title",
        },
        {
          type: "string",
          name: "url",
          label: "Blog Link(just add blogname)",
        },
        {
          type: "datetime",
          name: "blogDate",
          label: "Blog Date",
        },
        {
          type: "string",
          name: "blogDescription",
          label: "Blog Description",
        },
        {
          type: "image",
          name: "blogImage_1290x825",
          label: "Blog Image (1290x825)",
        },
        {
          type: "string",
          name: "authorName",
          label: "Author Name",
        },
        {
          type: "image",
          name: "authorAvatar",
          label: "Author Avatar",
        },
        {
          type: "string",
          name: "bgcolor",
          label: "Background color",
          options: [
            "color-bg-0",
            "color-bg-1",
            "color-bg-2",
            "color-bg-3",
            "color-bg-4",
            "color-bg-5",
            "color-bg-6",
            "color-bg-7",
            "color-bg-8",
          ],
        },
      ],
    },
    {
      type: "object",
      name: "secondaryBlogs",
      label: "Secondary Blogs",
      list: true,
      fields: [
        {
          type: "string",
          name: "blogTitle",
          label: "Blog Title",
        },
        {
          type: "string",
          name: "url",
          label: "Blog Link",
        },
        {
          type: "datetime",
          name: "blogDate",
          label: "Blog Date",
        },
        {
          type: "image",
          name: "blogImage_360x360",
          label: "Blog Image (360x360)",
        },
        {
          type: "string",
          name: "authorName",
          label: "Author Name",
        },
        {
          type: "image",
          name: "authorAvatar",
          label: "Author Avatar",
        },
        {
          type: "string",
          name: "bgcolor",
          label: "Background color",
          options: [
            "color-bg-0",
            "color-bg-1",
            "color-bg-2",
            "color-bg-3",
            "color-bg-4",
            "color-bg-5",
            "color-bg-6",
            "color-bg-7",
            "color-bg-8",
          ],
        },
      ],
    },
  ],
};
