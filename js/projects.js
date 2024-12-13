projects = [
    { name: "MinecraftDle", icon: "../img/projects/minecraftdle.webp", visu: "../img/projects/minecraftdlevisu.png" },
    { name: "Charisme", icon: "../img/projects/discord.png" },
    { name: "SimplerMC", icon: "../img/projects/simplermc.png" },
    { name: "Odomo", icon: "../img/projects/odomo.png" },
    { name: "Towa", icon: "../img/projects/towa.png" },
    { name: "DeckBuildDuel", icon: "../img/projects/deck.png" },
    { name: "LabyGame", icon: "../img/projects/labygame.png" },
    { name: "BookBorrower", icon: "../img/projects/bookborrower.png" },
]

function showContainers() {    
    const projectsContainer = document.getElementById("projects-container");
    projects.forEach((skill, index) => {
        const translatedInfo = langData[skill.name];
        const skillSpan = document.createElement("span");
        skillSpan.className = "bg-blue-100 text-lg text-blue-700 px-3 py-1 rounded-lg flex items-center gap-2 skill-fade-in";
        skillSpan.dataset.info = translatedInfo;

        const skillLink = document.createElement("a");
        skillLink.href = "../projects/" + skill.name + ".html";

        const skillIcon = document.createElement("img");
        skillIcon.src = skill.icon;
        skillIcon.alt = skill.name;
        skillIcon.className = "h-5 w-auto icon";

        const skillIndex = document.createElement("i");
        skillIndex.className = "font-bold hidden";

        const skillName = document.createTextNode(skill.name);

        skillSpan.appendChild(skillIndex);
        skillSpan.appendChild(skillIcon);
        skillSpan.appendChild(skillName);
        skillLink.appendChild(skillSpan);

        setTimeout(() => {
            projectsContainer.appendChild(skillLink);
            setTimeout(() => skillSpan.classList.add("show"), 20);
        }, index * 250);
    });
}

