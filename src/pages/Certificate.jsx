import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function Certificate() {
const { id } = useParams();

const enrolledCourses =
JSON.parse(localStorage.getItem("enrolledCourses")) || [];

const course = enrolledCourses.find(
(c) => c.id === Number(id)
);

if (!course) {
return ( <h1 className="text-center text-3xl mt-20">
Certificate Not Found </h1>
);
}

return (
<> <Navbar />

  <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">

    <div className="bg-white border-8 border-blue-600 p-10 rounded-xl shadow-2xl text-center max-w-4xl w-full">

      <h1 className="text-5xl font-bold text-blue-700">
        Certificate of Completion
      </h1>

      <p className="mt-8 text-xl">
        This Certificate is Proudly Presented To
      </p>

      <h2 className="text-4xl font-bold mt-4">
        {course.studentName || "Student"}
      </h2>

      <p className="mt-8 text-xl">
        For Successfully Completing
      </p>

      <h3 className="text-3xl font-bold text-green-600 mt-4">
        {course.title}
      </h3>

      <p className="mt-8 text-lg">
        Awarded on {new Date().toLocaleDateString()}
      </p>

      <button
        onClick={() => window.print()}
        className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
      >
        Print Certificate 🏆
      </button>

    </div>
  </div>
</>


);
}

export default Certificate;
