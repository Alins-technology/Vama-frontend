// Each treatment: slug, name, category, short, metaTitle, metaDescription,
// description, benefits, duration, sessions, downtime, process (steps), faqs,
// article (optional long-form guide, ArticleBlocks block schema — see
// components/ui/ArticleBlocks.jsx)

import acneScarImg from "../assets/Treatments/Acne-scar.avif";
import alopeciaImg from "../assets/Treatments/Alopecia.jpg";
import antiAgeingImg from "../assets/Treatments/Anti-Ageing.jpg";
import botoxImg from "../assets/Treatments/botox.jpg";
import contouringImg from "../assets/Treatments/Contouring.jpg";
import dandruffImg from "../assets/Treatments/dandruff.jpg";
import dermalFillerImg from "../assets/Treatments/dermalfiller.jpg";
import eczemaImg from "../assets/Treatments/Exima.jpg";
import facePrpImg from "../assets/Treatments/faceprp.jpg";
import fungalImg from "../assets/Treatments/Fungal.jpg";
import gfcImg from "../assets/Treatments/GFC.jpg";
import hairDnaImg from "../assets/Treatments/hair-dna.jpg";
import hairFallImg from "../assets/Treatments/hair-fall.jpg";
import hairPrpImg from "../assets/Treatments/hair-prp.jpg";
import hairReplacementImg from "../assets/Treatments/hair-replacement.webp";
import hairTransplantImg from "../assets/Treatments/hair-transplant.jpg";
import hydrafacialImg from "../assets/Treatments/hydrafacial.jpg";
import keloidImg from "../assets/Treatments/Keloid.jpg";
import koreanGlassSkinImg from "../assets/Treatments/koreanglassskin.jpg";
import laserHairReductionImg from "../assets/Treatments/laserhairreduction.webp";
import lipomaImg from "../assets/Treatments/Lipoma.jpg";
import moleImg from "../assets/Treatments/mole.jpg";
import psoriasisImg from "../assets/Treatments/psoriasis.jpg";
import skinRejuvenationImg from "../assets/Treatments/Skin-rejuvenation.jpg";
import vitiligoImg from "../assets/Treatments/Vitiligo.jpg";
import weightLossImg from "../assets/Treatments/weightloss.jpg";

export const categories = [
  { slug: "skin-treatment", name: "Skin Treatment", tagline: "Clear, healthy, radiant skin — backed by dermatology." },
  { slug: "hair-treatment", name: "Hair Treatment", tagline: "Science-led hair restoration for natural, lasting density." },
  { slug: "weight-loss", name: "Weight Loss", tagline: "Personalised, medically guided programmes for sustainable results." },
  { slug: "allergy-treatment", name: "Allergy Treatment", tagline: "Identify the trigger, treat the reaction — personalised care for skin allergies & conditions." },
];

const commonProcess = (a, b, c, d) => [
  { title: "Consultation & Diagnosis", description: a },
  { title: "Customised Plan", description: b },
  { title: "The Procedure", description: c },
  { title: "Aftercare & Follow-up", description: d },
];

