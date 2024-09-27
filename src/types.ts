// src/types.ts
export interface Job {
    id: number;
    company: string;
    title: string;
    status: 'Applied' | 'Interview' | 'Rejected' | 'Offer';
  }
  