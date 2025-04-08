export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "uertyk_",
  description: "Портфолио uertuk_",
  navItems: [
    {
      label: "Домой",
      href: "/",
    },
    {
      label: "Портфолио",
      href: "/portfolio",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/uertyk",
    twitter: "https://x.com/uertyk_",
    docs: "https://heroui.com",
    discord: "https://discord.gg/zFkXA9ETq5",
    sponsor: "https://xl-servers.easydonate.ru/",
  },
};