export const treatments = [
  // ---------------- SKIN ----------------
  {
    slug: "acne-scar-treatment",
    category: "skin-treatment",
    name: "Acne Scar Treatment",
    image: acneScarImg,
    short: "Smoother texture with laser resurfacing, micro-needling & peels.",
    metaTitle: "Acne Scar Treatment & Skin Resurfacing | VAMA Clinics",
    metaDescription:
      "Reduce acne scars and uneven skin texture with advanced dermatologist-led treatments at VAMA Clinics. Personalized plans for visibly smoother skin.",
    description:
      "Our acne scar programmes combine fractional laser resurfacing, micro-needling and chemical peels to rebuild collagen and even out skin texture. Every plan is customised to your scar type — ice-pick, boxcar or rolling — for the most natural improvement.",
    benefits: ["Visibly smoother texture", "Minimal downtime", "Customised to scar type", "Collagen rebuilding over time"],
    duration: "45–60 mins",
    sessions: "4–6 sessions",
    downtime: "1–2 days redness",
    process: commonProcess(
      "Our dermatologist examines your scar type, depth and skin tone to build an accurate diagnosis.",
      "A combination of laser, micro-needling and/or peels is selected specifically for your scar pattern.",
      "The chosen procedure is performed under topical numbing for comfort, typically in under an hour.",
      "You'll get a simple home-care routine and a follow-up schedule to track collagen rebuilding."
    ),
    article: [
      {
        type: "paragraph",
        text: "Acne can leave behind more than just memories — ice-pick, boxcar and rolling scars, along with patches of uneven texture, can remain long after breakouts clear up. With the right professional approach, the appearance of these scars can be visibly improved, even though no treatment can guarantee complete removal.",
      },
      {
        type: "paragraph",
        text: "Acne Scar Treatment focuses on rebuilding collagen and smoothing skin texture according to an individual's scar type and skin condition. At VAMA Clinics, treatment planning starts with identifying exactly which kind of scarring you have, rather than applying the same procedure to every patient.",
      },
      { type: "heading", text: "Understanding Acne Scar Types" },
      { type: "paragraph", text: "Not all acne scars are the same, and the right treatment depends on correctly identifying the type. Common patterns include:" },
      {
        type: "list",
        items: [
          "Ice-pick scars — narrow, deep pits",
          "Boxcar scars — broad depressions with defined edges",
          "Rolling scars — shallow, wave-like texture",
          "Hypertrophic or keloid scarring — raised, thickened tissue",
          "Post-inflammatory pigmentation alongside scarring",
        ],
      },
      {
        type: "paragraph",
        text: "A professional assessment helps determine which scar types are present, since most patients have a mix rather than a single pattern.",
      },
      { type: "heading", text: "Acne Scar Treatment in Noida" },
      {
        type: "paragraph",
        text: "People looking for Acne Scar Treatment in Noida often have a combination of concerns — active breakouts, residual pigmentation and textural scarring together. A consultation can help prioritise which concern to address first and in what sequence.",
      },
      {
        type: "paragraph",
        text: "Depending on scar depth and skin sensitivity, treatment may combine laser resurfacing, micro-needling, chemical peels or a staged approach across several sessions.",
      },
      { type: "heading", text: "Treatment Approaches We Consider" },
      { type: "paragraph", text: "Depending on the assessment, a suitable combination may be recommended from options such as:" },
      {
        type: "list",
        items: ["Fractional laser resurfacing", "Micro-needling / collagen induction therapy", "Chemical peels", "Subcision for deeper rolling scars", "Combination therapy across sessions"],
      },
      {
        type: "paragraph",
        text: "The number of sessions, spacing between them and expected improvement vary between individuals, and results build gradually as collagen remodels over several months.",
      },
      { type: "heading", text: "Acne Scar Treatment in Indirapuram" },
      {
        type: "paragraph",
        text: "For those considering Acne Scar Treatment in Indirapuram, convenient access for a multi-session course matters — most protocols are spaced several weeks apart over a few months.",
      },
      {
        type: "paragraph",
        text: "Beyond convenience, it's worth checking the treating professional's experience with scar-specific procedures, the clinic's approach to numbing and comfort, and how realistically it explains achievable results before you begin.",
      },
      { type: "heading", text: "Caring for Skin Between Sessions" },
      { type: "paragraph", text: "Since acne-prone skin can be sensitive, aftercare between sessions matters for both comfort and results. A simple routine may include:" },
      {
        type: "list",
        items: ["Gentle, non-comedogenic cleansing", "Daily sunscreen to protect healing skin", "Avoiding active breakouts before a session", "Following your dermatologist's post-procedure instructions", "Staying consistent with the recommended session schedule"],
      },
      {
        type: "paragraph",
        text: "Sun protection is especially important after resurfacing or peeling procedures, as treated skin is more sensitive to UV exposure during healing.",
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "paragraph",
        text: "Professional Acne Scar Treatment can meaningfully improve the appearance of ice-pick, boxcar and rolling scars, along with uneven texture — though results depend on scar depth, skin type and the number of sessions completed.",
      },
      {
        type: "paragraph",
        text: "A professional consultation is the best starting point for identifying your scar type and building a realistic, personalised treatment plan.",
      },
    ],
    faqs: [
      { q: "Does acne scar treatment hurt?", a: "Most sessions are performed with topical numbing cream, so discomfort is minimal — patients describe it as mild tingling or heat." },
      { q: "How many sessions will I need?", a: "Most patients need 4–6 sessions spaced 3–4 weeks apart, depending on scar depth and skin response." },
      { q: "When will I see results?", a: "Initial smoothing is visible after 2–3 sessions, with continued improvement for up to 6 months as collagen rebuilds." },
      { q: "Is acne scar treatment suitable for teenagers?", a: "Yes, though we usually wait until active breakouts are under control before starting scar treatment — our dermatologist assesses the right timing at consultation, regardless of age." },
    ],
  },
  {
    slug: "anti-ageing-treatment",
    category: "skin-treatment",
    name: "Anti-Ageing Treatment",
    image: antiAgeingImg,
    short: "Firmer, youthful skin with non-surgical lifting & rejuvenation.",
    metaTitle: "Anti-Ageing Treatment & Skin Care | VAMA Clinics",
    metaDescription:
      "Address fine lines, wrinkles and loss of skin firmness with expert-guided anti-ageing treatments at VAMA Clinics, tailored to your skin's needs.",
    description:
      "From thread lifts to skin-boosters, our anti-ageing protocols target fine lines, sagging and dullness without surgery — restoring a naturally youthful look while keeping your expressions intact.",
    benefits: ["Reduces fine lines & wrinkles", "Improves skin elasticity", "No surgery, minimal downtime", "Natural-looking results"],
    duration: "30–45 mins",
    sessions: "3–4 sessions",
    downtime: "None to minimal",
    process: commonProcess(
      "We assess skin laxity, elasticity and areas of concern to map out a rejuvenation plan.",
      "A mix of skin-boosters, threads or energy-based devices is chosen based on your skin's needs.",
      "Treatment is delivered in-clinic with precise, doctor-administered technique.",
      "Simple skincare guidance and spaced-out touch-up sessions keep results looking natural."
    ),
    article: [
      {
        type: "paragraph",
        text: "Ageing is a natural process, but factors such as sun exposure, lifestyle, stress and changes in skin structure can make fine lines, wrinkles, pigmentation and loss of firmness more noticeable. With the right professional approach, these concerns can be managed to support healthier and more refreshed-looking skin.",
      },
      {
        type: "paragraph",
        text: "Anti-Ageing Treatment focuses on improving visible signs of skin ageing according to an individual's skin condition and aesthetic goals. At VAMA Clinics, treatment planning is based on a professional assessment rather than using the same procedure for every person.",
      },
      { type: "heading", text: "Anti-Ageing Treatment in Noida" },
      {
        type: "paragraph",
        text: "People looking for Anti-Ageing Treatment in Noida may have concerns such as fine lines, uneven skin tone, dullness, pigmentation or reduced skin firmness. A consultation can help identify the primary concern and determine which treatment approach may be suitable.",
      },
      {
        type: "paragraph",
        text: "Depending on the condition of the skin, treatment may focus on improving texture, hydration, pigmentation, fine lines or overall skin quality.",
      },
      { type: "heading", text: "Common Signs of Skin Ageing" },
      { type: "paragraph", text: "Visible signs of ageing can vary from person to person. Common concerns include:" },
      {
        type: "list",
        items: [
          "Fine lines and wrinkles",
          "Loss of skin firmness",
          "Uneven pigmentation",
          "Dull-looking skin",
          "Rough or uneven texture",
          "Reduced skin elasticity",
          "Dehydrated appearance",
        ],
      },
      {
        type: "paragraph",
        text: "Understanding the specific skin concern is important because different issues may require different treatment approaches.",
      },
      { type: "heading", text: "Personalized Anti-Ageing Skin Treatment" },
      {
        type: "paragraph",
        text: "An Anti-Ageing Skin Treatment plan should be personalized according to the individual's skin type, condition and goals. Depending on the assessment, a professional may recommend suitable aesthetic or dermatological procedures to address concerns such as wrinkles, pigmentation, texture or skin rejuvenation.",
      },
      {
        type: "paragraph",
        text: "The number of sessions, recovery time and expected results can vary between individuals. No treatment can guarantee identical results for every patient.",
      },
      { type: "heading", text: "Anti-Ageing Treatment in Indirapuram" },
      {
        type: "paragraph",
        text: "For people considering Anti-Ageing Treatment in Indirapuram, convenient access to consultation and follow-up can be useful. However, choosing a clinic should involve more than location.",
      },
      {
        type: "paragraph",
        text: "Before starting treatment, consider the qualifications of the treating professional, consultation process, hygiene standards, treatment suitability and aftercare. It is also important that the clinic provides realistic information about potential results and limitations.",
      },
      { type: "heading", text: "Anti-Ageing Treatment in Ghaziabad" },
      {
        type: "paragraph",
        text: "People searching for Anti-Ageing Treatment in Ghaziabad may have different skin concerns depending on their age, skin type, lifestyle and sun exposure.",
      },
      {
        type: "paragraph",
        text: "A professional consultation can assess fine lines, pigmentation, skin texture, sensitivity and firmness before recommending a suitable approach. Personalized treatment can help ensure that the procedure is selected according to the individual's needs.",
      },
      { type: "heading", text: "Skincare After Treatment" },
      {
        type: "paragraph",
        text: "Professional anti-ageing treatments should be supported by appropriate skincare and sun protection. Depending on the procedure, aftercare may include temporary changes to your skincare routine and avoiding excessive sun exposure. A simple routine may include:",
      },
      {
        type: "list",
        items: ["Gentle cleansing", "Regular moisturization", "Suitable sunscreen", "Adequate hydration", "Following professional aftercare instructions"],
      },
      {
        type: "paragraph",
        text: "Consistent sun protection is particularly important because UV exposure contributes to visible skin ageing.",
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "paragraph",
        text: "Professional Anti-Ageing Treatment can help address visible concerns such as fine lines, wrinkles, pigmentation, dullness and reduced firmness. The most appropriate treatment depends on individual skin needs and expectations.",
      },
      {
        type: "paragraph",
        text: "A professional consultation is the best starting point for understanding your options and developing a suitable skincare or treatment plan.",
      },
    ],
    faqs: [
      { q: "Is anti-ageing treatment suitable for everyone?", a: "Not necessarily. Suitability depends on your skin condition, medical history and the treatment being considered. A professional consultation is recommended." },
      { q: "Can anti-ageing treatment remove wrinkles completely?", a: "Treatments may improve the appearance of wrinkles, but complete removal cannot be guaranteed. Results vary between individuals." },
      { q: "Is there downtime?", a: "Downtime depends on the procedure. Some treatments may involve minimal downtime, while others can cause temporary redness, swelling or sensitivity." },
      { q: "How long do results last?", a: "Results vary according to the treatment, individual skin characteristics and lifestyle. Some procedures may require maintenance sessions." },
    ],
  },
  {
    slug: "botox",
    category: "skin-treatment",
    name: "Botox",
    image: botoxImg,
    short: "Soften expression lines with precise, doctor-administered Botox.",
    metaTitle: "Botox Treatment & Facial Care | VAMA Clinics",
    metaDescription:
      "Smoothen expression lines and fine wrinkles with professionally administered Botox at VAMA Clinics. Consult our experts for a personalized plan.",
    description:
      "Botox relaxes the muscles responsible for forehead lines, crow's feet and frown lines. Administered by our trained dermatologists in precise, measured doses for a refreshed — never frozen — look.",
    benefits: ["Softens expression lines", "15–20 minute session", "Results in 3–7 days", "Lasts 4–6 months"],
    duration: "15–20 mins",
    sessions: "1 session (touch-ups as needed)",
    downtime: "None",
    process: commonProcess(
      "Your facial muscle movement is assessed to map the right injection points and dosage.",
      "A precise dosing plan is created to target only the lines you want softened.",
      "Micro-injections are administered with a fine needle — quick and largely painless.",
      "Avoid rubbing the area for 24 hours; results settle in over the following week."
    ),
    article: [
      {
        type: "paragraph",
        text: "Fine lines and wrinkles are a natural part of ageing. Repeated facial expressions, sun exposure and changes in skin structure can make these lines more visible over time. Botox treatment is a non-surgical aesthetic procedure that can help reduce the appearance of certain dynamic wrinkles and create a smoother-looking facial appearance.",
      },
      {
        type: "paragraph",
        text: "At VAMA Clinics, treatment is planned according to individual facial features, concerns and aesthetic goals. A professional consultation is recommended before treatment to determine whether Botox is appropriate.",
      },
      { type: "heading", text: "What Is Botox Treatment?" },
      {
        type: "paragraph",
        text: "Botox contains a purified form of botulinum toxin that is used in controlled amounts for cosmetic purposes. When injected into selected muscles, it temporarily reduces muscle activity. This can soften expression-related wrinkles. Commonly treated areas include:",
      },
      { type: "list", items: ["Forehead lines", "Frown lines between the eyebrows", "Crow's feet around the eyes", "Certain other dynamic facial lines"] },
      {
        type: "paragraph",
        text: "Botox does not treat every type of wrinkle. Skin texture, pigmentation and volume loss may require different treatment approaches.",
      },
      { type: "heading", text: "How Does Botox Work?" },
      {
        type: "paragraph",
        text: "Facial expressions involve repeated muscle movement. Over time, this movement contributes to the development of dynamic lines. During treatment, small amounts of Botox are injected into carefully selected muscles. The injection points and amount used depend on facial anatomy, muscle activity and the desired outcome.",
      },
      {
        type: "paragraph",
        text: "The goal is not necessarily to eliminate all facial movement, but to soften specific lines while maintaining an appropriate and natural facial appearance.",
      },
      { type: "heading", text: "Who May Consider Botox?" },
      { type: "paragraph", text: "Adults concerned about dynamic facial wrinkles may consider Botox after professional assessment. A consultation may include evaluation of:" },
      {
        type: "list",
        items: ["Facial muscle movement", "Location and depth of wrinkles", "Skin condition", "Previous aesthetic treatments", "Medical history", "Current medications", "Treatment expectations"],
      },
      { type: "paragraph", text: "Individual suitability varies, so professional assessment is important." },
      { type: "heading", text: "Botox Treatment in Noida" },
      {
        type: "paragraph",
        text: "People searching for Botox Treatment in Noida may be interested in improving the appearance of forehead lines, frown lines or crow's feet. A qualified professional can assess the facial muscles and determine whether Botox is suitable for the specific concern. Treatment should be personalized rather than based on a standard injection pattern.",
      },
      { type: "heading", text: "Botox Treatment in Indirapuram" },
      {
        type: "paragraph",
        text: "For people considering Botox Treatment in Indirapuram, it is important to choose a qualified and appropriately trained professional. Before treatment, patients should understand the procedure, possible side effects, expected results and aftercare requirements.",
      },
      { type: "heading", text: "What Happens During Treatment?" },
      { type: "paragraph", text: "A typical Botox appointment may involve:" },
      {
        type: "steps",
        items: ["Consultation and discussion of aesthetic goals", "Facial assessment", "Identification of appropriate injection points", "Administration of small injections", "Post-treatment instructions"],
      },
      { type: "paragraph", text: "The exact treatment plan varies from person to person." },
      { type: "heading", text: "Botox Aftercare and Results" },
      {
        type: "paragraph",
        text: "Botox does not usually produce its full effect immediately. Visible changes develop gradually, and the duration of results varies between individuals. After treatment, patients should follow the specific instructions provided by their practitioner. Temporary effects such as redness, swelling, tenderness or bruising can occur.",
      },
      {
        type: "paragraph",
        text: "Because Botox is temporary, its effects gradually wear off and maintenance treatment may be considered when appropriate.",
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "paragraph",
        text: "Botox treatment can help reduce the appearance of certain expression-related wrinkles without surgery. The right approach depends on facial anatomy, muscle activity, skin condition and individual expectations.",
      },
      {
        type: "paragraph",
        text: "A consultation with a qualified professional is the best way to determine whether Botox is suitable and understand its potential benefits and risks.",
      },
    ],
    faqs: [
      { q: "Is Botox painful?", a: "The injections may cause brief discomfort, but individual sensitivity varies." },
      { q: "How long does Botox treatment take?", a: "The procedure is generally relatively quick, although appointment time depends on the number of areas being assessed and treated." },
      { q: "Can Botox remove all wrinkles?", a: "No. Botox primarily addresses dynamic wrinkles caused by muscle movement. Other skin concerns may require different treatments." },
      { q: "Is there downtime?", a: "Many people resume normal activities quickly, but specific aftercare instructions should be followed." },
      { q: "How long do results last?", a: "Results are temporary and vary according to the individual, treatment area and muscle activity." },
    ],
  },
  {
    slug: "mole-skin-tag-removal",
    category: "skin-treatment",
    name: "Mole / Skin Tag Removal",
    image: moleImg,
    short: "Safe, scarless removal of moles and skin tags.",
    metaTitle: "Mole & Skin Tag Removal Treatment | VAMA Clinics",
    metaDescription:
      "Safe, dermatologist-guided mole and skin tag removal at VAMA Clinics. Minimally invasive procedures with proper pre- and post-care support.",
    description:
      "Using laser and radiofrequency techniques, we remove unwanted moles and skin tags safely and precisely, with minimal scarring and quick healing.",
    benefits: ["Quick, walk-in procedure", "Minimal scarring", "Precise & safe", "Immediate results"],
    duration: "15–30 mins",
    sessions: "1 session (usually)",
    downtime: "3–5 days scabbing",
    process: commonProcess(
      "The mole or skin tag is examined to confirm it's suitable for cosmetic removal.",
      "Laser or radiofrequency technique is chosen based on size, depth and location.",
      "The growth is precisely removed under local anaesthesia — quick and comfortable.",
      "A small scab forms and heals within a few days; sun protection is advised."
    ),
    article: [
      {
        type: "paragraph",
        text: "Moles and skin tags are common skin growths that can appear on different parts of the body. While many are harmless, they can sometimes become a cosmetic concern or get irritated by clothing, jewellery or shaving. Professional assessment is important before deciding on removal because a mole or skin growth should first be identified correctly.",
      },
      {
        type: "paragraph",
        text: "At VAMA Clinics, mole and skin tag removal can be considered after evaluating the size, location, appearance and nature of the growth.",
      },
      { type: "heading", text: "What Are Moles and Skin Tags?" },
      {
        type: "paragraph",
        text: "Moles, also known as nevi, are common skin growths that can vary in colour, size and appearance. Most moles are harmless, but changes in colour, shape, size, bleeding or persistent itching should be assessed by a qualified professional.",
      },
      {
        type: "paragraph",
        text: "Skin tags are usually soft, benign growths that commonly develop in areas where skin rubs against skin or clothing, such as the neck, underarms and body folds.",
      },
      { type: "heading", text: "Mole & Skin Tag Removal Treatment" },
      {
        type: "paragraph",
        text: "Treatment depends on the type, size and location of the growth. After assessment, a qualified professional may recommend an appropriate removal method. Depending on the case, possible approaches can include:",
      },
      {
        type: "list",
        items: ["Surgical removal or excision", "Shaving or minor surgical removal", "Cautery", "Cryotherapy in suitable cases", "Other dermatologist-recommended techniques"],
      },
      {
        type: "paragraph",
        text: "The most appropriate method depends on the individual growth and should be decided after professional evaluation. Some procedures can cause temporary redness, pigmentation changes, bleeding or scarring.",
      },
      { type: "heading", text: "When Should a Mole Be Checked?" },
      { type: "paragraph", text: "A mole should be professionally assessed if it:" },
      {
        type: "list",
        items: ["Changes in size, shape or colour", "Develops irregular borders", "Starts bleeding", "Becomes painful or persistently itchy", "Changes noticeably over time", "Appears unusual compared with other moles"],
      },
      {
        type: "paragraph",
        text: "Suspicious moles may require further examination or biopsy rather than straightforward cosmetic removal.",
      },
      { type: "heading", text: "Who Can Consider Skin Tag Removal?" },
      {
        type: "paragraph",
        text: "People may consider skin tag removal if a tag is repeatedly irritated, catches on clothing or jewellery, or is unwanted for cosmetic reasons. However, it is important not to remove skin tags at home because another type of skin growth can sometimes look similar.",
      },
      { type: "heading", text: "What to Expect During Consultation" },
      { type: "paragraph", text: "A consultation may include examination of the growth and discussion of:" },
      {
        type: "list",
        items: ["Size and location", "How long it has been present", "Any recent changes", "Previous treatments", "Skin sensitivity", "Suitable removal options", "Possible risks and aftercare"],
      },
      { type: "paragraph", text: "This helps determine the safest and most appropriate approach for the individual." },
      { type: "heading", text: "Aftercare" },
      {
        type: "paragraph",
        text: "After removal, patients should follow the specific instructions provided by their treating professional. Depending on the procedure, aftercare may include keeping the area clean, protecting it from unnecessary irritation and following recommended wound-care instructions. Avoid attempting to cut, burn or remove a mole or skin tag yourself.",
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "paragraph",
        text: "Mole & Skin Tag Removal can help address unwanted or repeatedly irritated skin growths. The correct treatment depends on the type and characteristics of the growth, so professional assessment should come before removal.",
      },
    ],
    faqs: [
      { q: "Is mole removal safe?", a: "Mole removal can be performed safely when appropriately assessed and carried out by a qualified professional. The method depends on the individual mole." },
      { q: "Can all skin tags be removed?", a: "Many benign skin tags can be removed, but proper identification is important before treatment." },
      { q: "Can mole removal leave a scar?", a: "Some removal techniques can result in scarring or temporary/permanent pigmentation changes. Your professional can explain the expected risks." },
      { q: "Can I remove a mole at home?", a: "Home removal is not recommended. A mole that appears unusual should first be assessed professionally." },
    ],
  },
  {
    slug: "hydrafacial",
    category: "skin-treatment",
    name: "HydraFacial",
    image: hydrafacialImg,
    short: "Deep cleanse, exfoliate & hydrate in one relaxing session.",
    metaTitle: "HydraFacial Treatment & Facial Care | VAMA Clinics",
    metaDescription:
      "Cleanse, exfoliate and hydrate your skin with HydraFacial at VAMA Clinics. A dermatologist-guided treatment for refreshed, glowing skin.",
    description:
      "HydraFacial combines cleansing, exfoliation, extraction and hydration in a single machine-assisted treatment — leaving skin instantly brighter with zero downtime.",
    benefits: ["Instant glow", "Deep pore cleansing", "Zero downtime", "Suitable for all skin types"],
    duration: "30–40 mins",
    sessions: "Monthly maintenance recommended",
    downtime: "None",
    process: commonProcess(
      "Your skin type and concerns (dullness, congestion, dryness) are assessed.",
      "A serum combination is selected — hydrating, brightening or clarifying — to match your skin.",
      "The HydraFacial device cleanses, exfoliates, extracts and infuses serums in one pass.",
      "Skin is left glowing immediately; monthly sessions maintain the results."
    ),
    article: [
      {
        type: "paragraph",
        text: "Healthy, glowing and refreshed skin can make a noticeable difference to your overall appearance and confidence. At VAMA Advanced Hair & Skin Clinic, HydraFacial is a popular non-invasive skin treatment designed to cleanse, exfoliate and hydrate the skin while helping improve the appearance of common concerns such as dullness, clogged pores, uneven skin texture and dehydration.",
      },
      { type: "heading", text: "What Is a HydraFacial?" },
      {
        type: "paragraph",
        text: "A HydraFacial is a multi-step facial treatment that combines deep cleansing, exfoliation, extraction and hydration in a single procedure. It is designed to remove impurities from the skin while delivering hydrating and nourishing ingredients.",
      },
      {
        type: "paragraph",
        text: "Unlike a traditional facial, a professional HydraFacial treatment uses specialized technology and can be customized according to your skin type and concerns. It is suitable for people looking for a refreshed and brighter complexion without significant downtime.",
      },
      { type: "heading", text: "Benefits of HydraFacial Treatment" },
      { type: "paragraph", text: "A HydraFacial can offer several skin benefits, including:" },
      {
        type: "list",
        items: [
          "Deep cleansing of the skin",
          "Removal of surface dead skin cells",
          "Helps clear clogged pores and excess oil",
          "Improves the appearance of dull-looking skin",
          "Provides intense hydration",
          "Helps improve overall skin texture",
          "Gives the skin a fresh and healthy-looking appearance",
          "Can be customized according to individual skin concerns",
        ],
      },
      {
        type: "paragraph",
        text: "With regular professional skincare and an appropriate home-care routine, HydraFacial may help you maintain smoother, cleaner and more hydrated-looking skin.",
      },
      { type: "heading", text: "HydraFacial for Different Skin Concerns" },
      {
        type: "paragraph",
        text: "HydraFacial can be considered for various skin concerns. People with dull skin, dehydrated skin, congested pores, uneven texture or excess oil may benefit from a customized treatment plan.",
      },
      {
        type: "paragraph",
        text: "If your main concern is pigmentation, acne-prone skin, fine lines or another specific skin condition, a skin professional can assess your skin and determine whether HydraFacial is appropriate or whether another treatment would be more suitable.",
      },
      { type: "heading", text: "How Does HydraFacial Work?" },
      { type: "paragraph", text: "A typical HydraFacial session involves multiple stages:" },
      {
        type: "steps",
        items: [
          "Cleansing — the skin is gently cleansed to remove surface impurities, oil and makeup.",
          "Exfoliation — the treatment exfoliates dead skin cells from the surface, helping reveal fresher-looking skin underneath.",
          "Extraction — specialized technology is used to help remove impurities and congestion from pores.",
          "Hydration and Nourishment — the skin is infused with hydrating and nourishing ingredients to leave it feeling refreshed and moisturized.",
        ],
      },
      {
        type: "paragraph",
        text: "The exact procedure and products used may vary depending on your skin type and the assessment performed by the clinic.",
      },
      { type: "heading", text: "Why Choose VAMA Solution for HydraFacial?" },
      {
        type: "paragraph",
        text: "At VAMA Advanced Hair & Skin Clinic, the focus is on providing professional skin and hair treatments with experienced doctors and modern technology. The clinic states that safety, transparency and effective treatment are priorities in its approach to patient care.",
      },
      {
        type: "paragraph",
        text: "Before starting treatment, your skin can be assessed so that the procedure can be planned according to your individual requirements.",
      },
      { type: "heading", text: "HydraFacial Treatment in Noida, Ghaziabad & Lucknow" },
      {
        type: "paragraph",
        text: "If you are searching for a HydraFacial treatment in Noida, HydraFacial in Ghaziabad, or a professional HydraFacial clinic in Lucknow, VAMA Solution provides skin-care services across multiple locations. The clinic's listed locations include Noida, Ghaziabad, Lucknow, Delhi, Agra and Kanpur.",
      },
      { type: "heading", text: "Is HydraFacial Right for You?" },
      {
        type: "paragraph",
        text: "HydraFacial may be a good option if you want a non-invasive treatment focused on cleansing, exfoliation and hydration. However, the right treatment depends on your skin type, existing skin concerns and treatment goals.",
      },
      {
        type: "paragraph",
        text: "A professional consultation is recommended before treatment, particularly if you have active skin conditions or are undergoing other dermatological treatments.",
      },
    ],
    faqs: [
      { q: "Is HydraFacial suitable for sensitive skin?", a: "Yes, it's gentle enough for most skin types including sensitive skin — serums are adjusted accordingly." },
      { q: "Can I wear makeup right after?", a: "Yes, there's zero downtime, so you can resume your day — including makeup — immediately." },
      { q: "How often should I get one?", a: "Monthly sessions are ideal for maintaining glow and pore clarity." },
      { q: "Is HydraFacial suitable for teenagers or older adults?", a: "Yes — it's gentle and adjustable enough for teenagers dealing with congestion as well as older adults looking for added hydration and glow." },
    ],
  },
  {
    slug: "korean-glass-skin",
    category: "skin-treatment",
    name: "Korean Glass Skin Treatment",
    image: koreanGlassSkinImg,
    short: "The dewy, poreless 'glass skin' finish, done right.",
    metaTitle: "Korean Glass Skin Treatment & Facial Glow | VAMA Clinics",
    metaDescription:
      "Get smoother, luminous skin with the Korean Glass Skin treatment at VAMA Clinics. Expert-guided skincare for a radiant, even-toned complexion.",
    description:
      "A multi-step protocol of gentle exfoliation, deep hydration and skin-barrier repair inspired by Korean skincare rituals — for that smooth, translucent, dewy finish.",
    benefits: ["Poreless, dewy finish", "Improves hydration & barrier", "Gentle, multi-step protocol", "Great pre-event glow"],
    duration: "50–60 mins",
    sessions: "3–4 sessions for lasting effect",
    downtime: "None",
    process: commonProcess(
      "Skin barrier strength, hydration levels and pore visibility are assessed.",
      "A layered protocol of exfoliation, essence infusion and barrier-repair actives is planned.",
      "Multi-step application is performed with gentle massage techniques to boost absorption.",
      "A simple at-home layering routine is shared to extend the glass-skin effect."
    ),
    article: [
      {
        type: "paragraph",
        text: "Clear, smooth and naturally radiant skin is a common skincare goal. The Korean Glass Skin Treatment is designed to help improve the overall appearance of the skin by focusing on hydration, skin texture, brightness and a healthy-looking glow. At VAMA Advanced Hair & Skin Clinic, the treatment can be customized according to your skin type, concerns and desired results.",
      },
      { type: "heading", text: "What Is Korean Glass Skin Treatment?" },
      {
        type: "paragraph",
        text: "Korean Glass Skin refers to a smooth, hydrated and luminous complexion that looks fresh and healthy. The treatment is not simply about making the skin lighter; instead, it focuses on improving skin hydration, texture, clarity and radiance.",
      },
      {
        type: "paragraph",
        text: "A professional glass skin treatment may combine different skin-care technologies and techniques depending on individual requirements. Your skin is assessed before treatment so the most appropriate approach can be selected.",
      },
      { type: "heading", text: "Benefits of Korean Glass Skin Treatment" },
      { type: "paragraph", text: "A customized Korean Glass Skin Treatment may help improve several common skin concerns, including:" },
      {
        type: "list",
        items: [
          "Dull and tired-looking skin",
          "Uneven skin texture",
          "Dehydrated or dry-looking skin",
          "Mild pigmentation and uneven skin tone",
          "Rough skin texture",
          "Enlarged or congested pores",
          "Lack of natural skin radiance",
        ],
      },
      { type: "paragraph", text: "The treatment aims to leave your skin looking fresh, hydrated, smoother and more radiant." },
      { type: "heading", text: "How Does the Treatment Work?" },
      {
        type: "paragraph",
        text: "The exact treatment protocol depends on your skin condition and treatment goals. During your consultation, the skin is evaluated to understand your concerns and determine which procedures or skincare technologies may be suitable.",
      },
      {
        type: "paragraph",
        text: "Depending on your requirements, your treatment plan may focus on hydration, exfoliation, nourishment, pigmentation management or improving overall skin quality. Because every person's skin is different, the number of sessions and expected results can vary.",
      },
      { type: "heading", text: "Who Can Consider Korean Glass Skin Treatment?" },
      {
        type: "paragraph",
        text: "Korean Glass Skin Treatment may be suitable for individuals who want to improve the appearance of dull, dehydrated or uneven-looking skin and achieve a healthier-looking glow.",
      },
      {
        type: "paragraph",
        text: "It can be particularly useful before special occasions or as part of a regular professional skincare routine. However, people with active acne, infections, significant skin sensitivity or other dermatological conditions should first consult a qualified skin professional.",
      },
      { type: "heading", text: "Why Choose VAMA Clinics?" },
      {
        type: "paragraph",
        text: "At VAMA Advanced Hair & Skin Clinic, treatments are planned according to individual skin needs rather than following a one-size-fits-all approach. Our experienced team focuses on professional assessment, appropriate treatment selection and personalized skincare guidance.",
      },
      {
        type: "paragraph",
        text: "Whether your concern is dullness, uneven texture, pigmentation or dehydration, a consultation can help determine the most suitable approach for your skin.",
      },
      { type: "heading", text: "Get Glowing, Healthy-Looking Skin" },
      {
        type: "paragraph",
        text: "If you are looking for a professional Korean Glass Skin Treatment, VAMA Clinics can help you understand the right treatment approach for your skin. The goal is not just an instant glow but healthier-looking, smoother and well-hydrated skin with a personalized treatment plan.",
      },
    ],
    faqs: [
      { q: "Is this good before an event or wedding?", a: "Yes — it's one of our most popular pre-event treatments for an instant, camera-ready glow." },
      { q: "Will it help with visible pores?", a: "Yes, consistent sessions visibly refine pore appearance and smooth texture." },
      { q: "How soon before an event should I book it?", a: "We recommend booking 1–3 days before for the best glow, with a course of sessions leading up to it for lasting results." },
      { q: "Is this suitable for mature skin, not just younger patients?", a: "Yes — the barrier-repair and hydration focus works well for mature skin too, though the layering and actives are adjusted based on your skin's age-related needs." },
    ],
  },
  {
    slug: "laser-hair-reduction",
    category: "skin-treatment",
    name: "Laser Hair Reduction",
    image: laserHairReductionImg,
    short: "Long-term hair reduction with advanced diode laser.",
    metaTitle: "Laser Hair Reduction – Smooth, Hair-Free Skin | VAMA Clinics",
    metaDescription:
      "Reduce unwanted hair with advanced laser hair reduction at VAMA Clinics. Safe, dermatologist-supervised sessions tailored to your skin type.",
    description:
      "Our diode laser technology targets hair follicles at the root for long-lasting reduction across face and body, suitable for all skin tones with minimal discomfort.",
    benefits: ["Long-lasting results", "Suitable for all skin tones", "Fast sessions", "Minimal discomfort"],
    duration: "20–60 mins (area dependent)",
    sessions: "6–8 sessions",
    downtime: "None",
    process: commonProcess(
      "Your hair type, growth pattern and skin tone are assessed to set the right laser parameters.",
      "A session plan is built around the treatment area — face, underarms, legs, or full body.",
      "The diode laser is passed over the area, targeting follicles with minimal discomfort.",
      "Sun protection is advised between sessions to protect treated skin and support results."
    ),
    article: [
      {
        type: "paragraph",
        text: "Unwanted hair can be difficult to manage with regular shaving, waxing or threading. If you are looking for a longer-term solution for unwanted hair, Laser Hair Reduction Treatment can be an effective option. At VAMA Advanced Hair & Skin Clinic, laser hair reduction is performed using professional technology and a treatment plan tailored to your skin type, hair growth and individual requirements.",
      },
      { type: "heading", text: "What Is Laser Hair Reduction?" },
      {
        type: "paragraph",
        text: "Laser hair reduction is a non-invasive cosmetic procedure that uses controlled laser energy to target the pigment in the hair follicle. The energy is absorbed by the hair and converted into heat, which can help reduce the ability of the follicle to produce new hair.",
      },
      {
        type: "paragraph",
        text: "Unlike shaving or waxing, which only manage visible hair temporarily, laser treatment works at the follicle level. With a recommended series of sessions, many people experience a significant reduction in unwanted hair growth.",
      },
      { type: "heading", text: "Benefits of Laser Hair Reduction" },
      { type: "paragraph", text: "Laser hair reduction can provide several benefits, including:" },
      {
        type: "list",
        items: [
          "Long-term reduction in unwanted hair",
          "Smoother-looking skin",
          "Reduced dependence on shaving and waxing",
          "Helps manage frequent hair growth",
          "Can be performed on different body areas",
          "Treatment sessions are generally quick, depending on the area",
          "Customized according to individual skin and hair characteristics",
        ],
      },
      {
        type: "paragraph",
        text: "Laser hair reduction may also help reduce problems associated with frequent shaving, such as razor bumps and irritation in some individuals.",
      },
      { type: "heading", text: "How Does Laser Hair Reduction Work?" },
      {
        type: "paragraph",
        text: "Before treatment, your skin and hair are assessed to determine the appropriate laser settings and treatment approach. During the procedure, the laser device delivers controlled pulses of energy to the targeted area.",
      },
      {
        type: "paragraph",
        text: "You may experience a mild snapping or warming sensation during the procedure. The duration of each session depends on the treatment area. Smaller areas such as the upper lip or chin generally require less time than larger areas such as the legs, arms or back.",
      },
      {
        type: "paragraph",
        text: "Because hair grows in different stages, multiple sessions are usually required to achieve optimal hair reduction. Your doctor or skin professional will recommend a treatment schedule based on your individual response.",
      },
      { type: "heading", text: "Areas That Can Be Treated" },
      { type: "paragraph", text: "Laser hair reduction may be performed on various areas of the body, including:" },
      { type: "list", items: ["Face", "Upper lip", "Chin", "Underarms", "Arms", "Legs", "Back", "Chest", "Bikini area"] },
      {
        type: "paragraph",
        text: "The suitability of treatment depends on factors such as skin type, hair colour, hair thickness and the area being treated.",
      },
      { type: "heading", text: "Why Choose VAMA Clinics?" },
      {
        type: "paragraph",
        text: "At VAMA Advanced Hair & Skin Clinic, treatment is planned according to your individual skin and hair characteristics. A professional consultation helps determine whether laser hair reduction is suitable for you and which treatment approach may provide the best results.",
      },
      {
        type: "paragraph",
        text: "Our team focuses on appropriate treatment settings, patient comfort and personalized skincare guidance throughout the treatment process.",
      },
      { type: "heading", text: "Is Laser Hair Reduction Right for You?" },
      {
        type: "paragraph",
        text: "Laser hair reduction can be a convenient option for people who want to reduce unwanted hair growth and spend less time on temporary hair-removal methods. However, results can vary depending on factors such as hair colour, thickness, hormonal influences and the treatment area.",
      },
      { type: "paragraph", text: "A consultation is recommended before beginning treatment so your skin and hair can be properly evaluated." },
    ],
    faqs: [
      { q: "Is laser hair reduction permanent?", a: "It offers long-term reduction rather than 100% permanent removal — most patients see 80–90% reduction after a full course." },
      { q: "Does it work on dark skin tones?", a: "Yes, our diode laser is calibrated to be safe and effective across all skin tones." },
      { q: "How many sessions are needed?", a: "Typically 6–8 sessions spaced 4–6 weeks apart, aligned with your hair growth cycle." },
      { q: "Is laser hair reduction safe for teenagers?", a: "It's generally recommended from the late teens onward once hormonal hair growth has stabilised; younger patients are assessed individually by our dermatologist before starting." },
    ],
  },
  {
    slug: "filler",
    category: "skin-treatment",
    name: "Dermal Fillers",
    image: dermalFillerImg,
    short: "Restore volume & contour with precision filler placement.",
    metaTitle: "Dermal Filler Treatment & Facial Contouring | VAMA Clinics",
    metaDescription:
      "Restore facial volume and smoothen contours with professionally administered dermal fillers at VAMA Clinics. Book a personalized consultation.",
    description:
      "Dermal fillers restore lost volume in cheeks, lips and under-eyes, and sharpen facial contouring — administered with precision for natural, balanced results.",
    benefits: ["Restores facial volume", "Natural contouring", "Immediate results", "Minimal downtime"],
    duration: "30–45 mins",
    sessions: "1 session (touch-ups as needed)",
    downtime: "1–2 days mild swelling",
    process: commonProcess(
      "Facial proportions and areas of volume loss are mapped during consultation.",
      "A filler type and volume plan is chosen for cheeks, lips, jawline or under-eyes as needed.",
      "Filler is injected in small, precise amounts, with results assessed in real-time.",
      "Mild swelling settles within 24–48 hours; final results are visible within a week."
    ),
    article: [
      {
        type: "paragraph",
        text: "Facial volume naturally changes with age, which can contribute to the appearance of fine lines, wrinkles, hollow areas and less-defined facial contours. Dermal fillers are a non-surgical cosmetic treatment designed to restore or enhance facial volume and create a more balanced, refreshed appearance. At VAMA Advanced Hair & Skin Clinic, filler treatments are planned according to your facial features, skin condition and aesthetic goals.",
      },
      { type: "heading", text: "What Are Dermal Fillers?" },
      {
        type: "paragraph",
        text: "Dermal fillers are injectable gel-like substances used to add volume to specific areas of the face. Many modern fillers contain hyaluronic acid, a substance naturally found in the body that helps support skin hydration and volume.",
      },
      {
        type: "paragraph",
        text: "Depending on the treatment area and desired outcome, fillers may be used to enhance facial contours, soften the appearance of certain lines or restore volume in areas that have become hollow over time.",
      },
      { type: "heading", text: "Benefits of Dermal Fillers" },
      { type: "paragraph", text: "A professionally administered filler treatment may help:" },
      {
        type: "list",
        items: [
          "Restore lost facial volume",
          "Enhance facial contours",
          "Improve the appearance of certain wrinkles and folds",
          "Add definition to the lips",
          "Improve the appearance of hollow areas",
          "Create better facial balance and symmetry",
          "Provide a refreshed and naturally proportioned appearance",
        ],
      },
      {
        type: "paragraph",
        text: "The goal is not necessarily to create a dramatic change. A customized treatment can be planned to maintain your natural facial appearance while addressing specific concerns.",
      },
      { type: "heading", text: "Areas Commonly Treated With Fillers" },
      { type: "paragraph", text: "Dermal fillers can be used for different facial areas depending on individual requirements. Common treatment areas include:" },
      {
        type: "list",
        items: ["Lips", "Cheeks", "Chin", "Jawline", "Nasolabial folds", "Marionette lines", "Under-eye hollows", "Other areas requiring volume restoration"],
      },
      {
        type: "paragraph",
        text: "The appropriate treatment area and filler type depend on your facial structure, skin condition and desired results.",
      },
      { type: "heading", text: "How Does the Filler Treatment Work?" },
      {
        type: "paragraph",
        text: "Before treatment, a consultation is performed to understand your concerns and aesthetic goals. Your facial features are evaluated so that the treatment can be planned according to your individual requirements.",
      },
      {
        type: "paragraph",
        text: "During the procedure, the selected filler is carefully injected into the targeted area using appropriate injection techniques. The treatment duration depends on the number and location of areas being treated.",
      },
      {
        type: "paragraph",
        text: "Some temporary redness, swelling, tenderness or bruising may occur after injections. Your doctor will provide appropriate aftercare instructions to support recovery.",
      },
      { type: "heading", text: "Why Choose VAMA Clinics?" },
      {
        type: "paragraph",
        text: "At VAMA Advanced Hair & Skin Clinic, cosmetic treatments are approached with an emphasis on personalized planning and natural-looking results. Our experienced team evaluates your facial features and discusses realistic treatment expectations before recommending a filler procedure.",
      },
      {
        type: "paragraph",
        text: "Every face is different, so the amount and placement of filler should be customized rather than following a standard approach.",
      },
      { type: "heading", text: "Is Dermal Filler Right for You?" },
      {
        type: "paragraph",
        text: "Dermal fillers may be suitable for adults who want to enhance facial volume, improve certain facial contours or address specific signs of ageing without undergoing surgery. However, fillers are not appropriate for everyone.",
      },
      { type: "paragraph", text: "A professional consultation is important to assess your suitability, discuss potential risks and determine the most appropriate treatment plan." },
    ],
    faqs: [
      { q: "Are fillers safe?", a: "Yes, we use approved hyaluronic-acid based fillers that are reversible and have a strong safety record." },
      { q: "How long do fillers last?", a: "Depending on the area and product, results typically last 9–18 months." },
      { q: "Is there any downtime?", a: "Most patients experience mild swelling for 1–2 days; you can usually return to normal activities the same day." },
      { q: "Is there a minimum or maximum age for fillers?", a: "Fillers are typically recommended for adults 18 and above, with no upper age limit — older patients often benefit most from volume restoration." },
    ],
  },
  {
    slug: "face-prp",
    category: "skin-treatment",
    name: "Face PRP",
    image: facePrpImg,
    short: "Your own platelets, concentrated to rejuvenate skin naturally.",
    metaTitle: "Face PRP Treatment & Facial Care | VAMA Clinics",
    metaDescription:
      "Improve skin texture and radiance with Face PRP treatment at VAMA Clinics, performed under expert dermatological supervision.",
    description:
      "Platelet-Rich Plasma from your own blood is reinjected into the skin to stimulate collagen and improve texture, tone and glow — a completely natural rejuvenation method.",
    benefits: ["100% natural (autologous)", "Improves tone & texture", "Stimulates collagen", "Minimal side effects"],
    duration: "45–60 mins",
    sessions: "3–4 sessions",
    downtime: "1 day mild redness",
    process: commonProcess(
      "A quick health check confirms you're a good candidate for PRP therapy.",
      "A small blood sample is drawn and processed to isolate the platelet-rich plasma.",
      "PRP is micro-injected or applied with micro-needling across the treatment area.",
      "Mild redness settles within a day; collagen-building continues over following weeks."
    ),
    article: [
      {
        type: "paragraph",
        text: "Healthy, youthful-looking skin is often associated with good hydration, smooth texture and natural collagen production. Face PRP Treatment, also known as Platelet-Rich Plasma therapy, is a minimally invasive cosmetic procedure that uses components of your own blood to support skin rejuvenation. At VAMA Advanced Hair & Skin Clinic, PRP treatment is customized according to your skin condition, concerns and aesthetic goals.",
      },
      { type: "heading", text: "What Is Face PRP Treatment?" },
      {
        type: "paragraph",
        text: "PRP stands for Platelet-Rich Plasma. During the treatment, a small amount of blood is collected and processed to separate the plasma containing a higher concentration of platelets. This platelet-rich portion is then used on the targeted facial areas.",
      },
      {
        type: "paragraph",
        text: "Platelets contain growth factors that are involved in the body's natural tissue-repair processes. When PRP is introduced into the skin using an appropriate technique, it may support collagen production and overall skin rejuvenation.",
      },
      { type: "heading", text: "Benefits of Face PRP" },
      { type: "paragraph", text: "Face PRP treatment may help improve the appearance of several common skin concerns, including:" },
      {
        type: "list",
        items: [
          "Dull or tired-looking skin",
          "Uneven skin texture",
          "Fine lines and early signs of ageing",
          "Mild acne scars",
          "Reduced skin firmness",
          "Uneven-looking complexion",
          "Loss of natural skin radiance",
        ],
      },
      {
        type: "paragraph",
        text: "The treatment uses your own blood-derived material, making it a popular option for people seeking an autologous approach to facial rejuvenation.",
      },
      { type: "heading", text: "How Does Face PRP Work?" },
      { type: "paragraph", text: "Before treatment, your skin is assessed to understand your concerns and determine whether PRP is suitable for you." },
      {
        type: "paragraph",
        text: "A small blood sample is collected and processed using specialized equipment to separate the platelet-rich plasma. After preparing the treatment area, the PRP is applied or introduced into the targeted skin according to the selected treatment technique.",
      },
      {
        type: "paragraph",
        text: "The procedure may cause temporary redness, mild swelling or sensitivity. These effects generally settle as the skin recovers, although individual recovery can vary.",
      },
      { type: "heading", text: "How Many PRP Sessions Are Needed?" },
      {
        type: "paragraph",
        text: "The number of sessions depends on your skin condition, treatment goals and response to therapy. Some individuals may require a series of sessions to achieve their desired improvement.",
      },
      {
        type: "paragraph",
        text: "During your consultation, the VAMA Clinics team can recommend an individualized treatment schedule based on your skin assessment.",
      },
      { type: "heading", text: "Why Choose VAMA Clinics for Face PRP?" },
      {
        type: "paragraph",
        text: "At VAMA Advanced Hair & Skin Clinic, treatments are planned around individual skin requirements rather than using the same approach for every patient. Our experienced team evaluates your skin and discusses realistic expectations before beginning treatment.",
      },
      {
        type: "paragraph",
        text: "The objective of Face PRP is to support natural-looking skin rejuvenation while addressing specific concerns such as texture, fine lines and reduced radiance.",
      },
      { type: "heading", text: "Is Face PRP Right for You?" },
      {
        type: "paragraph",
        text: "Face PRP may be considered by adults who want to improve overall skin quality and address early signs of ageing or uneven texture without undergoing surgical procedures. However, PRP is not suitable for everyone.",
      },
      {
        type: "paragraph",
        text: "A professional consultation is recommended before treatment, particularly if you have an active skin condition, bleeding-related concerns or are taking certain medications.",
      },
    ],
    faqs: [
      { q: "Is Face PRP safe since it uses my own blood?", a: "Yes — because PRP is derived from your own blood, allergic reactions are extremely rare." },
      { q: "Does the blood draw hurt?", a: "It's a standard blood draw, similar to a routine blood test — quick and minimally uncomfortable." },
      { q: "When will I notice improvement?", a: "Most patients notice improved glow within 1–2 weeks, with texture improvements building over 2–3 months." },
      { q: "Is Face PRP suitable for older, mature skin?", a: "Yes — PRP is often especially effective for mature skin, as its natural collagen-stimulation supports the skin's reduced regenerative capacity with age." },
    ],
  },
  {
    slug: "skin-rejuvenation",
    category: "skin-treatment",
    name: "Skin Rejuvenation",
    image: skinRejuvenationImg,
    short: "Restore tone, texture & radiance with combination therapy.",
    metaTitle: "Skin Rejuvenation Treatment & Facial Renewal | VAMA Clinics",
    metaDescription:
      "Refresh dull, tired-looking skin with dermatologist-guided skin rejuvenation treatments at VAMA Clinics, customized to your skin concerns.",
    description:
      "A tailored combination of peels, laser toning and skin boosters designed to reverse dullness, pigmentation and uneven texture for consistently radiant skin.",
    benefits: ["Evens out tone", "Reduces pigmentation", "Boosts radiance", "Custom combination therapy"],
    duration: "45–60 mins",
    sessions: "4–6 sessions",
    downtime: "None to minimal",
    process: commonProcess(
      "Skin tone, pigmentation and texture concerns are evaluated in detail.",
      "A combination therapy plan — peels, laser toning, boosters — is built around your goals.",
      "Sessions are delivered in sequence, spaced to allow skin recovery and cumulative improvement.",
      "A maintenance skincare plan keeps results consistent between sessions."
    ),
    article: [
      {
        type: "paragraph",
        text: "Healthy, youthful-looking skin can naturally change with age, sun exposure, stress and environmental factors. Fine lines, uneven skin tone, pigmentation, dullness and changes in skin texture may gradually become more noticeable. Skin Rejuvenation Treatment is designed to improve the overall appearance and quality of the skin by addressing specific concerns and supporting a smoother, fresher and more radiant complexion.",
      },
      {
        type: "paragraph",
        text: "At VAMA Advanced Hair & Skin Clinic, skin rejuvenation treatments are customized according to your skin type, concerns and individual treatment goals.",
      },
      { type: "heading", text: "What Is Skin Rejuvenation?" },
      {
        type: "paragraph",
        text: "Skin rejuvenation refers to a range of professional treatments that aim to improve the appearance of ageing, dull, uneven or damaged skin. Depending on your concerns, a customized treatment plan may focus on improving skin texture, pigmentation, hydration, fine lines, acne marks or overall radiance.",
      },
      {
        type: "paragraph",
        text: "The appropriate treatment depends on factors such as your skin type, condition and desired results. A professional skin assessment helps determine the most suitable approach.",
      },
      { type: "heading", text: "Benefits of Skin Rejuvenation Treatment" },
      { type: "paragraph", text: "Skin rejuvenation may help improve the appearance of:" },
      {
        type: "list",
        items: [
          "Fine lines and early signs of ageing",
          "Uneven skin tone",
          "Dull or tired-looking skin",
          "Pigmentation and sun-related skin concerns",
          "Uneven skin texture",
          "Mild acne marks and scars",
          "Enlarged or congested pores",
          "Loss of skin firmness",
          "Reduced natural skin radiance",
        ],
      },
      {
        type: "paragraph",
        text: "The goal is to help your skin look smoother, healthier and more refreshed while maintaining a natural appearance.",
      },
      { type: "heading", text: "How Does Skin Rejuvenation Work?" },
      {
        type: "paragraph",
        text: "Before starting treatment, your skin is carefully evaluated to understand your concerns and treatment objectives. Based on this assessment, a suitable rejuvenation procedure or combination of treatments may be recommended.",
      },
      {
        type: "paragraph",
        text: "Depending on your skin requirements, treatment may focus on exfoliation, collagen stimulation, pigmentation management, hydration or improving overall skin texture. The number of sessions and recovery time can vary according to the selected procedure and individual response.",
      },
      { type: "heading", text: "Who Can Consider Skin Rejuvenation?" },
      {
        type: "paragraph",
        text: "Skin rejuvenation may be suitable for adults who want to improve the appearance of dull skin, uneven texture, pigmentation, fine lines or early signs of ageing.",
      },
      {
        type: "paragraph",
        text: "It can also be considered by people who want to maintain healthier-looking skin as part of a professional skincare routine. However, not every treatment is appropriate for every skin type, so consultation with a qualified skin professional is recommended before beginning treatment.",
      },
      { type: "heading", text: "Why Choose VAMA Clinics?" },
      {
        type: "paragraph",
        text: "At VAMA Advanced Hair & Skin Clinic, treatment plans are personalized according to individual skin concerns. Our experienced team evaluates your skin and discusses realistic expectations before recommending a procedure.",
      },
      {
        type: "paragraph",
        text: "Rather than following a one-size-fits-all approach, the treatment plan can be selected according to your skin condition, lifestyle and desired outcome.",
      },
      { type: "heading", text: "Is Skin Rejuvenation Right for You?" },
      {
        type: "paragraph",
        text: "The right rejuvenation treatment depends on your specific skin concerns. Factors such as skin sensitivity, pigmentation, active acne, previous treatments and overall skin health may influence the recommended procedure.",
      },
      { type: "paragraph", text: "A professional consultation allows your skin to be assessed and helps determine the safest and most appropriate treatment approach." },
    ],
    faqs: [
      { q: "What concerns does this treat?", a: "It's effective for dullness, pigmentation, uneven texture and early signs of sun damage." },
      { q: "Will I need to take time off work?", a: "Most sessions have no downtime, so you can return to your routine right after." },
      { q: "How is the combination decided?", a: "Your dermatologist customises the mix of peels, lasers and boosters after assessing your specific skin concerns." },
      { q: "Is skin rejuvenation suitable at any age?", a: "Yes — the combination is adjusted by age and concern, from early pigmentation in your 20s–30s to deeper texture and sun-damage correction later in life." },
    ],
  },

  // ---------------- HAIR ----------------
  {
    slug: "hair-transplant",
    category: "hair-treatment",
    name: "Hair Transplant (FUE)",
    image: hairTransplantImg,
    short: "Natural, permanent hair restoration with advanced FUE.",
    metaTitle: "Hair Transplant Clinic & Treatment | VAMA Clinics",
    metaDescription:
      "Get a personalized hair transplant consultation with Dr. Akanksha Gupta at VAMA Clinics. Expert-led evaluation and natural-looking results.",
    description:
      "Our Follicular Unit Extraction (FUE) technique transplants healthy follicles individually for a natural hairline and density — permanent, scarless and tailored to your growth pattern.",
    benefits: ["Permanent, natural results", "Scarless FUE technique", "Customised hairline design", "Experienced surgical team"],
    duration: "4–8 hours (day procedure)",
    sessions: "1 session (single sitting)",
    downtime: "5–7 days visible scabbing",
    process: commonProcess(
      "Scalp condition, donor density and hair-loss pattern are assessed with trichoscopy.",
      "Your hairline is designed and graft count is planned to match your goals and donor supply.",
      "Healthy follicles are extracted one-by-one and implanted into thinning areas under local anaesthesia.",
      "A detailed aftercare kit and follow-up visits support healthy graft survival and regrowth."
    ),
    faqs: [
      { q: "Is FUE painful?", a: "The procedure is done under local anaesthesia, so it's largely painless; mild soreness afterward is normal." },
      { q: "When will new hair start growing?", a: "Transplanted hair typically sheds first, with new growth starting around month 3–4 and full results by 10–12 months." },
      { q: "Is the result permanent?", a: "Yes, transplanted follicles are resistant to hair-loss hormones and provide permanent, natural results." },
      { q: "Is there a minimum age for hair transplant?", a: "We generally recommend waiting until your hair-loss pattern has stabilised, usually mid-20s onward, so the hairline design remains accurate for years to come." },
    ],
  },
  {
    slug: "hair-fall-treatment",
    category: "hair-treatment",
    name: "Hair Fall Treatment",
    image: hairFallImg,
    short: "Diagnose the root cause and stop hair fall early.",
    metaTitle: "Advanced Hair Fall Treatment & Care | VAMA Clinics",
    metaDescription:
      "Address hair fall with expert diagnosis and treatment plans by Dr. Akanksha Gupta at VAMA Clinics, tailored to your scalp and hair condition.",
    description:
      "We identify the underlying cause of hair fall — nutritional, hormonal or hereditary — and build a targeted plan combining medication, PRP and topical therapy.",
    benefits: ["Root-cause diagnosis", "Customised treatment plan", "Combination therapy", "Regular progress tracking"],
    duration: "30–45 mins per visit",
    sessions: "Ongoing, reviewed monthly",
    downtime: "None",
    process: commonProcess(
      "Blood work and scalp analysis identify whether the cause is hormonal, nutritional or hereditary.",
      "A combination plan of medication, topical therapy and/or PRP is built around the diagnosis.",
      "Treatment is administered and adjusted as your scalp responds over the following weeks.",
      "Progress is tracked with photos and trichoscopy at each follow-up visit."
    ),
    faqs: [
      { q: "How do I know if my hair fall is normal or a problem?", a: "Losing more than 100 strands a day, or noticing thinning/visible scalp, is a sign to get it evaluated." },
      { q: "How soon will hair fall reduce?", a: "Most patients notice reduced shedding within 6–8 weeks of starting a targeted plan." },
      { q: "Is this treatment only for men?", a: "No, we treat hair fall in both men and women with plans customised to each case." },
      { q: "Can teenagers or older adults get this treatment?", a: "Yes — hair fall affects all age groups differently, and we tailor the diagnosis and plan accordingly, from teenage nutritional causes to age-related thinning." },
    ],
  },
  {
    slug: "hair-replacement",
    category: "hair-treatment",
    name: "Hair Replacement",
    image: hairReplacementImg,
    short: "Instant, natural-looking density with non-surgical systems.",
    metaTitle: "Hair Replacement Treatment & Care | VAMA Clinics",
    metaDescription:
      "Explore non-surgical hair replacement solutions guided by Dr. Akanksha Gupta at VAMA Clinics, designed to suit your lifestyle and needs.",
    description:
      "Our non-surgical hair replacement systems offer an immediate, natural-looking solution for hair loss — undetectable, comfortable and fully customisable.",
    benefits: ["Instant results", "Non-surgical", "Undetectable & natural", "Low maintenance"],
    duration: "60–90 mins fitting",
    sessions: "Custom fitting + periodic maintenance",
    downtime: "None",
    process: commonProcess(
      "Scalp shape, hair colour, texture and density goals are measured for a custom system.",
      "A hair replacement system is selected and matched precisely to your natural hair.",
      "The system is fitted and styled to blend seamlessly with your existing hair.",
      "Simple maintenance visits keep the system looking natural over time."
    ),
    faqs: [
      { q: "Will it look natural?", a: "Yes, systems are custom-matched to your hair colour, texture and scalp tone for an undetectable finish." },
      { q: "Can I wash and style it normally?", a: "Yes, most systems allow normal washing, styling and even swimming with proper care." },
      { q: "How often does it need maintenance?", a: "Typically every 3–4 weeks, depending on the system type and your lifestyle." },
      { q: "Is hair replacement suitable for older patients?", a: "Yes — non-surgical systems work well at any age and are often preferred by older patients who want an immediate result without a procedure." },
    ],
  },
  {
    slug: "hair-prp",
    category: "hair-treatment",
    name: "Hair PRP",
    image: hairPrpImg,
    short: "Platelet-Rich Plasma therapy to stimulate hair regrowth.",
    metaTitle: "Hair PRP Treatment & Hair Growth | VAMA Clinics",
    metaDescription:
      "Support hair growth with PRP therapy administered by Dr. Akanksha Gupta at VAMA Clinics, using your body's own healing process.",
    description:
      "PRP therapy uses concentrated growth factors from your own blood, injected into the scalp to stimulate dormant follicles and strengthen existing hair.",
    benefits: ["Stimulates regrowth", "100% natural", "No downtime", "Strengthens existing hair"],
    duration: "30–45 mins",
    sessions: "4–6 sessions",
    downtime: "None to minimal",
    process: commonProcess(
      "Scalp and hair density are evaluated to confirm PRP is right for your stage of hair loss.",
      "A session schedule is planned, usually spaced 3–4 weeks apart for best results.",
      "Blood is drawn, processed, and the concentrated PRP is micro-injected into the scalp.",
      "Minimal aftercare is needed; progress is reviewed with photos each session."
    ),
    faqs: [
      { q: "Does Hair PRP actually work?", a: "Clinical studies show PRP is effective at stimulating dormant follicles, especially in early-to-moderate hair thinning." },
      { q: "Is it painful?", a: "A numbing cream is applied beforehand, so most patients report only mild discomfort." },
      { q: "How many sessions will I need?", a: "Most protocols involve 4–6 sessions, with maintenance sessions every few months after." },
      { q: "Is there an age limit for Hair PRP?", a: "PRP is generally suitable for adults of all ages, though it works best when started early in the hair-thinning process rather than after extensive, long-standing loss." },
    ],
  },
  {
    slug: "dandruff-treatment",
    category: "hair-treatment",
    name: "Dandruff Treatment",
    image: dandruffImg,
    short: "Targeted therapy for a healthy, flake-free scalp.",
    metaTitle: "Dandruff Treatment & Scalp Care | VAMA Clinics",
    metaDescription:
      "Get lasting relief from dandruff and scalp irritation with expert care from Dr. Akanksha Gupta at VAMA Clinics.",
    description:
      "Our scalp-specific protocols treat dandruff at the source — balancing scalp flora and oil production for lasting relief, not just temporary control.",
    benefits: ["Lasting relief", "Scalp-specific diagnosis", "Restores scalp balance", "Prevents recurrence"],
    duration: "30 mins",
    sessions: "3–4 sessions",
    downtime: "None",
    process: commonProcess(
      "Scalp is examined to identify the type and cause of dandruff — fungal, dry or oily.",
      "A targeted anti-fungal and scalp-balancing protocol is prescribed.",
      "In-clinic scalp treatments are combined with a home-care routine.",
      "Scalp health is reviewed and the routine is adjusted for lasting relief."
    ),
    faqs: [
      { q: "Is dandruff contagious?", a: "No, dandruff is not contagious — it's caused by scalp conditions like fungal overgrowth or dryness." },
      { q: "Will regular shampoo fix it?", a: "Over-the-counter shampoos often only mask symptoms; our protocol addresses the root cause for lasting results." },
      { q: "How soon will my scalp improve?", a: "Most patients see visible improvement within 2–3 weeks of starting treatment." },
      { q: "Can teenagers get dandruff treatment?", a: "Yes — dandruff can appear from the teenage years onward, and our scalp-specific protocols are adjusted safely for younger patients too." },
    ],
  },
  {
    slug: "hair-dna-test",
    category: "hair-treatment",
    name: "Hair DNA Test",
    image: hairDnaImg,
    short: "Understand your genetic hair-loss risk before it starts.",
    metaTitle: "Hair DNA Test & Hair Health Analysis | VAMA Clinics",
    metaDescription:
      "Understand the genetic causes of your hair loss with a Hair DNA Test guided by Dr. Akanksha Gupta at VAMA Clinics.",
    description:
      "A simple genetic test that predicts your predisposition to hair thinning, helping us design a preventive, personalised treatment roadmap.",
    benefits: ["Predicts hair-loss risk", "Personalised roadmap", "Simple, non-invasive test", "Preventive approach"],
    duration: "10 mins sample collection",
    sessions: "1 test + consultation",
    downtime: "None",
    process: commonProcess(
      "A brief discussion covers your family history and current hair health.",
      "A simple, non-invasive DNA sample (cheek swab) is collected.",
      "The sample is analysed for genetic markers linked to hair-loss predisposition.",
      "Results are explained in detail, with a preventive or corrective roadmap built around them."
    ),
    faqs: [
      { q: "How is the sample collected?", a: "It's a simple, painless cheek swab — no blood draw or injections needed." },
      { q: "How long until I get results?", a: "Results are typically available within 2–3 weeks, followed by a detailed consultation." },
      { q: "Is this useful if I don't have hair loss yet?", a: "Yes — it's especially valuable as a preventive tool if hair loss runs in your family." },
      { q: "At what age should I consider a Hair DNA Test?", a: "It's most valuable in your late teens to early 30s, before visible hair loss begins, so we can build a preventive plan while there's still time to act." },
    ],
  },
  {
    slug: "gfc-hair-treatment",
    category: "hair-treatment",
    name: "GFC Hair Treatment",
    image: gfcImg,
    short: "Growth Factor Concentrate for denser, healthier hair.",
    metaTitle: "GFC Hair Treatment & Hair Growth | VAMA Clinics",
    metaDescription:
      "Explore Growth Factor Concentrate (GFC) therapy for hair restoration, offered by Dr. Akanksha Gupta at VAMA Clinics.",
    description:
      "GFC therapy delivers a concentrated dose of growth factors to the scalp, promoting follicle activity and hair density with fewer sessions than traditional PRP.",
    benefits: ["Fewer sessions needed", "Boosts follicle activity", "Improves density", "Minimal discomfort"],
    duration: "30–45 mins",
    sessions: "3–4 sessions",
    downtime: "None to minimal",
    process: commonProcess(
      "Hair density and follicle activity are assessed to confirm suitability for GFC.",
      "A session plan is built, typically requiring fewer sittings than standard PRP.",
      "Growth Factor Concentrate is prepared and micro-injected into the scalp.",
      "Scalp is monitored across follow-ups to track density improvements."
    ),
    faqs: [
      { q: "How is GFC different from PRP?", a: "GFC delivers a more concentrated dose of growth factors with fewer proteins that can inhibit growth, often needing fewer sessions." },
      { q: "Is it suitable for advanced hair loss?", a: "GFC works best for early-to-moderate hair thinning; advanced cases may be better suited to transplant." },
      { q: "How soon are results visible?", a: "Most patients notice reduced shedding and improved density within 6–10 weeks." },
      { q: "Is GFC suitable for older patients with long-standing hair loss?", a: "GFC works best on follicles that are still active, so it's most effective in early-to-moderate hair loss regardless of age — very advanced or long-bald areas may need a transplant instead." },
    ],
  },

  // ---------------- WEIGHT LOSS ----------------
  {
    slug: "medical-weight-loss",
    category: "weight-loss",
    name: "Medical Weight Loss",
    image: weightLossImg,
    short: "Professionally supervised, personalised weight-management guidance.",
    metaTitle: "Looking Medical Weight Loss | VAMA Clinics",
    metaDescription:
      "Get personalized medical weight loss support at VAMA Clinics with professional guidance, nutrition planning, and sustainable lifestyle strategies.",
    description:
      "Medical Weight Loss offers a structured approach that considers your health, lifestyle, eating habits, weight history and individual goals. At VAMA Clinics, it focuses on personalised weight-management guidance rather than temporary or restrictive dieting — combining nutritional guidance, physical activity, behavioural changes, health monitoring and medically appropriate options when required.",
    benefits: ["Professionally supervised guidance", "Personalised nutrition & lifestyle plan", "Focus on sustainable change, not crash diets", "Regular progress monitoring"],
    duration: "45 mins per visit",
    sessions: "Ongoing programme, reviewed regularly",
    downtime: "None",
    process: commonProcess(
      "A healthcare professional assesses your current weight, body composition, medical history, eating habits, activity levels, previous weight-loss attempts and personal goals.",
      "Based on this assessment, a personalised plan combining nutrition, activity and behavioural strategies is designed around your requirements.",
      "The plan is followed with practical, realistic lifestyle changes rather than extreme or restrictive dieting.",
      "Regular follow-ups assess progress and help determine whether adjustments to the plan are required."
    ),
    article: [
      {
        type: "paragraph",
        text: "Losing excess weight can be challenging, particularly when diet and exercise alone do not provide sustainable progress. Medical Weight Loss offers a structured approach that considers your health, lifestyle, eating habits, weight history and individual goals.",
      },
      {
        type: "paragraph",
        text: "At VAMA Clinics, medical weight loss focuses on personalised weight-management guidance rather than temporary or restrictive dieting. A suitable plan may combine nutritional guidance, physical activity, behavioural changes, health monitoring and medically appropriate options when required.",
      },
      { type: "heading", text: "What Is Medical Weight Loss?" },
      { type: "paragraph", text: "Medical weight loss is a professionally supervised approach to managing excess weight. Before recommending a treatment plan, a healthcare professional may assess your:" },
      {
        type: "list",
        items: ["Current weight and body composition", "Medical history", "Eating habits", "Physical activity", "Lifestyle", "Previous weight-loss attempts", "Weight-related health concerns", "Personal goals"],
      },
      { type: "paragraph", text: "This assessment helps determine which strategies may be appropriate for you." },
      { type: "heading", text: "Who May Consider Medical Weight Loss?" },
      { type: "paragraph", text: "Medical weight-management support may be useful for people who:" },
      {
        type: "list",
        items: ["Have difficulty losing excess weight", "Frequently regain weight after dieting", "Have weight-related health concerns", "Want structured professional guidance", "Need help improving eating and lifestyle habits", "Have tried multiple approaches without sustainable progress"],
      },
      { type: "paragraph", text: "Not every treatment is suitable for everyone. A professional consultation is important before starting a medical weight-loss program." },
      { type: "heading", text: "Personalized Weight Management" },
      {
        type: "paragraph",
        text: "At VAMA Clinics, weight-loss plans are developed according to individual requirements. Your healthcare professional can discuss your current lifestyle, nutritional habits, physical activity, health history and goals before suggesting an appropriate approach.",
      },
      { type: "paragraph", text: "The focus is on realistic and sustainable lifestyle changes rather than extreme diets." },
      { type: "heading", text: "Nutrition and Lifestyle" },
      {
        type: "paragraph",
        text: "Healthy weight management involves more than reducing food intake. A balanced diet, regular physical activity, adequate sleep, stress management and consistent daily habits can all contribute to better weight management.",
      },
      { type: "paragraph", text: "Your plan may include practical nutrition recommendations and lifestyle strategies that fit your routine." },
      { type: "heading", text: "Progress Monitoring" },
      {
        type: "paragraph",
        text: "Weight-loss progress varies between individuals. Factors such as starting weight, lifestyle, medical conditions, consistency and individual response can influence results.",
      },
      { type: "paragraph", text: "Regular follow-ups can help assess progress and determine whether adjustments are required." },
      { type: "heading", text: "VAMA Clinics Locations" },
      { type: "paragraph", text: "VAMA Clinics provides personalised weight-management services across multiple locations:" },
      { type: "list", items: ["Lucknow", "Noida", "Indirapuram", "Lajpat Nagar, Delhi", "Agra", "Kanpur"] },
      { type: "paragraph", text: "You can choose the VAMA Clinics location convenient for you and discuss your weight-management goals with a qualified professional." },
      { type: "heading", text: "Start Your Weight-Loss Journey" },
      {
        type: "paragraph",
        text: "If you are struggling with excess weight or repeated dieting, professional guidance can help you understand suitable options. VAMA Clinics focuses on individualised medical weight management designed around your health and goals.",
      },
    ],
    faqs: [
      { q: "Is medical weight loss a crash diet?", a: "No. It is a professionally supervised approach focused on realistic, sustainable lifestyle changes rather than extreme or restrictive dieting." },
      { q: "Will I definitely be prescribed medication?", a: "Not necessarily. Medically appropriate options are only considered where suitable — your plan is based on individual assessment, not a standard protocol." },
      { q: "How much weight can I expect to lose?", a: "Results vary between individuals depending on starting weight, lifestyle, consistency and health conditions, and cannot be guaranteed." },
      { q: "Is this suitable for all age groups?", a: "Suitability depends on individual health and history. A professional consultation determines whether medical weight loss is appropriate for you." },
    ],
  },
  {
    slug: "obesity-treatment",
    category: "weight-loss",
    name: "Obesity Treatment",
    image: weightLossImg,
    short: "Structured, individualised weight-management strategies for obesity.",
    metaTitle: "Are You Looking Obesity Treatment & Care | VAMA Clinics",
    metaDescription:
      "Explore personalized obesity treatment at VAMA Clinics with professional guidance, lifestyle support, and structured weight management solutions.",
    description:
      "Obesity is a complex health concern influenced by nutrition, physical activity, genetics, lifestyle, medications, sleep and other health factors. VAMA Clinics provides a structured approach to Obesity Treatment, focusing on individual assessment and personalised weight-management strategies rather than short-term dieting.",
    benefits: ["Individual health assessment", "Personalised combination of strategies", "Behavioural & lifestyle support", "Regular weight monitoring"],
    duration: "45 mins per visit",
    sessions: "Ongoing programme, reviewed regularly",
    downtime: "None",
    process: commonProcess(
      "Your weight history, lifestyle, eating patterns, physical activity and relevant health conditions are reviewed to understand contributing factors.",
      "An individualised approach combining nutrition guidance, activity recommendations, behavioural support and medical evaluation is discussed.",
      "The plan is followed with weight monitoring and other clinically appropriate interventions as needed.",
      "Regular review helps identify areas that need adjustment for sustained, long-term results."
    ),
    article: [
      {
        type: "paragraph",
        text: "Obesity is a complex health concern that can be influenced by nutrition, physical activity, genetics, lifestyle, medications, sleep and other health factors. For people struggling with excess weight, simply following a short-term diet may not always provide sustainable results.",
      },
      {
        type: "paragraph",
        text: "VAMA Clinics provides a structured approach to Obesity Treatment, focusing on individual assessment and personalised weight-management strategies.",
      },
      { type: "heading", text: "What Is Obesity Treatment?" },
      { type: "paragraph", text: "Obesity treatment aims to help individuals manage excess body weight and develop healthier long-term habits. Depending on individual requirements, treatment may involve:" },
      {
        type: "list",
        items: ["Nutrition guidance", "Physical activity recommendations", "Lifestyle modification", "Behavioural support", "Weight monitoring", "Medical evaluation", "Other clinically appropriate interventions"],
      },
      { type: "paragraph", text: "The right combination depends on your health and individual circumstances." },
      { type: "heading", text: "Understanding the Causes of Obesity" },
      {
        type: "paragraph",
        text: "Weight gain can have multiple contributing factors. These may include excessive calorie intake, sedentary habits, stress, poor sleep, certain medications, hormonal or metabolic conditions and genetic factors.",
      },
      { type: "paragraph", text: "Understanding these factors can help create a more suitable treatment plan." },
      { type: "heading", text: "Who May Need Obesity Management?" },
      { type: "paragraph", text: "Professional obesity management may be considered if you:" },
      {
        type: "list",
        items: ["Have difficulty reducing excess weight", "Experience repeated weight regain", "Have reduced mobility due to excess weight", "Have weight-related health concerns", "Need structured weight-management support", "Want professional guidance instead of unsupervised dieting"],
      },
      { type: "paragraph", text: "A consultation can help determine whether obesity treatment is appropriate for you." },
      { type: "heading", text: "Personalized Treatment at VAMA Clinics" },
      {
        type: "paragraph",
        text: "At VAMA Clinics, treatment planning starts with understanding your individual needs. Your healthcare professional may review your weight history, lifestyle, eating patterns, physical activity and relevant health conditions.",
      },
      { type: "paragraph", text: "Based on the assessment, an individualised approach can be discussed." },
      { type: "heading", text: "Lifestyle and Long-Term Weight Management" },
      {
        type: "paragraph",
        text: "Obesity management is not simply about reaching a particular number on the weighing scale. Long-term success may involve improving eating habits, increasing appropriate physical activity, managing stress, improving sleep and developing sustainable routines.",
      },
      { type: "paragraph", text: "Regular monitoring can help identify areas that need adjustment." },
      { type: "heading", text: "VAMA Clinics Locations" },
      { type: "paragraph", text: "Obesity-management consultations are available at VAMA Clinics in:" },
      { type: "list", items: ["Lucknow", "Noida", "Indirapuram", "Lajpat Nagar, Delhi", "Agra", "Kanpur"] },
      { type: "paragraph", text: "This allows patients to choose a nearby VAMA Clinics location for consultation and professional guidance." },
      { type: "heading", text: "Take the First Step" },
      {
        type: "paragraph",
        text: "If excess weight is affecting your daily life or health, professional assessment can help you understand the available options. VAMA Clinics provides personalised obesity-management guidance based on individual health requirements.",
      },
    ],
    faqs: [
      { q: "Is obesity treatment the same as weight-loss dieting?", a: "No. It is a structured, professionally guided approach that considers medical history, lifestyle and health factors, not just short-term dieting." },
      { q: "What causes obesity?", a: "Obesity can be influenced by multiple factors including diet, activity levels, genetics, sleep, stress, medications and hormonal or metabolic conditions." },
      { q: "How is a treatment plan decided?", a: "Your healthcare professional reviews your weight history, lifestyle and health conditions before discussing a suitable individualised approach." },
      { q: "Is obesity treatment suitable for everyone?", a: "Not every treatment is suitable for everyone. A professional consultation is important before starting a programme." },
    ],
  },
  {
    slug: "inch-loss-treatment",
    category: "weight-loss",
    name: "Inch Loss Treatment",
    image: contouringImg,
    short: "Targeted measurement reduction for the abdomen, waist & more.",
    metaTitle: "Inch Loss & Body Shaping Treatments| VAMA Clinics",
    metaDescription:
      "Discover personalized inch loss treatment at VAMA Clinics to support targeted body shaping with professional guidance and suitable treatment options.",
    description:
      "Sometimes body measurements remain a concern even when overall weight changes. Inch Loss Treatment focuses on improving measurements and body contours in selected areas — the abdomen, waist, thighs, arms and hips — based on your individual body composition, goals and suitability.",
    benefits: ["Targets localised areas of concern", "Improves body contours", "Non-surgical treatment options", "Personalised, area-specific planning"],
    duration: "30–60 mins per session",
    sessions: "Multiple sessions, as advised",
    downtime: "None to minimal",
    process: commonProcess(
      "Your target areas, body composition, goals and medical history are evaluated before recommending a treatment approach.",
      "A suitable non-surgical option is discussed, along with expected improvement, number of sessions and aftercare.",
      "Treatment is delivered to the selected areas — abdomen, waist, hips, thighs, arms or flanks — as planned.",
      "Lifestyle recommendations and follow-up sessions support your body-contouring goals over time."
    ),
    article: [
      {
        type: "paragraph",
        text: "Sometimes body measurements can remain a concern even when overall weight changes. Areas such as the abdomen, waist, thighs, arms and hips may have localised fat or excess body volume that can be difficult to address through lifestyle changes alone.",
      },
      { type: "paragraph", text: "Inch Loss Treatment focuses on improving measurements and body contours in selected areas. At VAMA Clinics, treatment planning is based on individual body composition, goals, medical history and suitability." },
      { type: "heading", text: "What Is Inch Loss Treatment?" },
      {
        type: "paragraph",
        text: "Inch loss refers to reducing measurements around selected areas of the body. It is different from general weight loss because changes in body measurements do not always correspond directly with changes on the weighing scale. Treatment areas may include:",
      },
      { type: "list", items: ["Abdomen", "Waist", "Hips", "Thighs", "Arms", "Flanks"] },
      { type: "paragraph", text: "The appropriate treatment depends on your individual requirements." },
      { type: "heading", text: "Who May Consider Inch Loss Treatment?" },
      { type: "paragraph", text: "Inch-loss treatment may be considered by people who:" },
      {
        type: "list",
        items: ["Have localised areas of excess fat", "Want to improve body contours", "Have difficulty changing specific areas through lifestyle alone", "Want to explore non-surgical body-shaping options", "Are working toward healthier lifestyle habits"],
      },
      { type: "paragraph", text: "A consultation is important to determine suitability." },
      { type: "heading", text: "Personalized Treatment Planning" },
      { type: "paragraph", text: "At VAMA Clinics, your concerns and target areas are evaluated before recommending a treatment approach. Your professional may discuss:" },
      { type: "list", items: ["Target areas", "Suitable treatment options", "Expected improvement", "Number of sessions, if applicable", "Possible side effects", "Aftercare", "Lifestyle recommendations"] },
      { type: "paragraph", text: "Results vary from person to person and cannot be guaranteed." },
      { type: "heading", text: "Inch Loss and Healthy Lifestyle" },
      { type: "paragraph", text: "Inch-loss treatments should complement — not replace — a healthy lifestyle. Balanced nutrition, regular physical activity, adequate sleep and maintaining a stable weight can support your overall body-contouring goals." },
      { type: "heading", text: "VAMA Clinics Locations" },
      { type: "paragraph", text: "You can explore inch-loss treatment at VAMA Clinics in:" },
      { type: "list", items: ["Lucknow", "Noida", "Indirapuram", "Lajpat Nagar, Delhi", "Agra", "Kanpur"] },
      { type: "paragraph", text: "Choose the location nearest to you for consultation and personalised treatment guidance." },
      { type: "heading", text: "Start Your Body-Contouring Journey" },
      {
        type: "paragraph",
        text: "If you are concerned about measurements in specific body areas, a professional consultation can help you understand which options may be suitable. VAMA Clinics provides personalised guidance for individuals interested in inch-loss and body-contouring solutions.",
      },
    ],
    faqs: [
      { q: "Is inch loss the same as weight loss?", a: "No. Inch loss focuses on reducing measurements in specific areas, which does not always correspond directly with changes on the weighing scale." },
      { q: "Which areas can be targeted?", a: "Commonly treated areas include the abdomen, waist, hips, thighs, arms and flanks, depending on your individual requirements." },
      { q: "How many sessions will I need?", a: "This depends on your target areas and treatment plan — your professional will discuss an appropriate number of sessions at consultation." },
      { q: "Can inch loss treatment replace diet and exercise?", a: "No. It should complement — not replace — a healthy, balanced lifestyle for the best overall results." },
    ],
  },
  {
    slug: "body-contouring",
    category: "weight-loss",
    name: "Body Contouring",
    image: contouringImg,
    short: "Non-surgical shaping for areas resistant to diet & exercise.",
    metaTitle: "Body Contouring Treatment & Body Shaping | VAMA Clinics",
    metaDescription:
      "Explore personalized body contouring at VAMA Clinics for targeted body shaping with suitable non-surgical options and professional treatment guidance.",
    description:
      "Even with regular exercise and a balanced diet, certain areas of the body can remain resistant to changes in shape. Body Contouring focuses on improving the appearance and shape of selected areas through appropriate non-surgical treatment options, selected according to your goals, body composition, health status and suitability.",
    benefits: ["Non-invasive shaping options", "Targets areas resistant to lifestyle change", "Personalised treatment planning", "Realistic, expectation-led consultation"],
    duration: "30–60 mins per area",
    sessions: "Multiple sessions, as advised",
    downtime: "None",
    process: commonProcess(
      "Your concerns, target areas and body composition are evaluated to determine treatment suitability.",
      "Appropriate options, expected outcomes and number of sessions are discussed for a personalised plan.",
      "The selected body-contouring technology is applied to the target area — abdomen, waist, hips, thighs, arms or flanks.",
      "Aftercare guidance and lifestyle recommendations support your overall body-management goals."
    ),
    article: [
      {
        type: "paragraph",
        text: "Even with regular exercise and a balanced diet, certain areas of the body can remain resistant to changes in shape. Body Contouring focuses on improving the appearance and shape of selected areas through appropriate treatment options.",
      },
      { type: "paragraph", text: "At VAMA Clinics, body-contouring treatments are selected according to individual goals, body composition, health status and treatment suitability." },
      { type: "heading", text: "What Is Body Contouring?" },
      { type: "paragraph", text: "Body contouring refers to treatments designed to improve body shape and address localised areas of unwanted fat or excess body volume. Potential treatment areas may include:" },
      { type: "list", items: ["Abdomen", "Waist", "Hips", "Thighs", "Arms", "Flanks"] },
      { type: "paragraph", text: "Different treatment technologies may be suitable for different individuals." },
      { type: "heading", text: "Who Can Consider Body Contouring?" },
      { type: "paragraph", text: "Body contouring may be appropriate for individuals who:" },
      {
        type: "list",
        items: ["Have localised areas of excess fat", "Want to improve body proportions", "Maintain a relatively stable weight", "Have areas resistant to lifestyle changes", "Want to explore non-surgical body-shaping options"],
      },
      { type: "paragraph", text: "Body contouring is generally intended for shaping specific areas rather than treating obesity." },
      { type: "heading", text: "Personalized Body-Shaping Plans" },
      { type: "paragraph", text: "At VAMA Clinics, consultation is an important first step. Your professional can evaluate your concerns and discuss appropriate options, expected outcomes, treatment sessions, possible side effects, recovery and aftercare." },
      { type: "paragraph", text: "A personalised plan helps ensure that expectations remain realistic." },
      { type: "heading", text: "Body Contouring and Lifestyle" },
      { type: "paragraph", text: "Body contouring works best alongside healthy lifestyle habits. Maintaining a balanced diet, staying physically active, getting adequate sleep and maintaining a stable weight can support your overall body-management goals." },
      { type: "heading", text: "VAMA Clinics Near You" },
      { type: "paragraph", text: "VAMA Clinics offers personalised body-contouring consultations across:" },
      { type: "list", items: ["Lucknow", "Noida", "Indirapuram", "Lajpat Nagar, Delhi", "Agra", "Kanpur"] },
      { type: "paragraph", text: "Patients can select the VAMA Clinics branch that is most convenient for them." },
      { type: "heading", text: "Explore Your Options" },
      {
        type: "paragraph",
        text: "If you are looking to address specific areas of your body, a professional consultation can help you understand whether body contouring is suitable for your goals. VAMA Clinics focuses on individualised treatment planning rather than a one-treatment-fits-all approach.",
      },
    ],
    faqs: [
      { q: "Is body contouring painful?", a: "Comfort levels vary by technology and individual — your professional will explain what to expect for the specific option recommended for you." },
      { q: "Is it a substitute for weight loss?", a: "No — it is generally intended for shaping specific areas rather than treating obesity or overall weight loss." },
      { q: "When will I see results?", a: "Results build gradually and vary between individuals depending on the technology used, treatment area and consistency." },
      { q: "Is body contouring safe for older patients?", a: "Suitability is assessed individually at consultation, taking your health history into account regardless of age." },
    ],
  },
  {
    slug: "ems-body-sculpting",
    category: "weight-loss",
    name: "EMS Body Sculpting",
    image: contouringImg,
    short: "Electrical muscle stimulation for non-surgical body shaping.",
    metaTitle: "EMS Body Sculpting Treatment & Body Shaping | VAMA Clinics",
    metaDescription:
      "Discover EMS body sculpting Treatment at VAMA Clinics for targeted muscle stimulation and body shaping with a personalized treatment approach.",
    description:
      "EMS Body Sculpting uses electrical muscle stimulation to activate targeted muscles through controlled electrical impulses. It is a non-surgical approach that may be considered as part of a body-shaping and muscle-conditioning program, planned according to your goals, target areas, health considerations and suitability.",
    benefits: ["Non-surgical muscle activation", "Targeted body-shaping support", "Adjustable treatment intensity", "Complements an active lifestyle"],
    duration: "20–30 mins per session",
    sessions: "Multiple sessions, as advised",
    downtime: "None",
    process: commonProcess(
      "Your goals, target muscle groups and health considerations are assessed to determine treatment suitability.",
      "A session plan is built around areas such as the abdomen, arms, thighs, glutes or other suitable muscle groups.",
      "Specialised equipment delivers controlled electrical impulses to targeted muscles, adjusted to your tolerance.",
      "Aftercare guidance and a broader body-management plan support your overall goals between sessions."
    ),
    article: [
      {
        type: "paragraph",
        text: "EMS Body Sculpting uses electrical muscle stimulation to activate targeted muscles through controlled electrical impulses. It is a non-surgical approach that may be considered as part of a body-shaping and muscle-conditioning program.",
      },
      { type: "paragraph", text: "At VAMA Clinics, EMS treatment is planned according to individual goals, target areas, health considerations and suitability." },
      { type: "heading", text: "What Is EMS Body Sculpting?" },
      {
        type: "paragraph",
        text: "EMS stands for Electrical Muscle Stimulation. During treatment, specialised equipment delivers controlled electrical impulses to targeted muscles, causing them to contract. Treatment may focus on areas such as:",
      },
      { type: "list", items: ["Abdomen", "Arms", "Thighs", "Glutes", "Other suitable muscle groups"] },
      { type: "paragraph", text: "The treatment settings and experience may vary depending on the individual and equipment used." },
      { type: "heading", text: "Who May Consider EMS?" },
      { type: "paragraph", text: "EMS Body Sculpting may be considered by adults who:" },
      {
        type: "list",
        items: ["Want to support muscle activation", "Are interested in body shaping", "Want to complement an active lifestyle", "Have specific areas they want to target", "Prefer to explore non-surgical options"],
      },
      { type: "paragraph", text: "A professional assessment is recommended before treatment." },
      { type: "heading", text: "How Does EMS Work?" },
      {
        type: "paragraph",
        text: "Controlled electrical impulses stimulate targeted muscles, producing repeated muscle contractions. The intensity can generally be adjusted according to treatment settings and individual tolerance.",
      },
      { type: "paragraph", text: "EMS should be viewed as a complementary body-sculpting option rather than a replacement for regular exercise." },
      { type: "heading", text: "EMS and Healthy Lifestyle" },
      { type: "paragraph", text: "Regular physical activity, appropriate nutrition, hydration and healthy lifestyle habits remain important for overall fitness and body composition. EMS may be incorporated into an individual's broader body-management plan when appropriate." },
      { type: "heading", text: "EMS at VAMA Clinics" },
      {
        type: "paragraph",
        text: "Before treatment, VAMA Clinics professionals can discuss your goals, targeted areas, treatment suitability, expected experience and aftercare requirements. The number and frequency of sessions may depend on your individual treatment plan.",
      },
      { type: "paragraph", text: "Results vary according to individual factors, lifestyle, treatment consistency and body composition." },
      { type: "heading", text: "VAMA Clinics Locations" },
      { type: "paragraph", text: "EMS Body Sculpting consultations are available at VAMA Clinics locations in:" },
      { type: "list", items: ["Lucknow", "Noida", "Indirapuram", "Lajpat Nagar, Delhi", "Agra", "Kanpur"] },
      { type: "paragraph", text: "You can choose a convenient VAMA Clinics branch for consultation." },
      { type: "heading", text: "Begin Your Body-Sculpting Journey" },
      { type: "paragraph", text: "If you are interested in EMS for muscle activation and body shaping, a professional consultation can help determine whether it is appropriate for you." },
    ],
    faqs: [
      { q: "Does EMS replace regular exercise?", a: "No. It should be viewed as a complementary body-sculpting option rather than a replacement for regular exercise." },
      { q: "Is EMS painful?", a: "Sensation varies by individual and treatment intensity — settings can generally be adjusted according to your tolerance." },
      { q: "Which areas can be treated?", a: "Common areas include the abdomen, arms, thighs, glutes and other suitable muscle groups, depending on your goals." },
      { q: "How many sessions will I need?", a: "The number and frequency of sessions depend on your individual treatment plan, discussed at consultation." },
    ],
  },
  {
    slug: "weight-management",
    category: "weight-loss",
    name: "Weight Management",
    image: weightLossImg,
    short: "Practical nutrition & diet consultation for sustainable habits.",
    metaTitle: "Weight Management Program & Support | VAMA Clinics",
    metaDescription:
      "Get personalized weight management support at VAMA Clinics with nutrition guidance, lifestyle strategies, and professional care for healthier habits.",
    description:
      "Healthy weight management involves more than following a temporary diet. Your food choices, activity level, sleep, stress, lifestyle, medical history and daily routine can all influence your ability to maintain a healthy weight. Weight Management and Diet Consultation at VAMA Clinics focuses on creating practical nutrition and lifestyle strategies based on individual needs.",
    benefits: ["Personalised nutrition guidance", "Practical, sustainable strategies", "Lifestyle & behavioural support", "Regular follow-up & review"],
    duration: "30–45 mins per visit",
    sessions: "Ongoing, reviewed periodically",
    downtime: "None",
    process: commonProcess(
      "Your current eating patterns, meal timing, portion sizes, food preferences, activity level and goals are discussed in detail.",
      "Suitable nutritional recommendations and lifestyle strategies are developed around your daily schedule and preferences.",
      "The plan focuses on realistic eating habits — balanced meals, portion awareness and sustainable routines — rather than extreme restriction.",
      "Your plan is reviewed according to progress and changing needs at regular follow-ups."
    ),
    article: [
      {
        type: "paragraph",
        text: "Healthy weight management involves more than following a temporary diet. Your food choices, activity level, sleep, stress, lifestyle, medical history and daily routine can all influence your ability to maintain a healthy weight.",
      },
      { type: "paragraph", text: "At VAMA Clinics, Weight Management and Diet Consultation focuses on creating practical nutrition and lifestyle strategies based on individual needs." },
      { type: "heading", text: "What Is a Diet Consultation?" },
      { type: "paragraph", text: "A diet consultation provides an opportunity to discuss your current eating habits, lifestyle, nutritional goals and weight-management concerns with an appropriate professional. Your consultation may cover:" },
      {
        type: "list",
        items: ["Current eating patterns", "Meal timing", "Portion sizes", "Food preferences", "Physical activity", "Weight-management goals", "Lifestyle habits", "Relevant health considerations"],
      },
      { type: "paragraph", text: "Based on your needs, suitable nutritional recommendations can be developed." },
      { type: "heading", text: "Who Can Benefit?" },
      { type: "paragraph", text: "Diet consultation may help individuals who:" },
      {
        type: "list",
        items: ["Want to improve their eating habits", "Are working toward weight-loss goals", "Struggle with portion control", "Follow irregular meal patterns", "Want structured nutrition guidance", "Need support with sustainable lifestyle changes"],
      },
      { type: "heading", text: "Personalized Nutrition Guidance" },
      { type: "paragraph", text: "At VAMA Clinics, we understand that every person's nutritional requirements are different. Your dietary recommendations can take into account your daily schedule, food preferences, lifestyle, activity level and personal goals." },
      { type: "paragraph", text: "The objective is to develop realistic eating habits rather than relying on extreme restrictions." },
      { type: "heading", text: "Diet and Weight Management" },
      { type: "paragraph", text: "Nutrition is an important component of weight management. A professional can help you understand balanced meals, portion awareness, food choices, meal planning and sustainable eating habits." },
      { type: "paragraph", text: "Weight management may also involve physical activity, sleep, stress management and behavioural changes." },
      { type: "heading", text: "Progress and Follow-Up" },
      { type: "paragraph", text: "Your nutritional plan can be reviewed according to your progress and changing needs. Weight-loss results are different for everyone. Starting weight, health conditions, lifestyle, consistency and individual response can all influence progress." },
      { type: "heading", text: "VAMA Clinics Locations" },
      { type: "paragraph", text: "VAMA Clinics offers weight-management and diet consultation services across:" },
      { type: "list", items: ["Lucknow", "Noida", "Indirapuram", "Lajpat Nagar, Delhi", "Agra", "Kanpur"] },
      { type: "paragraph", text: "You can visit the VAMA Clinics branch nearest to you for personalised consultation and guidance." },
      { type: "heading", text: "Make a Healthier Start" },
      {
        type: "paragraph",
        text: "If you are confused by different diets or finding it difficult to maintain healthy eating habits, professional guidance can provide a more structured approach. VAMA Clinics focuses on practical and personalised nutrition and weight-management strategies.",
      },
    ],
    faqs: [
      { q: "What happens during a diet consultation?", a: "Your professional discusses your current eating patterns, meal timing, portion sizes, food preferences, activity level and goals before developing suitable recommendations." },
      { q: "Is this only for weight loss?", a: "No — it also supports general healthy eating habits, portion control and sustainable lifestyle changes, alongside weight-management goals where relevant." },
      { q: "Will I need to follow a strict diet?", a: "The objective is realistic, sustainable eating habits rather than extreme restriction — plans are built around your routine and preferences." },
      { q: "How often will my plan be reviewed?", a: "Your nutritional plan is reviewed periodically according to your progress and changing needs." },
    ],
  },

  // ---------------- ALLERGY ----------------
  {
    slug: "psoriasis-treatment",
    category: "allergy-treatment",
    name: "Psoriasis Treatment",
    image: psoriasisImg,
    short: "Calm inflamed, scaly plaques and extend symptom-free periods.",
    description:
      "Psoriasis is a chronic autoimmune condition that speeds up skin cell turnover, causing thick, scaly, red or silvery-white plaques — commonly on the scalp, elbows, knees and lower back. Our dermatologists combine topical therapy, phototherapy and lifestyle guidance to calm flare-ups, reduce scaling and extend symptom-free periods.",
    benefits: ["Reduces redness & scaling", "Personalised trigger management", "Combination topical + light therapy", "Long-term flare control"],
    duration: "30–40 mins per session",
    sessions: "Ongoing, reviewed monthly",
    downtime: "None",
    process: commonProcess(
      "We examine the plaques, review your medical and family history, and identify possible triggers such as stress, infection or climate.",
      "A personalised plan combining topical steroids, vitamin-D analogues, phototherapy or systemic therapy is created based on severity.",
      "Treatment is administered in-clinic (phototherapy/topical application) alongside a take-home regimen.",
      "Regular follow-ups track flare frequency and adjust the plan to extend symptom-free periods."
    ),
    faqs: [
      { q: "Is psoriasis contagious?", a: "No, psoriasis is an autoimmune condition, not an infection, so it cannot spread from person to person." },
      { q: "Can psoriasis be cured completely?", a: "There's no permanent cure yet, but with the right combination of treatment and trigger management, most patients achieve long, symptom-free periods." },
      { q: "What triggers a flare-up?", a: "Common triggers include stress, skin injury, infections, cold weather and certain medications — we help you identify and manage yours." },
      { q: "Can children get psoriasis treatment?", a: "Yes, psoriasis can appear at any age including childhood, and treatment intensity — topical vs. phototherapy vs. systemic — is carefully adjusted for the patient's age." },
    ],
  },
  {
    slug: "vitiligo-treatment",
    category: "allergy-treatment",
    name: "Vitiligo Treatment",
    image: vitiligoImg,
    short: "Restore pigment and even out skin tone with targeted repigmentation therapy.",
    description:
      "Vitiligo occurs when pigment-producing cells (melanocytes) are destroyed, leading to smooth, white patches of skin. Our treatment protocols — including phototherapy, topical immunomodulators and camouflage techniques — aim to stabilise the condition and stimulate repigmentation.",
    benefits: ["Stabilises spreading patches", "Stimulates repigmentation", "Combination light + topical therapy", "Cosmetic camouflage guidance"],
    duration: "20–30 mins per session",
    sessions: "12+ sessions (phototherapy course)",
    downtime: "None",
    process: commonProcess(
      "Patches are examined under Wood's lamp to confirm diagnosis, map spread, and check activity of the condition.",
      "A repigmentation plan — topical therapy, NB-UVB phototherapy or a combination — is designed for your skin type and patch pattern.",
      "Phototherapy or topical treatment is delivered on a fixed schedule to stimulate melanocyte activity.",
      "Progress is photographed and reviewed every few weeks to track repigmentation and adjust the plan."
    ),
    faqs: [
      { q: "Is vitiligo dangerous?", a: "No, vitiligo is not medically harmful or contagious — it's a pigmentation condition, though it can affect confidence, which is why cosmetic and medical support matters." },
      { q: "Can lost pigment come back?", a: "Many patients see partial to significant repigmentation with consistent treatment, especially when started early, though results vary by patch location and skin type." },
      { q: "How long before I see results?", a: "Initial repigmentation can be visible within 2–3 months of consistent phototherapy, with continued improvement over 6–12 months." },
      { q: "Is vitiligo treatment suitable for all ages?", a: "Yes — vitiligo can appear at any age, from young children to older adults, and our repigmentation plans are safely tailored to each age group's skin sensitivity, patch pattern and overall health." },
    ],
  },
  {
    slug: "fungal-infection-treatment",
    category: "allergy-treatment",
    name: "Fungal Infection Treatment",
    image: fungalImg,
    short: "Fast, effective relief from ringworm, athlete's foot & other fungal skin infections.",
    description:
      "Fungal skin infections — such as ringworm, athlete's foot and yeast infections — thrive in warm, moist areas and cause itching, redness and ring-shaped rashes. We diagnose the exact fungal strain and prescribe targeted antifungal therapy to clear the infection and prevent recurrence.",
    benefits: ["Targeted antifungal therapy", "Fast itch & redness relief", "Prevents spreading & recurrence", "Hygiene & lifestyle guidance"],
    duration: "20 mins consultation",
    sessions: "2–6 week course",
    downtime: "None",
    process: commonProcess(
      "The affected area is examined, and where needed, a skin scraping is tested to confirm the fungal strain.",
      "A targeted antifungal regimen — topical, oral or both — is prescribed based on infection severity and location.",
      "Treatment is started immediately with clear instructions on application and hygiene practices.",
      "Follow-up review ensures the infection has fully cleared and doesn't recur."
    ),
    faqs: [
      { q: "Is a fungal infection contagious?", a: "Yes, most fungal skin infections can spread through direct contact or shared items like towels, so early treatment and hygiene matter." },
      { q: "How soon will the itching stop?", a: "Antifungal treatment typically reduces itching and redness within a few days, though full clearance takes 2–4 weeks." },
      { q: "Why does it keep coming back?", a: "Recurrence usually happens due to incomplete treatment courses or ongoing moisture/friction — our follow-up plan is designed to prevent this." },
      { q: "Is this treatment safe for children and elderly patients?", a: "Yes — fungal infections affect all ages, and we adjust the antifungal strength and formulation to suit children, adults and elderly patients safely." },
    ],
  },
  {
    slug: "alopecia-treatment",
    category: "allergy-treatment",
    name: "Alopecia Treatment",
    image: alopeciaImg,
    short: "Diagnose and treat sudden or patchy hair loss with targeted regrowth therapy.",
    description:
      "Alopecia areata is an autoimmune condition where the immune system attacks hair follicles, causing sudden, patchy hair loss on the scalp or body. Our dermatologists combine steroid therapy, PRP/GFC and scalp treatments to calm the immune response and stimulate regrowth.",
    benefits: ["Root-cause diagnosis", "Stimulates regrowth", "Combination medical + PRP therapy", "Regular progress tracking"],
    duration: "30–45 mins per visit",
    sessions: "Ongoing, reviewed monthly",
    downtime: "None",
    process: commonProcess(
      "Trichoscopy and blood work help confirm alopecia areata and rule out other causes of hair loss.",
      "A plan combining intralesional steroids, topical therapy and/or PRP is built around your pattern and severity.",
      "Treatment is administered in-clinic, with sessions spaced to encourage steady follicle recovery.",
      "Regrowth is tracked with photos and trichoscopy at each follow-up, and the plan is adjusted as needed."
    ),
    faqs: [
      { q: "Will my hair grow back?", a: "Many patients regrow hair with timely treatment, though the course varies — some regrow within months, others need a longer combination approach." },
      { q: "Is alopecia areata permanent?", a: "It can be unpredictable, with some patients seeing complete regrowth and others experiencing recurring patches — a monitored treatment plan helps improve outcomes." },
      { q: "Is this the same as regular hair fall?", a: "No, alopecia areata causes sudden, well-defined bald patches, unlike general thinning from hair fall — an accurate diagnosis guides the right treatment." },
      { q: "Does alopecia areata only affect adults?", a: "No — it can appear at any age, including childhood, and our treatment approach, from steroid strength to PRP suitability, is adapted specifically for the patient's age." },
    ],
  },
  {
    slug: "eczema-treatment",
    category: "allergy-treatment",
    name: "Eczema Treatment",
    image: eczemaImg,
    short: "Calm dry, itchy, inflamed skin with barrier-repair focused care.",
    description:
      "Eczema (atopic dermatitis) causes dry, itchy, inflamed patches of skin, often flaring with stress, allergens or weather changes. Our treatment plans focus on calming inflammation, repairing the skin barrier and identifying personal triggers to reduce recurrence.",
    benefits: ["Reduces itching & inflammation", "Repairs skin barrier", "Trigger identification", "Customised skincare routine"],
    duration: "20–30 mins consultation",
    sessions: "3–4 sessions + ongoing care",
    downtime: "None",
    process: commonProcess(
      "Skin is examined and your history reviewed to identify eczema triggers — allergens, stress, weather or irritants.",
      "A barrier-repair skincare and medication plan is built around your flare pattern and skin sensitivity.",
      "Topical treatment and, where needed, in-clinic therapy is started to calm active flare-ups.",
      "A long-term maintenance routine and trigger-avoidance plan is shared to reduce recurrence."
    ),
    faqs: [
      { q: "Is eczema the same as an allergy?", a: "Not exactly — eczema is a skin-barrier condition often linked to allergies and sensitivities, which is why identifying your specific triggers is key to managing it." },
      { q: "Can eczema be cured?", a: "There's no permanent cure, but flare-ups can be effectively controlled and significantly reduced with the right barrier-repair and trigger-avoidance plan." },
      { q: "What triggers eczema flare-ups?", a: "Common triggers include harsh soaps, weather changes, stress, sweat, allergens and certain fabrics — we help identify yours during consultation." },
      { q: "Is eczema treatment safe for babies and children?", a: "Yes — eczema is especially common in infants and children, and we use gentle, age-appropriate formulations alongside barrier-repair guidance for younger patients." },
    ],
  },
  {
    slug: "keloid-treatment",
    category: "allergy-treatment",
    name: "Keloid Treatment",
    image: keloidImg,
    short: "Flatten and soften raised, overgrown scars with targeted therapy.",
    description:
      "Keloids are raised, thickened scars that grow beyond the original wound boundary, often after injury, piercings or acne. Our treatment combines intralesional injections, laser therapy and pressure/silicone therapy to flatten and soften keloids and reduce recurrence.",
    benefits: ["Flattens raised scars", "Reduces itching & discomfort", "Minimises recurrence", "Combination therapy approach"],
    duration: "20–30 mins per session",
    sessions: "4–6 sessions",
    downtime: "None to minimal",
    process: commonProcess(
      "The keloid's size, location and history are assessed to determine the best combination of therapies.",
      "A plan combining intralesional injections, laser and/or pressure therapy is designed for your scar type.",
      "Treatment is delivered in-clinic on a spaced schedule to gradually flatten and soften the keloid.",
      "Silicone sheeting or gel and follow-up visits help maintain results and prevent recurrence."
    ),
    faqs: [
      { q: "Can keloids be removed completely?", a: "Keloids can be significantly flattened and softened, but because they can recur — especially after surgical removal alone — we use combination, low-recurrence therapies." },
      { q: "Are keloid injections painful?", a: "Discomfort is usually mild and brief; topical numbing is used to keep the procedure as comfortable as possible." },
      { q: "Will a new keloid form again?", a: "Recurrence risk exists with any scar therapy, which is why we combine treatments and provide aftercare guidance to minimise it." },
      { q: "Can keloids be treated at any age?", a: "Yes, though we're extra cautious with children and teenagers since their skin is still growing — treatment intensity is adjusted accordingly." },
    ],
  },
  {
    slug: "lipoma-removal",
    category: "allergy-treatment",
    name: "Lipoma Removal",
    image: lipomaImg,
    short: "Safe removal of benign fatty lumps beneath the skin.",
    description:
      "A lipoma is a soft, slow-growing, benign lump of fatty tissue that forms just under the skin. While harmless, many patients choose removal for comfort or cosmetic reasons. We offer safe, minimally invasive removal with minimal scarring.",
    benefits: ["Safe, minimally invasive removal", "Minimal scarring", "Quick procedure", "Confirms benign diagnosis"],
    duration: "20–40 mins",
    sessions: "1 session (usually)",
    downtime: "3–5 days mild soreness",
    process: commonProcess(
      "The lump is examined and, if needed, an ultrasound confirms it's a lipoma before planning removal.",
      "A minimally invasive removal technique is chosen based on the lipoma's size and location.",
      "The lipoma is removed under local anaesthesia through a small incision, with the site closed neatly.",
      "Simple wound care instructions are given, with a follow-up to check healing."
    ),
    faqs: [
      { q: "Is a lipoma cancerous?", a: "No, lipomas are benign, non-cancerous growths, though we can confirm this with an examination or ultrasound if there's any doubt." },
      { q: "Does lipoma removal leave a scar?", a: "A small, well-placed incision is used to minimise scarring, and most marks fade significantly over time." },
      { q: "Can a lipoma grow back after removal?", a: "Recurrence at the exact same site is uncommon after complete removal, though new lipomas can occasionally form elsewhere." },
      { q: "Is lipoma removal suitable for older patients?", a: "Yes — lipomas can develop at any adult age, and removal is generally safe for older patients once a routine health check confirms they're fit for the procedure." },
    ],
  },
];

export const treatmentsByCategory = (category) =>
  treatments.filter((t) => t.category === category);

export const getTreatment = (slug) => treatments.find((t) => t.slug === slug);