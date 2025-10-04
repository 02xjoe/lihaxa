function SignupDoctor() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Doctor Signup</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
        <input type="text" placeholder="Specialization" className="w-full border p-2 rounded" />
        <input type="number" placeholder="Years of Experience" className="w-full border p-2 rounded" />
        <button className="bg-green-600 text-white px-4 py-2 rounded w-full">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupDoctor;