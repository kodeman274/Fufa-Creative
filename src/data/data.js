// import images
import LogoImg from '../../src/assets/img/header/logo-team.svg';
import HeroImg from '../../src/assets/img/hero/hero2.svg';
import OverviewProductImg from '../../src/assets/img/overview/product.svg';
import Iceberg from '../../src/assets/img/overview/brands/iceberg.svg';
import Invert from '../../src/assets/img/overview/brands/invert.svg';
import Penta from '../../src/assets/img/overview/brands/penta.svg';
import Proline from '../../src/assets/img/overview/brands/proline.svg';
import Pronature from '../../src/assets/img/overview/brands/pronature.svg';
import Feature1Img from '../../src/assets/img/features/feature1-img.svg';
import Feature2Img from '../../src/assets/img/features/fufa.svg';
import Feature3Img from '../../src/assets/img/features/feature2-img.svg';
import CardIconImg1 from '../../src/assets/img/product/cards/person1.svg';
import CardIconImg2 from '../../src/assets/img/product/cards/person2.svg';
import CardIconImg3 from '../../src/assets/img/product/cards/person3.svg';
import PricingIcon1 from '../../src/assets/img/pricing/icon1.svg';
import PricingIcon2 from '../../src/assets/img/pricing/icon2.svg';
import PricingIcon3 from '../../src/assets/img/pricing/icon3.svg';
import AvatarImg1 from '../../src/assets/img/testimonial/avatar1.png';
import AvatarImg2 from '../../src/assets/img/testimonial/avatar2.png';
import AvatarImg3 from '../../src/assets/img/testimonial/avatar3.png';
import AvatarImg4 from '../../src/assets/img/testimonial/avatar4.png';
import AvatarImg5 from '../../src/assets/img/testimonial/avatar5.png';
import CtaImg1 from '../../src/assets/img/cta/farel-cardrev.png';
import CtaImg2 from '../../src/assets/img/cta/hilman-cardrev.png';
import TwitterIcon from '../../src/assets/img/copyright/twitter.svg';
import LinkedinIcon from '../../src/assets/img/copyright/linkedin.svg';

// import icons
import { HiCheck, HiOutlineX } from 'react-icons/hi';

export const header = {
  logo: LogoImg,
  btnText: 'Contact Us',
};

export const nav = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '#about' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonial', href: '#testimonials' },
];

export const hero = {
  title: 'Elevate Your Digital Presence with Our Web and Mobile Services',
  subtitle: 'Helps Improve Your Business Branding',
  btnText: 'Contact Us',
  image: HeroImg,
};

export const overview = {
  productImg: OverviewProductImg,
  brands: [
    {
      image: Iceberg,
      delay: 300,
    },
    {
      image: Invert,
      delay: 400,
    },
    {
      image: Penta,
      delay: 500,
    },
    {
      image: Proline,
      delay: 600,
    },
    {
      image: Pronature,
      delay: 700,
    },
  ],
};

export const features = [
  {
    pretitle: '-Fufa Creative-',
    title:
      'Bangun Branding Bisnis Anda di Era Digital dengan Kehadiran Website',
    subtitle:
      'Di era digital yang berkembang pesat ini, memiliki sebuah website telah menjadi keharusan dalam membangun branding untuk bisnis Anda. Website tidak hanya sebagai wajah online perusahaan, tetapi juga sebagai alat yang efektif untuk menjangkau audiens lebih luas, menyampaikan nilai-nilai bisnis Anda, dan menciptakan kepercayaan di tengah komunitas digital yang semakin terhubung.',
    image: Feature1Img,
  },
  {
    pretitle: '-Fufa Creative-',
    title: 'Introduction FUFA CREATIVE',
    subtitle:
      'Selamat datang di Fufa Creative! Kami adalah tim penuh kreativitas yang siap menghidupkan ide-ide Anda dalam bentuk website unik sesuai keinginan Anda. Dari frontend hingga backend, serta desain UI/UX yang menarik, kami menyediakan layanan lengkap untuk memastikan proyek Anda sukses. Dengan fokus pada desain yang menarik perhatian dan fungsionalitas yang sempurna, kami siap menjadikan visi Anda menjadi kenyataan digital. Hubungi kami sekarang untuk memulai perjalanan kreatif bersama!.',
    image: Feature2Img,
  },
  {
    pretitle: '-Fufa Creative-',
    title:
      'Menyempurnakan Kehadiran Bisnis di Era Digital dengan Website yang Kuat',
    subtitle:
      'Dengan memiliki website, bisnis Anda akan memiliki kehadiran yang kuat di dunia digital, membuka peluang baru, serta meningkatkan visibilitas dan kredibilitas yang sangat diperlukan untuk bersaing dalam pasar global yang kompetitif saat ini.',
    image: Feature3Img,
  },
];

export const product = {
  cards: [
    {
      icon: CardIconImg1,
      title: 'Personal Website',
      subtitle:
        'Buatlah jejak digital yang unik dengan Personal Website khusus Anda.',
      delay: 200,
    },
    {
      icon: CardIconImg2,
      title: 'Online Shop',
      subtitle:
        'Tingkatkan kehadiran bisnis Anda dengan Online Shop yang modern dan mudah digunakan.',
      delay: 400,
    },
    {
      icon: CardIconImg3,
      title: 'Company Profile',
      subtitle:
        'Perkenalkan perusahaan Anda melalui Company Profile elegan & informatif.',
      delay: 600,
    },
  ],
};

