import Navbar from "../components/Navbar";
import { auth } from "../services/firebase";

function Profile() {
const enrolledCourses =
JSON.parse(localStorage.getItem("enrolledCourses")) || [];

return (
<> <Navbar />


  <div className="min-h-screen bg-gray-100 p-10">
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">

      <h1 className="text-4xl font-bold mb-8">
        👤 My Profile
      </h1>

      <div className="space-y-4 text-lg">

        <p>
          <strong>Email:</strong>{" "}
          {auth.currentUser?.email || "Not Logged In"}
        </p>

        <p>
          <strong>Courses Enrolled:</strong>{" "}
          {enrolledCourses.length}
        </p>

        <p>
          <strong>Status:</strong> Active Student 🚀
        </p>

      </div>
    </div>
  </div>
</>
);
}

export default Profile;
