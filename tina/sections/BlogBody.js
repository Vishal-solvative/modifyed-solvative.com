import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";

const QuoteComponent = ({ props }) => {
  return (
    <div class="box-quote">
      <div class="text-quote">{props?.quoteText}</div>
      <div class="box-user">
        <div class="img-user">
          <img src={props?.authorAvatar} alt="Agon" />
        </div>
        <span class="text-heading-5 color-white">{props?.authorName}</span>
      </div>
    </div>
  );
};

const TagComponent = ({ props }) => {
  return (
    <div>
      <div class="border-bottom mt-50 mb-50"></div>
      <div>
        {props?.tagList?.map((tag, index) => (
          <Link key={index} class="btn btn-tag mr-10" href="#">
            {tag?.tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

const ThreeImageComponent = ({ props }) => {
  return (
    <div class="row mt-45 mb-30">
      <div class="col-lg-6">
        <img class="img-responsive" src={props?.image_1197x1347} alt="Agon" />
      </div>
      <div class="col-lg-6">
        <img
          class="img-responsive mb-20"
          src={props?.image1_1182x627}
          alt="Agon"
        />
        <img class="img-responsive" src={props?.image2_1182x627} alt="Agon" />
      </div>
      <div class="caption-img mt-10 text-center color-gray-400">
        {props?.desc}
      </div>
    </div>
  );
};

const SideImageComponent = ({ props }) => {
  return (
    <div class="row">
      <div class="col-lg-8">
        <p className="para-text">{props?.text1}</p>
        <p className="para-text">{props?.text2}</p>
      </div>
      <div class="col-lg-4">
        <img
          class="img-responsive bdr-10 mt-10"
          src={props?.image}
          alt="Agon"
        />
      </div>
    </div>
  );
};

const BlogBody = {
  props: {
    label: "Blog Body",
    name: "BlogBody",
    ui: {
      itemProps: (item) => {
        return { label: item.sectionName };
      },
      previewSrc: "/thumbnails/blog-body.png",
    },
    fields: [
      {
        type: "reference",
        name: "blog",
        label: "Blog",
        collections: ["blogs"],
      },
    ],
  },
  template: (fields) => (
    <section class="section-box mt-50 mb-50">
      <div class="container">
        <div class="row">
          <div class="col-lg-1 col-md-12"></div>
          <div class="col-lg-1 col-md-2 col-sm-2 col-3 text-center">
            <div class="social-sticky">
              <h3 class="text-heading-6 color-gray-400 mb-20 mt-5">Share</h3>
              <a class="share-social share-fb" href="/https:/facebook.com"></a>
              <br />
              <a class="share-social share-tw" href="/https:/twitter.com"></a>
              <br />
              <a
                class="share-social share-pi"
                href="/https:/www.pinterest.com"
              ></a>
            </div>
          </div>
          <div class="col-lg-8 col-md-8 col-sm-10 col-9">
            <div
              class="text-summary"
              data-tina-field={tinaField(fields?.blog, "blogDescription")}
            >
              {fields?.blog?.blogDescription}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-2"></div>
          <div
            className="col-lg-8"
            data-tina-field={tinaField(fields?.blog, "blogContent")}
          >
            <TinaMarkdown
              content={fields?.blog?.blogContent}
              components={{
                quoteBox: (props) => <QuoteComponent props={props} />,
                tags: (props) => <TagComponent props={props} />,
                threeImage: (props) => <ThreeImageComponent props={props} />,
                p: (props) => <p className="para-text" {...props} />,
                img: (props) => (
                  <img
                    className="img-responsive bdr-16"
                    src={props?.url}
                    {...props}
                  />
                ),
                h2: (props) => <h2 className="text-heading-3" {...props} />,
                sideImage: (props) => <SideImageComponent props={props} />,
                h3: (props) => <h3 className="text-heading-4" {...props} />,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  ),
};

export default BlogBody;
