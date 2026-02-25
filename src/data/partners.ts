export type PartnerCategory = 'Expert' | 'Academy' | 'Business' | 'Travel';

export interface Partner {
  id: string;
  name: string;
  title: string;
  category: PartnerCategory;
  image?: string;
  telegram?: string;
}

export const partners: Partner[] = [
  { id: 'puremilky', name: 'Puremilky', title: 'Dairy products company', category: 'Business', image: 'puremilky.jpg', telegram: 'https://t.me/PureMilky_Official' },
  { id: 'anvarov-jasurbek', name: 'Anvarov Jasurbek', title: 'Telegram blog expert', category: 'Expert', image: 'anvarov-jasurbek.jpg', telegram: 'https://t.me/anvarovsblog' },
  { id: 'ustoz-zakkariya', name: 'Ustoz Zakkariya', title: 'Arab tili', category: 'Expert', image: 'ustoz-zakkariya.jpg', telegram: 'https://t.me/ustoz_zakariyya' },
  { id: 'yuksalish-group', name: 'Yuksalish Group', title: 'Construction company', category: 'Business', image: 'yuksalish-group.jpg', telegram: 'https://t.me/yuksalish_group_samarqand' },
  { id: 'sabum', name: 'Sabum', title: 'Construction company', category: 'Business', image: 'sabum.jpg', telegram: 'https://t.me/Sabum_Quqon' },
  { id: 'zaynab-kasimova', name: 'Zaynab Kasimova', title: 'Russian language expert', category: 'Expert', image: 'zaynab-kasimova.jpg', telegram: 'https://t.me/ZaynabKasimovaa' },
  { id: 'husan-mamasaidov', name: 'Husan Mamasaidov', title: 'Business expert', category: 'Expert', image: 'husan-mamasaidov.jpg', telegram: 'https://t.me/husanmamasaidov_vaqtvapulilmi' },
  { id: 'jaloliddin-baxtiyorovich', name: 'Jaloliddin Baxtiyorovich', title: 'Native language expert', category: 'Expert', image: 'jaloliddin-baxtiyorovich.jpg', telegram: 'https://t.me/jaloliddin_baxtiy0rovich' },
  { id: 'shokhida-yusupova', name: 'Shokhida Yusupova', title: 'Academy founder', category: 'Academy', image: 'shokhida-yusupova.jpg', telegram: 'https://t.me/+9unWi1sGYfZkNGMy' },
  { id: 'sirojiddin-rahmatullaev', name: 'Sirojiddin Rahmatullaev', title: 'IELTS instructor', category: 'Expert', image: 'sirojiddin-rahmatullaev.jpg', telegram: 'https://t.me/RS_IELTS' },
  { id: 'linguabarno', name: 'Linguabarno', title: 'IELTS instructor', category: 'Academy', image: 'linguabarno.jpg', telegram: '' }, // TODO: replace with actual Linguabarno Telegram URL (was truncated in input)
  { id: 'isroil-abdullayev', name: 'Isroil Abdullayev', title: 'AI expert', category: 'Expert', image: 'isroil-abdullayev.jpg', telegram: 'https://t.me/isroilabdullayev' },
  { id: 'gigu', name: 'GIGU', title: 'Fashion academy', category: 'Academy', image: 'gigu.jpg', telegram: 'https://t.me/gigu_moda_akademiyasi' },
  { id: 'sadriddin-abdurahimov', name: 'Sadriddin Abdurahimov', title: 'Marketolog', category: 'Expert', image: 'sadriddin-abdurahimov.jpg', telegram: 'https://t.me/janob_marketolog' },
  { id: 'ozodbek-nugmanov', name: 'Ozodbek Nugmanov', title: 'Academy founder', category: 'Academy', image: 'ozodbek-nugmanov.jpg', telegram: 'https://t.me/+YTiLhNnbbv4wZWRi' },
  { id: 'safar-travel', name: 'Safar Travel', title: 'Travel agency', category: 'Travel', image: 'safar-travel.jpg', telegram: 'https://t.me/safartraveluz' },
  { id: 'ibragim-mansurov', name: 'Ibragim Mansurov', title: 'IELTS instructor', category: 'Expert', image: 'ibragim-mansurov.jpg', telegram: 'https://t.me/ibragimmansurov_blog' },
  { id: 'uktamova-marhabo', name: 'Uktamova Marhabo', title: 'Community founder', category: 'Academy', image: 'uktamova-marhabo.jpg', telegram: 'https://t.me/uktamovamarhabo' },
  { id: 'muhriddin-xojayev', name: 'Muhriddin Xojayev', title: 'IELTS instructor', category: 'Expert', image: 'muhriddin-xojayev.jpg', telegram: 'https://t.me/xojaevs' },
  { id: 'muxtasar-english', name: 'Muxtasar English', title: 'IELTS instructor', category: 'Academy', image: 'muxtasar-english.jpg', telegram: 'https://t.me/muxtasar_english' },
  { id: 'alisher-abduvohobov', name: 'Alisher Abduvohobov', title: 'IELTS instructor', category: 'Expert', image: 'alisher-abduvohobov.jpg', telegram: 'https://t.me/+D6FbPPCZujo1OTcy' },
];

export const partnerCategories: Array<PartnerCategory | 'All'> = ['All', 'Expert', 'Academy', 'Business', 'Travel'];
