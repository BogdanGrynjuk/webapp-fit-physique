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
  age?: number;
  experience?: string;
  certificates?: string[];
  achievements?: string[];
  rating?: number;
  description: string;
  onlineProfile: OnlineProfile[];
}

export const trainers: Trainer[] = [
  {
    id: '1',
    photo: '/assets/img/trainers/david.jpg',
    fullName: 'David Williams',
    role: 'Body Builder Coach',
    age: 35,
    experience: '10 years',
    certificates: [
      'Certified Strength and Conditioning Specialist (CSCS)',
      'NASM Certified Personal Trainer (CPT)',
      'Precision Nutrition Level 1 (PN1)',
    ],
    achievements: [
      'IFBB Pro Bodybuilder',
      'Winner of NPC National Bodybuilding Championship (2018)',
      'Arnold Classic Finalist (2020)',
      'Certified Judge for NPC Bodybuilding Competitions',
    ],
    rating: 4.8,
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
    age: 30,
    experience: '8 years',
    certificates: [
      'ACE Certified Personal Trainer',
      'NASM Performance Enhancement Specialist (PES)',
    ],
    achievements: [
      'Boston Marathon Finisher (2019)',
      'Certified Running Coach by RRCA',
    ],
    rating: 4.7,
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
    age: 32,
    experience: '9 years',
    certificates: [
      'CrossFit Level 2 Trainer',
      'USA Weightlifting Level 1 Coach',
    ],
    achievements: [
      'CrossFit Games Qualifier (2021)',
      'Top 10 in CrossFit Open Regional (2020)',
    ],
    rating: 4.7,
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
    age: 29,
    experience: '6 years',
    certificates: [
      'Certified Personal Trainer (CPT)',
      'Certified Group Fitness Instructor',
      'Yoga Instructor Certification',
    ],
    achievements: [
      'Winner of National Fitness Competition (2021)',
      'Coached multiple clients to achieve personal fitness goals',
      'Specialized in combining strength, endurance, and flexibility',
    ],
    rating: 4.7,
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
    age: 38,
    experience: '15 years',
    certificates: [
      'Certified Boxing Coach (USA Boxing)',
      'National Coaching Certification Program (NCCP)',
      'Sports Nutrition Certification',
    ],
    achievements: [
      'Former Professional Boxer',
      'Coached multiple regional boxing champions',
      'Specialized in training athletes for competitive boxing',
    ],
    rating: 4.9,
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
    age: 28,
    experience: '4 years',
    certificates: [
      'Certified Yoga Instructor (Yoga Alliance)',
      'Certified Meditation Teacher',
      'Breathwork Practitioner Certification',
    ],
    achievements: [
      'Coached hundreds of students to improve flexibility and mindfulness',
      'Founder of “Balance and Flow” Yoga Studio',
      'Specialized in Hatha, Vinyasa, and Restorative Yoga',
    ],
    rating: 4.6,
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
    age: 40,
    experience: '12 years',
    certificates: [
      'Certified Strength and Conditioning Specialist (CSCS)',
      'NASM Certified Personal Trainer (CPT)',
      'Precision Nutrition Level 2 (PN2)',
    ],
    achievements: [
      'IFBB Pro Bodybuilder',
      'Winner of National Bodybuilding Championship (2019)',
      'Arnold Classic Finalist (2021)',
    ],
    rating: 4.8,
    description:
      'Focuses on building muscle and strength through tailored workout plans and techniques.',
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
    age: 32,
    experience: '9 years',
    certificates: [
      'Certified Personal Trainer (CPT)',
      'Certified Cardio Fitness Specialist',
      'Certified Running Coach (RRCA)',
    ],
    achievements: [
      'Completed New York City Marathon (2020)',
      'Coached clients to achieve personal bests in endurance events',
      'Specialized in heart rate training and interval workouts',
    ],
    rating: 4.8,
    description:
      'Guides clients to boost endurance, improve cardiovascular health, and optimize breathing techniques.',
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
    age: 34,
    experience: '13 years',
    certificates: [
      'Certified CrossFit Level 2 Trainer',
      'Certified Strength and Conditioning Specialist (CSCS)',
      'Precision Nutrition Level 1 (PN1)',
    ],
    achievements: [
      'CrossFit Games Regional Competitor (2018)',
      'Coached athletes to the CrossFit Games (2019)',
      'Specialized in developing strength and power for competitive CrossFit athletes',
    ],
    rating: 4.9,
    description:
      'Specializes in creating CrossFit routines that enhance strength, endurance, and overall fitness levels.',
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
    age: 26,
    experience: '6 years',
    certificates: [
      'Certified Personal Trainer (CPT)',
      'Group Fitness Instructor Certification',
      'NASM Certified Performance Enhancement Specialist (PES)',
    ],
    achievements: [
      'Specialized in functional fitness and high-intensity interval training (HIIT)',
      'Trained clients to achieve significant weight loss and strength gains',
      'Developed group fitness programs for various fitness levels',
    ],
    rating: 4.7,
    description:
      'Blends strength training and cardio to improve overall fitness, health, and stamina.',
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
    age: 30,
    experience: '8 years',
    certificates: [
      'Certified Boxing Trainer',
      'Certified Personal Trainer (CPT)',
      'Strength and Conditioning Specialist (CSCS)',
    ],
    achievements: [
      'Former professional boxer with 10+ years of experience',
      'National Champion (2016)',
      'Specialized in conditioning athletes for competitive boxing',
    ],
    rating: 4.9,
    description:
      'Teaches effective boxing techniques, enhances speed, and develops fight strategy for peak performance.',
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
    age: 29,
    experience: '7 years',
    certificates: [
      'Certified Yoga Instructor (RYT-200)',
      'Certified Meditation and Breathing Coach',
      'Yoga Therapy Certification',
    ],
    achievements: [
      'Coached over 500 clients in yoga and mindfulness practices',
      'Specialized in stress relief and improving mental clarity',
      'Host of a popular mindfulness and yoga YouTube channel',
    ],
    rating: 4.8,
    description:
      'Helps clients improve flexibility, strength, and mindfulness through yoga and breathing techniques.',
    onlineProfile: [
      { icon: FaFacebookF, href: 'http://facebook.com' },
      { icon: FaXTwitter, href: 'http://twitter.com' },
      { icon: FaYoutube, href: 'http://youtube.com' },
    ],
  },
];
