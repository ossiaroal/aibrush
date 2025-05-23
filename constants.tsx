import React from 'react';
import { BrushingStep, UserType } from './types';

export const ADULT_BRUSHING_STEPS: BrushingStep[] = [
  {
    id: 'adult_step1',
    title: 'Outer Surfaces - Upper Teeth',
    area: 'Outer Upper',
    description: 'Brush the outer surfaces of your upper teeth. Remember the gum line!',
    detailedInstructions: [
      'Place your toothbrush at a 45-degree angle to the gums.',
      'Use short, gentle, back-and-forth strokes.',
      'Cover all outer surfaces thoroughly.',
    ],
    durationSeconds: 30,
    imageUrl: 'https://picsum.photos/seed/adult_outer_upper_action/600/400',
    areaDiagramUrl: 'https://picsum.photos/seed/adult_outer_upper_area/300/200',
    angleDiagramUrl: 'https://picsum.photos/seed/adult_brush_angle_45/300/200',
  },
  {
    id: 'adult_step2',
    title: 'Outer Surfaces - Lower Teeth',
    area: 'Outer Lower',
    description: 'Now, brush the outer surfaces of your lower teeth.',
    detailedInstructions: [
      'Maintain the 45-degree angle to the gums.',
      'Use short, gentle, back-and-forth strokes.',
      'Ensure every tooth is cleaned.',
    ],
    durationSeconds: 30,
    imageUrl: 'https://picsum.photos/seed/adult_outer_lower_action/600/400',
    areaDiagramUrl: 'https://picsum.photos/seed/adult_outer_lower_area/300/200',
    angleDiagramUrl: 'https://picsum.photos/seed/adult_brush_angle_45/300/200',
  },
  {
    id: 'adult_step3',
    title: 'Inner Surfaces - Upper Teeth',
    area: 'Inner Upper',
    description: 'Clean the inner surfaces of your upper teeth.',
    detailedInstructions: [
      'Tilt the brush vertically for front teeth, use up-and-down strokes.',
      'For back teeth, maintain the 45-degree angle.',
      'This area is often missed, so be thorough.',
    ],
    durationSeconds: 30,
    imageUrl: 'https://picsum.photos/seed/adult_inner_upper_action/600/400',
    areaDiagramUrl: 'https://picsum.photos/seed/adult_inner_upper_area/300/200',
    angleDiagramUrl: 'https://picsum.photos/seed/adult_brush_angle_vertical/300/200',
  },
  {
    id: 'adult_step4',
    title: 'Inner Surfaces - Lower Teeth',
    area: 'Inner Lower',
    description: 'Brush the inner surfaces of your lower teeth.',
    detailedInstructions: [
      'Tilt the brush vertically for front teeth, use up-and-down strokes.',
      'For back teeth, ensure you reach the gum line.',
      'Gentle strokes are key to avoid gum irritation.',
    ],
    durationSeconds: 30,
    imageUrl: 'https://picsum.photos/seed/adult_inner_lower_action/600/400',
    areaDiagramUrl: 'https://picsum.photos/seed/adult_inner_lower_area/300/200',
    angleDiagramUrl: 'https://picsum.photos/seed/adult_brush_angle_vertical_lower/300/200',
  },
  {
    id: 'adult_step5',
    title: 'Chewing Surfaces',
    area: 'All Chewing Tops',
    description: 'Scrub the chewing surfaces of all your teeth.',
    detailedInstructions: [
      'Hold the brush flat against the chewing surfaces.',
      'Use a back-and-forth scrubbing motion.',
      'Don\'t forget the very back molars.',
    ],
    durationSeconds: 20,
    imageUrl: 'https://picsum.photos/seed/adult_chewing_action/600/400',
    areaDiagramUrl: 'https://picsum.photos/seed/adult_chewing_area/300/200',
    angleDiagramUrl: 'https://picsum.photos/seed/adult_brush_angle_flat/300/200',
  },
  {
    id: 'adult_step6',
    title: 'Tongue Cleaning',
    area: 'Tongue',
    description: 'Gently brush your tongue to remove bacteria.',
    detailedInstructions: [
      'Stick out your tongue.',
      'Place the brush as far back as comfortable.',
      'Brush gently from back to front.',
      'This helps freshen your breath.',
    ],
    durationSeconds: 10,
    imageUrl: 'https://picsum.photos/seed/adult_tongue_action/600/400',
    areaDiagramUrl: 'https://picsum.photos/seed/adult_tongue_area/300/200', // Could be a diagram of a tongue
    angleDiagramUrl: 'https://picsum.photos/seed/adult_brush_angle_tongue/300/200', // Brush flat on tongue
  },
];

