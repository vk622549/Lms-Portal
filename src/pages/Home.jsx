import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white min-h-[80vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Learn Without Limits 🚀
            </h1>

            <p className="mt-6 text-lg text-gray-300">
              Build skills with courses, certificates, and hands-on projects.
              Learn Web Development, AI, Python, Data Science and more.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/courses"
                className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                Explore Courses
              </Link>

              <Link
                to="/register"
                className="border border-white px-6 py-3 rounded-lg"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
              alt="Learning"
              className="rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Popular Courses
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600"
                alt="Web Development"
                className="h-48 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold">
                  Web Development
                </h3>

                <p className="text-gray-600 mt-2">
                  HTML, CSS, JavaScript, React
                </p>

                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                  Enroll Now
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600"
                alt="Python"
                className="h-48 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold">
                  Python Programming
                </h3>

                <p className="text-gray-600 mt-2">
                  Beginner to Advanced Python
                </p>

                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                  Enroll Now
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600"
                alt="AI"
                className="h-48 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold">
                  Artificial Intelligence
                </h3>

                <p className="text-gray-600 mt-2">
                  AI, ML & Generative AI
                </p>

                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                  Enroll Now
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="text-center">
              <h3 className="text-2xl font-bold">
                🎓 Expert Courses
              </h3>

              <p className="mt-3 text-gray-600">
                Learn from industry-level content.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold">
                📜 Certificates
              </h3>

              <p className="mt-3 text-gray-600">
                Earn certificates after completion.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold">
                🚀 Career Growth
              </h3>

              <p className="mt-3 text-gray-600">
                Build real-world skills and projects.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Home;