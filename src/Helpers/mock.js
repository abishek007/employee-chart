export const INITIAL_EMPLOYEE_DATA = [
  {
    id: 1,
    name: "Mark Hill",
    designation: "Executive Officer",
    img_src:
      "https://www.shutterstock.com/image-photo/portrait-african-american-man-glasses-260nw-352261352.jpg",
  },
  {
    id: 2,
    name: "Joe Linux",
    designation: "Technology Officer",
    team: "Technology",
    manager_id: 1,
    manager_name: "Mark Hill",
    img_src:
      "https://www.shutterstock.com/image-photo/passport-photo-serious-brazilian-young-260nw-1956224953.jpg",
  },
  {
    id: 5,
    name: "Ron Blomquist",
    designation: "Security Officer",
    team: "Technology",
    manager_id: 2,
    manager_name: "Joe Linux",
    img_src:
      "https://www.shutterstock.com/image-photo/portrait-smiling-businessman-black-suit-260nw-216577519.jpg",
  },
  {
    id: 6,
    name: "Mary Jhonson",
    designation: "Innovation Officer",
    team: "Technology",
    manager_id: 2,
    manager_name: "Joe Linux",
    img_src:
      "https://www.shutterstock.com/image-photo/passport-picture-smiling-african-businesswoman-260nw-239828995.jpg",
  },
  {
    id: 3,
    name: "Linda May",
    designation: "Business Officer",
    team: "Business",
    manager_id: 1,
    manager_name: "Mark Hill",
    img_src:
      "https://www.shutterstock.com/image-photo/passport-picture-businesswoman-brown-hair-260nw-250775908.jpg",
  },
  {
    id: 7,
    name: "Alice",
    designation: "Marketing Officer",
    team: "Business",
    manager_id: 3,
    manager_name: "Linda May",
    img_src:
      "https://www.shutterstock.com/image-photo/passport-picture-blond-businesswoman-blazer-260nw-281265110.jpg",
  },
  {
    id: 8,
    name: "Michale Rubin",
    designation: "Brand Officer",
    team: "Business",
    manager_id: 3,
    manager_name: "Linda May",
    img_src:
      "https://www.shutterstock.com/image-photo/passport-photo-happy-laughing-latin-260nw-1852662472.jpg",
  },
  {
    id: 4,
    name: "John Green",
    designation: "Accounting Officer",
    team: "Finance",
    manager_id: 1,
    manager_name: "Mark Hill",
    img_src:
      "https://www.shutterstock.com/image-photo/frontal-male-passport-photo-isolated-260nw-1414819673.jpg",
  },
  {
    id: 10,
    name: "Erica Reel",
    designation: "Customer Officer",
    team: "Finance",
    manager_id: 4,
    manager_name: "John Green",
    img_src:
      "https://www.shutterstock.com/image-photo/passport-photo-cool-blond-businesswoman-260nw-359058026.jpg",
  },
];

export const RESULT_SEARCH_TEXT = [
  {
    id: 2,
    name: "Joe Linux",
    designation: "Technology Officer",
    team: "Technology",
    manager_id: 1,
    manager_name: "Mark Hill",
    img_src:
      "https://www.shutterstock.com/image-photo/passport-photo-serious-brazilian-young-260nw-1956224953.jpg",
  },
  {
    id: 5,
    name: "Ron Blomquist",
    designation: "Security Officer",
    team: "Technology",
    manager_id: 2,
    manager_name: "Joe Linux",
    img_src:
      "https://www.shutterstock.com/image-photo/portrait-smiling-businessman-black-suit-260nw-216577519.jpg",
  },
  {
    id: 6,
    name: "Mary Jhonson",
    designation: "Innovation Officer",
    team: "Technology",
    manager_id: 2,
    manager_name: "Joe Linux",
    img_src:
      "https://www.shutterstock.com/image-photo/passport-picture-smiling-african-businesswoman-260nw-239828995.jpg",
  },
];

