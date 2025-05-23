export enum UserType {
  Adult = 'Adult',
  Child = 'Child',
}

export interface BrushingStep {
  id: string;
  title: string;
  area: string;
  description: string;
  detailedInstructions: string[];
  durationSeconds: number;
  imageUrl: string;
  areaDiagramUrl?: string; // New: Diagram of the brushing area
  angleDiagramUrl?: string; // New: Diagram of the brush angle
}

export type AppView = 'selection' | 'brushing' | 'completion';