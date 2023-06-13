import { TeamsState, TeamsStructure } from "../../store/teams/types";

export const teamMock: TeamsStructure[] = [
  {
    id: "6471d07c47109a6b3fc62df8",
    name: "On Fire !",
    description:
      "A team full of pyro characters. Perfect for elemental synergy and continuous pyro attack",
    character1: "6471d17647109a6b3fc62dfd",
    character2: "6471d17647109a6b3fc62e02",
    character3: "6471d17647109a6b3fc62e07",
    character4: "6471d17647109a6b3fc62e08",
    rating: "S",

    type: "Fighters",
    image:
      "https://cdn.shopify.com/s/files/1/0554/2664/6129/articles/All-Pyro-Characters-Ranked-in-Genshin-Impact.webp",
  },
  {
    id: "6471d07c47109a6b3fc62df7",
    name: "Sumeru Explorers",
    description:
      "A team full of pyro characters. Perfect for elemental synergy and continuous pyro attack",
    character1: "6471d17647109a6b3fc62dfd",
    character2: "6471d17647109a6b3fc62e02",
    character3: "6471d17647109a6b3fc62e07",
    character4: "6471d17647109a6b3fc62e08",
    rating: "S",
    type: "Explorers",
    image: "https://i.blogs.es/1d5449/x720/840_560.jpeg",
  },
  {
    id: "6471d07c47109a6b3fc62df9",
    name: "Desert 5 stars",
    description:
      "A team full of pyro characters. Perfect for elemental synergy and continuous pyro attack",
    character1: "6471d17647109a6b3fc62dfd",
    character2: "6471d17647109a6b3fc62e02",
    character3: "6471d17647109a6b3fc62e07",
    character4: "6471d17647109a6b3fc62e08",
    rating: "SS",
    type: "DPS",
    image:
      "https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/02/28/Is-Cyno-worth-pulling-in-Genshin-Impact.jpg",
  },
  {
    id: "6471d07c47109a6b3fc62df3",
    name: "Teams 4",
    description:
      "A team full of pyro characters. Perfect for elemental synergy and continuous pyro attack",
    character1: "6471d17647109a6b3fc62dfd",
    character2: "6471d17647109a6b3fc62e02",
    character3: "6471d17647109a6b3fc62e07",
    character4: "6471d17647109a6b3fc62e08",
    rating: "SS",
    type: "DPS",
    image:
      "https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/02/28/Is-Cyno-worth-pulling-in-Genshin-Impact.jpg",
  },
];

export const addTeamMock: TeamsStructure = {
  id: "6471d07c47109a6b3fc62df5",
  name: "New team",
  description:
    "A team full of pyro characters. Perfect for elemental synergy and continuous pyro attack",
  character1: "6471d17647109a6b3fc62dfd",
  character2: "6471d17647109a6b3fc62e02",
  character3: "6471d17647109a6b3fc62e07",
  character4: "6471d17647109a6b3fc62e08",
  rating: "SS",
  type: "DPS",
  image:
    "https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/02/28/Is-Cyno-worth-pulling-in-Genshin-Impact.jpg",
};

export const singleTeamMock: Partial<TeamsStructure> = {
  name: "ELECTRO",
  description:
    "A team full of pyro characters. Perfect for elemental synergy and continuous pyro attack",
  character1: "6471d17647109a6b3fc62dfd",
  character2: "6471d17647109a6b3fc62e02",
  character3: "6471d17647109a6b3fc62e07",
  character4: "6471d17647109a6b3fc62e08",
  rating: "S",
  type: "Fighters",
  image:
    "https://cdn.shopify.com/s/files/1/0554/2664/6129/articles/All-Pyro-Characters-Ranked-in-Genshin-Impact.webp",
};

export const singleTeamMockFailed: Partial<TeamsStructure> = {
  name: "FAIL",
  description: "",
  character1: "",
  character2: "",
  character3: "",
  character4: "",
  rating: "",
  type: "",
  image: "",
};

export const emptyTeam: TeamsStructure = {
  id: "",
  name: "",
  description: "",
  character1: "",
  character2: "",
  character3: "",
  character4: "",
  rating: "",
  type: "",
  image: "",
};

export const detailMock: TeamsStructure = {
  id: "test",
  name: "Liyue Essentials",
  description:
    "Liyue is one of the seven nations in Genshin Impact, and it is home to a diverse cast of characters.",
  character1: "Cyno",
  character2: "Klee",
  character3: "Diluc",
  character4: "Razor",
  rating: "SS+",
  type: "Tank",
  image:
    "https://image-cdn.essentiallysports.com/wp-content/uploads/20210324200849/WCCFgenshinimpact9.jpg?width=600",
};

export const teamListMock: TeamsState = {
  teams: [
    {
      id: "6471d07c47109a6b3fc62df8",
      name: "On Fire !",
      description:
        "A team full of pyro characters. Perfect for elemental synergy and continuous pyro attack",
      character1: "6471d17647109a6b3fc62dfd",
      character2: "6471d17647109a6b3fc62e02",
      character3: "6471d17647109a6b3fc62e07",
      character4: "6471d17647109a6b3fc62e08",
      rating: "S",
      type: "Fighters",
      image:
        "https://cdn.shopify.com/s/files/1/0554/2664/6129/articles/All-Pyro-Characters-Ranked-in-Genshin-Impact.webp",
    },
  ],
  limit: 0,
  singleTeam: detailMock,
  totalCount: 0,
};
