const siteUrl = "https://rhythmmedicalint.com";

export default function sitemap() {
  const paths = [
    "",
    "about",
    "contact",
    "login",
    "services",
    "team",
    "faq",
    "blog",
    "privacy-policy",
    "terms-conditions",
  ];

  return paths.map((p) => ({
    url: `${siteUrl}${p ? `/${p}` : ""}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }));
}