export const pricing = {
  title: 'Pricing Plans',
  cards: [
    {
      icon: PricingIcon1,
      title: 'Personal',
      services: [
        { name: '5x revisi', textDecoration: null, Icon: HiCheck },
        { name: 'Pemeliharaan Mingguan', textDecoration: null, Icon: HiCheck },
        {
          name: 'Custom Domain Medium Security',
          textDecoration: null,
          Icon: HiCheck,
        },
        { name: '5 GB Upload Data', textDecoration: null, Icon: HiCheck },

        {
          name: 'Database Statictics',
          textDecoration: 'line-through',
          Icon: HiOutlineX,
        },
        {
          name: 'Export Data',
          textDecoration: 'line-through',
          Icon: HiOutlineX,
        },
      ],
      price: 'Rp.1,500,000',
      delay: 300,
    },
    {
      icon: PricingIcon2,
      title: 'Grow',
      services: [
        { name: '10x Revisi', textDecoration: null, Icon: HiCheck },
        { name: 'Pemeliharaan Mingguan', textDecoration: null, Icon: HiCheck },
        {
          name: 'Custom Domain High Security',
          textDecoration: null,
          Icon: HiCheck,
        },
        { name: '20 GB Upload Data', textDecoration: null, Icon: HiCheck },

        { name: 'Database Statictics', textDecoration: null, Icon: HiCheck },
        {
          name: 'Export data',
          textDecoration: 'line-through',
          Icon: HiOutlineX,
        },
      ],
      price: 'Rp.2,500,000',
      delay: 600,
    },
    {
      icon: PricingIcon3,
      title: 'Profesional',
      services: [
        { name: '15x Revisi', textDecoration: null, Icon: HiCheck },
        {
          name: 'Pemeliharaan Mingguan',
          textDecoration: null,
          Icon: HiCheck,
        },
        {
          name: 'Custom Domain Priority Security',
          textDecoration: null,
          Icon: HiCheck,
        },
        { name: '20 GB Upload Data', textDecoration: null, Icon: HiCheck },

        { name: 'Database Statictics', textDecoration: null, Icon: HiCheck },
        { name: 'Export data', textDecoration: null, Icon: HiCheck },
      ],
      price: 'Rp.3,000,000',
      delay: 900,
    },
  ],
};

export const testimonials = {
  title: 'Testimoni | We have Customer of best wishers',
  clients: [
    {
      message:
        'Sejak menggunakan layanan ini, bisnis kami mengalami peningkatan yang signifikan. Pengoptimalan SEO mereka membantu situs web kami.',
      image: AvatarImg4,
      name: 'Audrey Flora',
      position: 'CMO',
      borderColor: '#3EC1F3',
    },
    {
      message:
        'Saya sangat terkesan dengan layanan yang diberikan oleh tim ini. Mereka sangat responsif terhadap pertanyaan saya dan memberikan solusi yang efektif. ',
      image: AvatarImg3,
      name: 'Steffany Wilona',
      position: 'CIO',
      borderColor: '#4756DF',
    },

    {
      message:
        'Saya baru-baru ini menggunakan produk ini dan saya benar-benar terkesan. Kualitasnya luar biasa dan fiturnya sangat berguna.',
      image: AvatarImg2,
      name: 'Tonny Siregar',
      position: 'CTO',
      borderColor: '#FFBE21',
    },
    {
      message:
        'Saya sangat terkesan dengan layanan yang diberikan oleh tim ini. Mereka sangat responsif terhadap pertanyaan saya dan memberikan solusi yang efektif. ',
      image: AvatarImg3,
      name: 'Steffany Wilona',
      position: 'CIO',
      borderColor: '#4756DF',
    },

    {
      message:
        'Saya jatuh cinta pada desain situs web yang diberikan oleh tim ini. Mereka benar-benar memahami visi kami.',
      image: AvatarImg5,
      name: 'Putri Clara',
      position: 'CEO',
      borderColor: '#BB7259',
    },
    {
      message:
        'Saya ingin mengucapkan terima kasih atas bantuan luar biasa dari tim layanan pelanggan. ',
      image: AvatarImg1,
      name: 'Kasmir Hidayat',
      position: 'CEO',
      borderColor: '#FF7235',
    },
  ],
};

export const cta = {
  title: 'Mulailah bangun Personal Branding Bisnis Anda',
  subtitle: 'Pesan web sesuai keinginan anda sekarang!',
  btnText: 'Order Now',
  img1: CtaImg1,
  img2: CtaImg2,
};

export const footer = {
  logo: LogoImg,
  links: [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonial', href: '#testimonials' },
  ],
  legal: [
    { name: 'Terms of use', href: '/' },
    { name: 'Terms of conditions', href: '/' },
    { name: 'Privacy policy', href: '/' },
    { name: 'Cookie policy', href: '/' },
  ],
  newsletter: {
    title: 'Email',
    subtitle: 'Kontak Kami melalui Email',
  },
  form: {
    placeholder: 'Enter your email',
    btnText: 'Submit',
    smallText: 'We don’t sell your email and spam',
  },
};

export const copyright = {
  link1: {
    name: 'By Founder Farel Octariandy',
    href: 'https://www.instagram.com/farelloctax/',
  },
  link2: {
    name: 'Co-Founder Hilman Hidayat',
    href: 'https://www.instagram.com/hilmanhidayt_/',
  },
  copyText: 'Copyright © 2023 Fufa-Creative ',
  social: [
    { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/fufa-creative18' },
    {
      icon: LinkedinIcon,
      href: 'https://www.linkedin.com/in/hilmanhidayat-kodeman274/',
    },
    { icon: TwitterIcon, href: 'https://twitter.com/Fufa_Creative' },
  ],
};
