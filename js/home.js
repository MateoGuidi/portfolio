skills = [
    { name: "HTML", icon: "./img/skills/icohtml.png" },
    { name: "CSS", icon: "./img/skills/icocss.png" },
    { name: "TailwindCSS", icon: "./img/skills/icotailwind.png" },
    { name: "Bootstrap", icon: "./img/skills/icobootstrap.png" },
    { name: "JavaScript", icon: "./img/skills/icojs.png" },
    { name: "Vue.js", icon: "./img/skills/icovuejs.png" },
    { name: "Node.js", icon: "./img/skills/iconodejs.png" },
    { name: "React", icon: "./img/skills/icoreact.png" },
    { name: "MongoDB", icon: "./img/skills/icomongodb.png" },
    { name: "Python", icon: "./img/skills/icopython.png" },
    { name: "Java", icon: "./img/skills/icojava.png" },
    { name: "...", icon: "" },
]

softskills = [
    { name: "Photoshop", icon: "./img/softskills/icophotoshop.png", url: "https://www.adobe.com/fr/products/photoshop.html" },
    { name: "Premiere Pro", icon: "./img/softskills/icopremierepro.png", url: "https://www.adobe.com/fr/products/premiere.html" },
    { name: "After Effects", icon: "./img/softskills/icoaftereffects.png", url: "https://www.adobe.com/fr/products/aftereffects.html" },
    { name: "FL Studio", icon: "./img/softskills/icoflstudio.png", url: "https://www.image-line.com/fl-studio/" },
    { name: "...", icon: "", url: "" }
]

projects = [
    { name: "MinecraftDle", icon: "./img/projects/minecraftdle.webp", visu: "./img/projects/minecraftdlevisu.png" },
    { name: "PixeLEMH", icon: "./img/projects/pixelemh.png" },
    { name: "Serpentini", icon: "./img/projects/serpentini.png" },
    { name: "...", icon: "" },
]

function showContainers() {
    const skillsContainer = document.getElementById("skills-container");
    skills.forEach((skill, index) => {
        const translatedInfo = langData[skill.name];
        const skillSpan = document.createElement("span");
        skillSpan.className = "bg-blue-100 text-lg text-blue-700 px-3 py-1 rounded-lg flex items-center gap-2 skill-fade-in cursor-default";
        skillSpan.dataset.info = translatedInfo;
    
        if (skill.icon != "") {
            const skillIcon = document.createElement("img");
            skillIcon.src = skill.icon;
            skillIcon.alt = skill.name;
            skillIcon.className = "h-5 w-auto icon";
            skillSpan.appendChild(skillIcon);
        }
        
    
        const skillName = document.createTextNode(skill.name);
        skillSpan.appendChild(skillName);
    
        setTimeout(() => {
            skillsContainer.appendChild(skillSpan);
            setTimeout(() => skillSpan.classList.add("show"), 20);
        }, index * 250);
    });
    
    const softskillsContainer = document.getElementById("softskills-container");
    softskills.forEach((skill, index) => {
        const skillSpan = document.createElement("span");
        skillSpan.className = "bg-blue-100 text-lg text-blue-700 px-3 py-1 rounded-lg flex items-center gap-2 skill-fade-in";

        const skillLink = document.createElement("a");

        const skillIndex = document.createElement("i");
        skillIndex.className = "font-bold hidden";

        const skillName = document.createTextNode(skill.name);

        skillSpan.appendChild(skillIndex);
        if (skill.icon != "") {
            const skillIcon = document.createElement("img");
            skillIcon.src = skill.icon;
            skillIcon.alt = skill.name;
            skillIcon.className = "h-5 w-auto icon";
            skillSpan.appendChild(skillIcon);
            skillLink.href = skill.url;
            skillLink.target = "_blank";
        } else {
            skillLink.className += " cursor-default"
        }
        skillSpan.appendChild(skillName);
        skillLink.appendChild(skillSpan);


        setTimeout(() => {
            softskillsContainer.appendChild(skillLink);
            setTimeout(() => skillSpan.classList.add("show"), 20);
        }, index * 250);
    });
    
    const projectsContainer = document.getElementById("projects-container");
    projects.forEach((skill, index) => {
        const translatedInfo = langData[skill.name];
        const skillSpan = document.createElement("span");
        skillSpan.className = "bg-blue-100 text-lg text-blue-700 px-3 py-1 rounded-lg flex items-center gap-2 skill-fade-in";
        skillSpan.dataset.info = translatedInfo;

        const skillLink = document.createElement("a");   

        const skillIndex = document.createElement("i");
        skillIndex.className = "font-bold hidden";

        const skillName = document.createTextNode(skill.name);

        skillSpan.appendChild(skillIndex);
        if (skill.icon != ""){
            const skillIcon = document.createElement("img");
            skillIcon.src = skill.icon;
            skillIcon.alt = skill.name;
            skillIcon.className = "h-5 w-auto icon";
            skillSpan.appendChild(skillIcon);
            skillLink.href = "./projects/" + skill.name + ".html";    
        } else {
            skillLink.className += " cursor-default"
        }
        skillSpan.appendChild(skillName);
        skillLink.appendChild(skillSpan);
        setTimeout(() => {
            projectsContainer.appendChild(skillLink);
            setTimeout(() => skillSpan.classList.add("show"), 20);
        }, index * 250);
    });
}

