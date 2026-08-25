import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import ampHero from "./assets/AMP_HERO_OPENER.png";
import muscleHero from "./assets/MM_HERO_OPENER.png";
import loreaHero from "./assets/LOREA_HERO_OPENER.png";
import rockstarHero from "./assets/ROCKSTAR_HERO_OPENER.jpg";
import bobbyHero from "./assets/BOBBY_HERO_OPENER.jpg";
import ampLifestyleMovement from "./assets/AMP_LIFESTYLE_MOVEMENT.jpg";
import ampCan from "./assets/AMP_OG_SOLO_CONDENSATION_02.png";
import ampCan01 from "./assets/AMP_CAN_01.png";
import ampCan02 from "./assets/AMP_CAN_02.png";
import ampCan03 from "./assets/AMP_CAN_03.png";
import ampCan04 from "./assets/AMP_CAN_04.png";

import ampLogo01 from "./assets/AMP_LOGO_01.png";
import ampLogo02 from "./assets/AMP_LOGO_02.png";
import ampLogo03 from "./assets/AMP_LOGO_03.png";
import ampLockupBW from "./assets/AMP_LOCKUP_BW.png";
import ampLockupG from "./assets/AMP_LOCKUP_G.png";
import ampLockupR from "./assets/AMP_LOCKUP_R.png";
import ampTechnicalLockup from "./assets/TECHNICAL_LOGOS_G-03.png";
import ampCarLifestyle from "./assets/CAR_LIFESTYLE_01-copy.png";
import cherryTight from "./assets/CHERRY_TIGHT .png";
import ogTight from "./assets/OG_TIGHT .png";
import guysOnBlanket from "./assets/GUYS_ON_BLANKET - 02.png";
import ampCooler from "./assets/AMP_COOLER_02.png";

import ampHat5 from "./assets/AMP HATS -5.png";
import ampHat11 from "./assets/AMP HATS -11.png";
import ampHat6 from "./assets/AMP HATS -6.png";
import ampJacket8 from "./assets/AMP WORKERS JACKET -8.png";
import ampJacket2 from "./assets/AMP WORKERS JACKET -2.png";
import ampJacket6 from "./assets/AMP WORKERS JACKET -6.png";
import ampJacket10 from "./assets/AMP WORKERS JACKET -10.png";
import ampJacket11 from "./assets/AMP WORKERS JACKET -11.png";
import ampHat3 from "./assets/AMP HATS -3.png";
import ampHat9 from "./assets/AMP HATS -9.png";
import ampHatsCompiled from "./assets/amp hats compiled .png";

import manDrinkingOgAmp from "./assets/MAN_DRINKING_OG_AMP.png";

import mmSlide2 from "./assets/MM_Slide2.png";
import mmSlide3 from "./assets/MM_Slide3.png";
import mmSlide4 from "./assets/MM_Slide4.png";
import mmSlide6 from "./assets/MM_Slide6.png";
import mmSlide7 from "./assets/MM_Slide7.png";
import mmSlide8 from "./assets/MM_Slide8.png";
import mmBrandWorld from "./assets/MM_BrandWorld_1920x1080_R3.jpg";
import mmSlide9 from "./assets/MM_Slide9.png";
import mmProductLineup33 from "./assets/MM_11oz_Portfolio Lineup_33_Corner.png";
import mmProductLineup26 from "./assets/MM_14oz_Portfolio Lineup_26_Corner.png";
import mmProductLineup42 from "./assets/MM_14oz_Portfolio Lineup_42_Corner.png";
import mmProductLineup4226 from "./assets/MM_14oz_Portfolio Lineup_4226_Corner.png";

import mmHeroSingle26Choc14oz from "./assets/MM_14oz_HeroSingle_26_Choc_LORES.png";
import mmHeroSingle26Choc11oz from "./assets/MM_11oz_HeroSingle_26_Choc.png";
import mmHeroSingle33Straw11oz from "./assets/MM_11oz_HeroSingle_33_Straw.png";
import mmHeroDuo26ChocVan14oz from "./assets/MM_14oz_HeroDuo_26_ChocVan_LORES.png";
import mmHeroDuo42ChocVan14oz from "./assets/MM_14oz_HeroDuo_42_ChocVan_LORES.png";
import mmHeroDuoStraw14oz from "./assets/MM_14oz_HeroDuo_Straw_LORES.png";
import mmHeroDuo3326Cnc11oz from "./assets/MM_11oz_HeroDuo_3326_CnC.png";
import mmHeroDuo3326Vc11oz from "./assets/MM_11oz_HeroDuo_3326_VC.png";

import mmLockerLifestyle from "./assets/26_MM_Lifestyle_StillLife_Locker_Lores.jpg";
import mmHikeLifestyle from "./assets/26_MM_Lifestyle_Female_Hike_Lores.jpg";
import mmRoadTripLifestyle from "./assets/26_MM_Lifestyle_Female_26g_RoadTrip_Lores.jpg";

import mmMacroVanillaDrip from "./assets/26_Macro_Vanilla_Drip_Lores.png";
import mmMacroReversePowder from "./assets/26_Macro_Reverse_Powder_Lores.png";
import mmMacroMilk from "./assets/26_Macro_Milk_1_Lores.png";
import mmMacroImprintPowder from "./assets/26_Macro_Imprint_Powder_Lores.png";
import mmMacroFlatlayCookies from "./assets/26_Macro_Flatlay_Cookies_Lores.png";
import mmMacroChocolateDry from "./assets/26_Macro_Chocolate_Dry_Lores.png";

import mmLogoActivationVideo from "./assets/LogoActivation_60s_render_20260505_1050_small.mp4";
import mmVideoVerticalProduct from "./assets/Musclemilk_Product_06_Vanilla_Tetrapro_9X16_AY_260520_Conform_v3.2.mp4";
import mmVideoLifestyleBase from "./assets/Musclemilk_Lifestyle_Base_15_4X5_AY_260520_Conform_v3.2.mp4";
import mmVideoMiddayMoments from "./assets/Musclemilk_Lifestyle_MidDayMoments_06_Chocolate_Pro_16X9_AY_260520_Conform_v3.2.mp4";

import loreaSlide01A from "./assets/01.A_.png";
import loreaOurStory from "./assets/01_Our Story.png";
import loreaFlowerMeaning from "./assets/02_Meaning Behind the Flower.png";
import loreaBrandPositioning from "./assets/03_Brand Positioning.png";
import loreaWhoWeAre from "./assets/04_Who we are.png";
import loreaWhatWeDo from "./assets/05_What we do.png";
import loreaHowDoWeDoIt from "./assets/06_How Do We Do It.png";
import loreaWhyWeDoIt from "./assets/07_Why We Do It.png";
import loreaProductOne from "./assets/08_The Product-1.png";
import loreaProductTwo from "./assets/09_The Product.png";
import loreaStory from "./assets/010_The Story.png";
import loreaMessagingPillars from "./assets/011_Messaging Pillars.png";
import loreaIngredients from "./assets/012_Our Ingredients.png";
import loreaPhotoImagery from "./assets/013_Photo & Imagery-1.png";
import loreaPersonality from "./assets/014_Our Personality.png";
import loreaLogoIntro from "./assets/014.A_Logo 1.png";
import loreaLogoOne from "./assets/015_Logo 1.png";
import loreaLogoTwo from "./assets/016_Logo 2.png";
import loreaLogoThree from "./assets/017_Logo 3.png";
import loreaLogoFour from "./assets/018_Logo 4.png";

import loreaColorOne from "./assets/019_Color 1.png";
import loreaColorIntro from "./assets/019.A_Color.png";
import loreaColorTwo from "./assets/020_Color 2.png";
import loreaColorThree from "./assets/021_Color 3.png";

import loreaTypeOne from "./assets/022_Type 1.png";
import loreaTypeIntro from "./assets/022.A_Type.png";
import loreaTypeTwo from "./assets/023_Type 2.png";
import loreaTypeThree from "./assets/024_Type 3.png";
import loreaTypeFour from "./assets/025_Type 4.png";

import loreaVisToolkitOne from "./assets/026_VIS Toolkit 1.png";
import loreaVisToolkitIntro from "./assets/026.A_VIS Toolkit.png";
import loreaVisToolkitTwo from "./assets/027_VIS Toolkit 2.png";
import loreaVisToolkitThree from "./assets/028_VIS Toolkit 3.png";
import loreaVisToolkitFour from "./assets/029_Vis Toolkit 4.png";
import loreaVisToolkitFive from "./assets/030_Vis Toolkit 5.png";

import loreaPhotoImageryOne from "./assets/031_Photo & Imagery.png";
import loreaPhotoImageryTwo from "./assets/032_Photo & Imagery 1.png";

import loreaCollageDeepSleep from "./assets/033_Collage - Deep Sleep.png";
import loreaCollageEpicEnergy from "./assets/034_Collage - Epic Energy.png";
import loreaCollageSharpFocus from "./assets/035_Collage - Sharp Focus.png";
import loreaCollageSimplyHappy from "./assets/036_Collage - Simply Happy.png";
import loreaDreamworldRealism from "./assets/037_Dreamworld vs Realism.png";

import loreaProductRendersOne from "./assets/038_Product Renders 1.png";
import loreaProductRendersTwo from "./assets/039_Product Renders 2.png";
import loreaProductRendersThree from "./assets/040_Product Renders 3.png";

import loreaProductRendersFamily from "./assets/041_Product Renders_Family.png";
import loreaProductRendersFamilyTwo from "./assets/042_Product Renders_Family 2.png";

import loreaIngredientPhotography from "./assets/043_Ingredient Photography.png";

import loreaKvsInTheWild from "./assets/044_KVs In The Wild.png";
import loreaKvOne from "./assets/045_KV1.png";
import loreaKvTwo from "./assets/046_KV2.png";
import loreaKvThree from "./assets/047_KV3.png";

import loreaMerch from "./assets/048_Merch.png";
import loreaMerchOne from "./assets/049_Merch 1.png";
import loreaMerchTwo from "./assets/050_Merch 2.png";
import loreaMerchThree from "./assets/051_Merch 3.png";
import loreaMerchFour from "./assets/052_.png";
import loreaMerchFive from "./assets/053_.png";

import rockstarSlide1 from "./assets/Slide1.png";
import rockstarSlide2 from "./assets/Slide2.png";
import rockstarSlide3 from "./assets/Slide3.png";
import rockstarSlide4 from "./assets/Slide4.png";
import rockstarSlide5 from "./assets/Slide5.png";
import rockstarSlide6 from "./assets/Slide6.png";
import rockstarSlide7 from "./assets/Slide7.png";
import rockstarSlide8 from "./assets/Slide8.png";
import rockstarSlide9 from "./assets/Slide9.png";
import rockstarSlide10 from "./assets/Slide10.png";
import rockstarSlide11 from "./assets/Slide11.png";
import rockstarPic01 from "./assets/PIC_01.jpeg";
import rockstarPic02 from "./assets/PIC_02.jpeg";
import rockstarPic03 from "./assets/PIC_03.jpeg";
import rockstarPic04 from "./assets/PIC_04.jpeg";
import rockstarPic05 from "./assets/PIC_05.jpeg";
import rockstarPic06 from "./assets/PIC_06.jpeg";
import rockstarPic07 from "./assets/PIC_07.jpeg";
import rockstarPic08 from "./assets/PIC_08.jpeg";
import rockstarPic09 from "./assets/PIC_09.jpeg";
import rockstarPic010 from "./assets/PIC_010.jpeg";
import rockstarPic011 from "./assets/PIC_011.jpeg";
import rockstarPic012 from "./assets/PIC_012.jpeg";
import rockstarPic013 from "./assets/PIC_013.jpeg";
import rockstarPic014 from "./assets/PIC_014.jpeg";
import rockstarPic015 from "./assets/PIC_015.jpeg";

