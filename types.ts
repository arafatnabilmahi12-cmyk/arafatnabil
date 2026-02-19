
export interface Achievement {
  id: number;
  text: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}
