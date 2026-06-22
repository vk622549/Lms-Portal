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

      try {
        const q = query(
          collection(db, "enrollments"),
          where("userId", "==", user.uid)
        );

        const snapshot = await getDocs(q);

        const data = snapshot.docs.map((doc) => doc.data());
        setCourses(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCourses();
  }, [user]);

  return (
    <>
      <Navbar />

      <div className="p-10 bg-gray-50 min-h-screen">

        {/* HEADER */}
        <h1 className="text-4xl font-bold text-center">
          🎓 My Dashboard
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Welcome {user?.email}
        </p>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white p-6 rounded shadow text-center">
            <h2 className="text-2xl font-bold text-blue-600">
              {courses.length}
            </h2>
            <p>Enrolled Courses</p>
          </div>

          <div className="bg-white p-6 rounded shadow text-center">
            <h2 className="text-2xl font-bold text-green-600">
              0%
            </h2>
            <p>Progress</p>
          </div>

          <div className="bg-white p-6 rounded shadow text-center">
            <h2 className="text-2xl font-bold text-purple-600">
              0
            </h2>
            <p>Certificates</p>
          </div>

        </div>

        {/* COURSES LIST */}
        <h2 className="text-2xl font-bold mt-10 mb-5">
          My Courses
        </h2>

        {courses.length === 0 ? (
          <p className="text-gray-500 text-center">
            No courses enrolled yet 😢
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">

            {courses.map((c, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold">
                  {c.course}
                </h3>

                <p className="text-gray-500 mt-2">
                  Enrolled successfully 🎉
                </p>

                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
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