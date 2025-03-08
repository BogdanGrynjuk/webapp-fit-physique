export type Post = {
  id: string;
  img: string;
  date: string;
  title: string;
  shortDescription: string;
  content: string;
  author: {
    name: string;
    photo: string;
    quote: string;
  };
  comments: { user: string; photo?: string; text: string; date: string }[];
};

export const posts: Post[] = [
  {
    id: '1',
    img: '/assets/img/blog/post-1.jpg',
    date: '2024-07-31',
    title: 'Maintain a Perfect Structure After Workout',
    shortDescription:
      'A strong body starts with proper recovery. Learn the essentials for post-workout care.',
    content: `
      After every workout, it is crucial to take care of your body to ensure proper recovery. Many people focus only on physical exercises, forgetting about stretching and proper post-workout nutrition.

      One of the key aspects is maintaining good posture. If you feel tension in your back or shoulders after training, you might be performing exercises with incorrect technique. Pay attention to your body position during workouts and avoid overloading specific muscle groups.

      Another important aspect is stretching. It helps muscles remain flexible and prevents micro-injuries. Spend at least 10-15 minutes after each workout to relax your muscles.

      Nutrition is also essential. After physical exertion, your body needs proteins and healthy carbohydrates to restore energy. Hydration plays a key role as well—drink enough water to maintain fluid balance in the body.

      By following these simple tips, you will not only improve your physical condition but also make your workouts as effective as possible.
    `,
    author: {
      name: 'Olivia Johnson',
      photo: '/assets/img/trainers/olivia.jpg',
      quote: 'Consistency and discipline are the keys to a perfect shape.',
    },
    comments: [
      {
        user: 'Michael Smith',
        photo: '/assets/img/testimonial/michael.jpg',
        text: 'Very useful tips, thank you!',
        date: '2024-08-01',
      },
      {
        user: 'Maria Garcia',
        photo: '/assets/img/testimonial/maria.jpg',
        text: 'I will start applying this from my next workout.',
        date: '2024-08-02',
      },
    ],
  },
  {
    id: '2',
    img: '/assets/img/blog/post-2.jpg',
    date: '2024-07-24',
    title: 'How to Stay Motivated for Every Workout',
    shortDescription:
      'Find out how to keep your motivation high and stay consistent with your workouts.',
    content: `
    Motivation is what keeps us moving toward our fitness goals. But what should you do when your enthusiasm fades? Here are some effective ways to stay motivated for the long run.

    The first step is setting clear goals. Training without a specific purpose can eventually lead to a loss of interest. Set realistic objectives, such as running 5 km in a certain time or improving your endurance.

    Another helpful method is keeping a workout journal. Track your progress, record changes in your performance, and note your physical activity levels. Seeing improvements over time can boost motivation.

    Working out with friends or finding like-minded individuals can also make a big difference. Group workouts or having support from others can significantly enhance your motivation.

    Variety is another key factor. Repeating the same exercises can make workouts monotonous and less effective. Try incorporating new activities such as yoga, CrossFit, swimming, or running to keep things interesting.

    Most importantly, listen to your body. Sometimes, taking a break is necessary to prevent burnout. Finding the right balance between rest and exercise will not only help you stay motivated but also allow you to truly enjoy the process.
  `,
    author: {
      name: 'James Brown',
      photo: '/assets/img/trainers/james.jpg',
      quote: 'The key is to keep going, even when it gets tough!',
    },
    comments: [
      {
        user: 'Lucy Antony',
        photo: '/assets/img/testimonial/lucy.jpg',
        text: 'Great article, thanks!',
        date: '2024-07-25',
      },
      {
        user: 'Mike Martis',
        photo: '/assets/img/testimonial/mike.jpg',
        text: 'Motivation is exactly what I needed!',
        date: '2024-07-26',
      },
    ],
  },

  {
    id: '3',
    img: '/assets/img/blog/post-3.jpg',
    date: '2024-07-21',
    title: 'How to Complete a Workout Without Feeling Exhausted',
    shortDescription:
      'Learn how to exercise effectively without feeling drained afterward.',
    content: `
    Many people push themselves too hard during workouts and end up feeling completely drained. However, with the right approach, you can complete your training sessions without exhaustion and still achieve great results.

    One of the key factors is proper warm-up. Before diving into intense exercise, it's essential to prepare your muscles and joints. A good warm-up increases blood flow, reduces the risk of injury, and helps your body transition into workout mode.

    Another crucial aspect is pacing yourself. Many beginners make the mistake of starting too fast and burning out quickly. Instead, maintain a steady pace and gradually increase intensity as your endurance improves.

    Breathing techniques also play a significant role. Proper breathing helps supply oxygen to your muscles, preventing fatigue. Try to inhale through your nose and exhale through your mouth in a controlled rhythm.

    Hydration and nutrition should not be overlooked. Drinking enough water before, during, and after exercise keeps your body functioning optimally. Consuming a balanced meal with protein and complex carbohydrates before training provides the necessary energy.

    Lastly, listen to your body. If you feel excessive fatigue or discomfort, take a short break or modify your routine. Overtraining can lead to burnout and injuries, so recovery is just as important as exercise itself.

    By implementing these strategies, you can enjoy your workouts, maintain consistency, and feel energized instead of exhausted.
  `,
    author: {
      name: 'Nina Anderson',
      photo: '/assets/img/trainers/nina.jpg',
      quote: 'Training smarter, not harder, is the key to long-term success.',
    },
    comments: [
      {
        user: 'Jennie Rose',
        photo: '/assets/img/testimonial/jennie.jpg',
        text: 'Great tips! I always struggled with post-workout fatigue.',
        date: '2024-07-22',
      },
      {
        user: 'Maria Garcia',
        photo: '/assets/img/testimonial/maria.jpg',
        text: 'Pacing myself really helped me improve my endurance.',
        date: '2024-07-23',
      },
    ],
  },
  {
    id: '4',
    img: '/assets/img/blog/post-4.jpg',
    date: '2024-07-15',
    title: 'The Perfect Way to Train for Maximum Muscle Growth',
    shortDescription:
      'Discover the best workout techniques to effectively target and build your muscles.',
    content: `
    Achieving maximum muscle growth requires more than just lifting weights. To see real progress, you need a well-structured approach that includes proper technique, recovery, and consistency. Here’s how to structure your workouts effectively to build muscle efficiently.

    **1. Focus on Compound Movements**  
    Compound exercises such as squats, deadlifts, bench presses, and pull-ups engage multiple muscle groups at once. These movements help stimulate overall muscle growth and improve strength more efficiently than isolated exercises.

    **2. Maintain Proper Form**  
    Performing exercises with poor form can lead to injuries and limit muscle engagement. Always focus on controlled movements, a full range of motion, and proper posture. If needed, reduce the weight and prioritize technique over lifting heavier.

    **3. Progressive Overload**  
    To build muscle, you must continually challenge your body. This means gradually increasing the weight, repetitions, or intensity of your exercises. However, avoid adding too much weight too quickly, as it can lead to injuries.

    **4. Optimize Your Rest Periods**  
    Rest periods play a crucial role in muscle development. For strength training, rest between sets should be around 2-3 minutes, while for hypertrophy (muscle growth), aim for 30-60 seconds. Shorter rest periods keep your muscles under tension for longer, promoting growth.

    **5. Prioritize Recovery and Sleep**  
    Muscles grow during recovery, not during workouts. Ensure you're getting at least 7-9 hours of sleep per night and incorporating rest days into your routine. Overtraining can lead to fatigue and hinder progress.

    **6. Nutrition is Key**  
    Eating the right foods fuels your muscles and accelerates recovery. Prioritize protein-rich foods such as chicken, fish, eggs, and plant-based sources like lentils. Also, include healthy carbohydrates and fats to maintain energy levels.

    **7. Track Your Progress**  
    Keeping a workout log helps you monitor improvements and stay motivated. Write down your sets, reps, and weights used in each session. Over time, you’ll see trends in strength gains and muscle development.

    **8. Stay Consistent and Patient**  
    Building muscle is a long-term process that requires dedication. Avoid expecting instant results, and instead, focus on gradual improvements. Stick to your routine, maintain discipline, and celebrate small milestones along the way.

    By implementing these principles, you’ll not only maximize your muscle growth but also develop a sustainable and effective workout routine.
  `,
    author: {
      name: 'David Williams',
      photo: '/assets/img/trainers/david.jpg',
      quote: 'Consistency and smart training lead to the best results.',
    },
    comments: [
      {
        user: 'Emily Ross',
        text: 'Great breakdown of workout essentials! I’m definitely applying these tips.',
        date: '2024-07-16',
      },
      {
        user: 'Michael Smith',
        photo: '/assets/img/testimonial/michael.jpg',
        text: 'Focusing on progressive overload has really helped my gains.',
        date: '2024-07-17',
      },
    ],
  },

  {
    id: '5',
    img: '/assets/img/blog/post-5.jpg',
    date: '2024-07-15',
    title: 'Slim & Strong: Effective Cardio Routines for Women',
    shortDescription:
      'Boost endurance, burn fat, and build strength with these cardio workouts tailored for women.',
    content: `
    Cardio workouts are essential for maintaining a healthy heart, burning calories, and improving overall fitness. But not all cardio exercises are equally effective. If you want to stay slim while building strength, it’s important to choose the right routines. Here’s a guide to the best cardio workouts tailored for women.

    **1. High-Intensity Interval Training (HIIT)**  
    HIIT workouts combine short bursts of intense exercise with rest periods. A typical session lasts 20-30 minutes and burns more calories than traditional cardio. For example, try sprinting for 30 seconds, then walking for 60 seconds. Repeat for 15-20 minutes.

    **2. Jump Rope Workouts**  
    Jumping rope isn’t just for kids—it’s an excellent full-body workout that improves coordination, burns fat, and strengthens the legs. A 10-minute session can be as effective as 30 minutes of jogging.

    **3. Dance-Based Cardio**  
    Zumba, aerobics, or dance workouts provide a fun and engaging way to stay active. They not only improve cardiovascular health but also enhance mood and coordination.

    **4. Running and Sprinting**  
    Long-distance running builds endurance, while sprinting enhances speed and power. Combining both into your routine ensures a balanced cardio approach.

    **5. Stair Climbing**  
    Whether using a stair machine or real stairs, this workout is great for toning the lower body and burning calories. Aim for at least 15-20 minutes per session.

    **6. Cycling and Spinning**  
    Whether indoors on a stationary bike or outdoors on a trail, cycling is a fantastic way to strengthen your legs and core while improving heart health.

    **7. Swimming for Full-Body Conditioning**  
    Swimming is a low-impact cardio workout that engages all major muscle groups while being gentle on the joints. It’s perfect for women looking to stay in shape without putting stress on their bodies.

    **8. Walking and Power Walking**  
    Not everyone enjoys high-intensity workouts. A brisk 30-40 minute walk daily can significantly improve heart health, boost mood, and burn calories effectively.

    Consistency is key in any cardio routine. By mixing different types of workouts, you can keep your sessions exciting, avoid plateaus, and work different muscle groups. Choose exercises you enjoy, stay consistent, and feel the benefits of a healthier, stronger body.
  `,
    author: {
      name: 'Rosy Rivera',
      photo: '/assets/img/trainers/rosy.jpg',
      quote: 'The best workout is the one you enjoy and stick with!',
    },
    comments: [
      {
        user: 'Lucy Antony',
        photo: '/assets/img/testimonial/lucy.jpg',
        text: 'I love how HIIT and dancing keep workouts fun! Thanks for the tips!',
        date: '2024-07-16',
      },
      {
        user: 'Maria Garcia',
        photo: '/assets/img/testimonial/maria.jpg',
        text: 'Jump rope is my new favorite! Great workout ideas.',
        date: '2024-07-17',
      },
    ],
  },

  {
    id: '6',
    img: '/assets/img/blog/post-6.jpg',
    date: '2024-07-04',
    title: 'The Science of Recovery: Optimize Your Rest for Better Results',
    shortDescription:
      'Learn how proper recovery enhances muscle growth, prevents injuries, and boosts performance.',
    content: `
    Recovery is just as important as training itself. Without proper rest, your muscles don’t have enough time to repair and grow, leading to fatigue, stagnation, and even injuries. Understanding how to optimize your recovery can significantly improve your fitness journey.

    **1. The Role of Sleep in Recovery**  
    Sleep is the most critical recovery tool. During deep sleep, the body releases growth hormones that help repair tissues and strengthen muscles. Aim for 7-9 hours of quality sleep each night.

    **2. Active vs. Passive Recovery**  
    Recovery doesn’t always mean complete rest. Light activities like stretching, yoga, or a short walk can promote blood circulation and speed up muscle healing without overloading the body.

    **3. Nutrition for Faster Recovery**  
    Protein and carbohydrates play a vital role in muscle recovery. Consuming a balanced meal with lean protein and complex carbs after a workout replenishes energy stores and aids in muscle repair.

    **4. The Importance of Hydration**  
    Water supports every function in your body, including muscle repair and toxin removal. Staying hydrated ensures that nutrients are efficiently delivered to muscles, preventing cramps and fatigue.

    **5. Massage, Foam Rolling, and Cold Therapy**  
    Techniques like foam rolling, massage, and ice baths help reduce muscle soreness and improve flexibility. Incorporating these methods into your routine can prevent stiffness and enhance recovery.

    **6. Listen to Your Body**  
    Overtraining can lead to burnout and injuries. If you feel constantly fatigued, experience joint pain, or notice decreased performance, it might be time to take an extra rest day.
  `,
    author: {
      name: 'Pavel Taylor',
      photo: '/assets/img/trainers/pavel.jpg',
      quote:
        'Your progress depends not only on how hard you train but also on how well you recover.',
    },
    comments: [
      {
        user: 'Lucy Antony',
        photo: '/assets/img/testimonial/lucy.jpg',
        text: 'I never realized how important sleep is for muscle growth. Great insights!',
        date: '2024-07-05',
      },
      {
        user: 'Maria Garcia',
        photo: '/assets/img/testimonial/maria.jpg',
        text: 'Hydration has made a huge difference in my recovery. Thanks for the reminder!',
        date: '2024-07-06',
      },
      {
        user: 'Noah Williams',
        text: 'I used to overtrain and always felt exhausted. Learning to rest properly has helped me progress faster.',
        date: '2024-07-08',
      },
      {
        user: 'Jennie Rose',
        photo: '/assets/img/testimonial/jennie.jpg',
        text: 'Foam rolling is a game changer! My muscles feel so much better after using it.',
        date: '2024-07-07',
      },
      {
        user: 'Sophia Brown',
        text: 'I love that you included active recovery! Yoga has really improved my flexibility and reduced soreness.',
        date: '2024-07-09',
      },
    ],
  },

  {
    id: '7',
    img: '/assets/img/blog/post-7.jpg',
    date: '2024-06-28',
    title: 'Boost Your Endurance: The Best Cardio Workouts for Stamina',
    shortDescription:
      'Improve your stamina with these top cardio workouts designed to boost endurance and overall fitness.',
    content: `
    Endurance is a key component of overall fitness. Whether you're an athlete, a fitness enthusiast, or just someone looking to improve cardiovascular health, increasing stamina through proper cardio workouts can transform your fitness journey. Here’s how to do it effectively.

    **1. Understanding Endurance**  
    Endurance refers to the ability to sustain physical activity for an extended period. It involves both cardiovascular and muscular endurance. Improving this aspect of fitness enhances overall performance, reduces fatigue, and increases energy levels.

    **2. Running and Jogging**  
    Running is one of the most effective ways to build endurance. Long-distance jogging at a steady pace strengthens the heart, lungs, and muscles, helping the body use oxygen more efficiently.

    **3. High-Intensity Interval Training (HIIT)**  
    HIIT involves alternating short bursts of intense activity with periods of rest or low-intensity exercise. It boosts cardiovascular endurance, burns fat, and increases overall stamina in a short amount of time.

    **4. Cycling for Stamina**  
    Whether on a stationary bike or outdoors, cycling builds lower-body strength and improves aerobic endurance. Adjusting the intensity and duration can help push your limits progressively.

    **5. Swimming for Full-Body Conditioning**  
    Swimming engages all major muscle groups while being easy on the joints. It improves lung capacity, coordination, and stamina without the impact of land-based exercises.

    **6. Jump Rope Workouts**  
    Jumping rope is a simple but powerful exercise that enhances coordination, endurance, and cardiovascular health. Just a few minutes a day can significantly boost stamina.

    **7. Rowing for Total-Body Endurance**  
    Rowing combines strength and endurance training, providing a full-body workout that improves stamina while building muscle.

    **8. The Role of Proper Nutrition**  
    A well-balanced diet rich in complex carbohydrates, healthy fats, and protein fuels long-lasting energy. Hydration also plays a crucial role in maintaining endurance.

    **9. Consistency and Progression**  
    Gradually increasing workout intensity and duration ensures steady endurance improvement. Tracking progress and setting small goals help maintain motivation.

    **10. Recovery and Rest**  
    Proper rest is essential to avoid overtraining. Allow your body time to recover with adequate sleep, stretching, and active recovery days.
  `,
    author: {
      name: 'Matt Stonie',
      photo: '/assets/img/trainers/matt.jpg',
      quote:
        'Endurance isn’t just about lasting longer; it’s about improving every aspect of your fitness journey.',
    },
    comments: [
      {
        user: 'Maria Garcia',
        photo: '/assets/img/testimonial/maria.jpg',
        text: 'I tried incorporating HIIT and noticed a huge improvement in my stamina. Thanks for the great tips!',
        date: '2024-06-29',
      },
    ],
  },
  {
    id: '8',
    img: '/assets/img/blog/post-8.jpg',
    date: '2024-06-11',
    title: 'Core Power: Essential Exercises for a Stronger Midsection',
    shortDescription:
      'Strengthen your core with these essential exercises to improve stability, posture, and overall fitness.',
    content: `
    **1. Why Core Strength Matters**  
    Your core is more than just your abs—it's the powerhouse of your body. A strong core improves posture, enhances balance, and reduces the risk of injuries. Whether you're an athlete or just want to move more efficiently, core strength is essential.

    **2. Planks: The Foundation of Core Training**  
    Planks are one of the most effective exercises for core activation. They engage not only the abdominal muscles but also the lower back, shoulders, and glutes. Start with 30-second holds and gradually increase the duration for better endurance.

    **3. Dead Bugs for Core Control**  
    Dead bugs are a fantastic exercise for improving core stability and coordination. This movement strengthens deep core muscles while reinforcing proper spinal alignment. Keep your lower back pressed against the floor as you extend opposite arm and leg to avoid strain.

    **4. Leg Raises for Lower Ab Activation**  
    Hanging or lying leg raises are excellent for engaging the lower abs. They strengthen the hip flexors and improve overall core stability. Focus on controlled movements to avoid using momentum.

    **5. Building a Stronger Core Over Time**  
    Consistency is key when it comes to core training. Aim to incorporate core exercises into your routine 3-4 times a week. Combine them with a balanced diet and full-body workouts for optimal results.
  `,
    author: {
      name: 'Sofia Lauren',
      photo: '/assets/img/trainers/sofia.jpg',
      quote:
        'A strong core is the foundation of a strong body—train it wisely.',
    },
    comments: [
      {
        user: 'Mike Martis',
        photo: '/assets/img/testimonial/mike.jpg',
        text: 'Planks have changed the way I train! Such a simple but effective exercise.',
        date: '2024-06-12',
      },
      {
        user: 'Michael Smith',
        photo: '/assets/img/testimonial/michael.jpg',
        text: 'Dead bugs really help with my lower back pain. Great addition to my routine!',
        date: '2024-06-13',
      },
    ],
  },

  {
    id: '9',
    img: '/assets/img/blog/post-9.jpg',
    date: '2024-05-27',
    title: 'Maximize Your Performance: Tips for Functional Training',
    shortDescription:
      'Learn how to improve strength, stability, and flexibility with functional training techniques.',
    content: `
    Functional training focuses on exercises that mimic everyday movements, helping improve your overall strength, flexibility, and stability. Whether you are an athlete or just someone looking to improve overall fitness, functional training can make a huge difference in your performance. Here’s how to maximize your functional training.

    **1. Train with Multi-Joint Movements**  
    Multi-joint exercises like lunges, kettlebell swings, and push-ups are effective for functional training. They engage several muscle groups simultaneously, helping to improve overall strength and stability.

    **2. Include Balance and Coordination Exercises**  
    Functional training isn’t just about lifting weights; it’s about movement. Incorporate exercises that challenge your balance and coordination, like single-leg squats or stability ball exercises. This will help you perform better in everyday tasks and sports.

    **3. Focus on Mobility and Flexibility**  
    Flexibility is an important part of functional training. Stretching and mobility exercises help to reduce injury risk and improve your range of motion. This can improve your posture and ability to perform tasks efficiently.

    **4. Work on Core Strength**  
    A strong core is essential for stability and mobility. Include exercises that target the core, such as planks, Russian twists, and dead bugs. A strong core supports your entire body, improving performance and reducing the risk of injury.

    **5. Incorporate Agility Drills**  
    Agility is important in almost every sport and physical activity. Adding agility drills such as ladder drills, cone drills, or box jumps will improve your ability to change direction quickly and efficiently, benefiting your overall performance.

    **6. Use Functional Equipment**  
    Tools like resistance bands, kettlebells, and medicine balls are perfect for functional training. These tools engage stabilizing muscles that help improve your strength, balance, and coordination.

    **7. Train in a Circuit Format**  
    Circuit training involves performing a series of exercises back-to-back, targeting different muscle groups. This training style mimics real-life activities, where you’re constantly moving and engaging multiple muscle groups at once.

    **8. Stay Consistent and Progressive**  
    Like any other type of training, functional training requires consistency and progression. Start with basic exercises and gradually increase the intensity and complexity as you become stronger. 

    By following these functional training principles, you’ll maximize your performance in both fitness and daily life activities.
  `,
    author: {
      name: 'Joe Martin',
      photo: '/assets/img/trainers/joe.jpg',
      quote: 'Functional training prepares you for the movements of life.',
    },
    comments: [
      {
        user: 'Alice Johnson',
        text: 'These tips are really helpful! I’ve started incorporating more balance exercises into my routine.',
        date: '2024-05-28',
      },
      {
        user: 'Mike Martis',
        photo: '/assets/img/testimonial/mike.jpg',
        text: 'I never thought about using kettlebells for functional training. Thanks for the great advice!',
        date: '2024-05-29',
      },
    ],
  },
];
