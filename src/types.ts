export type Language = 'PL' | 'EN';

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  fullContent: string[];
  keyTakeaways: string[];
  shapeType: 'therapy' | 'about' | 'cta';
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  sessionType: 'consultation' | 'cbt_session' | 'expat_session';
  preferredLanguage: 'PL' | 'EN';
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export interface HelpTopic {
  id: string;
  icon: string;
  title: string;
  description: string;
  cbtApproach: string;
}
