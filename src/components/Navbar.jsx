import { Link } from "react-router-dom";

function Navbar() {
  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    alert("👋 Logged Out Successfully!");

    window.location.href = "/";
  };

  return (
    <nav className="bg-blue-900 text-white px-8 py-4 flex justify-between items-center">

      <Link
        to="/"
        className="text-2xl font-bold"
      >
        🎓 LMS Portal
      </Link>

      <div className="flex gap-5 items-center">

        <Link to="/">Home</Link>

        <Link to="/courses">Courses</Link>

        {isLoggedIn && (
          <>
            <Link to="/dashboard">
              Dashboard
            </Link>

            <Link to="/profile">
              Profile
            </Link>

            <Link to="/admin">
              Admin
            </Link>
          </>
        )}

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600"
            >
              Register
            </Link>
          </>
        )}

      </div>
    </nav>
  );
}

export default Navbar;