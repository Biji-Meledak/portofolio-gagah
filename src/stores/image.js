import { defineStore } from "pinia";

const imageStore = defineStore({
  id: "image",
  state: () => ({
    list: [
      {
        slug: "Web Inventory",
        title: "Web Inventory Sederhana",
        img: "1.png",
      },
      {
        slug: "Web Portofolio",
        title: "Web Portofolio Sederhana",
        img: "port.png",
      },
      {
        slug: "Web Portfolio 2",
        title: "Web Portofolio Vue.js",
        img: "port2.png",
      },
    ],
  }),
  actions: {},
  getters: {
    g$list: ({ list }) => list,
    g$detail: ({ list }) => {
      return (slug) => list.find((image) => image.slug == slug);
    },
  },
});

export default imageStore;