export const RESULT_SELECTED_TEAM = [
  {
    id: 2,
    name: "Joe Linux",
    designation: "Technology Officer",
    team: "Technology",
    manager_id: 1,
    manager_name: "Mark Hill",
    img_src:
      "https://www.shutterstock.com/image-photo/passport-photo-serious-brazilian-young-260nw-1956224953.jpg",
  },
  {
    id: 5,
    name: "Ron Blomquist",
    designation: "Security Officer",
    team: "Technology",
    manager_id: 2,
    manager_name: "Joe Linux",
    img_src:
      "https://www.shutterstock.com/image-photo/portrait-smiling-businessman-black-suit-260nw-216577519.jpg",
  },
  {
    id: 6,
    name: "Mary Jhonson",
    designation: "Innovation Officer",
    team: "Technology",
    manager_id: 2,
    manager_name: "Joe Linux",
    img_src:
      "https://www.shutterstock.com/image-photo/passport-picture-smiling-african-businesswoman-260nw-239828995.jpg",
  },
];

export const RESULT_FILTERED_EMPLOYEES = [
  {
    id: 5,
    name: "Ron Blomquist",
    designation: "Security Officer",
    team: "Technology",
    manager_id: 2,
    manager_name: "Joe Linux",
    img_src:
      "https://www.shutterstock.com/image-photo/portrait-smiling-businessman-black-suit-260nw-216577519.jpg",
  },
];

export const SELECTED_TEAM = [
  {
    value: "Technology",
    label: "Technology",
  },
];

export const API_RESPONSE_DATA = {
  id: 1,
  name: "Mark Hill",
  designation: "Executive Officer",
  img_src:
    "https://www.shutterstock.com/image-photo/portrait-african-american-man-glasses-260nw-352261352.jpg",
  children: [
    {
      id: 2,
      name: "Joe Linux",
      designation: "Technology Officer",
      team: "Technology",
      manager_id: 1,
      manager_name: "Mark Hill",
      img_src:
        "https://www.shutterstock.com/image-photo/passport-photo-serious-brazilian-young-260nw-1956224953.jpg",
      children: [
        {
          id: 5,
          name: "Ron Blomquist",
          designation: "Security Officer",
          team: "Technology",
          manager_id: 2,
          manager_name: "Joe Linux",
          img_src:
            "https://www.shutterstock.com/image-photo/portrait-smiling-businessman-black-suit-260nw-216577519.jpg",
          children: [],
        },
        {
          id: 6,
          name: "Mary Jhonson",
          designation: "Innovation Officer",
          team: "Technology",
          manager_id: 2,
          manager_name: "Joe Linux",
          img_src:
            "https://www.shutterstock.com/image-photo/passport-picture-smiling-african-businesswoman-260nw-239828995.jpg",
          children: [],
        },
      ],
    },
    {
      id: 3,
      name: "Linda May",
      designation: "Business Officer",
      team: "Business",
      manager_id: 1,
      manager_name: "Mark Hill",
      img_src:
        "https://www.shutterstock.com/image-photo/passport-picture-businesswoman-brown-hair-260nw-250775908.jpg",
      children: [
        {
          id: 7,
          name: "Alice",
          designation: "Marketing Officer",
          team: "Business",
          manager_id: 3,
          manager_name: "Linda May",
          img_src:
            "https://www.shutterstock.com/image-photo/passport-picture-blond-businesswoman-blazer-260nw-281265110.jpg",
          children: [],
        },
        {
          id: 8,
          name: "Michale Rubin",
          designation: "Brand Officer",
          team: "Business",
          manager_id: 3,
          manager_name: "Linda May",
          img_src:
            "https://www.shutterstock.com/image-photo/passport-photo-happy-laughing-latin-260nw-1852662472.jpg",
          children: [],
        },
      ],
    },
    {
      id: 4,
      name: "John Green",
      designation: "Accounting Officer",
      team: "Finance",
      manager_id: 1,
      manager_name: "Mark Hill",
      img_src:
        "https://www.shutterstock.com/image-photo/frontal-male-passport-photo-isolated-260nw-1414819673.jpg",
      children: [
        {
          id: 10,
          name: "Erica Reel",
          designation: "Customer Officer",
          team: "Finance",
          manager_id: 4,
          manager_name: "John Green",
          img_src:
            "https://www.shutterstock.com/image-photo/passport-photo-cool-blond-businesswoman-260nw-359058026.jpg",
          children: [],
        },
      ],
    },
  ],
};

