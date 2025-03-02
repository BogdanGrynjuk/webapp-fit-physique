export type TrainingFormat = {
  type: string;
  description: string;
};

export type ClassDetails = {
  title: string;
  img: string;
  text: string;
  points?: string[];
  formats?: TrainingFormat[];
};

export type ClassItem = {
  name: string;
  img: string;
  description: string;
  slug: string;
  details: {
    about: ClassDetails;
    benefits: ClassDetails;
    trainingFormats: ClassDetails;
    equipment: ClassDetails;
  };
};

export const classList: ClassItem[] = [
  {
    name: 'bodybuilding',
    img: '/assets/img/classes/bodybuilding.jpg',
    description:
      'Develop strength, endurance, and muscle growth with intense weightlifting and resistance training sessions.',
    slug: 'bodybuilding-class',
    details: {
      about: {
        title: 'bodybuilding class',
        img: '/assets/img/classes/bodybuilding-about.jpg',
        text: 'Bodybuilding is a strength-focused training method aimed at muscle hypertrophy and sculpting an athletic physique. At FitPhysique, our bodybuilding program is designed for both beginners and experienced athletes looking to enhance their strength and endurance through structured weightlifting routines.',
      },
      benefits: {
        title: 'Benefits of Bodybuilding Training at FitPhysique',
        img: '/assets/img/details/bodybuilding-benefits.jpg',
        text: 'Bodybuilding combines resistance training with proper nutrition to build lean muscle mass, boost metabolism, and improve overall strength. Our classes cater to all fitness levels, whether you want to gain muscle, lose fat, or improve athletic performance.',
        points: [
          'Increased muscle strength and definition through progressive resistance training.',
          'Improved bone density and joint health, reducing the risk of injuries and osteoporosis.',
          'Boosted metabolism, helping to burn fat more efficiently and maintain a lean physique.',
          'Enhanced discipline, mental focus, and confidence through structured workout routines.',
        ],
      },
      trainingFormats: {
        title: 'Training Formats',
        img: '/assets/img/details/bodybuilding-formats.jpg',
        text: 'Bodybuilding training at FitPhysique is available in both group and personal training formats, allowing you to choose the best approach for your fitness journey.',
        formats: [
          {
            type: 'Group Training',
            description:
              'Perfect for those who enjoy training in a team, gaining motivation from peers, and participating in high-energy weightlifting sessions.',
          },
          {
            type: 'Personal Training',
            description:
              'Ideal for individuals who want a customized training program, one-on-one coaching, and personalized feedback to achieve their bodybuilding goals.',
          },
        ],
      },
      equipment: {
        title: 'Infrastructure and Equipment',
        img: '/assets/img/details/bodybuilding-equipment.jpg',
        text: 'FitPhysique offers a fully equipped gym with top-tier weightlifting machines, free weights, squat racks, benches, and resistance bands. We provide a motivating environment for effective muscle-building workouts, with professional trainers available for guidance and support.',
      },
    },
  },

  {
    name: 'cardio',
    img: '/assets/img/classes/cardio.jpg',
    description:
      'Boost stamina, burn calories, and improve heart health with dynamic and high-energy cardio workouts.',
    slug: 'cardio-class',
    details: {
      about: {
        title: 'cardio  class',
        img: '/assets/img/classes/cardio-about.jpg',
        text: 'Cardio workouts focus on improving heart health, endurance, and overall fitness. These sessions involve high-intensity movements that keep your heart rate elevated, making them perfect for weight loss and cardiovascular conditioning. At FitPhysique, our cardio classes are designed for all fitness levels, helping you stay active, burn calories, and feel energized throughout the day.',
      },
      benefits: {
        title: 'Benefits of Cardio Training at FitPhysique',
        img: '/assets/img/details/cardio-benefits.jpg',
        text: 'Cardio workouts incorporate exercises like running, jumping, and high-intensity drills to elevate the heart rate and improve overall fitness. These sessions provide numerous health benefits and can be tailored to individual fitness levels.',
        points: [
          'Enhances cardiovascular health by improving heart and lung function.',
          'Burns calories efficiently, aiding in weight loss and fat reduction.',
          'Increases strength and endurance, helping you easily handle daily tasks.',
          'Reduces stress levels and boosts mood through the release of endorphins.',
          'Strengthens muscles and improves overall body coordination and agility.',
        ],
      },
      trainingFormats: {
        title: 'Training Formats',
        img: '/assets/img/details/cardio-formats.jpg',
        text: 'Our cardio classes can be taken in a group setting or through personal training sessions, depending on your fitness goals and preferences.',
        formats: [
          {
            type: 'Group Training',
            description:
              'Ideal for those who thrive in a team environment, enjoy the motivation of group energy, and want to push themselves alongside others.',
          },
          {
            type: 'Personal Training',
            description:
              'Great for individuals seeking personalized attention, custom workout plans, and a program tailored to their fitness goals.',
          },
        ],
      },
      equipment: {
        title: 'Infrastructure and Equipment',
        img: '/assets/img/details/cardio-equipment.jpg',
        text: 'The FitPhysique sports complex offers a fully equipped cardio training area with treadmills, stationary bikes, jump ropes, and resistance bands. Our spacious workout zone allows for high-intensity interval training, circuit workouts, and endurance-focused exercises. Lockers and changing rooms are available for your convenience.',
      },
    },
  },

  {
    name: 'fitness',
    img: '/assets/img/classes/fitness.jpg',
    description:
      'Enhance flexibility, build core strength, and stay active with engaging full-body fitness routines.',
    slug: 'class-fitness',
    details: {
      about: {
        title: 'fitness  class',
        img: '/assets/img/classes/fitness-about.jpg',
        text: 'Fitness training is a universal way to improve overall physical health, flexibility, and endurance. At FitPhysique, we offer structured workouts for all levels, helping individuals achieve their fitness goals, whether they want to lose weight, build muscle, or simply maintain an active lifestyle.',
      },
      benefits: {
        title: 'Benefits of Fitness Training at FitPhysique',
        img: '/assets/img/details/fitness-benefits.jpg',
        text: 'Our fitness classes provide a well-rounded approach to health and wellness. Whether you are a beginner or an experienced athlete, our workouts are designed to improve strength, flexibility, and endurance.',
        points: [
          'Improved cardiovascular health through dynamic exercises like jumping, running, and circuit training.',
          'Increased flexibility and mobility with stretching routines and functional movements.',
          'Full-body muscle engagement to build strength and endurance efficiently.',
          'Stress relief and mental well-being through engaging and energetic workouts.',
        ],
      },
      trainingFormats: {
        title: 'Training Formats',
        img: '/assets/img/details/fitness-formats.jpg',
        text: 'You can choose between group and personal fitness training to match your preferences and goals.',
        formats: [
          {
            type: 'Group Training',
            description:
              'Great for those who thrive in a motivating community, enjoy the energy of a group workout, and like structured routines.',
          },
          {
            type: 'Personal Training',
            description:
              'Ideal for those who seek personalized attention, customized workout plans, and one-on-one coaching from experienced trainers.',
          },
        ],
      },
      equipment: {
        title: 'Infrastructure and Equipment',
        img: '/assets/img/details/fitness-equipment.jpg',
        text: 'The FitPhysique gym is equipped with state-of-the-art facilities, including resistance machines, free weights, yoga mats, and functional training areas. Members have access to treadmills, exercise bikes, and dedicated zones for stretching and recovery.',
      },
    },
  },

  {
    name: 'crossFit',
    img: '/assets/img/classes/crossFit.jpg',
    description:
      'Challenge your endurance, agility, and power through high-intensity, functional, and explosive workouts.',
    slug: 'crossFit-class',
    details: {
      about: {
        title: 'crossFit class',
        img: '/assets/img/classes/crossFit-about.jpg',
        text: 'CrossFit is a high-intensity training system that combines strength exercises, endurance training, and functional movements. At FitPhysique, our CrossFit classes are designed for all fitness levels, offering scalable workouts that push your limits while improving overall athleticism.',
      },
      benefits: {
        title: 'Benefits of CrossFit Training at FitPhysique',
        img: '/assets/img/details/crossFit-benefits.jpg',
        text: 'CrossFit workouts are based on constantly varied, functional movements performed at high intensity. This makes them highly effective for building strength, endurance, and agility.',
        points: [
          'Enhanced cardiovascular and muscular endurance through a mix of aerobic and anaerobic exercises.',
          'Improved strength and power by incorporating Olympic weightlifting, kettlebells, and bodyweight movements.',
          'Increased agility, balance, and coordination with dynamic exercises like box jumps, burpees, and rope climbs.',
          'A strong and supportive community that encourages discipline, perseverance, and continuous improvement.',
        ],
      },
      trainingFormats: {
        title: 'Training Formats',
        img: '/assets/img/details/crossFit-formats.jpg',
        text: 'CrossFit classes at FitPhysique offer flexible training formats to match your goals and preferences.',
        formats: [
          {
            type: 'Group Training',
            description:
              'Best for those who enjoy training in a team, thrive in a competitive atmosphere, and find motivation in the group’s energy.',
          },
          {
            type: 'Personal Training',
            description:
              'Perfect for individuals who want a customized approach, targeted coaching, and a program tailored to their fitness level.',
          },
        ],
      },
      equipment: {
        title: 'Infrastructure and Equipment',
        img: '/assets/img/details/crossFit-equipment.jpg',
        text: 'Our CrossFit box at FitPhysique is fully equipped with barbells, kettlebells, battle ropes, rowing machines, and gymnastic rings. The facility includes open workout areas, weightlifting platforms, and conditioning zones to support a full range of functional fitness training.',
      },
    },
  },

  {
    name: 'boxing',
    img: '/assets/img/classes/boxing.jpg',
    description:
      'Develop endurance, punching power, and reaction speed with intense boxing workouts.',
    slug: 'boxing-class',
    details: {
      about: {
        title: 'boxing  class',
        img: '/assets/img/classes/boxing-about.jpg',
        text: 'Boxing is not just a martial art but a universal sport that trains endurance and builds confidence. It can be practiced at any age, so both adults and children actively attend training. The boxing section at FitPhysique attracts both men and women. For men, it is an opportunity to believe in their strength, overcome fears, and improve physical fitness. For women, training is a way to take care of their figure and acquire self-defense skills.',
      },
      benefits: {
        title: 'Benefits of Boxing Training at FitPhysique',
        img: '/assets/img/details/boxing-benefits.jpg',
        text: 'This type of martial art involves delivering punches with fists. At the same time, all muscle groups are engaged, resulting in an effect no worse than cardio or strength training. Classes are available for all fitness levels – you can start from scratch or continue developing to become a professional athlete.',
        points: [
          'Benefits for the cardiovascular system. In training, you not only throw punches but also jump rope and run to receive aerobic exercise. As a result, overall endurance improves.',
          'Strengthening of joints and ligaments. They become more flexible, and as you progress in lessons, your coordination improves.',
          'Formation of an athletic physique and a beautiful figure due to a set of intense exercises with jumps, lunges, squats, and torso twists.',
          'Development of perseverance, determination, willpower, and the ability to win. These qualities will be useful for anyone in everyday life.',
        ],
      },
      trainingFormats: {
        title: 'Training Formats',
        img: '/assets/img/details/boxing-formats.jpg',
        text: 'You can attend boxing training with professional trainers in a group or individually. For the best results, experts recommend combining both methods.',
        formats: [
          {
            type: 'Group Training',
            description:
              'Suitable for those who enjoy training in a team, find motivation by observing higher-level athletes, and want to find like-minded individuals.',
          },
          {
            type: 'Personal Training',
            description:
              'Suitable for those who want to receive maximum attention from the trainer, have personal goals, and need an individual approach.',
          },
        ],
      },
      equipment: {
        title: 'Infrastructure and Equipment',
        img: '/assets/img/details/boxing-equipment.jpg',
        text: 'The FitPhysique sports complex is a well-equipped training area. We have not only rings but also areas for warm-ups and relaxation. Each athlete has access to punching bags, gloves, and mitts. You will need gear such as mouthguards, helmets, hand wraps, and comfortable shoes that provide good foot support. We also have lockers and safes where you can store your belongings.',
      },
    },
  },

  {
    name: 'yoga',
    img: '/assets/img/classes/yoga.jpg',
    description:
      'Restore balance, strengthen muscles, and improve flexibility with a calming yoga practice.',
    slug: 'yoga-class',
    details: {
      about: {
        title: 'yoga class',
        img: '/assets/img/classes/yoga-about.jpg',
        text: 'Yoga is an ancient practice that combines physical postures, breathing techniques, and meditation to promote overall well-being. At FitPhysique, our yoga classes are designed to help you relax, improve flexibility, and strengthen both body and mind.',
      },
      benefits: {
        title: 'Benefits of Yoga Training at FitPhysique',
        img: '/assets/img/details/yoga-benefits.jpg',
        text: 'Yoga offers a holistic approach to health by improving flexibility, reducing stress, and enhancing mindfulness. Our classes cater to all experience levels, from beginners to advanced practitioners.',
        points: [
          'Increased flexibility and mobility through a variety of postures and stretches.',
          'Improved strength and muscle tone, especially in the core, back, and legs.',
          'Enhanced mental focus and stress relief through controlled breathing and meditation.',
          'Better posture and alignment, leading to reduced tension and improved body awareness.',
        ],
      },
      trainingFormats: {
        title: 'Training Formats',
        img: '/assets/img/details/yoga-formats.jpg',
        text: 'Yoga classes at FitPhysique are available in different formats to meet your personal needs and preferences.',
        formats: [
          {
            type: 'Group Training',
            description:
              'Ideal for those who enjoy practicing yoga in a collective environment, sharing energy, and learning from experienced instructors.',
          },
          {
            type: 'Personal Training',
            description:
              'Recommended for individuals who seek personalized guidance, focused attention, and customized yoga sequences based on their goals.',
          },
        ],
      },
      equipment: {
        title: 'Infrastructure and Equipment',
        img: '/assets/img/details/yoga-equipment.jpg',
        text: 'Our yoga studio at FitPhysique provides a peaceful and comfortable atmosphere with yoga mats, blocks, straps, and meditation cushions available for use. The space is designed to enhance relaxation and mindfulness for a fulfilling practice.',
      },
    },
  },
];
