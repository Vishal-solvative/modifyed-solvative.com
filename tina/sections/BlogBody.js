import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";

const QuoteComponent = ({ props }) => {
  return (
    <div className="box-quote">
      <div className="text-quote">{props?.quoteText}</div>
      <div className="box-user">
        <div className="img-user">
          <img src={props?.authorAvatar} alt="Agon" />
        </div>
        <span className="text-heading-5 color-white">{props?.authorName}</span>
      </div>
    </div>
  );
};

const TagComponent = ({ props }) => {
  return (
    <div>
      <div className="border-bottom mt-50 mb-50"></div>
      <div>
        {props?.tagList?.map((tag, index) => (
          <Link key={index} className="btn btn-tag mr-10" href="#">
            {tag?.tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

const ThreeImageComponent = ({ props }) => {
  return (
    <div className="row mt-45 mb-30">
      <div className="col-lg-6">
        <img
          className="img-responsive main-img"
          src={props?.image_1197x1347}
          alt="Agon"
        />
      </div>
      <div className="col-lg-6">
        <img
          className="img-responsive mb-20 main-img"
          src={props?.image1_1182x627}
          alt="Agon"
        />
        <img
          className="img-responsive main-img"
          src={props?.image2_1182x627}
          alt="Agon"
        />
      </div>
      <div className="caption-img mt-10 text-center color-gray-400">
        {props?.desc}
      </div>
    </div>
  );
};

const SideImageComponent = ({ props }) => {
  return (
    <div className="row">
      <div className="col-lg-8">
        <p className="para-text">{props?.text1}</p>
        <p className="para-text">{props?.text2}</p>
      </div>
      <div className="col-lg-4">
        <img
          className="img-responsive bdr-10 mt-10 main-img"
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
    <section className="section-box mt-50 mb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-md-12"></div>
          <div className="col-lg-1 col-md-2 col-sm-2 col-3 text-center">
            <div className="social-sticky">
              <h3 className="text-heading-6 color-gray-400 mb-20 mt-5">
                Share
              </h3>
              <a
                className="share-social share-fb"
                href="/https:/facebook.com"
              ></a>
              <br />
              <a
                className="share-social share-tw"
                href="/https:/twitter.com"
              ></a>
              <br />
              <a
                className="share-social share-pi"
                href="/https:/www.pinterest.com"
              ></a>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-10 col-9">
            <div
              className="text-summary"
              data-tina-field={tinaField(fields?.blog, "blogDescription")}
            >
              {fields?.blog?.blogDescription}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2"></div>
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
                    className="img-responsive bdr-16 main-img"
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