export const FORMATTED_EMPLOYEE_DATA = [
  {
    id: 1,
    name: "Mark Hill",
    designation: "Executive Officer",
    img_src:
      "https://www.shutterstock.com/image-photo/portrait-african-american-man-glasses-260nw-352261352.jpg",
    children: [
      {
        id: 2,
        name: "Joe Linux",
        designation: "Technology Officer",
        team: "Technology",
        manager_id: 1,
        manager_name: "Mark Hill",
        img_src:
          "https://www.shutterstock.com/image-photo/passport-photo-serious-brazilian-young-260nw-1956224953.jpg",
        children: [
          {
            id: 5,
            name: "Ron Blomquist",
            designation: "Security Officer",
            team: "Technology",
            manager_id: 2,
            manager_name: "Joe Linux",
            img_src:
              "https://www.shutterstock.com/image-photo/portrait-smiling-businessman-black-suit-260nw-216577519.jpg",
            children: [],
          },
          {
            id: 6,
            name: "Mary Jhonson",
            designation: "Innovation Officer",
            team: "Technology",
            manager_id: 2,
            manager_name: "Joe Linux",
            img_src:
              "https://www.shutterstock.com/image-photo/passport-picture-smiling-african-businesswoman-260nw-239828995.jpg",
            children: [],
          },
        ],
      },
      {
        id: 3,
        name: "Linda May",
        designation: "Business Officer",
        team: "Business",
        manager_id: 1,
        manager_name: "Mark Hill",
        img_src:
          "https://www.shutterstock.com/image-photo/passport-picture-businesswoman-brown-hair-260nw-250775908.jpg",
        children: [
          {
            id: 7,
            name: "Alice",
            designation: "Marketing Officer",
            team: "Business",
            manager_id: 3,
            manager_name: "Linda May",
            img_src:
              "https://www.shutterstock.com/image-photo/passport-picture-blond-businesswoman-blazer-260nw-281265110.jpg",
            children: [],
          },
          {
            id: 8,
            name: "Michale Rubin",
            designation: "Brand Officer",
            team: "Business",
            manager_id: 3,
            manager_name: "Linda May",
            img_src:
              "https://www.shutterstock.com/image-photo/passport-photo-happy-laughing-latin-260nw-1852662472.jpg",
            children: [],
          },
        ],
      },
      {
        id: 4,
        name: "John Green",
        designation: "Accounting Officer",
        team: "Finance",
        manager_id: 1,
        manager_name: "Mark Hill",
        img_src:
          "https://www.shutterstock.com/image-photo/frontal-male-passport-photo-isolated-260nw-1414819673.jpg",
        children: [
          {
            id: 10,
            name: "Erica Reel",
            designation: "Customer Officer",
            team: "Finance",
            manager_id: 4,
            manager_name: "John Green",
            img_src:
              "https://www.shutterstock.com/image-photo/passport-photo-cool-blond-businesswoman-260nw-359058026.jpg",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Joe Linux",
    designation: "Technology Officer",
    team: "Technology",
    manager_id: 1,
    manager_name: "Mark Hill",
    img_src:
      "https://www.shutterstock.com/image-photo/passport-photo-serious-brazilian-young-260nw-1956224953.jpg",
    children: [
      {
        id: 5,
        name: "Ron Blomquist",
        designation: "Security Officer",
        team: "Technology",
        manager_id: 2,
        manager_name: "Joe Linux",
        img_src:
          "https://www.shutterstock.com/image-photo/portrait-smiling-businessman-black-suit-260nw-216577519.jpg",
        children: [],
      },
      {
        id: 6,
        name: "Mary Jhonson",
        designation: "Innovation Officer",
        team: "Technology",
        manager_id: 2,
        manager_name: "Joe Linux",
        img_src:
          "https://www.shutterstock.com/image-photo/passport-picture-smiling-african-businesswoman-260nw-239828995.jpg",
        children: [],
      },
    ],
  },
  {
    id: 5,
    name: "Ron Blomquist",
    designation: "Security Officer",
    team: "Technology",
    manager_id: 2,
    manager_name: "Joe Linux",
    img_src:
      "https://www.shutterstock.com/image-photo/portrait-smiling-businessman-black-suit-260nw-216577519.jpg",
    children: [],
  },
  {
    id: 6,
    name: "Mary Jhonson",
    designation: "Innovation Officer",
    team: "Technology",
    manager_id: 2,
    manager_name: "Joe Linux",
    img_src:
      "https://www.shutterstock.com/image-photo/passport-picture-smiling-african-businesswoman-260nw-239828995.jpg",
    children: [],
  },
  {
    id: 3,
    name: "Linda May",
    designation: "Business Officer",
    team: "Business",
    manager_id: 1,
    manager_name: "Mark Hill",
    img_src:
      "https://www.shutterstock.com/image-photo/passport-picture-businesswoman-brown-hair-260nw-250775908.jpg",
    children: [
      {
        id: 7,
        name: "Alice",
        designation: "Marketing Officer",
        team: "Business",
        manager_id: 3,
        manager_name: "Linda May",
        img_src:
          "https://www.shutterstock.com/image-photo/passport-picture-blond-businesswoman-blazer-260nw-281265110.jpg",
        children: [],
      },
      {
        id: 8,
        name: "Michale Rubin",
        designation: "Brand Officer",
        team: "Business",
        manager_id: 3,
        manager_name: "Linda May",
        img_src:
          "https://www.shutterstock.com/image-photo/passport-photo-happy-laughing-latin-260nw-1852662472.jpg",
        children: [],
      },
    ],
  },
  {
    id: 7,
    name: "Alice",
    designation: "Marketing Officer",
    team: "Business",
    manager_id: 3,
    manager_name: "Linda May",
    img_src:
      "https://www.shutterstock.com/image-photo/passport-picture-blond-businesswoman-blazer-260nw-281265110.jpg",
    children: [],
  },
  {
    id: 8,
    name: "Michale Rubin",
    designation: "Brand Officer",
    team: "Business",
    manager_id: 3,
    manager_name: "Linda May",
    img_src:
      "https://www.shutterstock.com/image-photo/passport-photo-happy-laughing-latin-260nw-1852662472.jpg",
    children: [],
  },
  {
    id: 4,
    name: "John Green",
    designation: "Accounting Officer",
    team: "Finance",
    manager_id: 1,
    manager_name: "Mark Hill",
    img_src:
      "https://www.shutterstock.com/image-photo/frontal-male-passport-photo-isolated-260nw-1414819673.jpg",
    children: [
      {
        id: 10,
        name: "Erica Reel",
        designation: "Customer Officer",
        team: "Finance",
        manager_id: 4,
        manager_name: "John Green",
        img_src:
          "https://www.shutterstock.com/image-photo/passport-photo-cool-blond-businesswoman-260nw-359058026.jpg",
        children: [],
      },
    ],
  },
  {
    id: 10,
    name: "Erica Reel",
    designation: "Customer Officer",
    team: "Finance",
    manager_id: 4,
    manager_name: "John Green",
    img_src:
      "https://www.shutterstock.com/image-photo/passport-photo-cool-blond-businesswoman-260nw-359058026.jpg",
    children: [],
  },
];

export const OLD_EMPLOYEE_INFO = {
  id: 1,
  name: "Mark Hill",
  designation: "Executive Officer",
  img_src:
    "https://www.shutterstock.com/image-photo/portrait-african-american-man-glasses-260nw-352261352.jpg",
  children: [
    {
      id: 2,
      name: "Joe Linux",
      designation: "Technology Officer",
      team: "Technology",
      manager_id: 1,
      manager_name: "Mark Hill",
      img_src:
        "https://www.shutterstock.com/image-photo/passport-photo-serious-brazilian-young-260nw-1956224953.jpg",
      children: [
        {
          id: 6,
          name: "Mary Jhonson",
          designation: "Innovation Officer",
          team: "Technology",
          manager_id: 2,
          manager_name: "Joe Linux",
          img_src:
            "https://www.shutterstock.com/image-photo/passport-picture-smiling-african-businesswoman-260nw-239828995.jpg",
          children: [],
        },
      ],
    },
    {
      id: 3,
      name: "Linda May",
      designation: "Business Officer",
      team: "Business",
      manager_id: 1,
      manager_name: "Mark Hill",
      img_src:
        "https://www.shutterstock.com/image-photo/passport-picture-businesswoman-brown-hair-260nw-250775908.jpg",
      children: [
        {
          id: 7,
          name: "Alice",
          designation: "Marketing Officer",
          team: "Business",
          manager_id: 3,
          manager_name: "Linda May",
          img_src:
            "https://www.shutterstock.com/image-photo/passport-picture-blond-businesswoman-blazer-260nw-281265110.jpg",
          children: [],
        },
        {
          id: 8,
          name: "Michale Rubin",
          designation: "Brand Officer",
          team: "Business",
          manager_id: 3,
          manager_name: "Linda May",
          img_src:
            "https://www.shutterstock.com/image-photo/passport-photo-happy-laughing-latin-260nw-1852662472.jpg",
          children: [],
        },
      ],
    },
    {
      id: 4,
      name: "John Green",
      designation: "Accounting Officer",
      team: "Finance",
      manager_id: 1,
      manager_name: "Mark Hill",
      img_src:
        "https://www.shutterstock.com/image-photo/frontal-male-passport-photo-isolated-260nw-1414819673.jpg",
      children: [
        {
          id: 10,
          name: "Erica Reel",
          designation: "Customer Officer",
          team: "Finance",
          manager_id: 4,
          manager_name: "John Green",
          img_src:
            "https://www.shutterstock.com/image-photo/passport-photo-cool-blond-businesswoman-260nw-359058026.jpg",
          children: [
            {
              id: 5,
              name: "Ron Blomquist",
              designation: "Security Officer",
              team: "Technology",
              manager_id: 2,
              manager_name: "Joe Linux",
              img_src:
                "https://www.shutterstock.com/image-photo/portrait-smiling-businessman-black-suit-260nw-216577519.jpg",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

export const RESULT_UPDATED_EMPLOYEE_INFO = {
  id: 1,
  name: "Mark Hill",
  designation: "Executive Officer",
  img_src:
    "https://www.shutterstock.com/image-photo/portrait-african-american-man-glasses-260nw-352261352.jpg",
  children: [
    {
      id: 2,
      name: "Joe Linux",
      designation: "Technology Officer",
      team: "Technology",
      manager_id: 1,
      manager_name: "Mark Hill",
      img_src:
        "https://www.shutterstock.com/image-photo/passport-photo-serious-brazilian-young-260nw-1956224953.jpg",
      children: [
        {
          id: 6,
          name: "Mary Jhonson",
          designation: "Innovation Officer",
          team: "Technology",
          manager_id: 2,
          manager_name: "Joe Linux",
          img_src:
            "https://www.shutterstock.com/image-photo/passport-picture-smiling-african-businesswoman-260nw-239828995.jpg",
          children: [],
        },
      ],
    },
    {
      id: 3,
      name: "Linda May",
      designation: "Business Officer",
      team: "Business",
      manager_id: 1,
      manager_name: "Mark Hill",
      img_src:
        "https://www.shutterstock.com/image-photo/passport-picture-businesswoman-brown-hair-260nw-250775908.jpg",
      children: [
        {
          id: 7,
          name: "Alice",
          designation: "Marketing Officer",
          team: "Business",
          manager_id: 3,
          manager_name: "Linda May",
          img_src:
            "https://www.shutterstock.com/image-photo/passport-picture-blond-businesswoman-blazer-260nw-281265110.jpg",
          children: [],
        },
        {
          id: 8,
          name: "Michale Rubin",
          designation: "Brand Officer",
          team: "Business",
          manager_id: 3,
          manager_name: "Linda May",
          img_src:
            "https://www.shutterstock.com/image-photo/passport-photo-happy-laughing-latin-260nw-1852662472.jpg",
          children: [],
        },
      ],
    },
    {
      id: 4,
      name: "John Green",
      designation: "Accounting Officer",
      team: "Finance",
      manager_id: 1,
      manager_name: "Mark Hill",
      img_src:
        "https://www.shutterstock.com/image-photo/frontal-male-passport-photo-isolated-260nw-1414819673.jpg",
      children: [
        {
          id: 10,
          name: "Erica Reel",
          designation: "Customer Officer",
          team: "Finance",
          manager_id: 4,
          manager_name: "John Green",
          img_src:
            "https://www.shutterstock.com/image-photo/passport-photo-cool-blond-businesswoman-260nw-359058026.jpg",
          children: [
            {
              id: 5,
              name: "Ron Blomquist",
              designation: "Security Officer",
              team: "Technology",
              manager_id: 10,
              manager_name: "Erica Reel",
              img_src:
                "https://www.shutterstock.com/image-photo/portrait-smiling-businessman-black-suit-260nw-216577519.jpg",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};
