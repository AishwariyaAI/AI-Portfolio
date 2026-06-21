const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#f8fafc]">

      {/* Blue Glow */}
      <div
        className="
          absolute
          top-[-200px]
          left-[-100px]
          w-[500px]
          h-[500px]
          bg-blue-400
          opacity-20
          blur-[140px]
          rounded-full
        "
      ></div>

      {/* Cyan Glow */}
      <div
        className="
          absolute
          top-[200px]
          right-[-100px]
          w-[500px]
          h-[500px]
          bg-cyan-300
          opacity-20
          blur-[140px]
          rounded-full
        "
      ></div>

      {/* Green Glow */}
      <div
        className="
          absolute
          bottom-[-200px]
          left-[30%]
          w-[500px]
          h-[500px]
          bg-emerald-300
          opacity-20
          blur-[140px]
          rounded-full
        "
      ></div>

    </div>
  );
};

export default Background;