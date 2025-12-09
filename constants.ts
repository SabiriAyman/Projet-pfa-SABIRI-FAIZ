import { Player, Position, CalendarEvent, Role } from './types';

export const MOCK_PLAYERS: Player[] = [
  {
    id: '1',
    name: 'Anas Zniti',
    position: Position.GK,
    number: 1,
    avatar: 'https://picsum.photos/seed/zniti/200/200',
    healthStatus: 'Fit',
    stats: [
      { matchDate: '2023-10-01', opponent: 'Wydad AC', minutesPlayed: 90, distanceKm: 4.2, goals: 0, assists: 0, passAccuracy: 85, rating: 7.5 },
      { matchDate: '2023-10-08', opponent: 'FAR Rabat', minutesPlayed: 90, distanceKm: 3.9, goals: 0, assists: 0, passAccuracy: 82, rating: 6.8 },
      { matchDate: '2023-10-22', opponent: 'RS Berkane', minutesPlayed: 90, distanceKm: 4.5, goals: 0, assists: 0, passAccuracy: 88, rating: 8.1 },
    ]
  },
  {
    id: '2',
    name: 'Yousri Bouzok',
    position: Position.FWD,
    number: 26,
    avatar: 'https://picsum.photos/seed/bouzok/200/200',
    healthStatus: 'Fit',
    stats: [
      { matchDate: '2023-10-01', opponent: 'Wydad AC', minutesPlayed: 85, distanceKm: 10.5, goals: 1, assists: 0, passAccuracy: 78, rating: 8.2 },
      { matchDate: '2023-10-08', opponent: 'FAR Rabat', minutesPlayed: 90, distanceKm: 11.2, goals: 0, assists: 1, passAccuracy: 75, rating: 7.4 },
      { matchDate: '2023-10-22', opponent: 'RS Berkane', minutesPlayed: 75, distanceKm: 9.8, goals: 2, assists: 0, passAccuracy: 80, rating: 9.0 },
      { matchDate: '2023-10-29', opponent: 'FUS Rabat', minutesPlayed: 88, distanceKm: 10.9, goals: 0, assists: 0, passAccuracy: 72, rating: 6.9 },
    ]
  },
  {
    id: '3',
    name: 'Mohamed Boulacsoot',
    position: Position.MID,
    number: 17,
    avatar: 'https://picsum.photos/seed/boulacsoot/200/200',
    healthStatus: 'Blessé',
    stats: [
      { matchDate: '2023-10-01', opponent: 'Wydad AC', minutesPlayed: 60, distanceKm: 7.2, goals: 0, assists: 0, passAccuracy: 88, rating: 6.5 },
      { matchDate: '2023-10-08', opponent: 'FAR Rabat', minutesPlayed: 45, distanceKm: 5.1, goals: 0, assists: 0, passAccuracy: 90, rating: 6.2 },
    ]
  }
];

export const MOCK_EVENTS: CalendarEvent[] = [
  {
    id: 'e1',
    title: 'Entraînement Tactique',
    type: 'Training',
    date: '2023-11-15',
    time: '10:00',
    location: 'Académie Raja CA'
  },
  {
    id: 'e2',
    title: 'Match vs MAT Tetouan',
    type: 'Match',
    date: '2023-11-18',
    time: '20:00',
    location: 'Stade Mohamed V'
  },
  {
    id: 'e3',
    title: 'Séance Vidéo',
    type: 'Meeting',
    date: '2023-11-16',
    time: '14:00',
    location: 'Salle de Conférence'
  },
  {
    id: 'e4',
    title: 'Check-up Médical',
    type: 'Medical',
    date: '2023-11-14',
    time: '09:00',
    location: 'Centre Médical'
  }
];
