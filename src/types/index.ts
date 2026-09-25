export type ActiveTab = 'hub' | 'nest' | 'digital' | 'recommendations';

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  iconName: string;
  highlight?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location?: string;
  year: string;
  description: string;
  imageUrl: string;
  tags: string[];
  metrics?: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  tags: string[];
}
