export interface TeamsStructure {
  id: string;
  name: string;
  description: string;
  character1: string;
  character2: string;
  character3: string;
  character4: string;
  rating: string;
  type: string;
  image: string;
}

export interface SingleTeamStructure {
  teamById: {
    id: string;
    name: string;
    description: string;
    character1: string;
    character2: string;
    character3: string;
    character4: string;
    rating: string;
    type: string;
    image: string;
  };
}

export interface TeamsState {
  teams: TeamsStructure[];
  limit: number;
  singleTeam: TeamsStructure;
  totalCount: number;
}
