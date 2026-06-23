import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { auth } from "../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();

const handleLogin = async (e) => {
e.preventDefault();


try {
  await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  localStorage.setItem(
    "isLoggedIn",
    "true"
  );

  localStorage.setItem(
    "userEmail",
    email
  );

  alert("🎉 Login Successful!");

  navigate("/dashboard");
} catch (error) {
  alert(error.message);
}


};

return (
<> <Navbar />


  <div className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-900 flex justify-center items-center">

    <div className="bg-white p-8 rounded-2xl shadow-2xl w-[400px]">

      <h1 className="text-3xl font-bold text-center mb-2">
        Welcome Back 👋
      </h1>

      <p className="text-gray-500 text-center mb-6">
        Login to continue learning
      </p>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border p-3 rounded-lg mb-4"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border p-3 rounded-lg mb-4"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>

      </form>

      <p className="text-center mt-5 text-gray-600">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-blue-600 font-semibold"
        >
          Register
        </Link>
      </p>

    </div>

  </div>
</>


);
}

export default Login;
