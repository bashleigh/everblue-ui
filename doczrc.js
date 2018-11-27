import doczPluginNetlify from "docz-plugin-netlify";

export default {
  title: "Everblue UI",
  description:
    "A user friendly, open source component library built using React & styled-components.",
  themeConfig: {
    mode: "light",
    logo: {
      src: "https://i.imgur.com/LOobHfh.png",
      width: 80
    },
    styles: {
      h1: {
        fontSize: 70
      }
    }
  },
  plugins: [doczPluginNetlify()]
};
