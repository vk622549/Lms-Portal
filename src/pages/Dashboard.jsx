import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Dashboard() {
const isLoggedIn =
localStorage.getItem("isLoggedIn") === "true";

if (!isLoggedIn) {
return (
<> <Navbar />


    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">
          🔒 Please Login First
        </h1>

        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Go to Login
        </Link>
      </div>
    </div>
  </>
);


}

const enrolledCourses =
JSON.parse(localStorage.getItem("enrolledCourses")) || [];

const updateProgress = (id) => {
const updatedCourses = enrolledCourses.map(
(course) => {
if (course.id === id) {
return {
...course,
progress:
course.progress >= 100
? 100
: (course.progress || 0) + 25,
};
}


    return course;
  }
);

localStorage.setItem(
  "enrolledCourses",
  JSON.stringify(updatedCourses)
);

window.location.reload();


};

const completedCourses = enrolledCourses.filter(
(course) => (course.progress || 0) >= 100
);

return (
<> <Navbar />


  <div className="bg-gray-100 min-h-screen p-10">

    <h1 className="text-4xl font-bold mb-8">
      🎓 Student Dashboard
    </h1>

    <div className="grid md:grid-cols-3 gap-6 mb-10">

      <div className="bg-blue-600 text-white p-6 rounded-xl shadow">
        <h2 className="text-3xl font-bold">
          {enrolledCourses.length}
        </h2>
        <p>Courses Enrolled</p>
      </div>

      <div className="bg-green-600 text-white p-6 rounded-xl shadow">
        <h2 className="text-3xl font-bold">
          {completedCourses.length}
        </h2>
        <p>Completed Courses</p>
      </div>

      <div className="bg-purple-600 text-white p-6 rounded-xl shadow">
        <h2 className="text-3xl font-bold">
          {completedCourses.length * 100}
        </h2>
        <p>Learning Points</p>
      </div>

    </div>

    {enrolledCourses.length === 0 ? (
      <div className="bg-white p-8 rounded-xl shadow text-center">
        <h2 className="text-2xl font-bold">
          📚 No Enrolled Courses Yet
        </h2>

        <p className="text-gray-500 mt-3">
          Enroll in a course to start learning.
        </p>
      </div>
    ) : (
      <div className="grid md:grid-cols-3 gap-6">

        {enrolledCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-5 rounded-xl shadow-lg"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded"
            />

            <h2 className="text-xl font-bold mt-4">
              {course.title}
            </h2>

            <p className="text-gray-600 mt-2">
              {course.description}
            </p>

            <p className="mt-4 font-semibold">
              Progress: {course.progress || 0}%
            </p>

            <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
              <div
                className="bg-green-500 h-3 rounded-full"
                style={{
                  width: `${course.progress || 0}%`,
                }}
              ></div>
            </div>

            <button
              onClick={() =>
                updateProgress(course.id)
              }
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Complete Lesson 📖
            </button>

            {(course.progress || 0) >= 100 && (
              <Link
                to={`/certificate/${course.id}`}
                className="block mt-3 text-center bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Download Certificate 🏆
              </Link>
            )}
          </div>
        ))}

      </div>
    )}
  </div>
</>


);
}

export default Dashboard;
