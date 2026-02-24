export type PartnerCategory = 'Expert' | 'Academy' | 'Business' | 'Travel';

export interface Partner {
  id: string;
  name: string;
  title: string;
  category: PartnerCategory;
  image?: string;
}

export const partners: Partner[] = [
  { id: 'anvarov-jasurbek', name: 'Anvarov Jasurbek', title: 'Telegram blog expert', category: 'Expert', image: 'anvarov-jasurbek.jpg' },
  { id: 'ustoz-zakkariya', name: 'Ustoz Zakkariya', title: 'Arab tili', category: 'Expert', image: 'ustoz-zakkariya.jpg' },
  { id: 'yuksalish-group', name: 'Yuksalish Group', title: 'Construction company', category: 'Business', image: 'yuksalish-group.jpg' },
  { id: 'sabum', name: 'Sabum', title: 'Construction company', category: 'Business', image: 'sabum.jpg' },
  { id: 'zaynab-kasimova', name: 'Zaynab Kasimova', title: 'Russian language expert', category: 'Expert', image: 'zaynab-kasimova.jpg' },
  { id: 'husan-mamasaidov', name: 'Husan Mamasaidov', title: 'Business expert', category: 'Expert', image: 'husan-mamasaidov.jpg' },
  { id: 'jaloliddin-baxtiyorovich', name: 'Jaloliddin Baxtiyorovich', title: 'Native language expert', category: 'Expert', image: 'jaloliddin-baxtiyorovich.jpg' },
  { id: 'shokhida-yusupova', name: 'Shokhida Yusupova', title: 'Academy founder', category: 'Academy', image: 'shokhida-yusupova.jpg' },
  { id: 'sirojiddin-rahmatullaev', name: 'Sirojiddin Rahmatullaev', title: 'IELTS instructor', category: 'Expert', image: 'sirojiddin-rahmatullaev.jpg' },
  { id: 'linguabarno', name: 'Linguabarno', title: 'IELTS instructor', category: 'Academy', image: 'linguabarno.jpg' },
  { id: 'isroil-abdullayev', name: 'Isroil Abdullayev', title: 'AI expert', category: 'Expert', image: 'isroil-abdullayev.jpg' },
  { id: 'gigu', name: 'GIGU', title: 'Fashion academy', category: 'Academy', image: 'gigu.jpg' },
  { id: 'sadriddin-abdurahimov', name: 'Sadriddin Abdurahimov', title: 'Marketolog', category: 'Expert', image: 'sadriddin-abdurahimov.jpg' },
  { id: 'ozodbek-nugmanov', name: 'Ozodbek Nugmanov', title: 'Academy founder', category: 'Academy', image: 'ozodbek-nugmanov.jpg' },
  { id: 'safar-travel', name: 'Safar Travel', title: 'Travel agency', category: 'Travel', image: 'safar-travel.jpg' },
  { id: 'ibragim-mansurov', name: 'Ibragim Mansurov', title: 'IELTS instructor', category: 'Expert', image: 'ibragim-mansurov.jpg' },
  { id: 'uktamova-marhabo', name: 'Uktamova Marhabo', title: 'Community founder', category: 'Academy', image: 'uktamova-marhabo.jpg' },
  { id: 'muhriddin-xojayev', name: 'Muhriddin Xojayev', title: 'IELTS instructor', category: 'Expert', image: 'muhriddin-xojayev.jpg' },
  { id: 'muxtasar-english', name: 'Muxtasar English', title: 'IELTS instructor', category: 'Academy', image: 'muxtasar-english.jpg' }
];

export const partnerCategories: Array<PartnerCategory | 'All'> = ['All', 'Expert', 'Academy', 'Business', 'Travel'];
