export const config = {
  siteTitle: "Berekad Tongomo",
  siteDescription: "A showcase of my work and skills",
  themeColor: "#123456",
  backgroundColor: "#ffffff",
  firstName: "Berekad",
  lastName: "Tongomo",
  fullName: "Berekad Tongomo",
  currentRole: "Software Engineer",
  currentCompany: "MVF Global",
  profileImage: "/path/to/profile-image.jpg",
  aboutMe: "",
  social: {
    github: "https://github.com/kadton",
    linkedin: "https://linkedin.com/in/berekad",
  },
  experiences: [
    {
      role: "Software Engineer",
      company: "MVF Global",
      link: "https://mvfglobal.com/",
      start: "2022",
      end: "Present",
      summary:
        "Contributing to various internal and external application enhancements, such as language version updates, improving technical logging, and refining our CRM and billing systems. Using full-stack skills to develop new/existing applications, while also using Linux and GIT effectively, and writing comprehensive unit/functional tests, all contributing to significant improvements across our tech infrastructure.",
      skills: [
        "React",
        "JavaScript",
        "TypeScript",
        "PHP",
        "GraphQL",
        "AWS",
        "Terraform",
      ],
      projects: [],
    },
    {
      role: "Technical Customer Success Executive",
      company: "MVF Global",
      link: "https://mvfglobal.com/",
      start: "2020",
      end: "2022",
      summary:
        "Developed a JavaScript Google extension to streamline widget identification and managed the integration and configuration of APIs and widgets for client onboarding. Implemented observability and monitoring solutions for Zapier API calls.",
      skills: [
        "JavaScript",
        "PHP",
        "CSS",
        "Google Extensions",
        "Postman",
        "Zapier",
        "API Integrations",
      ],
      projects: [
        {
          name: "Widget Finder",
          link: "https://chrome.google.com/webstore/detail/widget-finder/aehpmlfdbpnbjnbkekfbffbnpepnglmh",
        },
      ],
    },
  ],
  personalProjects: [
    {
      name: "Rounds",
      summary:
        "A fully native mobile application dedicated to high-intensity timed interval training and sports activities. It incorporates interval settings to assist users in managing their workout and rest periods efficiently with the use of auditory and visual feedback. With the addition of predefined sports modes, not only is the workout kept simple, but it also facilitates physical and mental conditioning essential for the demanding timing requirements of sports like wrestling, MMA, and boxing.",
      platforms: [
        {
          badge: {
            href: "https://play.google.com/store/apps/details?id=com.berekadtongomo.Rounds&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
            img: {
              alt: "Get it on Google Play",
              src: "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png",
            },
          },
          link: "https://play.google.com/store/apps/details?id=com.berekadtongomo.Rounds",
        },
      ],
      skills: ["React Native", "Typescript", "Expo", "Google Play Dev Console"],
    },
  ],
};
