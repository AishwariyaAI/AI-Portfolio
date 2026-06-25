import profile from "../assets/Aishwariya.png";
const Navbar = () => {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">

      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <img
    src={profile}
    alt="Aishwariya"
    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
/>

        {/* Nav Links */}
        <div className="flex gap-8 text-slate-700 font-medium">

          <button className="bg-blue-50 text-blue-600 px-5 py-2 rounded-xl">
            Home
          </button>

          <button onClick={() => scrollToSection("about")}>
            About
          </button>

          <button onClick={() => scrollToSection("mywork")}>
            Projects
          </button>

          <button onClick={() => scrollToSection("experience")}>
            Experience
          </button>

          <button onClick={() => scrollToSection("blog")}>
            Blog
          </button>

          <button onClick={() => scrollToSection("contact")}>
            Contact
          </button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;