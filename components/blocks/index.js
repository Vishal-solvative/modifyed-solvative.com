import { tinaField } from "tinacms/dist/react";
import { WelcomeHero } from "./WelcomeHero";
import { ExploreBlog } from "./ExploreBlog";
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
// import { WhatWeOffer } from "./whatWeOffer";
import { HappyCustomers } from "./HappyCustomers";
import { OurJourney } from "./OurJourney";
import { HowItWorks } from "./HowItWorks";
import { OurTeam } from "./OurTeam";
import { WorkList } from "./WorkList";
import { CustomerList } from "./CustomerList";
import { SupportTeam } from "./SupportTeam";
import { FAQCategory } from "./FAQCategory";
import { OurWork } from "./OurWork";
import { FAQ2 } from "./FAQ2";
import { OurApproach } from "./OurApproach";
import { PartnerList } from "./PartnerList";
import { Stats } from "./Stats";
import { OurIdea } from "./OurIdea";
import { WorkList2 } from "./WorkList2";
import { Hero } from "./Hero";
import { OurIdea2 } from "./OurIdea2";
import { Hero2 } from "./Hero2";
import { Hero3 } from "./Hero3";
import { Hero4 } from "./Hero4";
import { Hero5 } from "./Hero5";
import { Hero6 } from "./Hero6";
import { BlogCarousel } from "./BlogCarousel";
import { BlogList } from "./BlogList";
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
  // console.log(section);
  switch (section.__typename) {
    case "PageSectionWelcomeHero":
      return <WelcomeHero data={section} />;
    case "PageSectionExploreBlog":
      return <ExploreBlog data={section} />;
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
    // case "PageSectionWhatWeOffer":
    //   return <WhatWeOffer data={section} />;
    case "PageSectionHappyCustomers":
      return <HappyCustomers data={section} />;
    case "PageSectionOurJourney":
      return <OurJourney data={section} />;
    case "PageSectionHowItWorks":
      return <HowItWorks data={section} />;
    case "PageSectionOurTeam":
      return <OurTeam data={section} />;
    case "PageSectionWorkList2":
      return <WorkList2 data={section} />;
    case "PageSectionCustomerList":
      return <CustomerList data={section} />;
    case "PageSectionSupportTeam":
      return <SupportTeam data={section} />;
    case "PageSectionFAQCategory":
      return <FAQCategory data={section} />;
    case "PageSectionOurWork":
      return <OurWork data={section} />;
    case "PageSectionFAQ2":
      return <FAQ2 data={section} />;
    case "PageSectionOurApproach":
      return <OurApproach data={section} />;
    case "PageSectionPartnerList":
      return <PartnerList data={section} />;
    case "PageSectionStats":
      return <Stats data={section} />;
    case "PageSectionOurIdea":
      return <OurIdea data={section} />;
    case "PageSectionWorkList":
      return <WorkList data={section} />;
    case "PageSectionHero":
      return <Hero data={section} />;
    case "PageSectionOurIdea2":
      return <OurIdea2 data={section} />;
    case "PageSectionHero2":
      return <Hero2 data={section} />;
    case "PageSectionHero3":
      return <Hero3 data={section} />;
    case "PageSectionHero4":
      return <Hero4 data={section} />;
    case "PageSectionHero5":
      return <Hero5 data={section} />;
    case "PageSectionHero6":
      return <Hero6 data={section} />;
    case "PageSectionBlogCarousel":
      return <BlogCarousel data={section} />;
    case "PageSectionBlogList":
      return <BlogList data={section} />;
    default:
      return null;
  }
};
