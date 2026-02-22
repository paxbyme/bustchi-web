export type PartnerCategory = 'Expert' | 'Academy' | 'Business' | 'Travel';

export interface Partner {
  id: string;
  name: string;
  title: string;
  category: PartnerCategory;
  image?: string;
}

export const partners: Partner[] = [
  { id: 'anvarov-jasurbek', name: 'Anvarov Jasurbek', title: 'Telegram blog expert', category: 'Expert' },
  { id: 'ustoz-zakkariya', name: 'Ustoz Zakkariya', title: 'Arab tili', category: 'Expert' },
  { id: 'yuksalish-group', name: 'Yuksalish Group', title: 'Construction company', category: 'Business' },
  { id: 'sabum', name: 'Sabum', title: 'Construction company', category: 'Business' },
  { id: 'zaynab-kasimova', name: 'Zaynab Kasimova', title: 'Russian language expert', category: 'Expert' },
  { id: 'husan-mamasaidov', name: 'Husan Mamasaidov', title: 'Business expert', category: 'Expert' },
  { id: 'jaloliddin-baxtiyorovich', name: 'Jaloliddin Baxtiyorovich', title: 'Native language expert', category: 'Expert' },
  { id: 'shokhida-yusupova', name: 'Shokhida Yusupova', title: 'Academy founder', category: 'Academy' },
  { id: 'sirojiddin-rahmatullaev', name: 'Sirojiddin Rahmatullaev', title: 'IELTS instructor', category: 'Expert' },
  { id: 'linguabarno', name: 'Linguabarno', title: 'IELTS instructor', category: 'Academy' },
  { id: 'isroil-abdullayev', name: 'Isroil Abdullayev', title: 'AI expert', category: 'Expert' },
  { id: 'gigu', name: 'GIGU', title: 'Fashion academy', category: 'Academy' },
  { id: 'sadriddin-abdurahimov', name: 'Sadriddin Abdurahimov', title: 'Marketer', category: 'Expert' },
  { id: 'ozodbek-nugmanov', name: 'Ozodbek Nugmanov', title: 'Academy founder', category: 'Academy' },
  { id: 'safar-travel', name: 'Safar Travel', title: 'Travel agency', category: 'Travel' },
  { id: 'ibragim-mansurov', name: 'Ibragim Mansurov', title: 'IELTS instructor', category: 'Expert' },
  { id: 'uktamova-marhabo', name: 'Uktamova Marhabo', title: 'Community founder', category: 'Academy' },
  { id: 'muhriddin-xojayev', name: 'Muhriddin Xojayev', title: 'IELTS instructor', category: 'Expert' },
  { id: 'muxtasar-english', name: 'Muxtasar English', title: 'IELTS instructor', category: 'Academy' }
];

export const partnerCategories: Array<PartnerCategory | 'All'> = ['All', 'Expert', 'Academy', 'Business', 'Travel'];
