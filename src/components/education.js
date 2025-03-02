import React from 'react';
import { useNavigate } from "react-router-dom";
import HomePage from "./home";
function Education() {
    const navigate = useNavigate();
  
  const handleBackbutton = () => {

    navigate ("/");
  }
  // Example Education data //  hard coded data
  const educationList = [
    {
      degree: "Bachelor of technology in Computer Science(AI&ML)",
      institution: "Marri Laxman Reddy Institute of Technology and Management",
      year: "2022 - 2026",
      description: "Focus on software engineering, web development  and data structures, .",
    },
    {
      degree: "Intermediate",
      institution: "Sri vijaya Sai jr collage Bodhan",
      year: "2020 - 2022",
      //description: "Completed a React course that covered modern React development practices.",
    },
    {
      degree: "SSC",
      institution: "TS Model School Nizamsagar",
      year: "2020",
      //description: "An intensive bootcamp focused on full-stack web development with JavaScript, Node.js, and React.",
    },
  ];
// dynamic rendering//
  return (
    <section id="education" className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">Education</h2>
        <div className="mt-10 space-y-6">
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-800">{edu.degree}</h3>
              <p className="text-lg text-gray-700">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.year}</p>
              <p className="text-base text-gray-600 mt-3">{edu.description}</p>
            </div>
          ))}
        </div>
        <button 
onClick={handleBackbutton}
className="bg-gray-600 text-white px-4 m-2 py-4 rounded-lg hover:bg-gray-800 transition"
>
Back
</button>
      </div>
    </section>
  );
}

export default Education;
