import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center mt-20">
      <h2 className="text-3xl font-bold mb-4">Welcome to Our Health Platform</h2>
      <p className="text-gray-700 mb-6">
        Helping you track health, schedule checkups, and connect with doctors.
      </p>
      <div className="space-x-4">
        <Link
          to="/signup-user"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Sign up as User
        </Link>
        <Link
          to="/signup-doctor"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Sign up as Doctor
        </Link>
      </div>
    </div>
  );
}

export default Home;