


const treeViewData = [
  {
    id: 1,
    label: "Home",
  },
  {
    id: 2,
    label: "Products",
    children: [
      {
        id: 21,
        label: "Electronics",
        children: [
          {
            id: 211,
            label: "Laptops",
          },
          {
            id: 212,
            label: "Mobiles",
          },
          {
            id: 213,
            label: "Headphones",
          },
        ],
      },
      {
        id: 22,
        label: "Clothing",
        children: [
          {
            id: 221,
            label: "Men",
          },
          {
            id: 222,
            label: "Women",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Services",
    children: [
      {
        id: 31,
        label: "Web Development",
      },
      {
        id: 32,
        label: "Mobile Apps",
      },
      {
        id: 33,
        label: "UI/UX Design",
      },
    ],
  },
  {
    id: 4,
    label: "Resources",
    children: [
      {
        id: 41,
        label: "Blogs",
      },
      {
        id: 42,
        label: "Tutorials",
      },
      {
        id: 43,
        label: "Documentation",
        children: [
          {
            id: 431,
            label: "React",
          },
          {
            id: 432,
            label: "JavaScript",
          },
          {
            id: 433,
            label: "CSS",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    label: "About Us",
  },
  {
    id: 6,
    label: "Contact",
  },
];

export default treeViewData;