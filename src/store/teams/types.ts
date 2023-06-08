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
  bgimage: string;
}

export interface TeamsState {
  teams: TeamsStructure[];
}
