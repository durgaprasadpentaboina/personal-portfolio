import React from "react";
import { useNavigate } from "react-router-dom";
const Skills = () => {
  const navigate = useNavigate();
  const handleBackbutton = () => {

    navigate ("/ ");
  }
  // Define an array of skills
  const skills = [
    "JavaScript (ES6+)",
    "React.js & Redux",
    "HTML5 & CSS3",
    "Node.js",
    "Git/GitHub",
  ];

  // Define an array of education details
 
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">About Skills</h1>
        <p className="text-lg text-gray-700 mb-6"></p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Skills</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Let's Connect!</h2>
        <p className="text-gray-700 mt-4">Feel free to reach out to me via email: <span className="font-semibold text-black-600">durgaprasadpentaboina2@gmai.com</span> or connect with me on LinkedIn!</p>
        <p className="text-gray-700 mt-4">Feel free to reach out to me via phone number: <span className="font-semibold text-black-600">7675944130</span></p>
        <button 
onClick={handleBackbutton}
className="bg-gray-600 text-white mt-6 px-4 py-2 ml-100px rounded-lg hover:bg-gray-800 transition"
>
Back
</button>
      </div>
     
    </div>
  );
};


export default Skills;
