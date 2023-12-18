import { siteConfig } from "./site";

export const contactWays = [
  {
    id: "1",
    name: "Wechat",
    icon: "/contact/wechat.svg",
    hasPopover: true,
    qrCode: "/contact/wechat-qrcode.jpg",
    searchText: "Lrr_0x3F4",
  },
  {
    id: "2",
    name: "QQ",
    icon: "/contact/qq.svg",
    hasPopover: true,
    qrCode: "/contact/qq-qrcode.jpg",
    searchText: "1298911600",
  },
  {
    id: "3",
    name: "Twitter",
    icon: "/contact/twitter.svg",
    link: siteConfig.links.authTwitter,
    hasPopover: false,
  },
  {
    id: "4",
    name: "GitHub",
    icon: "/contact/github.svg",
    link: siteConfig.links.authGitHub,
    hasPopover: false,
  },
];
