import { useEffect } from "react";

const SITE_NAME = "VAMA Advanced Hair & Skin Clinic";
const DEFAULT_DESCRIPTION =
  "VAMA Advanced Hair & Skin Clinic — hair transplant, skin, laser, weight loss & allergy treatments across Noida, Indirapuram, Lajpat Nagar, Agra, Lucknow & Kanpur.";
const DEFAULT_KEYWORDS =
  "VAMA Advanced Hair & Skin Clinic, hair transplant clinic, skin clinic, dermatologist Noida, hair and skin treatment Indirapuram, weight loss clinic, allergy treatment clinic";

function setMetaByName(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setMetaByProperty(property, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

/**
 * Sets per-page <title>, meta description and meta keywords.
 * Renders nothing — just synchronises `document.head` on mount/update.
 *
 * `keywords` accepts a string or an array of strings (joined with ", ").
 */
export default function Seo({ title, description, keywords }) {
  useEffect(() => {
    const pageTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Hair, Skin, Weight Loss & Allergy Treatments`;
    const pageDescription = description || DEFAULT_DESCRIPTION;
    const pageKeywords = keywords
      ? Array.isArray(keywords)
        ? keywords.join(", ")
        : keywords
      : DEFAULT_KEYWORDS;

    document.title = pageTitle;
    setMetaByName("description", pageDescription);
    setMetaByName("keywords", pageKeywords);
    setMetaByProperty("og:title", pageTitle);
    setMetaByProperty("og:description", pageDescription);
  }, [title, description, keywords]);

  return null;
}
