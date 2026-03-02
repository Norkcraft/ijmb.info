export type University = { name: string; type: 'Federal' | 'State' | 'Private' };

export const universities: University[] = [
  { name: 'Ahmadu Bello University, Zaria', type: 'Federal' },
  { name: 'University of Ilorin', type: 'Federal' },
  { name: 'University of Abuja', type: 'Federal' },
  { name: 'Bayero University Kano', type: 'Federal' },
  { name: 'Kogi State University', type: 'State' },
  { name: 'Kwara State University', type: 'State' },
  { name: 'Lagos State University', type: 'State' },
  { name: 'Benue State University', type: 'State' },
  { name: 'Al-Hikmah University', type: 'Private' },
  { name: 'Babcock University', type: 'Private' },
  { name: 'Afe Babalola University', type: 'Private' },
  { name: 'Lead City University', type: 'Private' }
];
