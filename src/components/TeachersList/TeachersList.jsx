import { TeachersCard } from 'components/TeachersCard/TeachersCard';
import { List } from './TeachersList.styled';

const teachers = [
  {
    name: 'John',
    surname: 'Doe',
    languages: ['English', 'Spanish'],
    levels: [
      'A1 Beginner',
      'A2 Elementary',
      'B1 Intermediate',
      'B2 Upper-Intermediate',
      'C1 Advanced',
      'C2 Proficient',
    ],
    rating: 4.5,
    reviews: [
      {
        reviewer_name: 'Alice',
        reviewer_rating: 5,
        comment: 'John is an excellent teacher! I highly recommend him.',
      },
      {
        reviewer_name: 'Bob',
        reviewer_rating: 4,
        comment:
          'John is very knowledgeable and patient. I enjoyed his classes.',
      },
    ],
    price_per_hour: 25,
    lessons_done: 1375,
    avatar_url: 'https://ftp.goit.study/img/avatars/1.jpg',
    lesson_info:
      'The lessons focus on improving speaking and listening skills through interactive activities and discussions.',
    conditions: [
      'Teaches only adult learners (18 years and above).',
      'Flexible scheduling options available.',
    ],
    experience:
      'John has been teaching languages for 7 years and has extensive experience in helping students improve their language skills. He has successfully taught numerous students from different backgrounds and proficiency levels.',
  },
  {
    name: 'Jane',
    surname: 'Smith',
    languages: ['French', 'German'],
    levels: [
      'A1 Beginner',
      'A2 Elementary',
      'B1 Intermediate',
      'B2 Upper-Intermediate',
    ],
    rating: 4.8,
    reviews: [
      {
        reviewer_name: 'Eve',
        reviewer_rating: 5,
        comment: 'Jane is an amazing teacher! She is patient and supportive.',
      },
      {
        reviewer_name: 'Frank',
        reviewer_rating: 4,
        comment: "Jane's lessons were very helpful. I made good progress.",
      },
    ],
    price_per_hour: 30,
    lessons_done: 1098,
    avatar_url: 'https://ftp.goit.study/img/avatars/2.jpg',
    lesson_info:
      'Lessons are structured to cover grammar, vocabulary, and practical usage of the language.',
    conditions: [
      'Welcomes both adult learners and teenagers (13 years and above).',
      'Provides personalized study plans.',
    ],
    experience:
      "Jane is an experienced and dedicated language teacher specializing in German and French. She holds a Bachelor's degree in German Studies and a Master's degree in French Literature. Her passion for languages and teaching has driven her to become a highly proficient and knowledgeable instructor. With over 10 years of teaching experience, Jane has helped numerous students of various backgrounds and proficiency levels achieve their language learning goals. She is skilled at adapting her teaching methods to suit the needs and learning styles of her students, ensuring that they feel supported and motivated throughout their language journey.",
  },
  {
    name: 'David',
    surname: 'Johnson',
    languages: ['Mandarin Chinese'],
    levels: ['A1 Beginner', 'A2 Elementary', 'B1 Intermediate'],
    rating: 4.2,
    reviews: [
      {
        reviewer_name: 'Grace',
        reviewer_rating: 4,
        comment:
          'David explains things clearly and is knowledgeable in the subject.',
      },
      {
        reviewer_name: 'Henry',
        reviewer_rating: 3,
        comment:
          "David's teaching style didn't suit me, but he is still a good teacher.",
      },
    ],
    price_per_hour: 35,
    lessons_done: 1203,
    avatar_url: 'https://ftp.goit.study/img/avatars/3.jpg',
    lesson_info:
      'Lessons focus on developing all four language skills: speaking, listening, reading, and writing.',
    conditions: [
      'Teaches all age groups, including children, teenagers, and adults.',
      'Offers group lessons at discounted rates.',
    ],
    experience:
      'David has been teaching Mandarin Chinese for 4 years. He has a passion for language teaching and is dedicated to helping his students succeed. With a solid understanding of the language and culture, David ensures that his lessons are both informative and enjoyable.',
  },
  {
    name: 'Sarah',
    surname: 'Johnson',
    languages: ['English'],
    levels: ['A1 Beginner', 'A2 Elementary', 'B1 Intermediate'],
    rating: 4.6,
    reviews: [
      {
        reviewer_name: 'Emily',
        reviewer_rating: 4,
        comment:
          'Sarah is a patient and helpful teacher. I enjoyed her lessons.',
      },
      {
        reviewer_name: 'Alex',
        reviewer_rating: 5,
        comment:
          "Sarah's teaching style is engaging and effective. Highly recommended.",
      },
    ],
    price_per_hour: 28,
    lessons_done: 1120,
    avatar_url: 'https://ftp.goit.study/img/avatars/4.jpg',
    lesson_info:
      'Lessons focus on building conversational skills and grammar knowledge.',
    conditions: [
      'Teaches adults and teenagers (15 years and above).',
      'Flexible lesson timings available.',
    ],
    experience:
      'Sarah has been teaching English for 6 years. She has worked with students from diverse backgrounds and understands the challenges they face while learning a new language. Her teaching approach emphasizes practical communication skills and ensures a supportive and engaging learning environment.',
  },
];

export const TeachersList = () => {
  return (
    <List>
      {teachers.map((item, index) => (
        <li key={index}>
          <TeachersCard item={item} />
        </li>
      ))}
    </List>
  );
};
