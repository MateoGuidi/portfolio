skills = [
    { name: "HTML", icon: "../img/skills/icohtml.png" },
    { name: "CSS", icon: "../img/skills/icocss.png" },
    { name: "TailwindCSS", icon: "../img/skills/icotailwind.png" },
    { name: "Bootstrap", icon: "../img/skills/icobootstrap.png" },
    { name: "JavaScript", icon: "../img/skills/icojs.png" },
    { name: "Vue.js", icon: "../img/skills/icovuejs.png" },
    { name: "Node.js", icon: "../img/skills/iconodejs.png" },
    { name: "React", icon: "../img/skills/icoreact.png" },
    { name: "MongoDB", icon: "../img/skills/icomongodb.png" },
    { name: "Python", icon: "../img/skills/icopython.png" },
    { name: "Java", icon: "../img/skills/icojava.png" },
    { name: "C#", icon: "../img/skills/icocsharp.png" },
    { name: "C", icon: "../img/skills/icoc.png" },
    { name: "Shell", icon: "../img/skills/icoshell.webp" },
    { name: "PHP", icon: "../img/skills/icophp.png" },
    { name: "Symfony", icon: "../img/skills/icosymfony.png" },
    { name: "Git", icon: "../img/skills/icogit.png" },
    { name: "GitHub", icon: "../img/skills/icogithub.png" },
    { name: "SQL", icon: "../img/skills/icosql.png" },
    { name: "Unity", icon: "../img/skills/icounity.png" },
    { name: "Markdown", icon: "../img/skills/icomarkdown.png" },
    { name: "Visual Studio", icon: "../img/skills/icovs.png" },
    { name: "Visual Studio Code", icon: "../img/skills/icovsc.png" },
    { name: "IntelliJ IDEA", icon: "../img/skills/icointellijidea.png" },
    { name: "Netbeans", icon: "../img/skills/iconetbeans.png"},
    { name: "NPM", icon: "../img/skills/iconpm.png" },
]

function showContainers() {
    const skillsContainer = document.getElementById("skills-container");
    skills.forEach((skill, index) => {
        const skillSpan = document.createElement("span");
        skillSpan.className = "bg-blue-100 text-lg text-blue-700 px-3 py-1 rounded-lg flex items-center gap-2 skill-fade-in cursor-default";
    
        const skillIcon = document.createElement("img");
        skillIcon.src = skill.icon;
        skillIcon.alt = skill.name;
        skillIcon.className = "h-5 w-auto icon";
    
        const skillName = document.createTextNode(skill.name);

        const tooltip = document.createElement("span");
        tooltip.className = "tooltip-text hidden absolute bg-gray-700 text-white text-sm rounded-lg px-2 py-1 shadow-md -top-10 left-1/2 transform -translate-x-1/2";
    
        skillSpan.appendChild(skillIcon);
        skillSpan.appendChild(skillName);
    
        setTimeout(() => {
            skillsContainer.appendChild(skillSpan);
            setTimeout(() => skillSpan.classList.add("show"), 20);
        }, index * 250);
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    showContainers();
});

