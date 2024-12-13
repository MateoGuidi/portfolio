softskills = [
    { name: "Photoshop", icon: "../img/softskills/icophotoshop.png", url: "https://www.adobe.com/fr/products/photoshop.html" },
    { name: "Illustrator", icon: "../img/softskills/icoillustrator.png", url: "https://www.adobe.com/fr/products/illustrator.html"},
    { name: "Premiere Pro", icon: "../img/softskills/icopremierepro.png", url: "https://www.adobe.com/fr/products/premiere.html" },
    { name: "After Effects", icon: "../img/softskills/icoaftereffects.png", url: "https://www.adobe.com/fr/products/aftereffects.html" },
    { name: "InDesign", icon: "../img/softskills/icoindesign.png", url: "https://www.adobe.com/fr/products/indesign.html"},
    { name: "FL Studio", icon: "../img/softskills/icoflstudio.png", url: "https://www.image-line.com/fl-studio/" },
    { name: "Studio One", icon: "../img/softskills/icostudioone.png", url: "https://www.presonus.com/pages/studio-one-pro"},
    { name: "Davinci Resolve", icon: "../img/softskills/icodavinci.png", url: "https://www.blackmagicdesign.com/fr/products/davinciresolve" },
    { name: "Windows", icon: "../img/softskills/icowindows.webp", url: "https://www.microsoft.com/fr-fr/windows"},
    { name: "MacOS", icon: "../img/softskills/icomacos.png", url: "https://www.apple.com/fr/macos/macos-sequoia/"},
    { name: "Linux", icon: "../img/softskills/icolinux.png", url: "https://www.linux.org/"},
    { name: "Word", icon: "../img/softskills/icoword.png", url: "https://www.microsoft.com/fr-fr/microsoft-365/word"},
    { name: "Excel", icon: "../img/softskills/icoexcel.png", url: "https://www.microsoft.com/fr-fr/microsoft-365/excel"},
    { name: "PowerPoint", icon: "../img/softskills/icopowerpoint.png", url: "https://www.microsoft.com/fr-fr/microsoft-365/powerpoint"},
    { name: "VirtualBox", icon: "../img/softskills/icovirtualbox.png", url: "https://www.virtualbox.org/"},
    { name: "Zoom", icon: "../img/softskills/icozoom.webp", url: "https://www.zoom.com"}
]

function showContainers() {    
    const softskillsContainer = document.getElementById("softskills-container");
    softskills.forEach((skill, index) => {
        const skillSpan = document.createElement("span");
        skillSpan.className = "bg-blue-100 text-lg text-blue-700 px-3 py-1 rounded-lg flex items-center gap-2 skill-fade-in";

        const skillLink = document.createElement("a");
        skillLink.href = skill.url;
        skillLink.target = "_blank";

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
            softskillsContainer.appendChild(skillLink);
            setTimeout(() => skillSpan.classList.add("show"), 20);
        }, index * 250);
    });
}