import rockstarVid01 from "./assets/VID_01.MOV";
import rockstarVid03 from "./assets/VID_03.MOV";
import rockstarVid04 from "./assets/VID_04.mov";
import rockstarVid05 from "./assets/VID_05.MOV";
import rockstarVid06 from "./assets/VID_06.MOV";

import bobbiFragranceKit3 from "./assets/240321-Pepsi-Fragrance-Kit_Design 3.png";
import bobbiFragranceKit5 from "./assets/240321-Pepsi-Fragrance-Kit_Design 5.png";
import bobbiFragranceKit6 from "./assets/240321-Pepsi-Fragrance-Kit_Design 6.png";
import bobbiMiniGrillCopy from "./assets/Bobby Fragrance Inspo - Copy of Mini Grill.jpg";
import bobbiFireStarter from "./assets/Bobby Fragrance Inspo - Fire Starter Cologne.jpg";
import bobbiFrameTwo from "./assets/Bobby Fragrance Inspo - Frame 2.jpg";
import bobbiMiniGrill from "./assets/Bobby Fragrance Inspo - Mini Grill.jpg";
import bobbiMoodBoard from "./assets/Bobby Fragrance Kit Design - Grilling Fragrance - Mood Board.jpg";
import bobbiFinalVideo from "./assets/bobby_flay_1_small.mp4";
import bobbiFinalKV from "./assets/Bobby_KV_16x9 copy.jpg";
import bobbiBottleHero from "./assets/Bottle_Three_Quarter_RT_V3_IC23201.jpg";
import bobbiGrillClosed from "./assets/Grill_Closed_RT_V2_IC23000.jpg";
import bobbiGrillHero from "./assets/Grill_HeroRT_V3_IC23179.jpg";
import bobbiHeroFinal from "./assets/Hero_16x9.jpg";

import rileyHero from "./assets/RILEYVAIL_HAIR_OPENER.png";
import rileyPage01 from "./assets/RILEY VAIL HAIR 01.png";
import rileyPage02 from "./assets/RILEY VAIL HAIR 02.png";
import rileyPage03 from "./assets/RILEY VAIL HAIR 03.png";
import rileyPage04 from "./assets/RILEY VAIL HAIR 04.png";
import rileyPage05 from "./assets/RILEY VAIL HAIR 05.png";
import rileyPage06 from "./assets/RILEY VAIL HAIR 06.png";
import rileyPage07 from "./assets/RILEY VAIL HAIR 07.png";
import rileyPage08 from "./assets/RILEY VAIL HAIR 08.png";
import rileyPage09 from "./assets/RILEY VAIL HAIR 09.png";
import rileyPage010 from "./assets/RILEY VAIL HAIR 010.png";
import rileyPage011 from "./assets/RILEY VAIL HAIR 011.png";
import rileyPage012 from "./assets/RILEY VAIL HAIR 012.png";
import rileyPage013 from "./assets/RILEY VAIL HAIR 013.png";
import rileyPage014 from "./assets/RILEY VAIL HAIR 014.png";
import rileyPhysical01 from "./assets/rileyPhysical01.png";
import rileyPhysical02 from "./assets/rileyPhysical02.png";
import rileyPhysical03 from "./assets/rileyPhysical03.png";
import rileyPhysical04 from "./assets/rileyPhysical04.png";
import rileyPhysical05 from "./assets/rileyPhysical05.png";
import rileyPhysical06 from "./assets/rileyPhysical06.png";
import rileyPhysical07 from "./assets/rileyPhysical07.png";
import rileyPhysical08 from "./assets/rileyPhysical08.png";

<assets />

const nav = [
  { label: "home", page: "home" },
  { label: "work", page: "work" },
  { label: "about", page: "about" },
  { label: "contact", page: "home" },
];

const skills = [
  "3D BRAND INNOVATION",
  "PACK DESIGN",
  "ART DIRECTION",
  "CREATIVE STRATEGY",
  "EXPERIENTIAL DESIGN",
  "VISUAL SYSTEMS",
];

const homeProjects = [
  { id: "amp", title: "AMP ENERGY REBRAND", accent: "#004A26" },
  { id: "muscle", title: "MUSCLE MILK REBRAND", accent: "#8EDCFF" },
  { id: "lorea", title: "LOREA BRAND DESIGN", accent: "#FA8072" },
  { id: "rockstar", title: "ROCKSTAR OPEN", accent: "#D4AF37" },
  { id: "pepsi", title: "PEPSI X BOBBY FLAY", accent: "#005CB4" },
  { id: "kickstart", title: "RILEY VAIL HAIR", accent: "#F4B6C2" },
];

const projectDetails = {
  amp: {
  year: "2025",
  category: "BRAND INNOVATION",
  intro: "",
  lead: "",
  body: "",
},
  muscle: {
    year: "2025",
    category: "BRAND DESIGN",
    intro:
  "Together with my team, I helped define and build the brand strategy behind a modernized Muscle Milk identity. Evolving the brand world, visual system, and packaging expression to feel more approachable, lifestyle-driven, and built for every body while preserving the bold performance mindset that makes Muscle Milk recognizable.",

    lead:
      "The work balanced brand equity with a more elevated visual direction, creating a tighter relationship between packaging, in store communication, and campaign execution.",
    body:
      "This page is set up as a case study template. Final imagery, project writing, and outcomes can be dropped into this exact structure once ready.",
  },
  lorea: {
    year: "2025",
    category: "BRAND DESIGN",
    intro:
      "A brand design project centered on creating a distinct identity system with a refined point of view and a more premium visual world.",
    lead:
      "The focus was on building clarity, tone, and cohesion across the brand so that every element felt part of one intentional system.",
    body:
      "This page is set up as a case study template. Final imagery, project writing, and outcomes can be dropped into this exact structure once ready.",
  },
  rockstar: {
    year: "2025",
    category: "EVENT DESIGN",
    intro:
      "A branded experience concept developed to bring Rockstar into a more immersive, social, and culturally visible space.",
    lead:
      "The project explored how visual language, environment, and storytelling could work together to create an experience that felt high energy and unmistakably ownable.",
    body:
      "This page is set up as a case study template. Final imagery, project writing, and outcomes can be dropped into this exact structure once ready.",
  },
  pepsi: {
    year: "2025",
    category: "COLLABORATION",
    intro:
      "A collaborative brand moment designed to merge Pepsi with a culinary point of view through a more elevated and experience driven lens.",
    lead:
      "The work focused on translating the partnership into a sharper visual system and a more memorable set of branded touchpoints.",
    body:
      "This page is set up as a case study template. Final imagery, project writing, and outcomes can be dropped into this exact structure once ready.",
  },
  kickstart: {
    year: "2025",
    category: "REBRAND STRATEGY",
    intro:
  "A personal brand built to give Riley Vail Hair a more ownable identity, stronger personality, and memorable presence across every client touchpoint.",
    lead:
      "The project combined strategy, design, and system thinking to define how the brand could feel more current, differentiated, and built for growth.",
    body:
      "This page is set up as a case study template. Final imagery, project writing, and outcomes can be dropped into this exact structure once ready.",
  },
  dewbrew: {
    year: "2025",
    category: "CONCEPT DESIGN",
    intro:
      "A concept project imagining a new Mountain Dew extension with a distinct visual attitude and a fresh brand world to match.",
    lead:
      "The focus was on defining a strong tone, a memorable system, and a set of design choices that made the concept feel believable and culturally sharp.",
    body:
      "This page is set up as a case study template. Final imagery, project writing, and outcomes can be dropped into this exact structure once ready.",
  },
  nkd: {
    year: "2025",
    category: "SUBLINE DESIGN",
    intro:
      "A Mountain Dew subline project focused on creating a differentiated but connected visual system within the broader brand ecosystem.",
    lead:
      "The work explored how a new product expression could still feel unmistakably tied to Mountain Dew while building its own identity and occasion.",
    body:
      "This page is set up as a case study template. Final imagery, project writing, and outcomes can be dropped into this exact structure once ready.",
  },
};

function HomeRow({ item, onClick }) {
  return (
    <button onClick={() => onClick(item)} className="group block w-full text-left [perspective:1800px]">
      <div className="relative h-[88px] overflow-visible [transform-style:preserve-3d]">
        <div className="absolute inset-0 flex items-center [backface-visibility:hidden] [transform-style:preserve-3d] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:[transform:rotateX(-90deg)]">
          <span className="px-1 text-[clamp(2rem,4.4vw,5rem)] font-black uppercase leading-[0.9] tracking-[-0.07em] text-white">
            {item.title}
          </span>
        </div>

        <div
          className="absolute inset-0 flex items-center [backface-visibility:hidden] [transform:rotateX(90deg)_translateZ(44px)] [transform-style:preserve-3d] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:[transform:rotateX(0deg)_translateZ(44px)]"
          style={{ backgroundColor: item.accent }}
        >
          <span className="px-5 sm:px-6 text-[clamp(2rem,4.4vw,5rem)] font-black uppercase leading-[0.9] tracking-[-0.07em] text-black">
            {item.title}
          </span>
        </div>
      </div>
    </button>
  );
}

