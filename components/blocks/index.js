import { tinaField } from "tinacms/dist/react";
import { WelcomeHero } from "./WelcomeHero";
import { Blog } from "./Blog";
import { Categories } from "./Categories";

export const Blocks = (props) => {
  return (
    <>
      {props?.section
        ? props?.section?.map(function (section, i) {
            return (
              <div key={i} data-tina-field={tinaField(section)}>
                <Block {...section} />
              </div>
            );
          })
        : null}
    </>
  );
};

const Block = (section) => {
  switch (section?.__typename) {
    case "PageSectionWelcomeHero":
      return <WelcomeHero data={section} />;
    // case "PageSectionBlog":
    //   return <Blog data={section} />;
    case "PageSectionExploreBlog":
      return <Blog data={section} />;
    case "PageSectionCategories":
      return <Categories data={section} />;
    default:
      return null;
  }
};
