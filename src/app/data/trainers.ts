import { IconType } from 'react-icons';
import { FaFacebookF, FaXTwitter, FaYoutube } from 'react-icons/fa6';

type OnlineProfile = {
  icon: IconType;
  href: string;
};

export type Trainer = {
  id: string;
  photo: string;
  fullName: string;
  role: string;
  description: string;
  onlineProfile: OnlineProfile[];
  age: number;
  specialty: string;
  experience: string;
  pricePerSession: number;
  certificates: string[];
  rating: number;
};

export const trainers: Trainer[] = [
  {
    id: '1',
    photo: '/assets/img/trainers/david.jpg',
    fullName: 'David Williams',
    role: 'Body Builder Coach',
    age: 35,
    experience: '10 years',
    pricePerSession: 30,
    certificates: [
      'Certified Strength and Conditioning Specialist (CSCS)',
      'NASM Certified Personal Trainer (CPT)',
      'Precision Nutrition Level 1 (PN1)',
    ],
    specialty: 'Strength Training',
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
    pricePerSession: 25,
    certificates: [
      'ACE Certified Personal Trainer',
      'NASM Performance Enhancement Specialist (PES)',
    ],
    specialty: 'Cardio Training',
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
    pricePerSession: 30,
    certificates: [
      'CrossFit Level 2 Trainer',
      'USA Weightlifting Level 1 Coach',
    ],
    specialty: 'High-Intensity Interval Training',
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
    pricePerSession: 20,
    certificates: [
      'Certified Personal Trainer (CPT)',
      'Certified Group Fitness Instructor',
      'Yoga Instructor Certification',
    ],
    specialty: 'Active Lifestyle Coaching',
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
    pricePerSession: 35,
    certificates: [
      'Certified Boxing Coach (USA Boxing)',
      'National Coaching Certification Program (NCCP)',
      'Sports Nutrition Certification',
    ],
    specialty: 'Striking & Footwork Training',
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
    pricePerSession: 20,
    certificates: [
      'Certified Yoga Instructor (Yoga Alliance)',
      'Certified Meditation Teacher',
      'Breathwork Practitioner Certification',
    ],
    specialty: 'Mind-Body Training',
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
    pricePerSession: 35,
    certificates: [
      'Certified Strength and Conditioning Specialist (CSCS)',
      'NASM Certified Personal Trainer (CPT)',
      'Precision Nutrition Level 2 (PN2)',
    ],
    specialty: 'Sports Nutrition & Weight Management',
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
    pricePerSession: 35,
    certificates: [
      'Certified Personal Trainer (CPT)',
      'Certified Cardio Fitness Specialist',
      'Certified Running Coach (RRCA)',
    ],
    specialty: 'Strength & Power Development',
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
    pricePerSession: 30,
    certificates: [
      'Certified CrossFit Level 2 Trainer',
      'Certified Strength and Conditioning Specialist (CSCS)',
      'Precision Nutrition Level 1 (PN1)',
    ],
    specialty: 'Metabolic Conditioning',
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
    pricePerSession: 20,
    certificates: [
      'Certified Personal Trainer (CPT)',
      'Group Fitness Instructor Certification',
      'NASM Certified Performance Enhancement Specialist (PES)',
    ],
    specialty: 'Full-Body Conditioning',
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
    pricePerSession: 25,
    certificates: [
      'Certified Boxing Trainer',
      'Certified Personal Trainer (CPT)',
      'Strength and Conditioning Specialist (CSCS)',
    ],
    specialty: 'Combat Conditioning',
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
    pricePerSession: 20,
    certificates: [
      'Certified Yoga Instructor (RYT-200)',
      'Certified Meditation and Breathing Coach',
      'Yoga Therapy Certification',
    ],
    specialty: 'Flexibility & Balance',
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
