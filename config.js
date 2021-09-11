module.exports = {
  meta: {
    // Title of website
    SiteName: "Cube Anarchy Server",

    // Location of logo. (All files should be in the 'public' folder)
    logo: "/images/logo/cube-logos_black.png",

    // Label and link of button
    CTA: { enabled: false, label: "Whitelist", href: "#" },
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

  /**
   * ABOUT US PAGE SETTINGS
   * Configure content for the about page here.
   */
  team: [
    {
      name: "singulrty",
      role: "System Administrator",
    },
    {
      name: "Baconhead_",
      role: "Platinum Sponsor",
    },
    {
      name: "Zulixs",
      role: "Community Ambassador",
    },
    {
      name: "izet1108",
      role: "Supporter",
    },
    {
      name: "Malinkijs",
      role: "Supporter",
    },
    {
      name: "Zupa_13",
      role: "Supporter",
    },
    {
      name: "BelugaWhale_26",
      role: "Supporter",
    },
    {
      name: "Historian_Jon",
      role: "Supporter",
    },
    {
      name: "Stealthdragon60",
      role: "Supporter",
    },
  ],
};
