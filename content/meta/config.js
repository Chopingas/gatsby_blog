const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Marcos Fernández - Blog personal", // <title>
  shortSiteTitle: "Marcos Fernández - Blog personal", // <title> ending for posts and pages
  siteDescription: "Blog personal de Marcos Fernández - comentando que me voy encontrando por ahi.",
  siteUrl: "http://localhost:8000",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "es",
  // author
  authorName: "Marcos Fernández",
  authorTwitterAccount: "chopingas",
  // info
  infoTitle: "Marcos Fernández",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "Marcos Fernández - Blog personal",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "marcos.fernan.vaz@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/Chopingas" },
    { name: "twitter", url: "https://twitter.com/chopingas" },
    { name: "facebook", url: "https://www.facebook.com/marcos.fernandez.5070" }
  ]
};
