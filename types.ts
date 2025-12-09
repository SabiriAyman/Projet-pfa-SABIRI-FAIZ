export enum Role {
  PLAYER = 'PLAYER',
  STAFF = 'STAFF'
}

export enum Position {
  GK = 'Gardien',
  DEF = 'Défenseur',
  MID = 'Milieu',
  FWD = 'Attaquant'
}

export interface PlayerStats {
  matchDate: string;
  opponent: string;
  minutesPlayed: number;
  distanceKm: number;
  goals: number;
  assists: number;
  passAccuracy: number;
  rating: number;
}

export interface Player {
  id: string;
  name: string;
  position: Position;
  number: number;
  avatar: string;
  stats: PlayerStats[];
  healthStatus: 'Fit' | 'Blessé' | 'Repos';
}

export interface CalendarEvent {
  id: string;
  title: string;
  type: 'Training' | 'Match' | 'Meeting' | 'Medical';
  date: string;
  time: string;
  location: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: any;
}