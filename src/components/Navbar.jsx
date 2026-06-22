import { Link } from "react-router-dom";

function Navbar() {
return ( <nav className="bg-blue-900 text-white shadow-lg"> <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">


    <h1 className="text-2xl font-bold">
      🎓 LMS Portal
    </h1>

    <div className="flex gap-6 font-medium">

      <Link to="/" className="hover:text-yellow-300">
        Home
      </Link>

      <Link to="/courses" className="hover:text-yellow-300">
        Courses
      </Link>

      <Link to="/dashboard" className="hover:text-yellow-300">
        Dashboard
      </Link>

      <Link to="/profile" className="hover:text-yellow-300">
        Profile
      </Link>

      <Link to="/admin" className="hover:text-yellow-300">
        Admin
      </Link>

      <Link to="/login" className="hover:text-yellow-300">
        Login
      </Link>

    </div>
  </div>
</nav>

);
}

export default Navbar;
