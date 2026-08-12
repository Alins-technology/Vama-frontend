// Each treatment: slug, name, category, short, description, benefits,
// duration, sessions, downtime, process (steps), faqs

import acneScarImg from "../assets/Treatments/Acne-scar.avif";
import antiAgeingImg from "../assets/Treatments/Anti-Ageing.jpg";
import botoxImg from "../assets/Treatments/botox.jpg";
import contouringImg from "../assets/Treatments/Contouring.jpg";
import dandruffImg from "../assets/Treatments/dandruff.jpg";
import dermalFillerImg from "../assets/Treatments/dermalfiller.jpg";
import facePrpImg from "../assets/Treatments/faceprp.jpg";
import gfcImg from "../assets/Treatments/GFC.jpg";
import hairDnaImg from "../assets/Treatments/hair-dna.jpg";
import hairFallImg from "../assets/Treatments/hair-fall.jpg";
import hairPrpImg from "../assets/Treatments/hair-prp.jpg";
import hairReplacementImg from "../assets/Treatments/hair-replacement.webp";
import hairTransplantImg from "../assets/Treatments/hair-transplant.jpg";
import hydrafacialImg from "../assets/Treatments/hydrafacial.jpg";
import koreanGlassSkinImg from "../assets/Treatments/koreanglassskin.jpg";
import laserHairReductionImg from "../assets/Treatments/laserhairreduction.webp";
import moleImg from "../assets/Treatments/mole.jpg";
import skinRejuvenationImg from "../assets/Treatments/Skin-rejuvenation.jpg";
import weightLossImg from "../assets/Treatments/weightloss.jpg";

