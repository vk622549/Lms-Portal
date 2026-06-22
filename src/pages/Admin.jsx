import { useState } from "react";
import Navbar from "../components/Navbar";

function Admin() {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");

const handleAddCourse = (e) => {
e.preventDefault();
 
const newCourse = {
  id: Date.now(),
  title,
  description,
  image:
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
};

const existingCourses =
  JSON.parse(localStorage.getItem("courses")) || [];

localStorage.setItem(
  "courses",
  JSON.stringify([...existingCourses, newCourse])
);

alert("✅ Course Added Successfully!");

setTitle("");
setDescription("");

window.location.reload();


};

const courses =
JSON.parse(localStorage.getItem("courses")) || [];

const deleteCourse = (id) => {
const updatedCourses = courses.filter(
(course) => course.id !== id
);

localStorage.setItem(
  "courses",
  JSON.stringify(updatedCourses)
);

alert("🗑️ Course Deleted!");

window.location.reload();


};

return (
<> <Navbar />


  <div className="min-h-screen bg-gray-100 p-10">

    <h1 className="text-4xl font-bold mb-8">
      ⚙️ Admin Panel
    </h1>

    {/* Add Course Section */}
    <div className="bg-white p-6 rounded-xl shadow mb-10">

      <h2 className="text-2xl font-bold mb-4">
        Add New Course
      </h2>

      <form onSubmit={handleAddCourse}>

        <input
          type="text"
          placeholder="Course Title"
          className="w-full border p-3 rounded mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Course Description"
          className="w-full border p-3 rounded mb-4"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Add Course
        </button>

      </form>
    </div>

    {/* Course List */}
    <div>

      <h2 className="text-2xl font-bold mb-5">
        📚 Manage Courses
      </h2>

      {courses.length === 0 ? (
        <div className="bg-white p-5 rounded-xl shadow">
          No Courses Added Yet
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">

          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-5">

                <h3 className="text-xl font-bold">
                  {course.title}
                </h3>

                <p className="text-gray-600 mt-2">
                  {course.description}
                </p>

                <button
                  onClick={() => deleteCourse(course.id)}
                  className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Delete Course
                </button>

              </div>
            </div>
          ))}

        </div>
      )}

    </div>

  </div>
</>

);
}

export default Admin;
