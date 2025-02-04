export interface TranslationProject {
  title: string;
  description: string;
  technologies: string[];
}

export interface Translations {
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
  };
  about: {
    title: string;
    description: string;
  };
  skills: {
    title: string;
    frontend: string;
    backend: string;
    cloud: string;
    tools: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
    inDevelopment: string;
    code: string;
    liveDemo: string;
    items: TranslationProject[];
  };
  contact: {
    title: string;
    description: string;
    name: string;
    email: string;
    message: string;
    send: string;
  };
}

export interface LanguageStrings {
  [key: string]: Translations;
}

export type Language = 'en' | 'es';
export type Theme = 'light' | 'dark';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
}

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
  imageUrl: string;
  link: string;
}