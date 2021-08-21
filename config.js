module.exports = {
  meta: {
    // Title of website
    SiteName: "Cube Anarchy Server",

    // Location of logo. (All files should be in the 'public' folder)
    logo: "/images/logo/cube-logos_black.png",

    // Label and link of button
    CTA: { label: "Vote Now!", href: "#" },
  },

  /**
   * MAP CONFIGURATION
   */
  map: {
    url: "https://map.pessu.xyz/?world=world&zoom=4&x=-6700&z=975",
  },

  /**
   * NAVIGATION BAR
   */
  nav: {
    // Display CTA button
    CTAButton: true,

    // Display player count
    playerCount: true,

    /**
     * NAVIGATION LIST
     * This list contains links to the pages that comes with the template.
     * You can add additional links to other pages here aswell.
     */
    items: [
      { name: "About", href: "/about" },
      { name: "Map", href: "/map" },
      { name: "Contact", href: "/contact" },
    ],
  },

  /**
   * MINECRAFT SERVER SETTINGS
   * These are the settings for you minecraft server.
   * These settings are required if you would like to
   * show the player count and for the
   * copy-ip-to-clipboard button to work.
   */
  server: {
    ip: "pessu.xyz",
  },
};
