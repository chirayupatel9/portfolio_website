export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
}

export interface PhotoItem {
  id: number;
  url: string;
  title: string;
  category: string;
}

export interface Social {
  platform: string;
  url: string;
  icon: string;
}