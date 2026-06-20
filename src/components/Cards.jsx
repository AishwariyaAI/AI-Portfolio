import { useNavigate } from "react-router-dom";

const data = [
  {
    emoji:"💡",
    title:"Projects",
    desc:"Explore my portfolio of ML projects, from landmark detection to real-time pest monitoring systems",
    link:"/projects"
  },

  {
    emoji:"🚀",
    title:"Experience",
    desc:"Professional journey, internships, and hands-on development experience in Python and ML",
    link:"/experience"
  },

  {
    emoji:"⚙️",
    title:"Tech Stack",
    desc:"Deep dive into my technical skills: Python, TensorFlow, AWS, OpenCV, and more",
    link:"/techstack"
  },

  {
    emoji:"📚",
    title:"Publications",
    desc:"Research papers, technical documentation, and AI innovations in Machine Learning, Computer Vision, and Generative AI.",
    link:"/publications"
  },

  {
    emoji:"🏆",
    title:"Certifications",
    desc:"Professional certifications, internship achievements, technical training, and continuous learning in Artificial Intelligence and Data Science.",
    link:"/certifications"
  },

  {
    emoji:"✍️",
    title:"Blog",
    desc:"AI engineering insights, project breakdowns, RAG systems, AI Agents, FastAPI, and Generative AI learning experiences.",
    link:"/blog"
  },

  {
    emoji:"📬",
    title:"Contact",
    desc:"Let's collaborate on ML projects or discuss opportunities in AI and cloud computing",
    link:"/contact"
  },
];

const Cards = () => {

  const navigate = useNavigate();

  return (
    <div className="py-32 px-8">

      <div className="text-center">

        <p className="text-blue-600 font-semibold tracking-widest uppercase">
          Explore
        </p>

        <h1 className="text-7xl font-black mt-4 text-slate-900">
          What I Do
        </h1>

        <p className="text-2xl text-slate-600 mt-6 max-w-3xl mx-auto">
          From machine learning models to cloud architecture,
          I build end-to-end AI solutions
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-7xl mx-auto">

        {data.map((item,index)=>(

          <div
            key={index}

            onClick={()=>{
              navigate(item.link);
            }}

            className="card p-10 cursor-pointer"
          >

            <div className="w-20 h-20 rounded-3xl bg-slate-100 flex items-center justify-center text-4xl mb-8">

              {item.emoji}

            </div>

            <h1 className="text-4xl font-bold text-slate-900">
              {item.title}
            </h1>

            <p className="text-slate-600 mt-6 text-xl leading-relaxed">
              {item.desc}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Cards;