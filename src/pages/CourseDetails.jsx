import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function CourseDetails() {
const { id } = useParams();

const isLoggedIn =
localStorage.getItem("isLoggedIn") === "true";

if (!isLoggedIn) {
return (
<> <Navbar />


    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">
          🔒 Login Required
        </h1>

        <p className="text-gray-600 mb-5">
          Please login to view course details and videos.
        </p>

        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Login Now
        </Link>
      </div>
    </div>
  </>
);


}

const courses = [
{
id: 1,
title: "Web Development",
description:
"Learn HTML, CSS, JavaScript and React from scratch.",
instructor: "John Smith",
duration: "12 Weeks",
level: "Beginner",
rating: "4.8",
students: "15000",
image:
"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
video:
"https://www.youtube.com/embed/916GWv2Qs08",
},


{
  id: 2,
  title: "Python Programming",
  description:
    "Master Python from beginner to advanced.",
  instructor: "David Wilson",
  duration: "10 Weeks",
  level: "Beginner",
  rating: "4.7",
  students: "12500",
  image:
    "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600",
  video:
    "https://www.youtube.com/embed/rfscVS0vtbw",
},

{
  id: 3,
  title: "Artificial Intelligence",
  description:
    "Learn AI, Machine Learning and Generative AI.",
  instructor: "Andrew Lee",
  duration: "14 Weeks",
  level: "Intermediate",
  rating: "4.9",
  students: "18000",
  image:
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
  video:
    "https://www.youtube.com/embed/JMUxmLyrhSk",
},

{
  id: 4,
  title: "Data Science",
  description:
    "Learn Data Analysis and Visualization.",
  instructor: "Sarah Parker",
  duration: "11 Weeks",
  level: "Intermediate",
  rating: "4.8",
  students: "13000",
  image:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
  video:
    "https://www.youtube.com/embed/ua-CiDNNj30",
},

{
  id: 5,
  title: "React JS Development",
  description:
    "Build modern frontend applications using React.",
  instructor: "Michael Scott",
  duration: "8 Weeks",
  level: "Intermediate",
  rating: "4.8",
  students: "9000",
  image:
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600",
  video:
    "https://www.youtube.com/embed/bMknfKXIFA8",
},

{
  id: 6,
  title: "Node.js Development",
  description:
    "Create backend APIs using Node.js and Express.",
  instructor: "Robert King",
  duration: "9 Weeks",
  level: "Intermediate",
  rating: "4.7",
  students: "8500",
  image:
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600",
  video:
    "https://www.youtube.com/embed/Oe421EPjeBE",
},

{
  id: 7,
  title: "UI/UX Design",
  description:
    "Learn Figma, Wireframing and Prototyping.",
  instructor: "Emma Watson",
  duration: "7 Weeks",
  level: "Beginner",
  rating: "4.9",
  students: "10000",
  image:
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600",
  video:
    "https://www.youtube.com/embed/c9Wg6Cb_YlU",
},

{
  id: 8,
  title: "Cyber Security",
  description:
    "Learn Ethical Hacking and Network Security.",
  instructor: "Alex Johnson",
  duration: "10 Weeks",
  level: "Advanced",
  rating: "4.8",
  students: "11000",
  image:
    "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=600",
  video:
    "https://www.youtube.com/embed/inWWhr5tnEA",
},


];

const course = courses.find(
(c) => c.id === Number(id)
);

if (!course) {
return (
<> <Navbar /> <h1 className="text-center mt-20 text-3xl font-bold">
Course Not Found </h1>
</>
);
}

return (
<> <Navbar />


  <div className="max-w-6xl mx-auto p-10">

    <img
      src={course.image}
      alt={course.title}
      className="w-full h-96 object-cover rounded-xl shadow"
    />

    <h1 className="text-4xl font-bold mt-6">
      {course.title}
    </h1>

    <p className="text-gray-600 mt-4 text-lg">
      {course.description}
    </p>

    <div className="mt-8 bg-white p-6 rounded-xl shadow">
      <p>
        <b>Instructor:</b> {course.instructor}
      </p>

      <p>
        <b>Duration:</b> {course.duration}
      </p>

      <p>
        <b>Level:</b> {course.level}
      </p>

      <p>
        <b>Rating:</b> ⭐ {course.rating}
      </p>

      <p>
        <b>Students:</b> {course.students}
      </p>
    </div>

    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">
        🎥 Course Video
      </h2>

      <iframe
        width="100%"
        height="500"
        src={course.video}
        title={course.title}
        allowFullScreen
        className="rounded-xl shadow"
      ></iframe>
    </div>
  </div>
</>


);
}

export default CourseDetails;
