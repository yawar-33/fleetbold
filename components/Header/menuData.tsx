import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
    idPath:'hero'
  },

  // {
  //   id: 2,
  //   title: "Features",
  //   newTab: false,
  //   path: "/#features",
  //   idPath:'features'
  // },
  {
    id: 31,
    title: "Lead Generation",
    newTab: false,
    path: "/#lead-generation",
    idPath:'lead-generation'
  },
  {
    id: 12,
    title: "Success Flow",
    newTab: false,
    path: "/#flow",
    idPath:'flow'
  },
  {
    id: 34,
    title: "Marketing & Workflows",
    newTab: false,
    path: "/#marketing-workflow",
    idPath:'marketing-workflow'
  },
  // {
  //   id: 3,
  //   title: "Products",
  //   newTab: false,
  //   idPath:'lead-generation',
  //   submenu: [
  //     {
  //       id: 31,
  //       title: "Lead Generation",
  //       newTab: false,
  //       path: "/#lead-generation",
  //       idPath:'lead-generation'
  //     },
  //     {
  //       id: 34,
  //       title: "Marketing & Workflows",
  //       newTab: false,
  //       path: "/#marketing-workflow",
  //       idPath:'marketing-workflow'
  //     },
  //   ],
  // },
  {
    id: 2.1,
    title: "Integrations",
    newTab: false,
    path: "/#integrations",
    idPath:'integrations'
  },

  {
    id: 2.3,
    title: "FAQ",
    newTab: false,
    path: "/#faq",
    idPath:'faq'
  },
  {
    id: 2.3,
    title: "Testimonials",
    newTab: false,
    path: "/#testimonials",
    idPath:'testimonials'
  },

    // {
    //   id: 3,
    //   title: "Pages",
    //   newTab: false,
    //   submenu: [
    //     {
    //       id: 31,
    //       title: "Blog Grid",
    //       newTab: false,
    //       path: "/blog",
    //     },
    //     {
    //       id: 34,
    //       title: "Sign In",
    //       newTab: false,
    //       path: "/auth/signin",
    //     },
    //     {
    //       id: 35,
    //       title: "Sign Up",
    //       newTab: false,
    //       path: "/auth/signup",
    //     },
    //     {
    //       id: 35,
    //       title: "Docs",
    //       newTab: false,
    //       path: "/docs",
    //     },
    //     {
    //       id: 35.1,
    //       title: "Support",
    //       newTab: false,
    //       path: "/support",
    //     },
    //     {
    //       id: 36,
    //       title: "404",
    //       newTab: false,
    //       path: "/error",
    //     },
    //   ],
    // },

  // {
  //   id: 4,
  //   title: "Support",
  //   newTab: false,
  //   path: "/support",
  // },
];

export default menuData;


export const LeadMenuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
    idPath:'hero'
  },
  {
    id: 12,
    title: "Success Flow",
    newTab: false,
    path: "/#flow",
    idPath:'flow'
  },
  {
    id: 2,
    title: "Features",
    newTab: false,
    path: "/#features",
    idPath:'features'
  },
  {
    id: 3,
    title: "Products",
    newTab: false,
    idPath:'lead-generation',
    submenu: [
      {
        id: 31,
        title: "Lead Generation",
        newTab: false,
        path: "/#lead-generation",
        idPath:'lead-generation'
      },
      {
        id: 34,
        title: "Marketing & Workflows",
        newTab: false,
        path: "/#marketing-workflow",
        idPath:'marketing-workflow'
      },
    ],
  },
  {
    id: 2.1,
    title: "Integrations",
    newTab: false,
    path: "/#integrations",
    idPath:'integrations'
  },

  {
    id: 2.3,
    title: "FAQ",
    newTab: false,
    path: "/#faq",
    idPath:'faq'
  },
  {
    id: 2.3,
    title: "Testimonials",
    newTab: false,
    path: "/#testimonials",
    idPath:'testimonials'
  },

    // {
    //   id: 3,
    //   title: "Pages",
    //   newTab: false,
    //   submenu: [
    //     {
    //       id: 31,
    //       title: "Blog Grid",
    //       newTab: false,
    //       path: "/blog",
    //     },
    //     {
    //       id: 34,
    //       title: "Sign In",
    //       newTab: false,
    //       path: "/auth/signin",
    //     },
    //     {
    //       id: 35,
    //       title: "Sign Up",
    //       newTab: false,
    //       path: "/auth/signup",
    //     },
    //     {
    //       id: 35,
    //       title: "Docs",
    //       newTab: false,
    //       path: "/docs",
    //     },
    //     {
    //       id: 35.1,
    //       title: "Support",
    //       newTab: false,
    //       path: "/support",
    //     },
    //     {
    //       id: 36,
    //       title: "404",
    //       newTab: false,
    //       path: "/error",
    //     },
    //   ],
    // },

  // {
  //   id: 4,
  //   title: "Support",
  //   newTab: false,
  //   path: "/support",
  // },
];