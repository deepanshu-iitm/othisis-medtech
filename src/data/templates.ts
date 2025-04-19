import { SidebarCategory, Template } from '../types';

export const categories: SidebarCategory[] = [
  { id: 'subjective', name: 'Subjective' },
  { id: 'objective', name: 'Objective' },
  { id: 'assessment', name: 'Assessment & Plan' },
  { id: 'findings', name: 'Findings' },
  { id: 'diagnoses', name: 'Diagnoses' },
  { id: 'treatment', name: 'Treatment' },
  { id: 'recovery', name: 'Recovery' },
  { id: 'objective2', name: 'Objective' },
  { id: 'assessment2', name: 'Assessment & Plan' },
  { id: 'treatment2', name: 'Treatment' },
];

export const rootCanalTemplate: Template = {
  id: 'root-canal',
  name: 'Root Canal',
  sections: [
    {
      id: 'subjective',
      title: 'Subjective:',
      items: [
        { text: 'Toothache for few days' }
      ]
    },
    {
      id: 'history',
      title: 'History of Presenting Complaints:',
      items: [
        { text: 'Toothache present for few days' }
      ]
    },
    {
      id: 'extra-oral',
      title: 'Extra Oral Examination:',
      items: [
        { text: 'Not performed' }
      ]
    },
    {
      id: 'intra-oral',
      title: 'Intra Oral Examination:',
      items: [
        { text: 'Tenderness around molar' },
        { text: 'Swollen gum' }
      ]
    },
    {
      id: 'radiographic',
      title: 'Radiographic Findings:',
      items: [
        { text: 'X-ray planned to confirm extent of infection' }
      ]
    },
    {
      id: 'diagnoses',
      title: 'Diagnoses:',
      items: [
        { text: 'Suspected tooth abscess' }
      ]
    },
    {
      id: 'treatment',
      title: 'Treatment:',
      items: [
        { text: 'Root canal planned to remove infected tissue' }
      ]
    }
  ]
};