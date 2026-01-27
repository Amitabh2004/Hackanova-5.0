/**
 * Cloudinary Utility Configuration for HackAnnova 5.0
 * Account: dnbv1ezf3
 */

import FAQ from "@/app/faqs/page";
import { get } from "http";

const CLOUD_NAME = "dnbv1ezf3";

/**
 * Generates an optimized Cloudinary URL for images.
 * @param publicId - The unique identifier of the asset in Cloudinary.
 * @returns Optimized URL string with auto-format and auto-quality.
 */
export const getCldImageUrl = (publicId: string) => {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto/${publicId}`;
};

/**
 * Generates an optimized Cloudinary URL for videos.
 * @param publicId - The unique identifier of the video asset.
 * @returns Optimized URL string for video streaming.
 */
export const getCldVideoUrl = (publicId: string) => {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_auto,f_auto/${publicId}.mp4`;
};

/**
 * Centralized Asset Registry
 * Replace the placeholder Public IDs with your actual IDs from the Cloudinary Dashboard.
 */
export const CLD_ASSETS = {
  // Backgrounds
  MAIN_BG_VIDEO: getCldVideoUrl("bg-video2_br1xof"),
  TRACK_BG: getCldImageUrl("ai-generated-9111148_1920_jpht0f"),
  CHRONOLOGY_BG: getCldImageUrl("cosmic-bg_c3b3au"),
  TIMELINE_BG: getCldImageUrl("timeline-bg_eqfux4"),
  PRIZES_BG: getCldImageUrl("prize-bg_muc38t"),
  ABOUT_US_BG: getCldImageUrl("about-bg_jlwhqh"),
  FAQ_BG: getCldImageUrl("question-mark-5483259_1920_qn3jc7"),
  MARQUEE_IMAGES: [
    getCldImageUrl("img1_lgoide"), // Replace "img1_public_id" with your actual IDs
    getCldImageUrl("img2_ie9o8v"),
    getCldImageUrl("img4_ee7gwu"),
    getCldImageUrl("img3_kit5tg"),
    getCldImageUrl("img6_iaourd"),
    getCldImageUrl("img7_ilxjzx"),
    getCldImageUrl("img5_uooyki"),
    getCldImageUrl("img8_kw4hkz"),
    getCldImageUrl("img9_i6vpnt"),
    getCldImageUrl("img10_ttumvr"),
    getCldImageUrl("img11_ceukza"),
    getCldImageUrl("img12_egmx8y"),
    getCldImageUrl("img13_ej5qdp"),
    getCldImageUrl("img14_crcr1q"),
    getCldImageUrl("img15_fvidbc"),
  ],
  // Branding & Logos
  HERO_LOGO: getCldImageUrl("logo-date4_fclter"),
  FAVICON: getCldImageUrl("1000193944_joxrs0"),
  TSDW_LOGO: getCldImageUrl("tsdw2-logo_eigacr"),
  SPONSOR_LOGOS: [
    getCldImageUrl("img1_mdaulu"), // Replace with actual Public IDs from dashboard
    getCldImageUrl("img2_urn35c"),
    getCldImageUrl("img3_ppalh5"),
    getCldImageUrl("img4_uxhowu"),
    getCldImageUrl("img5_kwjtdt"),
    getCldImageUrl("img6_zbx87d"),
    getCldImageUrl("img7_wqadqn"),
    getCldImageUrl("img8_ikyvqp"),
  ],
  TISHA: getCldImageUrl("tisha_amod66"),
  PIYUSH: getCldImageUrl("piyush_wxbwdl"),
  AMITABH: getCldImageUrl("amitabh_h8ujhr"),
  SATISH: getCldImageUrl("satish_mkaxb3"),
  PRAFUL: getCldImageUrl("slazzer-preview-pp4qr_tqkdcs"),
  SOURISH: getCldImageUrl("sourish_qrbrfp"),
  SMITA: getCldImageUrl("smita_kpx76s"),
  SIDDHESH: getCldImageUrl("siddhesh_i9m2ew"),
  // Platform & Partners
  DEVFOLIO_LOGO: getCldImageUrl("devfolio1_sdgyyn"),
};