function HomePage() {
  return (
    <>
      <section id="home" className="mx-auto max-w-[1400px] pt-4">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[clamp(4.5rem,13vw,12rem)] font-black uppercase leading-[0.82] tracking-[-0.08em]"
            >
              Dylan
              <br />
              Vail
            </motion.h1>
          </div>

          <div className="pt-3 lg:pt-10">
            <div className="text-[clamp(1.25rem,3vw,2.4rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em]">
              Brand Design
               <br />
              Associate Manager
              <br />
              + Brand Builder
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-[1400px] pb-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border-t border-black pt-3"
            >
              <div className="text-[14px] font-bold uppercase tracking-[-0.02em]">{item}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about-preview" className="mx-auto max-w-[1400px] border-t border-black py-12">
        <div className="mb-8 text-[12px] uppercase tracking-[0.2em]">experience</div>
        <div className="max-w-[1100px] space-y-5 text-[clamp(1rem,1.4vw,1.2rem)] leading-[1.5]">
          <p>
            Currently → Building packaging systems, 3D brand worlds, and launch-ready visual thinking as a Senior Designer working across innovation, brand refresh, and experiential work.
          </p>
          <p>
            Previously → Designed global structural packaging and premium product stories across beverage brands while pushing deeper into creative direction and 3D innovation.
          </p>
          <p>
            And Before That → Developed physical products, brand visuals, and freelance concept work with a focus on objects, storytelling, and sharp execution.
          </p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-[1400px] border-t border-black py-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4 text-[12px] uppercase tracking-[0.2em]">about</div>
            <p className="max-w-[700px] text-[clamp(1rem,1.35vw,1.15rem)] leading-[1.5]">
              I work at the intersection of art direction, packaging, 3D systems, and experience design. My focus is making brands feel more cinematic, physical, and culturally sharp.
            </p>
          </div>
          <div>
            <div className="mb-4 text-[12px] uppercase tracking-[0.2em]">contact</div>
            <div className="space-y-2 text-[clamp(1.1rem,1.8vw,1.6rem)] font-bold uppercase leading-[1.1] tracking-[-0.03em]">
              <a href="mailto:hello@dylanvail.com" className="block hover:opacity-50">
                dylansvail@gmail.com
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="block hover:opacity-50">
                @dylanvail
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function WorkPage({ onBackHome, onProjectClick }) {
  return (
    <motion.section
      key="work-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="relative left-1/2 w-screen -translate-x-1/2 bg-black text-white px-5 pb-16 pt-6 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1400px] mb-10 flex items-end justify-between gap-6 border-b border-white/15 pb-6">
        <div>
          <div className="mb-3 text-[12px] uppercase tracking-[0.2em] text-white/65">work</div>
          <h2 className="text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.86] tracking-[-0.08em] text-white">
            Selected
            <br />
            Work
          </h2>
        </div>
        <button
          type="button"
          onClick={onBackHome}
          className="text-[11px] uppercase tracking-[0.2em] text-white/75 hover:opacity-60"
        >
          back home
        </button>
      </div>

      <div className="mx-auto max-w-[1400px] pt-2">
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {homeProjects.map((item) => (
            <HomeRow key={item.title} item={item} onClick={onProjectClick} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function AboutPage() {
  const tickerItems = [
    "3D BRAND INNOVATION",
    "PACKAGING SYSTEMS",
    "EXPERIENTIAL DESIGN",
    "ART DIRECTION",
    "VISUAL STORYTELLING",
    "CREATIVE STRATEGY",
    "BRAND BUILDING",
    "PHYSICAL DESIGN",
    "CINEMATIC THINKING",
    "CULTURAL RELEVANCE",
  ];

  const awards = [
    {
      company: "PepsiCo",
      type: "Full-time · 3 yrs",
      roles: [
        {
          title: "Brand Designer Associate Manager",
          dates: "Sep 2025 - Present · 8 mos",
          location: "New York City Metropolitan Area · Hybrid",
        },
        {
          title: "3D Brand Innovation Designer",
          dates: "Apr 2025 - Sep 2025 · 6 mos",
          location: "New York, New York, United States · Hybrid",
        },
        {
          title: "Industrial Designer",
          dates: "May 2023 - Apr 2025 · 2 yrs",
          location: "New York, New York, United States",
        },
      ],
    },
  ];

  return (
    <motion.section
      key="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="relative left-1/2 w-screen -translate-x-1/2 bg-black text-white"
    >
      <div className="min-h-screen bg-black px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 flex items-start justify-between gap-6 text-[11px] uppercase tracking-[0.2em] text-white/75">
            <div>about Dylan Vail</div>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:opacity-60"
            >
              top
            </button>
          </div>

          <div className="mb-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="max-w-[980px] text-[clamp(3rem,8vw,7.4rem)] font-black uppercase leading-[0.86] tracking-[-0.08em]">
                Building brand worlds
                <br />
                that feel loud,
                <br />
                physical, and alive.
              </h2>
            </div>
            <div className="pt-2 text-[clamp(1rem,1.4vw,1.18rem)] leading-[1.6] text-white/78 lg:pl-8">
              I am a designer working across brand strategy, visual systems, photography, creative direction, and physical brand expression. My work focuses on building cohesive brand worlds and ecosystems that give each brand a clear point of view — from strategy and storytelling to iconography, imagery, packaging, environments, and consumer touchpoints.
<br />
<br />
I think about how a brand feels, behaves, and shows up across the world around it. Whether through campaign visuals, brand-specific graphic systems, experiential moments, 3D prototyping, or set and shoot development, I help translate ideas into intentional, ownable expressions that feel distinctive, culturally relevant, and alive.
            </div>
          </div>

          <div className="mb-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="aspect-[0.88] overflow-hidden bg-[#d9f24f] p-5 text-black">
              <div className="flex h-full items-end">
                <div>
                  <div className="mb-2 text-[11px] uppercase tracking-[0.2em]">focus</div>
                  <div className="text-[clamp(1.4rem,2.6vw,2.4rem)] font-black uppercase leading-[0.9] tracking-[-0.05em]">
                    Brand
                    <br />
                    Innovation
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-[0.88] overflow-hidden bg-[#2a2a2a] p-5">
              <div className="flex h-full items-end">
                <div>
                  <div className="mb-2 text-[11px] uppercase tracking-[0.2em] text-white/70">role</div>
                  <div className="text-[clamp(1.35rem,2.5vw,2.2rem)] font-black uppercase leading-[0.9] tracking-[-0.05em] text-white">
                    Associate Brand
                    <br />
                    Design Manager
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-[0.88] overflow-hidden bg-[#36d7ff] p-5 text-black">
              <div className="flex h-full items-end">
                <div>
                  <div className="mb-2 text-[11px] uppercase tracking-[0.2em]">approach</div>
                  <div className="text-[clamp(1.35rem,2.5vw,2.2rem)] font-black uppercase leading-[0.9] tracking-[-0.05em]">
                    Strategy
                    <br />
                    into craft
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-[0.88] overflow-hidden border border-white/10 bg-[#111111] p-5">
              <div className="flex h-full items-end">
                <div>
                  <div className="mb-2 text-[11px] uppercase tracking-[0.2em] text-white/70">based in</div>
                  <div className="text-[clamp(1.35rem,2.5vw,2.2rem)] font-black uppercase leading-[0.9] tracking-[-0.05em] text-white">
                    New York
                    <br />
                    City
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-16 overflow-hidden border-y border-white/10 py-5">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="flex w-max whitespace-nowrap"
            >
              {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
                <span key={`${item}-${i}`} className="px-8 text-[13px] uppercase tracking-[0.32em] text-white/70">
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="mb-5 text-[12px] uppercase tracking-[0.2em] text-white/60">story</div>
              <div className="max-w-[820px] space-y-5 text-[clamp(1rem,1.45vw,1.22rem)] leading-[1.62] text-white/82">
                <p>
                  I am originally from Los Angeles, CA, where I found my entry into design through skateboarding and surfing. Those environments shaped how I think about culture, form, and visual identity at an early age.
                </p>
                <p>
                  I come from a family of creatives including painters, interior designers, illustrators, and glass designers, which gave me a foundation rooted in making, craft, and visual expression. That background continues to influence how I approach brand building today.
                </p>
                <p>
                  I have been based in New York for the past 7 years, where my work has expanded into packaging, 3D brand systems, and experiential design. My focus is building cohesive brand worlds that feel physical, intentional, and culturally sharp.
                </p>
              </div>
            </div>

            <div>
              <div className="mb-5 text-[12px] uppercase tracking-[0.2em] text-white/60">experience</div>
              <div className="border-t border-white/10 pt-4">
                {awards.map((entry) => (
                  <div key={entry.company} className="space-y-5">
                    <div className="border-b border-white/10 pb-5">
                      <div className="text-[clamp(1.4rem,2vw,2rem)] font-black uppercase leading-[0.95] tracking-[-0.04em] text-white">
                        {entry.company}
                      </div>
                      <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/55">
                        {entry.type}
                      </div>
                    </div>

                    <div className="space-y-6">
                      {entry.roles.map((role) => (
                        <div key={role.title} className="border-b border-white/10 pb-5 last:border-b-0">
                          <div className="text-[clamp(1rem,1.3vw,1.15rem)] uppercase leading-[1.1] tracking-[-0.03em] text-white">
                            {role.title}
                          </div>
                          <div className="mt-2 text-[12px] uppercase tracking-[0.18em] text-white/55">
                            {role.dates}
                          </div>
                          <div className="mt-2 text-[0.95rem] leading-[1.45] text-white/72">
                            {role.location}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
const ampBrandMarksAssets = {
  bwLockup: {
    src: ampLockupBW,
    alt: "AMP black and white core lockup",
    wrapClass: "relative h-[380px] w-full",
    imgClass:
      "absolute left-[50%] top-[54%] h-[500px] w-auto max-w-[150%] -translate-x-1/2 -translate-y-1/2 object-contain",
  },

  greenLockup: {
    src: ampLockupG,
    alt: "AMP green lockup",
    wrapClass: "relative h-[380px] w-full",
    imgClass:
      "absolute left-[60%] top-[54%] h-[400px] w-auto max-w-[100%] -translate-x-1/2 -translate-y-1/2 object-contain",
  },

  redLockup: {
    src: ampLockupR,
    alt: "AMP red lockup",
    wrapClass: "relative h-[380px] w-full",
    imgClass:
      "absolute left-[50%] top-[49%] h-[400px] w-auto max-w-[100%] -translate-x-1/2 -translate-y-1/2 object-contain",
  },
};

function AmpBrandMarksSection() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1360px] (nothing) pt-10">
        <div className="mb-14 max-w-[980px]">
          <div className="mb-6 text-[11px] uppercase tracking-[0.24em] text-black/70">
            Brand Marks
          </div>

          <h2 className="text-[clamp(2.4rem,4vw,4.3rem)] font-black leading-[0.92] tracking-[-0.06em] text-black">
            Core Logos
          </h2>

          <p className="mt-8 max-w-[920px] text-[clamp(1rem,1.15vw,1.15rem)] leading-[1.31] tracking-[-0.02em] text-black/85">
            The AMP logo was redesigned by looking closely at the brand’s past and the visual DNA that originally defined it, carrying forward key elements that give it recognition and credibility. At the same time, the latest Mountain Dew brand and visual refresh informed a more modern direction, introducing a softer and more inviting feel. The result is a lockup that balances heritage and evolution, retaining the energy and attitude of AMP while aligning more closely with the broader Mountain Dew system.
          </p>
        </div>

        <div className="pt-6">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr] lg:items-start">
            <div className="flex flex-col items-center">
              <div className={ampBrandMarksAssets.bwLockup.wrapClass}>
                <img
                  src={ampBrandMarksAssets.bwLockup.src}
                  alt={ampBrandMarksAssets.bwLockup.alt}
                  className={ampBrandMarksAssets.bwLockup.imgClass}
                />
              </div>

              <div className="mt-4 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-black/70">
                BW Lockup
              </div>
            </div>

            <div className="flex flex-col items-center pt-2">
              <div className={ampBrandMarksAssets.greenLockup.wrapClass}>
                <img
                  src={ampBrandMarksAssets.greenLockup.src}
                  alt={ampBrandMarksAssets.greenLockup.alt}
                  className={ampBrandMarksAssets.greenLockup.imgClass}
                />
              </div>

              <div className="mt-4 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-black/70">
                Original Lockup
              </div>
            </div>

            <div className="flex flex-col items-center pt-2">
              <div className={ampBrandMarksAssets.redLockup.wrapClass}>
                <img
                  src={ampBrandMarksAssets.redLockup.src}
                  alt={ampBrandMarksAssets.redLockup.alt}
                  className={ampBrandMarksAssets.redLockup.imgClass}
                />
              </div>

              <div className="mt-4 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-black/70">
                Code Red Cherry Lockup
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function AmpPageBreakerSection() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1360px] overflow-hidden">
        <div className="relative min-h-[720px] bg-[#A6CF46]">
          
          <div className="absolute inset-y-0 right-0 w-[46%] overflow-hidden">
  <img
    src={ampLifestyleMovement}
    alt="AMP lifestyle movement background"
    className="h-full w-full object-cover"
  />
</div>

{/* left copy */}
<div className="relative z-10 flex min-h-[720px] items-start">
  <div className="w-full max-w-[58%] px-8 pb-12 pt-20 sm:px-10 lg:px-14 lg:pt-24">
    <div className="max-w-[700px] translate-x-[-180px]  translate-y-[60px]">
      <div className="text-right text-[#004A26] font-black uppercase leading-[0.8] tracking-[-0.1em]">
  <div className="text-[clamp(3.6rem,7vw,6.6rem)]">Amplified</div>
  <div className="text-[clamp(3.6rem,7vw,6.6rem)]">For</div>
  <div className="text-[clamp(3.6rem,7vw,6.6rem)]">Today</div>
</div>

      <p className="mt-14 ml-auto max-w-[520px] text-right text-[clamp(1.25rem,1.8vw,1.6rem)] leading-[1.35] tracking-[-0.02em] text-black">
        The brand moves from a narrow, high-intensity identity toward a{" "}
        <span className="font-semibold text-[#004A26]">
          more versatile and accessible experience
        </span>
        , built to scale across occasions, audiences, and culture.
      </p>
    </div>
  </div>
</div>

         <div className="pointer-events-none absolute inset-0 z-20 overflow-visible">
  <img
    src={ampCan}
    alt="AMP can"
    className="absolute top-1/2 left-[53%] -translate-x-1/2 -translate-y-1/2 h-[100%] w-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
  />
</div>

        </div>
      </div>
    </section>
  );
}
function AmpLockupSection() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-10">
  <div className="mx-auto max-w-[1360px] (nothing) pt-6">

   <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

  {/* LEFT — TEXT */}
  <div className="max-w-[520px]">
    <div className="mb-6 text-[11px] uppercase tracking-[0.24em] text-black/70">
      AMP Lockup
    </div>

    <h2 className="text-[clamp(2.4rem,4vw,4.3rem)] font-black leading-[0.92] tracking-[-0.06em] text-black">
      Logo Construction
    </h2>

    <p className="mt-6 text-[clamp(1rem,1.15vw,1.15rem)] leading-[1.31] tracking-[-0.02em] text-black/75">
      The AMP logo is constructed on a positive 20 degree axis to establish a consistent sense of upward movement and forward momentum. This orientation is not only directional but functional, allowing the mark to occupy a larger visual footprint on pack compared to a horizontal lockup, maximizing scale and shelf presence.
    </p>
  </div>

  {/* RIGHT — HERO LOGO */}
  <div className="relative flex items-center justify-center h-[520px]">
    <img
      src={ampTechnicalLockup}
      alt="AMP technical lockup construction"
      className="w-[90%] max-w-none object-contain translate-y-[75px]"
    />
  </div>

</div>
  </div>
</section>
  );
}

function AmpProjectMetaSection() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1360px] border-t border-black pt-10">

        <div className="grid grid-cols-1 gap-y-12 gap-x-16 md:grid-cols-3">

          <div className="space-y-10">
            <div>
              <p className="mb-4 text-[0.95rem] uppercase tracking-[0.18em] text-black/55">
                Client
              </p>

              <p className="text-[2rem] leading-none tracking-[-0.04em] text-black">
                PepsiCo — AMP Energy
              </p>
            </div>

            <div>
              <p className="mb-4 text-[0.95rem] uppercase tracking-[0.18em] text-black/55">
                Year
              </p>

              <p className="text-[2rem] leading-none tracking-[-0.04em] text-black">
                2025
              </p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[0.95rem] uppercase tracking-[0.18em] text-black/55">
              Role
            </p>

            <p className="text-[2rem] leading-[1.1] tracking-[-0.04em] text-black">
              Lead Brand Designer
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <p className="mb-4 text-[0.95rem] uppercase tracking-[0.18em] text-black/55">
                Discipline
              </p>

              <p className="text-[2rem] leading-[1.1] tracking-[-0.04em] text-black">
                Identity, Packaging, Art Direction
              </p>
            </div>

            <div>
              <p className="mb-4 text-[0.95rem] uppercase tracking-[0.18em] text-black/55">
                Status
              </p>

              <p className="text-[2rem] leading-none tracking-[-0.04em] text-black">
                Shipped 2026
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
function MuscleProjectMetaSection() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1360px] border-t border-black pt-10">

        <div className="grid grid-cols-1 gap-y-12 gap-x-16 md:grid-cols-3">

          <div className="space-y-10">
            <div>
              <p className="mb-4 text-[0.95rem] uppercase tracking-[0.18em] text-black/55">
                Client
              </p>

              <p className="text-[2rem] leading-none tracking-[-0.04em] text-black">
                PepsiCo — Muscle Milk
              </p>
            </div>

            <div>
              <p className="mb-4 text-[0.95rem] uppercase tracking-[0.18em] text-black/55">
                Year
              </p>

              <p className="text-[2rem] leading-none tracking-[-0.04em] text-black">
                2025
              </p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[0.95rem] uppercase tracking-[0.18em] text-black/55">
              Role
            </p>

            <p className="text-[2rem] leading-[1.1] tracking-[-0.04em] text-black">
              Senior Brand Designer
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <p className="mb-4 text-[0.95rem] uppercase tracking-[0.18em] text-black/55">
                Discipline
              </p>

              <p className="text-[2rem] leading-[1.1] tracking-[-0.04em] text-black">
                Brand Strategy, Identity, Packaging, Art Direction
              </p>
            </div>

            <div>
              <p className="mb-4 text-[0.95rem] uppercase tracking-[0.18em] text-black/55">
                Status
              </p>

              <p className="text-[2rem] leading-none tracking-[-0.04em] text-black">
                Shipped 2026
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function AmpProjectOverviewSection() {
  return (
    <section className="px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1350px] pt-10">
        <div className="mx-auto max-w-[1350px]">
          <p className="text-left text-[clamp(2rem,3.7vw,4rem)] font-black leading-[1.03] tracking-[-0.06em] text-black">
            I led the redesign of AMP Energy with the goal of rebuilding the brand as a cohesive system rather than a collection of disconnected visuals. The focus was on creating something that could scale across packaging, digital, and experiences while still feeling true to what made AMP recognizable in the first place.
          </p>
        </div>

        <div className="mt-10 max-w-[1200px] text-left text-[clamp(1.05rem,1.35vw,1.35rem)] leading-[1.28] tracking-[-0.01em] text-black/80">
          <p>
            The identity pulls directly from AMP’s history, carrying forward key elements from past logos and brand cues, while softening and refining the form to feel more modern and approachable. At the same time, the system was aligned with the latest Mountain Dew visual direction so it could sit naturally within the portfolio without losing its edge.
          </p>

          <p className="mt-6">
            From there, I built out the full brand system including the logo and lockups, a striation based graphic language inspired by the original cans, typography, iconography, and a defined visual world. Everything was designed to work together as a flexible and repeatable system.
          </p>

          <p className="mt-6">
            The result is a brand that feels more intentional, more unified, and built to perform across every touchpoint while still holding onto the energy and attitude that defined AMP.
          </p>

          <div className="mt-8 text-[11px] uppercase tracking-[0.22em] text-black/60">
           
   
          </div>
        </div>
      </div>
    </section>
  );
}

function AmpHistorySection() {
  const timelineItems = [
    {
      year: "2001",
      title: "High intensity origin",
      can: ampCan01,
      logo: ampLogo01,
    },
    {
      year: "2011",
      title: "Structured system",
      can: ampCan02,
      logo: ampLogo02,
    },
    {
      year: "2015",
      title: "Shift to approachability",
      can: ampCan03,
      logo: ampLogo02,
    },
    {
      year: "2018",
      title: "Reabsorbed into Dew",
      can: ampCan04,
      logo: ampLogo03,
    },
  ];

  return (
    <section className="px-6 pt-4 pb-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1360px] pt-0">
        <div className="mb-14 max-w-[920px]">
          <div className="mb-6 text-[11px] uppercase tracking-[0.24em] text-black/70">
            Brand History
          </div>

          <h2 className="text-[clamp(2.4rem,4vw,4.3rem)] font-black leading-[0.92] tracking-[-0.06em] text-black">
            Evolution of AMP
          </h2>

          <p className="mt-8 max-w-[900px] text-[clamp(1.05rem,1.5vw,1.35rem)] leading-[1.45] tracking-[-0.025em] text-black/65">
            AMP Energy was once defined by a bold and recognizable visual identity rooted in motion, contrast, and attitude. Looking back at the brand’s evolution made it clear what was worth preserving and what needed to be redefined. This history became the foundation for rebuilding AMP into a more focused, cohesive, and scalable system.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {timelineItems.map((item) => (
            <AmpHistoryCard
              key={item.year}
              year={item.year}
              title={item.title}
              can={item.can}
              logo={item.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AmpHistoryCard({ year, title, can, logo }) {
  return (
    <div className="group">
      <div className="mb-4 text-center text-[clamp(1.4rem,2vw,1.9rem)] font-black tracking-[-0.04em] text-black">
        {year}
      </div>

      <div className="group perspective-[1000px] mx-auto w-full max-w-[220px]">
  <div className="relative aspect-[0.72] w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

    <div className="absolute inset-0 flex items-center justify-center bg-black/[0.03] [backface-visibility:hidden]">
      <img
        src={can}
        alt={`${year} AMP can`}
        className="h-full w-full object-contain"
      />
    </div>

    <div className="absolute inset-0 flex items-center justify-center bg-[#004A26] [transform:rotateY(180deg)] [backface-visibility:hidden]">
      <img
        src={logo}
        alt={`${year} AMP logo`}
        className="max-h-[120px] w-auto max-w-[75%] object-contain"
      />
    </div>

  </div>
</div>

<div className="mx-auto mt-6 h-px w-full max-w-[220px] bg-[#008F4C]" />
<div className="mx-auto h-10 w-px bg-black/15" />

<p className="mx-auto max-w-[220px] text-center text-[0.95rem] leading-[1.35] tracking-[-0.01em] text-black/45">
  {title}
</p>
    </div>
  );
}

function AmpColorArchitectureHoverSection() {
  const systems = [
    {
      title: "Original Citrus",
      primaryHex: "#A6CF46",
      primaryBg: "#A6CF46",
      secondaryBg: "#004A26",
      blackBg: "#000000",
      grayBg: "#D1D2D5",
      whiteBg: "#FAFAFA",
      primaryLabel: "Primary",
    },
    {
      title: "Code Red Cherry",
      primaryHex: "#EF3844",
      primaryBg: "#EF3844",
      secondaryBg: "#3C161A",
      blackBg: "#000000",
      grayBg: "#D1D2D5",
      whiteBg: "#FAFAFA",
      primaryLabel: "Primary",
    },
  ];

  return (
    <section className="px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1360px] pt-2">
        <div className="mb-14 max-w-[980px]">
          <div className="mb-6 text-[11px] uppercase tracking-[0.24em] text-black/70">
            Color Architecture
          </div>

          <h2 className="text-[clamp(2.4rem,4vw,4.3rem)] font-black leading-[0.92] tracking-[-0.06em] text-black">
            Palette System
          </h2>

          <p className="mt-8 max-w-[980px] text-[clamp(1rem,1.15vw,1.15rem)] leading-[1.31] tracking-[-0.02em] text-black/85">
            AMP’s palette system was built through extensive research, competitive audits, and iterative color testing to establish a more ownable presence within the modern energy space. A significant focus was placed on developing AMP’s signature green, balancing vibrancy, shelf standout, and brand recognition without drifting into territory already occupied by competitors. The resulting electric green creates immediate visual impact at shelf while pairing with a deeper secondary green to ground the system and reinforce brand equity. Supporting neutrals including black, silver gray, and white remain consistent across the portfolio, creating a flexible architecture that can expand confidently across future flavor worlds.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {systems.map((system) => (
            <div key={system.title} className="group">
              <div className="relative h-[450px] overflow-hidden rounded-[1rem]">
                {/* primary base */}
                <div
                  className="absolute inset-0 rounded-[1rem]"
                  style={{ backgroundColor: system.primaryBg }}
                />

                {/* title */}
                <div className="absolute left-8 top-8 z-20 text-white">
                  <div className="text-[clamp(1.1rem,1.45vw,1.55rem)] font-black uppercase leading-[0.95] tracking-[-0.03em]">
                    {system.title}
                  </div>
                </div>

                {/* primary label */}
                <div className="absolute bottom-8 left-8 z-20 text-white">
  <div className="relative">
    
    {/* PRIMARY */}
    <div className="absolute bottom-[345px] text-[clamp(1.1rem,1vw,1.4rem)] font-lowercase uppercase tracking-[0.08em]">
      {system.primaryLabel}
    </div>

    {/* HEX */}
    <div className="text-[clamp(0.95rem,1.1vw,1.1rem)] font-medium">
      {system.primaryHex}
    </div>

  </div>
</div>

                {/* animated color drop */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
  {/* secondary strip */}
  <div
    className="absolute right-[12%] top-0 h-full w-[23%] -translate-y-[102%] transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
    style={{ backgroundColor: system.secondaryBg }}
  />

  {/* tertiary stacked bar */}
  <div className="absolute right-0 top-0 h-full w-[12%] -translate-y-[102%] transition-transform duration-900 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
    <div
      className="h-[34%] w-full"
      style={{ backgroundColor: system.blackBg }}
    />
    <div
      className="h-[33%] w-full"
      style={{ backgroundColor: system.grayBg }}
    />
    <div
      className="h-[33%] w-full"
      style={{ backgroundColor: system.whiteBg }}
    />
  </div>
</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AmpTypographySection() {
  const interSpecimen =
    "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz";

  const acuminSpecimen =
    "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz";

  return (
    <section className="px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1360px] pt-10">
        <div className="mb-16 max-w-[980px]">
          <div className="mb-6 text-[11px] uppercase tracking-[0.24em] text-black/70">
            Typography
          </div>

          <h2 className="text-[clamp(2.4rem,4vw,4.3rem)] font-black leading-[0.92] tracking-[-0.06em] text-black">
            Typeface System
          </h2>

          <p className="mt-8 max-w-[980px] text-[clamp(1rem,1.15vw,1.15rem)] leading-[1.31] tracking-[-0.02em] text-black/85">
            AMP’s type system balances bold clarity with expressive energy. Inter
            Black anchors the identity with a strong modern voice, while Acumin Pro
            ExtraCondensed adds a sharper and more aggressive layer to the system.
          </p>
        </div>

        <div className="space-y-5">
          {/* INTER */}
          <div className="group relative overflow-hidden rounded-[1rem] bg-[#A6CF46] text-white transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] h-[116px] hover:h-[330px]">
            <div className="absolute left-8 top-7 z-20">
              <div className="text-[clamp(1.5rem,1.45vw,1.55rem)] font-black uppercase leading-[0.95] tracking-[-0.03em]">
                Inter Black
              </div>
            </div>

            <div className="absolute inset-x-8 top-[90px] translate-y-6 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
              <div className="max-w-[1180px] text-[clamp(1rem,3.2vw,3.4rem)] font-black leading-[1.05] tracking-[-0.055em] text-white">
  {interSpecimen}
</div>

              <div className="mt-12 text-[clamp(2rem,3.4vw,3.6rem)] font-black leading-[0.95] tracking-[-0.055em] text-white">
                $ 0123456789@!
              </div>
            </div>
          </div>

          {/* ACUMIN */}
          <div
            className="group relative overflow-hidden rounded-[1rem] bg-[#23662D] text-white transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] h-[116px] hover:h-[330px]"
            style={{ fontFamily: '"Acumin Pro", "Arial Narrow", sans-serif' }}
          >
            <div className="absolute left-8 top-7 z-20">
              <div className="text-[clamp(1.05rem,1.35vw,1.45rem)] font-black uppercase leading-[0.95] tracking-[-0.03em]">
                <div>Acumin Pro</div>
                <div>ExtraCondensed</div>
              </div>
            </div>

            <div className="absolute inset-x-8 top-[90px] translate-y-6 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
              <div
  className="max-w-[1180px] text-[clamp(1.8rem,3.2vw,3.4rem)] font-black leading-[1.05] tracking-[-0.04em] text-white"
  style={{ fontFamily: '"Acumin Pro", "Arial Narrow", sans-serif' }}
>
  {acuminSpecimen}
</div>

              <div
                className="mt-12 text-[clamp(2rem,3.3vw,3.4rem)] font-black leading-[0.95] tracking-[-0.035em] text-white"
                style={{ fontFamily: '"Acumin Pro", "Arial Narrow", sans-serif' }}
              >
                $ 0123456789@!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AmpLifestyleSection() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1360px] overflow-hidden">
        <img
          src={ampCarLifestyle}
          alt="AMP lifestyle driving moment"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}

function AmpMarketingTextSection() {
  return (
    <section className="px-6 pt-12 pb-4 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1360px]">

        {/* Bold header blurb */}
        <p className="max-w-[1200px] text-left text-[clamp(2.2rem,3.8vw,3rem)] font-black leading-[1.03] tracking-[-0.06em]">
          Working closely with marketing, the focus extended beyond packaging to build a more connected and expressive AMP world across merchandise, lifestyle imagery, campaign assets, and alternative brand touchpoints. The goal was to transform strategic thinking into a flexible visual system capable of showing up consistently across physical, digital, and cultural spaces.
        </p>

        {/* Smaller supporting text */}
        <div className="mt-10 max-w-[900px]">
          <p className="text-[clamp(1rem,1.45vw,1.22rem)] leading-[1.5] text-black/75">
            From apparel and branded accessories to social content, photography direction, and lifestyle focused imagery, the system was designed to create a more immersive and recognizable brand presence beyond the shelf. Establishing cohesive visual behaviors across these touchpoints helped AMP feel more contemporary, ownable, and adaptable across campaigns, partnerships, and future brand expansions.
          </p>
        </div>

      </div>
    </section>
  );
}

function MuscleProjectPage({ project, onNext }) {
  const details = projectDetails.muscle;

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 bg-white text-black">
      {/* paste your custom Muscle page sections here */}
      <section className="px-6 pt-6 sm:px-8 lg:px-10">
        <div className="h-[62vh] min-h-[420px] w-full overflow-hidden rounded-xl">
          <img src={muscleHero} className="w-full h-full object-cover object-center" />
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div>
              <h1 className="max-w-[760px] text-[clamp(2.7rem,4.8vw,4.7rem)] font-black leading-[0.82] tracking-[-0.06em]">
                {project.title}
              </h1>
              <div className="mt-5 flex gap-8 text-[11px] uppercase tracking-[0.18em] text-black/60">
                <span>{details.year}</span>
                <span>{details.category}</span>
              </div>
            </div>

            <div>
              <p className="max-w-[760px] text-[clamp(1.1rem,2vw,1.45rem)] font-semibold leading-[1.35] tracking-[-0.03em]">
                {details.intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      <MuscleProjectMetaSection />

      <MuscleStrategySection />
      <MuscleBrandExpressionSection />
      <MuscleSlide9Section />
      <MuscleProductSlideshowSection />
      <MuscleLifestyleGridSection />
      <MuscleLogoActivationVideoSection />
      <MuscleMotionGridSection />

      <section className="px-6 pb-24 pt-14 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1360px]">
          <button
            type="button"
            onClick={onNext}
            className="text-[clamp(2rem,3vw,3rem)] font-medium tracking-[-0.05em] hover:opacity-60"
          >
            Next Project →
          </button>
        </div>
      </section>
    </div>
  );
}
function MuscleStrategySection() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1360px]">

        <div className="mb-10">
          <p className="mb-4 text-[12px] uppercase tracking-[0.22em] text-black/45">
            Brand Strategy
          </p>

         <h2 className="max-w-[1250px] text-[clamp(2rem,3.5vw,3.6rem)] font-black leading-[0.95] tracking-[-0.06em]">
  Expanding the brand without losing its edge
</h2>
        </div>

        <p className="mt-8 max-w-[1250px] text-[clamp(1.05rem,1.35vw,1.25rem)] leading-[1.5] text-black/75">
          The strategy centered on broadening Muscle Milk's appeal beyond traditional fitness culture. By redefining the brand world around a more modern, inclusive performance mindset, we created a foundation that could flex across packaging, campaigns, and future innovation while remaining unmistakably Muscle Milk.
        </p>
         <img
  src={mmSlide2}
  alt="Muscle Milk Strategy"
  className="mt-12 w-full rounded-xl"
/>

<img
  src={mmSlide3}
  alt="Muscle Milk audience strategy"
  className="mt-6 w-full rounded-xl"
/>

<img
  src={mmSlide4}
  alt="Muscle Milk brand strategy direction"
  className="mt-6 w-full rounded-xl"
/>

<img
  src={mmSlide6}
  alt="Muscle Milk strategy slide"
  className="mt-6 w-full rounded-xl"
/>

<img
  src={mmSlide7}
  alt="Muscle Milk strategy slide"
  className="mt-6 w-full rounded-xl"
/>

<img
  src={mmSlide8}
  alt="Muscle Milk strategy slide"
  className="mt-6 w-full rounded-xl"
/>

      </div>
    </section>
  );
}

function MuscleBrandExpressionSection() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1360px]">

        <div className="mb-16">
          <p className="mb-8 text-[12px] uppercase tracking-[0.22em] text-black/45">
            Brand Expression
          </p>

          <h2 className="max-w-[1250px] text-[clamp(2rem,3.5vw,3.6rem)] font-black leading-[0.95] tracking-[-0.06em]">
            Muscle Milk Visual World
          </h2>

          <p className="mt-12 max-w-[1250px] text-[clamp(1.05rem,1.35vw,1.25rem)] leading-[1.5] text-black/75">
            This new brand expression brought the strategy to life through a cohesive visual language across product imagery, lifestyle photography, motion, and campaign storytelling. Creating a world that felt modern, approachable, and unmistakably Muscle Milk.
          </p>
        </div>

        <img
          src={mmBrandWorld}
          alt="Muscle Milk visual world"
          className="w-full rounded-xl"
        />

        <p className="mt-5 max-w-[980px] text-[0.9rem] leading-[1.5] tracking-[-0.01em] text-black/55">
          The visual world brings together the core ingredients of the rebrand, including bold product moments, blue sky backdrops, lifestyle cues, macro flavor imagery, ticker tape messaging, and confident typography, creating a system that feels flexible, ownable, and unmistakably Muscle Milk.
        </p>

      </div>
    </section>
  );
}

function MuscleSlide9Section() {
  return (
    <section className="px-6 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1360px]">
        <img
          src={mmSlide9}
          alt="Muscle Milk brand expression slide"
          className="w-full rounded-xl"
        />
      </div>
    </section>
  );
}

function MuscleProductSlideshowSection() {
  const productImages = [
  mmProductLineup33,
  mmProductLineup26,
  mmProductLineup42,
  mmProductLineup4226,
  mmHeroSingle26Choc14oz,
  mmHeroSingle26Choc11oz,
  mmHeroSingle33Straw11oz,
  mmHeroDuo26ChocVan14oz,
  mmHeroDuo42ChocVan14oz,
  mmHeroDuoStraw14oz,
  mmHeroDuo3326Cnc11oz,
  mmHeroDuo3326Vc11oz,
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + productImages.length) % productImages.length
    );
  };

  return (
    <section className="px-6 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1360px]">

        <div className="relative overflow-hidden rounded-xl bg-white">

          <img
            src={productImages[activeIndex]}
            alt="Muscle Milk product photography"
            className="w-full h-auto object-contain"
          />

          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-6 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black"
          >
            ←
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-6 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black"
          >
            →
          </button>

        </div>

      </div>
    </section>
  );
}

function MuscleLifestyleGridSection() {
  return (
    <section className="px-6 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1360px]">

        <div className="grid grid-cols-12 gap-2">

          {/* LARGE HERO IMAGE */}
          <div className="col-span-12 overflow-hidden rounded-xl lg:col-span-8 lg:row-span-2">
            <img
              src={mmRoadTripLifestyle}
              alt="Muscle Milk road trip lifestyle"
              className="h-full w-full object-cover"
            />
          </div>

          {/* TWO SMALLER IMAGES STACKED ON RIGHT */}
          <div className="col-span-6 overflow-hidden rounded-xl lg:col-span-4">
            <img
              src={mmMacroChocolateDry}
              alt="Muscle Milk chocolate macro"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="col-span-6 overflow-hidden rounded-xl lg:col-span-4">
            <img
              src={mmMacroFlatlayCookies}
              alt="Muscle Milk cookies macro"
              className="h-full w-full object-cover"
            />
          </div>

          {/* MEDIUM ROW */}
          <div className="col-span-12 overflow-hidden rounded-xl lg:col-span-5">
            <img
              src={mmLockerLifestyle}
              alt="Muscle Milk locker lifestyle"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="col-span-12 overflow-hidden rounded-xl lg:col-span-7">
            <img
              src={mmHikeLifestyle}
              alt="Muscle Milk hiking lifestyle"
              className="h-full w-full object-cover"
            />
          </div>

          {/* FOUR SMALL MACRO IMAGES */}
          <div className="col-span-6 overflow-hidden rounded-xl lg:col-span-3">
            <img
              src={mmMacroVanillaDrip}
              alt="Muscle Milk vanilla macro"
              className="h-full w-full object-cover"
            />
          </div>

<div className="col-span-6 overflow-hidden rounded-xl lg:col-span-3">
            <img
              src={mmMacroReversePowder}
              alt="Muscle Milk powder macro"
              className="h-full w-full object-cover"
            />
          </div> 

          <div className="col-span-6 overflow-hidden rounded-xl lg:col-span-3">
            <img
              src={mmMacroMilk}
              alt="Muscle Milk milk macro"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="col-span-6 overflow-hidden rounded-xl lg:col-span-3">
            <img
              src={mmMacroImprintPowder}
              alt="Muscle Milk powder imprint macro"
              className="h-full w-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

function MuscleLogoActivationVideoSection() {
  return (
    <section className="px-6 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1360px]">

        <video
          src={mmLogoActivationVideo}
          className="w-full rounded-xl"
          autoPlay
          muted
          loop
          playsInline
          controls
        />

      </div>
    </section>
  );
}

function MuscleMotionGridSection() {
  return (
    <section className="px-6 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1360px]">

        <div className="grid grid-cols-12 gap-2">

          {/* TOP ROW: VERTICAL + SQUARE / 4x5 */}
          <div className="col-span-12 overflow-hidden rounded-xl lg:col-span-5">
            <video
              src={mmVideoVerticalProduct}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>

          <div className="col-span-12 overflow-hidden rounded-xl lg:col-span-7">
            <video
              src={mmVideoLifestyleBase}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>

          {/* BOTTOM ROW: WIDE 16x9 */}
          <div className="col-span-12 overflow-hidden rounded-xl">
            <video
              src={mmVideoMiddayMoments}
              className="w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>

        </div>

      </div>
    </section>
  );
}

function LoreaSlidesSection() {
 const loreaSlides = [
  loreaSlide01A,
  loreaOurStory,
  loreaFlowerMeaning,
  loreaBrandPositioning,

  loreaWhoWeAre,
  loreaWhatWeDo,
  loreaHowDoWeDoIt,
  loreaWhyWeDoIt,
  loreaProductOne,
  loreaProductTwo,
  loreaStory,
  loreaMessagingPillars,
  loreaIngredients,
  loreaPhotoImagery,
  loreaPersonality,

  loreaLogoIntro,
  loreaLogoOne,
  loreaLogoTwo,
  loreaLogoThree,
  loreaLogoFour,

  loreaColorOne,
  loreaColorIntro,
  loreaColorTwo,
  loreaColorThree,

  loreaTypeOne,
  loreaTypeIntro,
  loreaTypeTwo,
  loreaTypeThree,
  loreaTypeFour,

  loreaVisToolkitOne,
  loreaVisToolkitIntro,
    loreaVisToolkitTwo,
  loreaVisToolkitThree,
  loreaVisToolkitFour,
  loreaVisToolkitFive,

  loreaPhotoImageryOne,
  loreaPhotoImageryTwo,

  loreaCollageDeepSleep,
  loreaCollageEpicEnergy,
  loreaCollageSharpFocus,
  loreaCollageSimplyHappy,
  loreaDreamworldRealism,

  loreaProductRendersOne,
  loreaProductRendersTwo,
  loreaProductRendersThree,

  loreaProductRendersFamily,
  loreaProductRendersFamilyTwo,

  loreaIngredientPhotography,

  loreaKvsInTheWild,
  loreaKvOne,
  loreaKvTwo,
  loreaKvThree,

  loreaMerch,
    loreaMerchOne,
  loreaMerchTwo,
  loreaMerchThree,
  loreaMerchFour,
  loreaMerchFive,

];

  return (
    <section className="px-6 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1360px] space-y-6">
        {loreaSlides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Lorea slide ${index + 1}`}
            className="w-full rounded-xl"
          />
        ))}
      </div>
    </section>
  );
}

function RockstarSlidesSection() {
  const rockstarSlides = [
    rockstarSlide1,
    rockstarSlide2,
    rockstarSlide3,
    rockstarSlide4,
    rockstarSlide5,
    rockstarSlide6,
    rockstarSlide7,
    rockstarSlide8,
    rockstarSlide9,
    rockstarSlide10,
    rockstarSlide11,
  ];

  return (
    <section className="px-6 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1360px] space-y-6">
        {rockstarSlides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Rockstar Open slide ${index + 1}`}
            className="w-full rounded-xl"
          />
        ))}
      </div>
    </section>
  );
}

function RockstarMediaSlideshowSection() {
  const mediaSlides = [
    [
      { type: "image", src: rockstarPic01 },
      { type: "video", src: rockstarVid01 },
      { type: "image", src: rockstarPic02 },
      { type: "image", src: rockstarPic03 },
    ],
    [
      { type: "image", src: rockstarPic04 },
      { type: "image", src: rockstarPic05 },
      { type: "video", src: rockstarVid03 },
      { type: "image", src: rockstarPic06 },
    ],
    [
      { type: "image", src: rockstarPic07 },
      { type: "video", src: rockstarVid04 },
      { type: "image", src: rockstarPic08 },
      { type: "image", src: rockstarPic09 },
    ],
    [
      { type: "image", src: rockstarPic010 },
      { type: "image", src: rockstarPic011 },
      { type: "video", src: rockstarVid05 },
      { type: "image", src: rockstarPic012 },
    ],
    [
      { type: "image", src: rockstarPic013 },
      { type: "video", src: rockstarVid06 },
      { type: "image", src: rockstarPic014 },
      { type: "image", src: rockstarPic015 },
    ],
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % mediaSlides.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + mediaSlides.length) % mediaSlides.length
    );
  };

  return (
    <section className="px-6 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1360px]">
        <div className="relative overflow-hidden rounded-xl bg-black p-2">

          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {mediaSlides[activeIndex].map((item, index) => (
              <div
                key={index}
                className="aspect-[9/16] overflow-hidden rounded-lg bg-black"
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  />
                ) : (
                  <img
                    src={item.src}
                    alt="Rockstar Open"
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-6 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black"
          >
            ←
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-6 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black"
          >
            →
          </button>

        </div>
      </div>
    </section>
  );
}

function PepsiProjectMetaSection() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1360px] border-t border-black pt-10">
        <div className="grid grid-cols-1 gap-y-12 gap-x-16 md:grid-cols-3">

          <div className="space-y-10">
            <div>
              <p className="mb-4 text-[0.95rem] uppercase tracking-[0.18em] text-black/55">
                Client
              </p>

              <p className="text-[2rem] leading-none tracking-[-0.04em] text-black">
                PepsiCo — Pepsi x Bobby Flay
              </p>
            </div>

            <div>
              <p className="mb-4 text-[0.95rem] uppercase tracking-[0.18em] text-black/55">
                Year
              </p>

              <p className="text-[2rem] leading-none tracking-[-0.04em] text-black">
                2024
              </p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[0.95rem] uppercase tracking-[0.18em] text-black/55">
              Role
            </p>

            <p className="text-[2rem] leading-[1.1] tracking-[-0.04em] text-black">
              Senior Brand Designer
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <p className="mb-4 text-[0.95rem] uppercase tracking-[0.18em] text-black/55">
                Discipline
              </p>

              <p className="text-[2rem] leading-[1.1] tracking-[-0.04em] text-black">
                Product Visualization, Art Direction, Prototyping
              </p>
            </div>

            <div>
         
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function RockstarProjectMetaSection() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1360px] border-t border-black pt-10">
        <div className="grid grid-cols-1 gap-y-12 gap-x-16 md:grid-cols-3">

          <div className="space-y-10">
            <div>
              <p className="mb-4 text-[0.95rem] uppercase tracking-[0.18em] text-black/55">
                Client
              </p>

              <p className="text-[2rem] leading-none tracking-[-0.04em] text-black">
                PepsiCo — Rockstar Energy
              </p>
            </div>

            <div>
              <p className="mb-4 text-[0.95rem] uppercase tracking-[0.18em] text-black/55">
                Year
              </p>

              <p className="text-[2rem] leading-none tracking-[-0.04em] text-black">
                2025
              </p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[0.95rem] uppercase tracking-[0.18em] text-black/55">
              Role
            </p>

            <p className="text-[2rem] leading-[1.1] tracking-[-0.04em] text-black">
              Lead Designer
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <p className="mb-4 text-[0.95rem] uppercase tracking-[0.18em] text-black/55">
                Discipline
              </p>

              <p className="text-[2rem] leading-[1.1] tracking-[-0.04em] text-black">
                Lead Experiential Design, Creative Direction, Art Direction
              </p>
            </div>

            <div>
              <p className="mb-4 text-[0.95rem] uppercase tracking-[0.18em] text-black/55">
                Status
              </p>

              <p className="text-[2rem] leading-none tracking-[-0.04em] text-black">
                Shipped 2025
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ProjectPage({ project, onBack, onNext }) {
  const details = projectDetails[project.id] || {
    year: "2025",
    category: "CASE STUDY",
    intro: "Project overview coming soon.",
    lead: "Detailed case study content coming soon.",
    body: "Additional project information coming soon.",
  };

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 bg-white text-black">
<section className="px-6 pt-6 sm:px-8 lg:px-10">
  {project.id === "amp" ? (
    <div className="h-[62vh] min-h-[420px] w-full overflow-hidden rounded-xl">
      <img src={ampHero} className="w-full h-full object-cover object-[50%_35%]" />
    </div>
  ) : project.id === "muscle" ? (
    <div className="h-[62vh] min-h-[420px] w-full overflow-hidden rounded-xl">
      <img src={muscleHero} className="w-full h-full object-cover object-center" />
    </div>
  ) : project.id === "lorea" ? (
    <div className="h-[62vh] min-h-[420px] w-full overflow-hidden rounded-xl">
      <img src={loreaHero} className="w-full h-full object-cover object-center" />
    </div>
  ) : project.id === "rockstar" ? (
    <div className="h-[62vh] min-h-[420px] w-full overflow-hidden rounded-xl">
      <img src={rockstarHero} className="w-full h-full object-cover object-center" />
    </div>
  ) : project.id === "pepsi" ? (
  <div className="h-[62vh] min-h-[420px] w-full overflow-hidden rounded-xl">
    <img
      src={bobbyHero}
      className="w-full h-full object-cover object-[50%_40%]"
    />
  </div>
) : project.id === "kickstart" ? (
  <div className="h-[62vh] min-h-[420px] w-full overflow-hidden rounded-xl">
    <img
      src={rileyHero}
      alt="Riley Vail Hair opener"
      className="h-full w-full object-cover object-center"
    />
  </div>
) : (
  <div className="h-[54vh] min-h-[360px] w-full bg-[#e5e5e5]" />
)}
</section>

<section className="px-6 py-14 sm:px-8 lg:px-10">
  <div className="mx-auto max-w-[1360px]">
    <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
      <div>
        <h1 className="max-w-[760px] text-[clamp(2.7rem,4.8vw,4.7rem)] font-black tracking-[-0.06em] leading-[0.8]">
          {project.title}
        </h1>
        <div className="mt-5 flex gap-8 text-[11px] uppercase tracking-[0.18em] text-black/60">
          <span>{details.year}</span>
          <span>{details.category}</span>
        </div>
      </div>

      <div>
        <p className="max-w-[760px] text-[clamp(1.1rem,2vw,1.45rem)] font-semibold leading-[1.35] tracking-[-0.03em]">
          {details.intro}
        </p>
      </div>
    </div>
  </div>
</section>

{project.id === "amp" && <AmpProjectMetaSection />}
{project.id === "lorea" && <LoreaProjectMetaSection />}
{project.id === "lorea" && <LoreaSlidesSection />}
{project.id === "rockstar" && <RockstarProjectMetaSection />}
{project.id === "rockstar" && <RockstarSlidesSection />}
{project.id === "pepsi" && <PepsiProjectMetaSection />}
{project.id === "pepsi" && (
  <section className="px-6 py-10 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-[1360px]">
      <img
        src={bobbiFragranceKit3}
        alt="Pepsi x Bobbi Flay fragrance kit design"
        className="w-full rounded-xl"
      />
    </div>
  </section>
)}

{project.id === "pepsi" && (
  <section className="px-6 py-10 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-[1360px]">
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/9s9oPZZGOKs"
          title="Pepsi x Bobbi Flay video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  </section>
)}

{project.id === "pepsi" && (
  <section className="px-6 py-10 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-[1360px] space-y-6">
      <img
        src={bobbiFragranceKit5}
        alt="Pepsi x Bobbi Flay fragrance kit design"
        className="w-full rounded-xl"
      />

      <img
        src={bobbiFragranceKit6}
        alt="Pepsi x Bobbi Flay fragrance kit design"
        className="w-full rounded-xl"
      />
    </div>
  </section>
)}

{project.id === "pepsi" && (
  <section className="px-6 py-10 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-[1360px]">
      <div className="mb-6">
        <p className="text-[0.85rem] uppercase tracking-[0.18em] text-black/50">
          Concept Development
        </p>
        <h2 className="mt-3 text-[clamp(2.2rem,4vw,4.5rem)] font-black leading-[0.9] tracking-[-0.06em]">
          Grilling Fragrance Exploration
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-3">
        {/* LARGE MOOD BOARD */}
        <div className="col-span-12 overflow-hidden rounded-xl lg:col-span-8 lg:row-span-2">
          <img
            src={bobbiMoodBoard}
            alt="Pepsi x Bobbi Flay grilling fragrance mood board"
            className="h-full min-h-[520px] w-full object-cover"
          />
        </div>

        {/* SMALLER CONCEPT IMAGES */}
        <div className="col-span-6 overflow-hidden rounded-xl lg:col-span-4">
          <img
            src={bobbiMiniGrillCopy}
            alt="Pepsi charcoal bag concept sketch"
            className="h-full min-h-[255px] w-full object-cover"
          />
        </div>

        <div className="col-span-6 overflow-hidden rounded-xl lg:col-span-4">
          <img
            src={bobbiFireStarter}
            alt="Pepsi grilling wood packaging concept sketch"
            className="h-full min-h-[255px] w-full object-cover"
          />
        </div>

        <div className="col-span-6 overflow-hidden rounded-xl lg:col-span-6">
          <img
            src={bobbiFrameTwo}
            alt="Pepsi mini grill product visualization"
            className="h-full min-h-[320px] w-full object-cover"
          />
        </div>

        <div className="col-span-6 overflow-hidden rounded-xl lg:col-span-6">
          <img
            src={bobbiMiniGrill}
            alt="Pepsi mini grill garden concept sketch"
            className="h-full min-h-[320px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
)}

{project.id === "pepsi" && (
  <section className="px-6 py-10 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-[1360px]">
      <div className="mb-6">
        <p className="text-[0.85rem] uppercase tracking-[0.18em] text-black/50">
          Final Campaign Assets
        </p>
        <h2 className="mt-3 text-[clamp(2.2rem,4vw,4.5rem)] font-black leading-[0.9] tracking-[-0.06em]">
          Smoked by Pepsi & Bobby Flay
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-3">
        {/* LARGE VIDEO */}
        <div className="col-span-12 overflow-hidden rounded-xl bg-black lg:col-span-8 lg:row-span-2">
          <video
            src={bobbiFinalVideo}
            className="h-full min-h-[620px] w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>

        {/* IMAGE 1 */}
        <div className="col-span-6 overflow-hidden rounded-xl lg:col-span-4">
          <img
            src={bobbiFinalKV}
            alt="Smoked by Pepsi and Bobbi Flay key visual"
            className="h-full min-h-[305px] w-full object-cover"
          />
        </div>

        {/* IMAGE 2 */}
        <div className="col-span-6 overflow-hidden rounded-xl lg:col-span-4">
          <img
            src={bobbiBottleHero}
            alt="Smoked cologne bottle render"
            className="h-full min-h-[305px] w-full object-cover"
          />
        </div>

        {/* IMAGE 3 */}
        <div className="col-span-6 overflow-hidden rounded-xl lg:col-span-4">
          <img
            src={bobbiGrillClosed}
            alt="Pepsi grill closed hero render"
            className="h-full min-h-[320px] w-full object-cover"
          />
        </div>

        {/* IMAGE 4 */}
        <div className="col-span-6 overflow-hidden rounded-xl lg:col-span-4">
          <img
            src={bobbiGrillHero}
            alt="Pepsi grill with Smoked cologne hero render"
            className="h-full min-h-[320px] w-full object-cover"
          />
        </div>

        {/* WIDE IMAGE */}
        <div className="col-span-12 overflow-hidden rounded-xl lg:col-span-4">
          <img
            src={bobbiHeroFinal}
            alt="Smoked cologne final hero image"
            className="h-full min-h-[320px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
)}

{project.id === "rockstar" && <RockstarMediaSlideshowSection />}
{project.id === "muscle" && <MuscleProjectMetaSection />}
{project.id === "amp" && <AmpProjectOverviewSection />}
{project.id === "amp" && <AmpHistorySection />}
{project.id === "amp" && <AmpBrandMarksSection />}
{project.id === "amp" && <AmpPageBreakerSection />}
{project.id === "amp" && <AmpLockupSection />}
{project.id === "amp" && <AmpColorArchitectureHoverSection />}
{project.id === "amp" && <AmpTypographySection />}
{project.id === "amp" && <AmpLifestyleSection />}
{project.id === "amp" && <AmpMarketingTextSection />}

{project.id !== "lorea" && project.id !== "rockstar" && project.id !== "pepsi" && project.id !== "kickstart" && (
  <>
      <section className="px-6 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1360px]">
          <div className="mx-auto max-w-[980px]">
            <p className="text-[clamp(2rem,3.8vw,3.6rem)] font-black leading-[1.08] tracking-[-0.06em]">
              {details.lead}
            </p>

            <div className="mt-10 max-w-[860px] space-y-6 text-[clamp(1rem,1.45vw,1.24rem)] leading-[1.45] text-black/75">
              <p>{details.body}</p>
              <div className="pt-2 text-[0.95rem] leading-[1.4] text-black/75">
    
   
              </div>
            </div>
          </div>
        </div>
      </section>

     <section className="px-6 pt-0 pb-0 sm:px-8 lg:px-10 -mt-12">
  <div className="mx-auto flex max-w-[1360px] items-stretch gap-6">

    {/* LEFT: tall can closeups */}
    <div className="flex h-[520px] shrink-0 gap-0">
      <img
        src={cherryTight}
        alt="Cherry AMP detail"
        className="h-full w-auto object-contain"
      />

      <img
        src={ogTight}
        alt="OG AMP detail"
        className="h-full w-auto object-contain"
      />
    </div>

    {/* RIGHT: lifestyle image */}
    <div className="h-[520px] flex-1 overflow-hidden">
      <img
        src={guysOnBlanket}
        alt="AMP lifestyle"
        className="h-full w-full object-cover object-center"
      />
    </div>

  </div>
</section>

      <section className="px-6 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1360px]">
         <img
  src={ampCooler}
  alt="AMP cooler"
  className="w-full h-[420px] object-cover"
/>
        </div>
      </section>
        </>
)}

{project.id === "kickstart" && (
  <section className="px-6 py-20 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-[1360px]">
      <div className="max-w-[1120px]">
        <p className="mb-6 text-[0.85rem] uppercase tracking-[0.22em] text-black/45">
          Brand Strategy
        </p>

        <h2 className="max-w-[1180px] text-[clamp(2.4rem,4.8vw,5rem)] font-black leading-[0.9] tracking-[-0.07em] text-black">
          Building a softer, more personal beauty brand
        </h2>

        <p className="mt-10 max-w-[1040px] text-[clamp(1.05rem,1.45vw,1.35rem)] leading-[1.45] tracking-[-0.025em] text-black/75">
          Riley Vail Hair was shaped around creating a warm, approachable, and elevated brand world that felt personal, expressive, and polished. The strategy focused on building a visual identity with softness, confidence, and a clear point of view — giving the brand a foundation that could grow across services, social content, product moments, and future touchpoints.
        </p>
      </div>
    </div>
  </section>
)}

{project.id === "kickstart" && (
  <section className="px-6 py-8 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-[1360px]">
      <img
        src={rileyPage01}
        alt="Riley Vail Hair brand overview"
        className="w-full"
      />
    </div>
  </section>
)}

{project.id === "kickstart" && (
  <section className="px-6 py-8 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-[1360px]">
      <img
        src={rileyPage02}
        alt="Riley Vail Hair brand overview"
        className="w-full"
      />
    </div>
  </section>
)}

{project.id === "kickstart" && (
  <section className="px-6 py-8 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-[1360px]">
      <img
        src={rileyPage03}
        alt="Riley Vail Hair brand overview"
        className="w-full"
      />
    </div>
  </section>
)}

{project.id === "kickstart" && (
  <section className="px-6 py-8 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-[1360px]">
      <img
        src={rileyPage04}
        alt="Riley Vail Hair brand overview"
        className="w-full"
      />
    </div>
  </section>
)}

{project.id === "kickstart" && (
  <section className="px-6 py-8 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-[1360px]">
      <img
        src={rileyPage05}
        alt="Riley Vail Hair brand overview"
        className="w-full"
      />
    </div>
  </section>
)}

{project.id === "kickstart" && (
  <section className="px-6 py-8 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-[1360px]">
      <img
        src={rileyPage06}
        alt="Riley Vail Hair brand overview"
        className="w-full"
      />
    </div>
  </section>
)}

{project.id === "kickstart" && (
  <section className="px-6 py-8 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-[1360px]">
      <img
        src={rileyPage07}
        alt="Riley Vail Hair brand overview"
        className="w-full"
      />
    </div>
  </section>
)}

{project.id === "kickstart" && (
  <section className="px-6 py-8 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-[1360px]">
      <img
        src={rileyPage08}
        alt="Riley Vail Hair brand overview"
        className="w-full"
      />
    </div>
  </section>
)}

{project.id === "kickstart" && (
  <section className="px-6 py-8 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-[1360px]">
      <img
        src={rileyPage09}
        alt="Riley Vail Hair brand overview"
        className="w-full"
      />
    </div>
  </section>
)}

{project.id === "kickstart" && (
  <section className="px-6 py-8 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-[1360px]">
      <img
        src={rileyPage010}
        alt="Riley Vail Hair brand overview"
        className="w-full"
      />
    </div>
  </section>
)}

{project.id === "kickstart" && (
  <section className="px-6 py-8 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-[1360px]">
      <img
        src={rileyPage011}
        alt="Riley Vail Hair brand overview"
        className="w-full"
      />
    </div>
  </section>
)}

{project.id === "kickstart" && <RileyPhysicalSlideshowSection />}

{project.id === "kickstart" && (
  <section className="px-6 py-8 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-[1360px]">
      <img
        src={rileyPage012}
        alt="Riley Vail Hair brand overview"
        className="w-full"
      />
    </div>
  </section>
)}

{project.id === "kickstart" && (
  <section className="px-6 py-8 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-[1360px]">
      <img
        src={rileyPage013}
        alt="Riley Vail Hair brand overview"
        className="w-full"
      />
    </div>
  </section>
)}

{project.id === "kickstart" && (
  <section className="px-6 py-8 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-[1360px]">
      <img
        src={rileyPage014}
        alt="Riley Vail Hair brand overview"
        className="w-full"
      />
    </div>
  </section>
)}

{project.id === "amp" && <AmpMerchSlideshowSection />}

      <section className="px-6 pb-24 pt-14 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1360px]">
          <button
            type="button"
            onClick={onNext}
            className="text-[clamp(2rem,3vw,3rem)] font-medium tracking-[-0.05em] hover:opacity-60"
          >
            Next Project →
          </button>
        </div>
      </section>
    </div>
  );
}

function AmpMerchSlideshowSection() {
  const merchImages = [
    ampHat5,
    ampHat11,
    ampHat6,
    ampJacket8,
    ampJacket2,
    ampJacket6,
    ampJacket10,
    ampJacket11,
    ampHat3,
    ampHat9,
    ampHatsCompiled,
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % merchImages.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + merchImages.length) % merchImages.length
    );
  };

  return (
  <section className="px-6 py-10 sm:px-8 lg:px-10">
    <div className="mx-auto max-w-[1360px]">

      <div className="relative overflow-hidden bg-white">

        {/* IMAGE */}
        <img
          src={merchImages[activeIndex]}
          alt="AMP merch"
          className="w-full h-auto object-contain"
        />

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black"
        >
          ←
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black"
        >
          →
        </button>

      </div>

      {/* FULL WIDTH IMAGE UNDER SLIDESHOW */}
      <section className="px-0 py-6">
        <div className="mx-auto max-w-[1500px]">
          <img
            src={manDrinkingOgAmp}
            alt="Man drinking OG AMP"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

    </div>
  </section>
);
}

function RileyPhysicalSlideshowSection() {
  const slides = [
    rileyPhysical01,
    rileyPhysical02,
    rileyPhysical03,
    rileyPhysical04,
    rileyPhysical05,
    rileyPhysical06,
    rileyPhysical07,
    rileyPhysical08,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <section className="px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1360px]">

        <div className="relative overflow-hidden rounded-xl bg-[#f6efe0]">
          <img
            src={slides[currentSlide]}
            alt="Riley Vail Hair physical brand application"
            className="h-[760px] w-full object-contain"
          />

          <button
            type="button"
            onClick={previousSlide}
            className="absolute left-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white hover:opacity-70"
          >
            ←
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white hover:opacity-70"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}

function LoreaProjectMetaSection() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1360px] border-t border-black pt-10">

        <div className="grid grid-cols-1 gap-y-12 gap-x-16 md:grid-cols-3">

          <div className="space-y-10">
            <div>
              <p className="mb-4 text-[0.95rem] uppercase tracking-[0.18em] text-black/55">
                Client
              </p>

              <p className="text-[2rem] leading-none tracking-[-0.04em] text-black">
                Lorea
              </p>
            </div>

            <div>
              <p className="mb-4 text-[0.95rem] uppercase tracking-[0.18em] text-black/55">
                Year
              </p>

              <p className="text-[2rem] leading-none tracking-[-0.04em] text-black">
                2025
              </p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[0.95rem] uppercase tracking-[0.18em] text-black/55">
              Role
            </p>

            <p className="text-[2rem] leading-[1.1] tracking-[-0.04em] text-black">
              Brand Designer
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <p className="mb-4 text-[0.95rem] uppercase tracking-[0.18em] text-black/55">
                Discipline
              </p>

              <p className="text-[2rem] leading-[1.1] tracking-[-0.04em] text-black">
                Product Visualization, Brand Strategy, Brand Design
              </p>
            </div>

            <div>
       
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


export default function DylanVailPortfolio() {
  const [currentPage, setCurrentPage] = useState("home");
  const [activeProject, setActiveProject] = useState(null);

  const goHome = () => {
    setActiveProject(null);
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goWork = () => {
    setCurrentPage("work");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goAbout = () => {
    setCurrentPage("about");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goContact = () => {
    setCurrentPage("home");
    requestAnimationFrame(() => {
      const target = document.getElementById("contact");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  };

  const openProject = (project) => {
    setActiveProject(project);
    setCurrentPage("project");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openNextProject = () => {
    if (!activeProject) return;
    const currentIndex = homeProjects.findIndex((item) => item.id === activeProject.id);
    const nextProject = homeProjects[(currentIndex + 1) % homeProjects.length];
    setActiveProject(nextProject);
    setCurrentPage("project");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="fixed inset-x-0 top-0 z-50 bg-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={goHome}
            className="text-[11px] font-medium uppercase tracking-[0.2em]"
          >
            Dylan Vail
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => {
              const onClick =
                item.page === "work"
                  ? goWork
                  : item.page === "about"
                    ? goAbout
                    : item.label === "contact"
                      ? goContact
                      : goHome;

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={onClick}
                  className="text-[11px] uppercase tracking-[0.2em] hover:opacity-60"
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

     <main className="px-4 pt-20 sm:px-6 lg:px-8">
  {currentPage === "project" && activeProject ? (
    activeProject.id === "muscle" ? (
      <MuscleProjectPage
        project={activeProject}
        onNext={openNextProject}
      />
    ) : (
      <ProjectPage
        project={activeProject}
        onBack={goWork}
        onNext={openNextProject}
      />
    )
  ) : currentPage === "home" ? (
    <HomePage />
  ) : currentPage === "about" ? (
    <AboutPage />
  ) : (
    <WorkPage
      onBackHome={goHome}
      onProjectClick={openProject}
    />
  )}
</main>

      {currentPage !== "project" && (
        <footer className="border-t border-black px-4 py-5 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-2 text-[11px] uppercase tracking-[0.2em] sm:flex-row sm:items-center sm:justify-between">
            <div>Dylan Vail ©2026</div>
            <div className="flex gap-6">
              <button type="button" onClick={goWork} className="hover:opacity-60">
                Work
              </button>
              <button type="button" onClick={goAbout} className="hover:opacity-60">
                About
              </button>
              <button type="button" onClick={goContact} className="hover:opacity-60">
                Contact
              </button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