export const CHILD_BRUSHING_STEPS: BrushingStep[] = [
  {
    id: 'child_step1',
    title: 'Front Teeth - Shiny Smiles!',
    area: 'Front Teeth (Outer)',
    description: 'Let\'s make those front teeth sparkle! Use gentle circles.',
    detailedInstructions: [
      'Make big, fun circles on your "smile" teeth.',
      'Be gentle like you\'re tickling them.',
      'Sing a happy tooth song!',
    ],
    durationSeconds: 30,
    imageUrl: 'https://picsum.photos/seed/child_front_outer_action/600/400',
    areaDiagramUrl: 'https://picsum.photos/seed/child_front_area/300/200',
    angleDiagramUrl: 'https://picsum.photos/seed/child_brush_angle_circles/300/200',
  },
  {
    id: 'child_step2',
    title: 'Back Teeth - Cheek Side Adventures!',
    area: 'Back Teeth (Outer)',
    description: 'Time to explore the outside of your back teeth. Go side to side!',
    detailedInstructions: [
      'Brush where your cheeks touch your teeth.',
      'Move your brush back and forth like a little train.',
      'Get all the sleepy food bits out!',
    ],
    durationSeconds: 30,
    imageUrl: 'https://picsum.photos/seed/child_back_outer_action/600/400',
    areaDiagramUrl: 'https://picsum.photos/seed/child_back_outer_area/300/200',
    angleDiagramUrl: 'https://picsum.photos/seed/child_brush_angle_back_forth/300/200',
  },
  {
    id: 'child_step3',
    title: 'Back Teeth - Tongue Side Treasures!',
    area: 'Back Teeth (Inner)',
    description: 'Let\'s find treasures on the inside of your back teeth!',
    detailedInstructions: [
      'Now brush where your tongue touches your teeth.',
      'Use small circles or wiggles.',
      'Make sure they are super clean!',
    ],
    durationSeconds: 30,
    imageUrl: 'https://picsum.photos/seed/child_back_inner_action/600/400',
    areaDiagramUrl: 'https://picsum.photos/seed/child_back_inner_area/300/200',
    angleDiagramUrl: 'https://picsum.photos/seed/child_brush_angle_wiggles/300/200',
  },
  {
    id: 'child_step4',
    title: 'Chewing Tops - Mountain Climbers!',
    area: 'Chewing Surfaces',
    description: 'Climb those bumpy tooth mountains! Brush the tops.',
    detailedInstructions: [
      'Brush the bumpy tops where you chew your food.',
      'Go back and forth like you\'re scrubbing a floor.',
      'This makes them strong for eating!',
    ],
    durationSeconds: 30,
    imageUrl: 'https://picsum.photos/seed/child_chewing_action/600/400',
    areaDiagramUrl: 'https://picsum.photos/seed/child_chewing_area/300/200',
    angleDiagramUrl: 'https://picsum.photos/seed/child_brush_angle_scrub/300/200',
  },
];

// Icons
interface IconProps {
  className?: string;
}

export const PlayIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
  </svg>
);

export const PauseIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75.75V18a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm9 0a.75.75 0 01.75.75V18a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
  </svg>
);

export const NextIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
  </svg>
);

export const PrevIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
  </svg>
);

export const CheckCircleIcon = ({ className = "w-12 h-12" }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const AdultUserIcon = ({ className = "w-10 h-10" }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 12.25c1.24 0 2.25-1.01 2.25-2.25S13.24 7.75 12 7.75 9.75 8.76 9.75 10s1.01 2.25 2.25 2.25zm4.5 4c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9v-.75zM19.34 10.25A7.98 7.98 0 0012.5 4.03V2h-1v2.03a8.003 8.003 0 00-8.84 8.84L2 15.34V20h4.66l.53-.53c.46.28.96.49 1.49.65L9 22h6l-.18-1.88c.53-.16 1.03-.37 1.49-.65l.53.53H22v-4.66l-.66-.59zM12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z"/>
    </svg>
);

export const ChildUserIcon = ({ className = "w-10 h-10" }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 14c-2.28 0-4.38-.78-6-2.05.2-.71.91-1.95 3.34-1.95 1.13 0 2.23.39 3.06.87.84-.48 1.94-.87 3.06-.87 2.43 0 3.14 1.24 3.34 1.95-1.62 1.27-3.72 2.05-6 2.05z"/>
    </svg>
);

export const RefreshIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
);

export const LogoutIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
    </svg>
);

export const ToothIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.36,8.25c0-2.25-1.62-4.5-4.36-4.5H10c-2.74,0-4.36,2.25-4.36,4.5C5.64,10.5,9,12.75,9,15.75v1.5 c0,0.83,0.67,1.5,1.5,1.5h3c0.83,0,1.5-0.67,1.5-1.5v-1.5C15,12.75,18.36,10.5,18.36,8.25z M12,14.25c-0.83,0-1.5-0.67-1.5-1.5 s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S12.83,14.25,12,14.25z M12.75,20.25H11.25C10.01,20.25,9,19.24,9,18H7.5 c0,1.66,1.34,3,3,3h3c1.66,0,3-1.34,3-3H15C15,19.24,13.99,20.25,12.75,20.25z"/>
  </svg>
);

export const THEME_COLORS = {
  [UserType.Adult]: {
    primary: 'blue-600',
    primaryHover: 'blue-700',
    secondary: 'slate-700',
    accent: 'sky-500',
    backgroundFrom: 'from-slate-100',
    backgroundTo: 'to-sky-100',
    text: 'text-slate-800',
    buttonText: 'text-white',
    cardBg: 'bg-white',
  },
  [UserType.Child]: {
    primary: 'emerald-500',
    primaryHover: 'emerald-600',
    secondary: 'amber-500',
    accent: 'pink-500',
    backgroundFrom: 'from-lime-50',
    backgroundTo: 'to-emerald-100',
    text: 'text-green-800',
    buttonText: 'text-white',
    cardBg: 'bg-white',
  },
  default: {
    primary: 'gray-500',
    primaryHover: 'gray-600',
    secondary: 'gray-700',
    accent: 'gray-400',
    backgroundFrom: 'from-slate-200',
    backgroundTo: 'to-slate-300',
    text: 'text-gray-800',
    buttonText: 'text-white',
    cardBg: 'bg-white',
  }
};