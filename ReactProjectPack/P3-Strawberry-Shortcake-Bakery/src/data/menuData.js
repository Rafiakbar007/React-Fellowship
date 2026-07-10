

const menuData = [
  {
    id: 1,
    label: "Home",
    link: "#home",
  },
  {
    id: 2,
    label: "Characters",
    link: "#characters",
    children: [
      {
        id: 21,
        label: "Strawberry",
      },
      {
        id: 22,
        label: "Blueberry",
      },
      {
        id: 23,
        label: "Lemonberry",
      },
      {
        id: 24,
        label: "Orangeberry",
      },
      {
        id: 25,
        label: "Raspberry",
      },
    ],
  },
  {
    id: 3,
    label: "Bakery",
    link: "#backery",
    children: [
      {
        id: 31,
        label: "Cakes",
         children: [
              {
                id: 311,
                label: "Cakes",
              },
              {
                id: 312,
                label: "Cookies",
              },
              {
                id: 313,
                label: "Muffins",
              },
            ],
      },
      {
        id: 32,
        label: "Cookies",
      },
      {
        id: 33,
        label: "Muffins",
      },
    ],
  },
  {
    id: 4,
    label: "FAQ",
    link: "#faq",
  },
];

export default menuData;