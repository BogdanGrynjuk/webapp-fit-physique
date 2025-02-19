import { IconType } from 'react-icons';
import { FaFacebookF, FaXTwitter, FaYoutube } from 'react-icons/fa6';

type OnlineProfile = {
  icon: IconType;
  href: string;
};

export interface Trainer {
  id: string;
  photo: string;
  fullName: string;
  role: string;
  description: string;
  onlineProfile: OnlineProfile[];
}

export const trainers: Trainer[] = [
  {
    id: '1',
    photo: '/assets/img/trainers/david.jpg',
    fullName: 'David Williams',
    role: 'Body Builder Coach',
    description:
      'Creates personalized training plans to build strength and muscle mass efficiently.',
    onlineProfile: [
      { icon: FaFacebookF, href: 'http://facebook.com' },
      { icon: FaXTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ],
  },
  {
    id: '2',
    photo: '/assets/img/trainers/rosy.jpg',
    fullName: 'Rosy Rivera',
    role: 'Cardio Coach',
    description:
      'Helps improve endurance, breathing efficiency, and overall cardiovascular health.',
    onlineProfile: [
      { icon: FaFacebookF, href: 'http://facebook.com' },
      { icon: FaXTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ],
  },
  {
    id: '3',
    photo: '/assets/img/trainers/matt.jpg',
    fullName: 'Matt Stonie',
    role: 'CrossFit Coach',
    description:
      'Designs high-intensity workouts to enhance agility, stamina, and functional strength.',
    onlineProfile: [
      { icon: FaFacebookF, href: 'http://facebook.com' },
      { icon: FaXTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ],
  },
  {
    id: '4',
    photo: '/assets/img/trainers/sofia.jpg',
    fullName: 'Sofia Lauren',
    role: 'Fitness Coach',
    description:
      'A mix of strength and cardio exercises to maintain energy, health, and an active lifestyle.',
    onlineProfile: [
      { icon: FaFacebookF, href: 'http://facebook.com' },
      { icon: FaXTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ],
  },
  {
    id: '5',
    photo: '/assets/img/trainers/joe.jpg',
    fullName: 'Joe Martin',
    role: 'Boxing Coach',
    description:
      'Teaches punching techniques, speed, endurance, and fight strategy to achieve the best results.',
    onlineProfile: [
      { icon: FaFacebookF, href: 'http://facebook.com' },
      { icon: FaXTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ],
  },
  {
    id: '6',
    photo: '/assets/img/trainers/lola.jpg',
    fullName: 'Lola Andres',
    role: 'Yoga Coach',
    description:
      'Helps achieve balance and flexibility through asanas, meditation, and breathing exercises.',
    onlineProfile: [
      { icon: FaFacebookF, href: 'http://facebook.com' },
      { icon: FaXTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ],
  },
  {
    id: '7',
    photo: '/assets/img/trainers/james.jpg',
    fullName: 'James Brown',
    role: 'Body Builder Coach',
    description:
      'Creates personalized training plans to build strength and muscle mass efficiently.',
    onlineProfile: [
      { icon: FaFacebookF, href: 'http://facebook.com' },
      { icon: FaXTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ],
  },
  {
    id: '8',
    photo: '/assets/img/trainers/olivia.jpg',
    fullName: 'Olivia Johnson',
    role: 'Cardio Coach',
    description:
      'Helps improve endurance, breathing efficiency, and overall cardiovascular health.',
    onlineProfile: [
      { icon: FaFacebookF, href: 'http://facebook.com' },
      { icon: FaXTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ],
  },
  {
    id: '9',
    photo: '/assets/img/trainers/pavel.jpg',
    fullName: 'Pavel Taylor',
    role: 'CrossFit Coach',
    description:
      'Designs high-intensity workouts to enhance agility, stamina, and functional strength.',
    onlineProfile: [
      { icon: FaFacebookF, href: 'http://facebook.com' },
      { icon: FaXTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ],
  },
  {
    id: '10',
    photo: '/assets/img/trainers/nina.jpg',
    fullName: 'Nina Anderson',
    role: 'Fitness Coach',
    description:
      'A mix of strength and cardio exercises to maintain energy, health, and an active lifestyle.',
    onlineProfile: [
      { icon: FaFacebookF, href: 'http://facebook.com' },
      { icon: FaXTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ],
  },
  {
    id: '11',
    photo: '/assets/img/trainers/emma.jpg',
    fullName: 'Emma Davis',
    role: 'Boxing Coach',
    description:
      'Teaches punching techniques, speed, endurance, and fight strategy to achieve the best results.',
    onlineProfile: [
      { icon: FaFacebookF, href: 'http://facebook.com' },
      { icon: FaXTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ],
  },
  {
    id: '12',
    photo: '/assets/img/trainers/anna.jpg',
    fullName: 'Anna Miller',
    role: 'Yoga Coach',
    description:
      'Helps achieve balance and flexibility through asanas, meditation, and breathing exercises.',
    onlineProfile: [
      { icon: FaFacebookF, href: 'http://facebook.com' },
      { icon: FaXTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ],
  },
];
