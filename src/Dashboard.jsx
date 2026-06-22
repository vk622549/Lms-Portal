import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { auth, db } from "../services/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

function Dashboard() {
  const [courses, setCourses] = useState([]);

  const user = auth.currentUser;

  useEffect(() => {
    const fetchCourses = async () => {
      if (!user) return;

      const q = query(
        collection(db, "enrollments"),
        where("userId", "==", user.uid)
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => doc.data());
      setCourses(data);
    };

    fetchCourses();
  }, [user]);

  return (
    <>
      <Navbar />

      <div className="p-10 bg-gray-50 min-h-screen">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            🎓 My Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome back, {user?.email}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold text-blue-600">
              {courses.length}
            </h2>
            <p className="text-gray-500">Enrolled Courses</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold text-green-600">
              0%
            </h2>
            <p className="text-gray-500">Progress</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold text-purple-600">
              0
            </h2>
            <p className="text-gray-500">Certificates</p>
          </div>

        </div>

        {/* Courses Section */}
        <h2 className="text-2xl font-bold mb-5">
          📚 My Courses
        </h2>

        {courses.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">
            No courses enrolled yet 😢
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">

            {courses.map((c, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-gray-800">
                  {c.course}
                </h3>

                <p className="text-gray-500 mt-2">
                  Enrolled successfully 🎉
                </p>

                <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  View Course
                </button>
              </div>
            ))}

          </div>
        )}

      </div>
    </>
  );
}

export default Dashboard;