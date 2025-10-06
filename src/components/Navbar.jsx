const Navbar = ({setPage }) => {
    return (
        <nav className="flex items-center justify-between p-6 py-4 bg-[--color-lihaxa-main] text-white shadow-md">
            <div className="flex items-center space-x-3">
                <img src="/src/components/liha.png" alt="Lihaxa Logo" className="h-10 w-10 rounded-full" />          
                <span className="font-bold text-xl">Lihaxa</span>
            </div>

            <div className="space-x-4">
                <button onClick={() => setPage("home")} className="hover:underline">Home</button>
                <button onClick={() => setPage("about")} className="hover:underline">About</button>
                <button
                    onClick={() => setPage("signup-user")}
                    className="bg-[--color-lihaxa-green] px-3 py-1 rounded hover:opacity-90 transition"
                >
                    User Signup
                </button>
                <button
                    onClick={() => setPage("signup-doctor")}
                    className="bg-[--color-lihaxa-darkteal] px-3 py-1 rounded hover:opacity-90 transition"
                >
                    Doctor Signup
                </button>
            </div>
        </nav>
    );
};

export default Navbar;