import { tinaField } from "tinacms/dist/react";
import { WelcomeHero } from "./WelcomeHero";
import { Blog } from "./Blog";
import { Categories } from "./Categories";
import { Clients } from "./Clients";
import { Gallery } from "./Gallery";
import { OurProcess } from "./OurProcess";
import { ClientTestimony } from "./ClientTestimony";
import { NewsLetter } from "./NewsLetter";
import { FeatureShort } from "./FeatureShort";
import { Features } from "./Features";
import { VideoStory } from "./VideoStory";
import { PageNotFound } from "./PageNotFound";
import { Ideas } from "./Ideas";
import { Ideas2 } from "./Ideas2";
import { Partners } from "./Partners";
import { Offer } from "./Offer";
import { ContactUsHeading } from "./ContactUsHeading";
import { ContactUsForm } from "./ContactUsForm";
import { LocationList } from "./LocationList";
import { Perks } from "./Perks";
import { FAQ } from "./FAQ";
import { ServiceHeader1 } from "./ServiceHeader1";
import { ServiceHeader2 } from "./ServiceHeader2";
import { PlanList } from "./PlanList";
import { CareerDetails } from "./CareerDetails";

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
    case "PageSectionClients":
      return <Clients data={section} />;
    case "PageSectionGallery":
      return <Gallery data={section} />;
    case "PageSectionOurProcess":
      return <OurProcess data={section} />;
    case "PageSectionClientTestimony":
      return <ClientTestimony data={section} />;
    case "PageSectionNewsLetter":
      return <NewsLetter data={section} />;
    case "PageSectionFeatureShort":
      return <FeatureShort data={section} />;
    case "PageSectionFeatures":
      return <Features data={section} />;
    case "PageSectionVideoStory":
      return <VideoStory data={section} />;
    case "PageSectionPageNotFound":
      return <PageNotFound data={section} />;
    case "PageSectionIdeas":
      return <Ideas data={section} />;
    case "PageSectionIdeas2":
      return <Ideas2 data={section} />;
    case "PageSectionPartners":
      return <Partners data={section} />;
    case "PageSectionOffer":
      return <Offer data={section} />;
    case "PageSectionContactUsHeading":
      return <ContactUsHeading data={section} />;
    case "PageSectionContactUsForm":
      return <ContactUsForm data={section} />;
    case "PageSectionLocationList":
      return <LocationList data={section} />;
    case "PageSectionPerks":
      return <Perks data={section} />;
    case "PageSectionFAQ":
      return <FAQ data={section} />;
    case "PageSectionServiceHeader1":
      return <ServiceHeader1 data={section} />;
    case "PageSectionServiceHeader2":
      return <ServiceHeader2 data={section} />;
    case "PageSectionPlanList":
      return <PlanList data={section} />;
    case "PageSectionCareerDetails":
      return <CareerDetails data={section} />;
    default:
      return null;
  }
};
