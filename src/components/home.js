import { useNavigate } from "react-router-dom";

export default function HomePage() {

  const navigate = useNavigate();

  const handleButton =()=>{
    console.log("Button clicked");
    navigate("/Skills");
  }
  const handlecontact =()=>{
    console.log("Contact clicked");
    navigate("/Contact");
  }
  const handleducation =()=>{
    console.log("education clicked");
    navigate("/education");
  }
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <header className="w-full max-w-4xl text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Welcome to My Portfolio</h1>
          <p className="text-lg text-gray-600 mt-2">Showcasing my projects and skills</p>
        </header>
        
        <section className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">About Me</h2>
          <p className="text-gray-600 mt-2">
          Hello! I'm <span className="font-semibold text-blue-800">P Durgaprasad</span>, a passionate and driven software developer with a strong foundation in full-stack web development. I specialize in building modern web applications using the latest technologies like React, Node.js, and more. My goal is to create user-friendly, scalable, and responsive web applications that solve real-world problems.

            I am a passionate developer with experience in modern web technologies. I love building
            responsive and user-friendly applications.
          </p>
        </section>
        <div className="bg-black p-4 rounded-lg flex flex-row gap-2">
  <button
    onClick={handleButton}
    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
  >
    Skills
  </button>
  <button
    onClick={handleducation}
    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
  >
    education
  </button>
  
  <button
    onClick={handlecontact}
    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
  >
    contact
  </button>
</div>

        
        <footer className="w-full max-w-4xl text-center mt-8 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </footer>
      </div>
    );
  }