const CourseData = {
  id: 1,
  title: "Starting SEO as your Home",
  videoUrl: "/videos/demo.mp4",
  material: {
    duration: "2h 30m",
    lessons: 8,
    enrolled: 65,
    language: "English",
  },
  comments: [
    {
      name: "John Doe",
      date: "Oct 10, 2023",
      img: "https://images.pexels.com/photos/2599510/pexels-photo-2599510.jpeg",
    },
    {
      name: "Jane Smith",
      date: "Nov 12, 2023",
      img: "https://images.pexels.com/photos/572469/pexels-photo-572469.jpeg",
    },
    {
      name: "Mark Johnson",
      date: "Dec 01, 2023",
      img: "https://images.pexels.com/photos/7752805/pexels-photo-7752805.jpeg",
    },
  ],
  curriculum: [
    {
      name: "Course Introduction",
      duration: "Week 1-4",
      topics: [
        {
          title: "Introduction to SEO",
        },
        {
          title: "SEO Basics",
        },
        {
          title: "Keyword Research",
        },
        {
          title: "On-Page Optimization",
          questions: 10,
          duration: 15,
        },
        {
          title: "Technical SEO",
        },
        {
          title: "Link Building",
        },
      ],
    },
    {
      name: "Advanced SEO Techniques",
      duration: "Week 5-8",
      topics: [
        {
          title: "Content Marketing",
        },
        {
          title: "Social Media Marketing",
        },
        {
          title: "Email Marketing",
        },
        {
          title: "Off-Page Optimization",
          questions: 15,
          duration: 20,
        },
        {
          title: "Analytics and Reporting",
        },

        { title: "SEO Tools and Resources" },
        {
          title: "Advanced SEO Strategies",
        },
      ],
    },
    {
      name: "SEO Case Studies",
      duration: "Week 9-12",
      topics: [
        {
          title: "SEO Case Studies",
        },
        {
          title: "SEO Best Practices",
        },
        {
          title: "SEO Industry Trends",
        },
        {
          title: "SEO Industry Insights",
        },
      ],
    },
  ],
};

export default CourseData;

export const QuizData = {
  question: "What does SEO stand for?",
  options: [
    {
      label: "A",
      text: "Search Engine Optimization",
    },
    {
      label: "B",
      text: "Search Engine Optimization",
    },
    {
      label: "C",
      text: "Search Engine Optimization",
    },
    {
      label: "D",
      text: "Search Engine Optimization",
    },
  ],
  answer: "A",
  duration: 10,
};
