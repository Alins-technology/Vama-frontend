import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_NAME = "VAMA Advanced Hair & Skin Clinic";
const SITE_URL = "https://www.vamaclinics.com";
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

function setCanonical(href) {
  const existing = document.querySelector('link[rel="canonical"]');
  if (!href) {
    if (existing) existing.remove();
    return;
  }
  let link = existing;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

/**
 * Sets per-page <title>, meta description and meta keywords.
 * Renders nothing — just synchronises `document.head` on mount/update.
 *
 * `keywords` accepts a string or an array of strings (joined with ", ").
 * `titleOverride`, when given, is used verbatim as the <title> (no auto
 * "| SITE_NAME" suffix appended) — for pages with an SEO-provided full title.
 */
export default function Seo({ title, description, keywords, titleOverride, canonical, noCanonical }) {
  const { pathname } = useLocation();
  useEffect(() => {
    const pageTitle = titleOverride
      ? titleOverride
      : title
        ? `${title} | ${SITE_NAME}`
        : `${SITE_NAME} | Hair, Skin, Weight Loss & Allergy Treatments`;
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
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
    setCanonical(noCanonical ? null : canonical || `${SITE_URL}${path}`);
  }, [title, description, keywords, titleOverride, canonical, noCanonical, pathname]);

  return null;
}
