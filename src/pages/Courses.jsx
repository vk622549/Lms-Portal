import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Courses() {
const [search, setSearch] = useState("");

const isLoggedIn =
localStorage.getItem("isLoggedIn") === "true";

const defaultCourses = [
{
id: 1,
title: "Web Development",
description: "Learn HTML, CSS, JavaScript and React.",
image:
"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
},
{
id: 2,
title: "Python Programming",
description: "Master Python from beginner to advanced.",
image:
"https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600",
},
{
id: 3,
title: "Artificial Intelligence",
description:
"Learn AI, Machine Learning and Generative AI.",
image:
"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
},
{
id: 4,
title: "Data Science",
description:
"Analyze and visualize data using Python.",
image:
"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
},
{
id: 5,
title: "React JS Development",
description:
"Build modern frontend applications using React.",
image:
"https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600",
},
{
id: 6,
title: "Node.js Development",
description:
"Create backend APIs using Node.js and Express.",
image:
"https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600",
},
{
id: 7,
title: "UI/UX Design",
description:
"Learn Figma, Wireframing and Prototyping.",
image:
"https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600",
},
{
id: 8,
title: "Cyber Security",
description:
"Learn Ethical Hacking and Network Security.",
image:
"https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=600",
},
];

const adminCourses =
JSON.parse(localStorage.getItem("courses")) || [];

const courses = [...defaultCourses, ...adminCourses];

const enrolledCourses =
JSON.parse(localStorage.getItem("enrolledCourses")) || [];

const handleEnroll = (course) => {
if (!isLoggedIn) {
alert("Please Login First!");
return;
}


const alreadyEnrolled = enrolledCourses.some(
  (item) => item.id === course.id
);

if (alreadyEnrolled) {
  alert("Already Enrolled!");
  return;
}

const newCourse = {
  ...course,
  progress: 0,
};

localStorage.setItem(
  "enrolledCourses",
  JSON.stringify([
    ...enrolledCourses,
    newCourse,
  ])
);

alert("🎉 Enrollment Successful!");
window.location.reload();


};

const handleUnenroll = (courseId) => {
const updatedCourses =
enrolledCourses.filter(
(item) =>
Number(item.id) !== Number(courseId)
);


localStorage.setItem(
  "enrolledCourses",
  JSON.stringify(updatedCourses)
);

alert("❌ Course Unenrolled!");
window.location.reload();


};

const filteredCourses = courses.filter(
(course) =>
course.title
.toLowerCase()
.includes(search.toLowerCase())
);

return (
<> <Navbar />


  <div className="bg-gray-100 min-h-screen p-10">

    <h1 className="text-4xl font-bold text-center mb-8">
      📚 Explore Courses
    </h1>

    <div className="flex justify-center mb-10">
      <input
        type="text"
        placeholder="Search Courses..."
        className="w-full md:w-1/2 p-3 border rounded-lg"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />
    </div>

    <div className="grid md:grid-cols-4 gap-6">

      {filteredCourses.map((course) => {
        const isEnrolled =
          enrolledCourses.some(
            (item) =>
              item.id === course.id
          );

        return (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-5">

              <h2 className="text-xl font-bold">
                {course.title}
              </h2>

              <p className="text-gray-600 mt-2">
                {course.description}
              </p>

              <Link
                to={
                  isLoggedIn
                    ? `/course/${course.id}`
                    : "/login"
                }
                className="block mt-3 text-blue-600 font-semibold"
              >
                View Details →
              </Link>

              {!isLoggedIn ? (
                <Link
                  to="/login"
                  className="block mt-4 w-full text-center bg-gray-600 text-white py-2 rounded hover:bg-gray-700"
                >
                  Login to Enroll 🔒
                </Link>
              ) : isEnrolled ? (
                <button
                  onClick={() =>
                    handleUnenroll(course.id)
                  }
                  className="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
                >
                  Unenroll ❌
                </button>
              ) : (
                <button
                  onClick={() =>
                    handleEnroll(course)
                  }
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                  Enroll Now 🚀
                </button>
              )}

            </div>
          </div>
        );
      })}

    </div>
  </div>
</>

);
}

export default Courses;
