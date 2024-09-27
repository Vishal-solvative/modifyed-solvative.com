import { CareerDetailsBlockSchema } from "../../components/blocks/CareerDetails";
import { CategoriesBlockSchema } from "../../components/blocks/Categories";
import { ClientsBlockSchema } from "../../components/blocks/Clients";
import { ClientTestimonyBlockSchema } from "../../components/blocks/ClientTestimony";
import { ContactUsFormBlockSchema } from "../../components/blocks/ContactUsForm";
import { ContactUsHeadingBlockSchema } from "../../components/blocks/ContactUsHeading";
import { FAQBlockSchema } from "../../components/blocks/FAQ";
import { FeaturesBlockSchema } from "../../components/blocks/Features";
import { FeatureShortBlockSchema } from "../../components/blocks/FeatureShort";
import { GalleryBlockSchema } from "../../components/blocks/Gallery";
import { IdeasBlockSchema } from "../../components/blocks/Ideas";
import { Ideas2BlockSchema } from "../../components/blocks/Ideas2";
import { LocationListBlockSchema } from "../../components/blocks/LocationList";
import { NewsLetterBlockSchema } from "../../components/blocks/NewsLetter";
import { OfferBlockSchema } from "../../components/blocks/Offer";
import { OurProcessBlockSchema } from "../../components/blocks/OurProcess";
import { PageNotFoundBlockSchema } from "../../components/blocks/PageNotFound";
import { PartnersBlockSchema } from "../../components/blocks/Partners";
import { PerksBlockSchema } from "../../components/blocks/Perks";
import { PlanListBlockSchema } from "../../components/blocks/PlanList";
import { ServiceHeader1BlockSchema } from "../../components/blocks/ServiceHeader1";
import { ServiceHeader2BlockSchema } from "../../components/blocks/ServiceHeader2";
import { VideoStoryBlockSchema } from "../../components/blocks/VideoStory";
import { WelcomeHeroBlockSchema } from "../../components/blocks/WelcomeHero";
// import { WhatWeOfferBlockSchema } from "../../components/blocks/whatWeOffer";
import { HappyCustomersBlockSchema } from "../../components/blocks/HappyCustomers";
import { OurJourneyBlockSchema } from "../../components/blocks/OurJourney";
import { HowItWorksBlockSchema } from "../../components/blocks/HowItWorks";
import { OurTeamBlockSchema } from "../../components/blocks/OurTeam";
import { WorkListBlockSchema } from "../../components/blocks/WorkList";
import { CustomerListBlockSchema } from "../../components/blocks/CustomerList";
import { SupportTeamBlockSchema } from "../../components/blocks/SupportTeam";
import { FAQCategoryBlockSchema } from "../../components/blocks/FAQCategory";
import { OurWorkBlockSchema } from "../../components/blocks/OurWork";
import { FAQ2BlockSchema } from "../../components/blocks/FAQ2";
import { OurApproachBlockSchema } from "../../components/blocks/OurApproach";
import { PartnerListBlockSchema } from "../../components/blocks/PartnerList";
import { StatsBlockSchema } from "../../components/blocks/Stats";
import { OurIdeaBlockSchema } from "../../components/blocks/OurIdea";
import { WorkList2BlockSchema } from "../../components/blocks/WorkList2";
import { HeroBlockSchema } from "../../components/blocks/Hero";
import { OurIdea2BlockSchema } from "../../components/blocks/OurIdea2";
import { Hero2BlockSchema } from "../../components/blocks/Hero2";
import { Hero3BlockSchema } from "../../components/blocks/Hero3";
import { Hero4BlockSchema } from "../../components/blocks/Hero4";
import { Hero5BlockSchema } from "../../components/blocks/Hero5";
import { Hero6BlockSchema } from "../../components/blocks/Hero6";
import { BlogCarouselBlockSchema } from "../../components/blocks/BlogCarousel";
import { ExploreBlogBlockSchema } from "../../components/blocks/ExploreBlog";
import { BlogListBlockSchema } from "../../components/blocks/BlogList";

const Page = {
  label: "Pages",
  name: "page",
  path: "content/pages",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      if (document?._sys?.filename === "home") {
        return "/";
      }
      return document?._sys?.relativePath.replace(/\.mdx$/, "");
    },
  },
  fields: [
    {
      type: "boolean",
      name: "isHeaderVisible",
      label: "Show header",
    },
    {
      type: "boolean",
      name: "isFooterVisible",
      label: "Show footer",
    },
    {
      type: "string",
      name: "pageTitle",
      label: "Page title",
    },
    {
      type: "string",
      name: "pageDescription",
      label: "Page description",
    },
    {
      type: "object",
      name: "section",
      label: "Section",
      list: true,
      ui: {
        visualSelector: true,
      },
      templates: [
        WelcomeHeroBlockSchema,
        CategoriesBlockSchema,
        ClientsBlockSchema,
        GalleryBlockSchema,
        OurProcessBlockSchema,
        ClientTestimonyBlockSchema,
        NewsLetterBlockSchema,
        FeatureShortBlockSchema,
        FeaturesBlockSchema,
        VideoStoryBlockSchema,
        PageNotFoundBlockSchema,
        IdeasBlockSchema,
        Ideas2BlockSchema,
        PartnersBlockSchema,
        OfferBlockSchema,
        ContactUsHeadingBlockSchema,
        ContactUsFormBlockSchema,
        LocationListBlockSchema,
        PerksBlockSchema,
        FAQBlockSchema,
        ServiceHeader1BlockSchema,
        ServiceHeader2BlockSchema,
        PlanListBlockSchema,
        CareerDetailsBlockSchema,
        // WhatWeOfferBlockSchema,
        HappyCustomersBlockSchema,
        OurJourneyBlockSchema,
        HowItWorksBlockSchema,
        OurTeamBlockSchema,
        WorkListBlockSchema,
        CustomerListBlockSchema,
        SupportTeamBlockSchema,
        FAQCategoryBlockSchema,
        OurWorkBlockSchema,
        FAQ2BlockSchema,
        OurApproachBlockSchema,
        PartnerListBlockSchema,
        StatsBlockSchema,
        OurIdeaBlockSchema,
        WorkList2BlockSchema,
        HeroBlockSchema,
        OurIdea2BlockSchema,
        Hero2BlockSchema,
        Hero3BlockSchema,
        Hero4BlockSchema,
        Hero5BlockSchema,
        Hero6BlockSchema,
        ExploreBlogBlockSchema,
        BlogCarouselBlockSchema,
        BlogListBlockSchema,
      ],
    },
  ],
};

export default Page;
