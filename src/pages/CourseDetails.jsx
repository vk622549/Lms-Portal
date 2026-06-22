import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function CourseDetails() {
const { id } = useParams();

const courses = [
{
id: 1,
title: "Web Development",
description: "Learn HTML, CSS, JavaScript and React from scratch.",
instructor: "John Smith",
duration: "12 Weeks",
level: "Beginner",
rating: "4.8",
students: "15,000",
skills: "HTML, CSS, JavaScript, React",
video: "https://www.youtube.com/embed/Ke90Tje7VS0",
image:
"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
},
{
id: 2,
title: "Python Programming",
description: "Master Python from beginner to advanced.",
instructor: "David Wilson",
duration: "10 Weeks",
level: "Beginner",
rating: "4.7",
students: "12,500",
skills: "Python, OOP, APIs",
video: "https://www.youtube.com/embed/rfscVS0vtbw",
image:
"https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600",
},
{
id: 3,
title: "Artificial Intelligence",
description: "Learn AI, ML and Generative AI.",
instructor: "Andrew Lee",
duration: "14 Weeks",
level: "Intermediate",
rating: "4.9",
students: "18,000",
skills: "AI, Machine Learning, LLMs",
video: "https://www.youtube.com/embed/JMUxmLyrhSk",
image:
"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
},
{
id: 4,
title: "Data Science",
description: "Data Analysis and Visualization.",
instructor: "Sarah Parker",
duration: "11 Weeks",
level: "Intermediate",
rating: "4.8",
students: "13,000",
skills: "Pandas, NumPy, Visualization",
video: "https://www.youtube.com/embed/ua-CiDNNj30",
image:
"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
},
{
id: 5,
title: "React JS Development",
description: "Build modern frontend apps.",
instructor: "Michael Scott",
duration: "8 Weeks",
level: "Intermediate",
rating: "4.8",
students: "9,000",
skills: "React, Hooks, Routing",
video: "https://www.youtube.com/embed/bMknfKXIFA8",
image:
"https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600",
},
{
id: 6,
title: "Node.js Development",
description: "Backend development with Express.",
instructor: "Robert King",
duration: "9 Weeks",
level: "Intermediate",
rating: "4.7",
students: "8,500",
skills: "Node.js, Express, APIs",
video: "https://www.youtube.com/embed/Oe421EPjeBE",
image:
"https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600",
},
{
id: 7,
title: "UI/UX Design",
description: "Figma, Wireframes and Prototyping.",
instructor: "Emma Watson",
duration: "7 Weeks",
level: "Beginner",
rating: "4.9",
students: "10,000",
skills: "Figma, UX Research, Prototyping",
video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
image:
"https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600",
},
{
id: 8,
title: "Cyber Security",
description: "Ethical Hacking and Security.",
instructor: "Alex Johnson",
duration: "10 Weeks",
level: "Advanced",
rating: "4.8",
students: "11,000",
skills: "Security, Networking, Ethical Hacking",
video: "https://www.youtube.com/embed/inWWhr5tnEA",
image:
"https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=600",
},
];

const course = courses.find(
(c) => c.id === Number(id)
);

if (!course) {
return ( <h1 className="text-center text-3xl mt-20">
Course Not Found </h1>
);
}

return (
<> <Navbar />

  <div className="max-w-6xl mx-auto p-10">

    <img
      src={course.image}
      alt={course.title}
      className="w-full h-96 object-cover rounded-xl shadow-lg"
    />

    <h1 className="text-4xl font-bold mt-6">
      {course.title}
    </h1>

    <p className="text-gray-600 text-lg mt-4">
      {course.description}
    </p>

    <div className="bg-white shadow rounded-xl p-6 mt-8">
      <p><b>👨‍🏫 Instructor:</b> {course.instructor}</p>
      <p><b>⏳ Duration:</b> {course.duration}</p>
      <p><b>📈 Level:</b> {course.level}</p>
      <p><b>⭐ Rating:</b> {course.rating}</p>
      <p><b>👥 Students:</b> {course.students}</p>
      <p><b>💡 Skills:</b> {course.skills}</p>
    </div>

    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">
        🎥 Course Preview
      </h2>

      <iframe
        width="100%"
        height="500"
        src={course.video}
        title={course.title}
        className="rounded-xl shadow-lg"
        allowFullScreen
      ></iframe>
    </div>

  </div>
</>


);
}

export default CourseDetails;
