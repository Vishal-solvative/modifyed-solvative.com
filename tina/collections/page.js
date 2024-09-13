import { BlogBlockSchema } from "../../components/blocks/Blog";
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
import { WhatWeOfferBlockSchema } from "../../components/blocks/whatWeOffer";
import { HappyCustomersBlockSchema } from "../../components/blocks/HappyCustomers";
import { OurJourneyBlockSchema } from "../../components/blocks/OurJourney";
import { HowItWorksBlockSchema } from "../../components/blocks/HowItWorks";
import { OurTeamBlockSchema } from "../../components/blocks/OurTeam";
import { WorkListBlockSchema } from "../../components/blocks/WorkList";
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
        WhatWeOfferBlockSchema,
        HappyCustomersBlockSchema,
        OurJourneyBlockSchema,
        HowItWorksBlockSchema,
        OurTeamBlockSchema,
        WorkListBlockSchema,
      ],
    },
  ],
};

export default Page;
