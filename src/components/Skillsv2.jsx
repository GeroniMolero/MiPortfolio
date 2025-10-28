import React from "react";
import '../styles/Skillsv2.css';
import Skills from "./Skills";
import javalogo from "../assets/images/Java_logo.png";

const Skillsv2 = () => {
    const languajes = [
        { name: "C#", link: "", image:""},
        { name: "Java", link: "https://github.com/GeroniMolero/Entorno_Servidor", logo:{javalogo} },
        { name: "JS", link: "https://github.com/GeroniMolero/ProyectosReact" },
        { name: "Kotlin", link: "https://github.com/GeroniMolero/ComposePractica" },
        { name: "HTML", link: "https://github.com/GeroniMolero/DisenioInterfaces-Tema2"}
    ];

    const frameworks = [
        { name: ".NET", link: "" },
        { name: "React", link: "" },
        { name: "Angular", link: "" }
    ];

    return (
        <section id="skills" className="section">
            <h2>Habilidades</h2>

            <div className="skills-section">
                <h3>Lenguajes</h3>
                <div className="skills-row">
                    {languajes.map((skill, index) => (
                        <div className="card" key={index}>
                            {skill.link ? (
                                <a href={skill.link} target="_blank" rel="noopener noreferrer">
                                    <p>{skill.name}</p>
                                </a>
                            ) : (
                                <p>{skill.name}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="skills-section">
                <h3>Frameworks</h3>
                <div className="skills-row">
                    {frameworks.map((skill, index) => (
                        <div className="card" key={index}>
                            {skill.link ? (
                                <a href={skill.link} target="_blank" rel="noopener noreferrer">
                                    <p>{skill.name}</p>
                                </a>
                            ) : (
                                <p>{skill.name}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skillsv2;
