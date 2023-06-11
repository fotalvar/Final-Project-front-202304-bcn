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
    bgimage:
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
    bgimage: "https://i.blogs.es/1d5449/x720/840_560.jpeg",
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
    bgimage:
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
  bgimage:
    "https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/02/28/Is-Cyno-worth-pulling-in-Genshin-Impact.jpg",
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
      bgimage:
        "https://cdn.shopify.com/s/files/1/0554/2664/6129/articles/All-Pyro-Characters-Ranked-in-Genshin-Impact.webp",
    },
  ],
  limit: 0,
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
  bgimage:
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
  bgimage: "",
};
