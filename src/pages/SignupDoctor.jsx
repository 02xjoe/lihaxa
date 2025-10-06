const SignupDoctor = () => {
  return (
    <section className="py-12 px-6 flex justify-center">
      <form className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-center text-[--color-lihaxa-darkteal]">
          Doctor Sign Up
        </h2>
        <input type="text" placeholder="Full Name" className="border rounded w-full p-2" />
        <input type="email" placeholder="Email Address" className="border rounded w-full p-2" />
        <input type="text" placeholder="Medical License ID" className="border rounded w-full p-2" />
        <button className="w-full bg-[--color-lihaxa-main] text-white py-2 rounded hover:opacity-90 transition">
          Register
        </button>
      </form>
    </section>
  );
};

export default SignupDoctor;
