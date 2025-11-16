import React from "react";
import '../styles/Skillsv2.css';
import Skills from "./Skills";
import javalogo from "../assets/images/Java_logo.png";
import csharplogo from "../assets/images/Csharp_Logo.png";
import jslogo from "../assets/images/javascript_logo.png";
import reactIcon from "../assets/react.svg";
import angularIcon from "../assets/images/angular.svg";
import kotlinIcon from "../assets/images/kotlin.svg";
import html5Icon from "../assets/images/html5.svg";
import { useTranslation } from 'react-i18next';

const Skillsv2 = () => {
    const languajes = [
        { name: "C#", link: "", image: csharplogo },
        { name: "Java", link: "https://github.com/GeroniMolero/Entorno_Servidor", image: javalogo },
        { name: "JS", link: "https://github.com/GeroniMolero/PeluControl", image: jslogo },
        { name: "Kotlin", link: "https://github.com/GeroniMolero/Rehabook", image: kotlinIcon },
        { name: "HTML", link: "https://github.com/GeroniMolero/DisenioInterfaces-Tema2", image: html5Icon }
    ];

    const frameworks = [
        { name: ".NET", link: "", image: csharplogo },
        { name: "React", link: "", image: reactIcon },
        { name: "Angular", link: "", image: angularIcon }
    ];

    const { t } = useTranslation();
    
        const getInitials = (name) => {
            if (!name) return '';
            // Remove non alphanumeric characters (handles names like ".NET")
            const cleaned = name.replace(/[^a-zA-Z0-9]/g, '');
            if (!cleaned) return name.slice(0, 2).toUpperCase();
            if (cleaned.length <= 3) return cleaned.toUpperCase();
            return cleaned.slice(0, 3).toUpperCase();
        };

    return (
        <section id="skills" className="section">
            <h2>{t('common.skills')}</h2>

            <div className="skills-section">
                <h3>{t('common.languages')}</h3>
                <div className="skills-row">
                    {languajes.map((skill, index) => (
                        <div className="card" key={index}>
                            {skill.link ? (
                                <a className="skill-btn" href={skill.link} target="_blank" rel="noopener noreferrer">
                                    {skill.image ? (
                                        <img src={skill.image} alt={`${skill.name} logo`} className="skill-icon" />
                                    ) : (
                                        <span className="skill-fallback" aria-hidden>{getInitials(skill.name)}</span>
                                    )}
                                    <span>{skill.name}</span>
                                </a>
                            ) : (
                                <button className="skill-btn" type="button" disabled>
                                    {skill.image ? (
                                        <img src={skill.image} alt={`${skill.name} logo`} className="skill-icon" />
                                    ) : (
                                        <span className="skill-fallback" aria-hidden>{getInitials(skill.name)}</span>
                                    )}
                                    <span>{skill.name}</span>
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>


            <div className="skills-section">
                <h3>{t('common.frameworks')}</h3>
                <div className="skills-row">
                    {frameworks.map((skill, index) => (
                        <div className="card" key={index}>
                            {skill.link ? (
                                <a className="skill-btn" href={skill.link} target="_blank" rel="noopener noreferrer">
                                    {skill.image && <img src={skill.image} alt={`${skill.name} logo`} className="skill-icon" />}
                                    <span>{skill.name}</span>
                                </a>
                            ) : (
                                <button className="skill-btn" type="button" disabled>
                                    {skill.image && <img src={skill.image} alt={`${skill.name} logo`} className="skill-icon" />}
                                    <span>{skill.name}</span>
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skillsv2;