export const categories = [
  { slug: "skin-treatment", name: "Skin Treatment", tagline: "Clear, healthy, radiant skin — backed by dermatology." },
  { slug: "hair-treatment", name: "Hair Treatment", tagline: "Science-led hair restoration for natural, lasting density." },
  { slug: "weight-loss", name: "Weight Loss", tagline: "Personalised, medically guided programmes for sustainable results." },
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
    faqs: [
      { q: "Does acne scar treatment hurt?", a: "Most sessions are performed with topical numbing cream, so discomfort is minimal — patients describe it as mild tingling or heat." },
      { q: "How many sessions will I need?", a: "Most patients need 4–6 sessions spaced 3–4 weeks apart, depending on scar depth and skin response." },
      { q: "When will I see results?", a: "Initial smoothing is visible after 2–3 sessions, with continued improvement for up to 6 months as collagen rebuilds." },
    ],
  },
  {
    slug: "anti-ageing-treatment",
    category: "skin-treatment",
    name: "Anti-Ageing Treatment",
    image: antiAgeingImg,
    short: "Firmer, youthful skin with non-surgical lifting & rejuvenation.",
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
    faqs: [
      { q: "Is this treatment surgical?", a: "No — all our anti-ageing protocols are completely non-surgical with little to no downtime." },
      { q: "Will my face look 'frozen' or unnatural?", a: "No. Our doctors use measured, conservative dosing so your natural expressions stay intact." },
      { q: "How long do results last?", a: "Depending on the treatment combination, results typically last 6–12 months." },
    ],
  },
  {
    slug: "botox",
    category: "skin-treatment",
    name: "Botox",
    image: botoxImg,
    short: "Soften expression lines with precise, doctor-administered Botox.",
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
    faqs: [
      { q: "How soon will I see results?", a: "Botox typically starts working within 3–7 days, with full effect visible by day 14." },
      { q: "Is Botox safe?", a: "Yes, when administered by a trained, licensed dermatologist in measured doses, Botox has an excellent safety profile." },
      { q: "How long does it last?", a: "Results generally last 4–6 months before a top-up session is needed." },
    ],
  },
  {
    slug: "mole-skin-tag-removal",
    category: "skin-treatment",
    name: "Mole / Skin Tag Removal",
    image: moleImg,
    short: "Safe, scarless removal of moles and skin tags.",
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
    faqs: [
      { q: "Will it leave a scar?", a: "In most cases, scarring is minimal to none since we use precise laser/RF techniques suited to the growth size." },
      { q: "Is the procedure painful?", a: "Local anaesthesia is used, so the procedure itself is virtually painless." },
      { q: "Can moles grow back?", a: "Properly removed moles typically don't grow back, though new ones can form elsewhere over time." },
    ],
  },
  {
    slug: "hydrafacial",
    category: "skin-treatment",
    name: "HydraFacial",
    image: hydrafacialImg,
    short: "Deep cleanse, exfoliate & hydrate in one relaxing session.",
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
    faqs: [
      { q: "Is HydraFacial suitable for sensitive skin?", a: "Yes, it's gentle enough for most skin types including sensitive skin — serums are adjusted accordingly." },
      { q: "Can I wear makeup right after?", a: "Yes, there's zero downtime, so you can resume your day — including makeup — immediately." },
      { q: "How often should I get one?", a: "Monthly sessions are ideal for maintaining glow and pore clarity." },
    ],
  },
  {
    slug: "korean-glass-skin",
    category: "skin-treatment",
    name: "Korean Glass Skin Treatment",
    image: koreanGlassSkinImg,
    short: "The dewy, poreless 'glass skin' finish, done right.",
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
    faqs: [
      { q: "Is this good before an event or wedding?", a: "Yes — it's one of our most popular pre-event treatments for an instant, camera-ready glow." },
      { q: "Will it help with visible pores?", a: "Yes, consistent sessions visibly refine pore appearance and smooth texture." },
      { q: "How soon before an event should I book it?", a: "We recommend booking 1–3 days before for the best glow, with a course of sessions leading up to it for lasting results." },
    ],
  },
  {
    slug: "laser-hair-reduction",
    category: "skin-treatment",
    name: "Laser Hair Reduction",
    image: laserHairReductionImg,
    short: "Long-term hair reduction with advanced diode laser.",
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
    faqs: [
      { q: "Is laser hair reduction permanent?", a: "It offers long-term reduction rather than 100% permanent removal — most patients see 80–90% reduction after a full course." },
      { q: "Does it work on dark skin tones?", a: "Yes, our diode laser is calibrated to be safe and effective across all skin tones." },
      { q: "How many sessions are needed?", a: "Typically 6–8 sessions spaced 4–6 weeks apart, aligned with your hair growth cycle." },
    ],
  },
  {
    slug: "filler",
    category: "skin-treatment",
    name: "Dermal Fillers",
    image: dermalFillerImg,
    short: "Restore volume & contour with precision filler placement.",
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
    faqs: [
      { q: "Are fillers safe?", a: "Yes, we use approved hyaluronic-acid based fillers that are reversible and have a strong safety record." },
      { q: "How long do fillers last?", a: "Depending on the area and product, results typically last 9–18 months." },
      { q: "Is there any downtime?", a: "Most patients experience mild swelling for 1–2 days; you can usually return to normal activities the same day." },
    ],
  },
  {
    slug: "face-prp",
    category: "skin-treatment",
    name: "Face PRP",
    image: facePrpImg,
    short: "Your own platelets, concentrated to rejuvenate skin naturally.",
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
    faqs: [
      { q: "Is Face PRP safe since it uses my own blood?", a: "Yes — because PRP is derived from your own blood, allergic reactions are extremely rare." },
      { q: "Does the blood draw hurt?", a: "It's a standard blood draw, similar to a routine blood test — quick and minimally uncomfortable." },
      { q: "When will I notice improvement?", a: "Most patients notice improved glow within 1–2 weeks, with texture improvements building over 2–3 months." },
    ],
  },
  {
    slug: "skin-rejuvenation",
    category: "skin-treatment",
    name: "Skin Rejuvenation",
    image: skinRejuvenationImg,
    short: "Restore tone, texture & radiance with combination therapy.",
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
    faqs: [
      { q: "What concerns does this treat?", a: "It's effective for dullness, pigmentation, uneven texture and early signs of sun damage." },
      { q: "Will I need to take time off work?", a: "Most sessions have no downtime, so you can return to your routine right after." },
      { q: "How is the combination decided?", a: "Your dermatologist customises the mix of peels, lasers and boosters after assessing your specific skin concerns." },
    ],
  },

  // ---------------- HAIR ----------------
  {
    slug: "hair-transplant",
    category: "hair-treatment",
    name: "Hair Transplant (FUE)",
    image: hairTransplantImg,
    short: "Natural, permanent hair restoration with advanced FUE.",
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
    ],
  },
  {
    slug: "hair-fall-treatment",
    category: "hair-treatment",
    name: "Hair Fall Treatment",
    image: hairFallImg,
    short: "Diagnose the root cause and stop hair fall early.",
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
    ],
  },
  {
    slug: "hair-replacement",
    category: "hair-treatment",
    name: "Hair Replacement",
    image: hairReplacementImg,
    short: "Instant, natural-looking density with non-surgical systems.",
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
    ],
  },
  {
    slug: "hair-prp",
    category: "hair-treatment",
    name: "Hair PRP",
    image: hairPrpImg,
    short: "Platelet-Rich Plasma therapy to stimulate hair regrowth.",
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
    ],
  },
  {
    slug: "dandruff-treatment",
    category: "hair-treatment",
    name: "Dandruff Treatment",
    image: dandruffImg,
    short: "Targeted therapy for a healthy, flake-free scalp.",
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
    ],
  },
  {
    slug: "hair-dna-test",
    category: "hair-treatment",
    name: "Hair DNA Test",
    image: hairDnaImg,
    short: "Understand your genetic hair-loss risk before it starts.",
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
    ],
  },
  {
    slug: "gfc-hair-treatment",
    category: "hair-treatment",
    name: "GFC Hair Treatment",
    image: gfcImg,
    short: "Growth Factor Concentrate for denser, healthier hair.",
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
    ],
  },

  // ---------------- WEIGHT LOSS ----------------
  {
    slug: "medical-weight-loss",
    category: "weight-loss",
    name: "Medical Weight Loss Programme",
    image: weightLossImg,
    short: "Doctor-supervised plans combining diet, therapy & tracking.",
    description:
      "A structured, doctor-supervised programme combining nutrition planning, body-composition tracking and targeted therapies to help you lose weight sustainably and safely.",
    benefits: ["Doctor-supervised", "Sustainable, healthy results", "Personalised nutrition plan", "Regular progress tracking"],
    duration: "45 mins per visit",
    sessions: "8–12 week programme",
    downtime: "None",
    process: commonProcess(
      "Body composition, metabolic health and lifestyle are assessed in detail.",
      "A personalised nutrition, activity and therapy plan is designed around your goals.",
      "The programme is followed with regular check-ins and plan adjustments.",
      "Progress is tracked with body-composition analysis at each milestone."
    ),
    faqs: [
      { q: "Is this a crash diet?", a: "No, it's a medically supervised, sustainable programme focused on long-term healthy weight management." },
      { q: "Will I need medication?", a: "Not always — plans are built around your specific case, and medication is only used when clinically appropriate." },
      { q: "How much weight can I expect to lose?", a: "Results vary by individual, but a safe, sustainable target of 0.5–1 kg per week is typical." },
    ],
  },
  {
    slug: "body-contouring",
    category: "weight-loss",
    name: "Body Contouring",
    image: contouringImg,
    short: "Non-invasive fat reduction & body shaping.",
    description:
      "Non-invasive body contouring technology targets stubborn fat pockets that resist diet and exercise, sculpting a more defined silhouette without surgery.",
    benefits: ["Non-invasive", "Targets stubborn fat", "No downtime", "Visible inch-loss"],
    duration: "30–60 mins per area",
    sessions: "6–8 sessions",
    downtime: "None",
    process: commonProcess(
      "Problem areas and fat distribution are assessed to plan the treatment zones.",
      "A session plan is built around target areas — abdomen, thighs, arms or flanks.",
      "Non-invasive energy-based technology is applied to break down stubborn fat cells.",
      "Results build gradually over following weeks as the body clears treated fat naturally."
    ),
    faqs: [
      { q: "Is body contouring painful?", a: "No, it's a non-invasive procedure and most patients find it comfortable, often described as a warming or cooling sensation." },
      { q: "Is it a substitute for weight loss?", a: "No — it's best for sculpting stubborn areas that resist diet and exercise, not for overall weight loss." },
      { q: "When will I see results?", a: "Initial changes appear within 3–4 weeks, with fuller results visible by 8–12 weeks." },
    ],
  },
];

export const treatmentsByCategory = (category) =>
  treatments.filter((t) => t.category === category);

export const getTreatment = (slug) => treatments.find((t) => t.slug === slug);