import './skills.scss'

const skillsArr = [
    "Firebase",
    "Supabase",
    "Flutter",
    "JavaScript",
    "Html5",
    "Sass",
    "Postgress",
    "Mysql",
    "Git",
    "VsCode",
    "Postman",
    "Notion",
]

export const Skills = () => {
    return (
        <div className="skills">
            <div className="skills-content">
                {
                    skillsArr.map((skill, index) =>
                        <img key={index}
                            src={`assets/svg/${skill.toLowerCase()}.svg`}
                            alt={skill}
                        />
                    )
                }
            </div>
        </div>
    )
}
