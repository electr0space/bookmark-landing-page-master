const hamburgerIcon = document.getElementById("hamburger-icon");
const hamburgerMenu = document.getElementById("hamburger-menu");

const bookmarkingTab = document.getElementById("bookmarking-tab");
const bookmarkingSection = document.getElementById("bookmarking-section");
const searchingTab = document.getElementById("searching-tab");
const searchingSection = document.getElementById("searching-section");
const sharingTab = document.getElementById("sharing-tab");
const sharingSection = document.getElementById("sharing-section");

const tabsGroup = document.querySelectorAll(".tabs-group");

const faqBlock = document.querySelectorAll(".faq-question");

hamburgerIcon.addEventListener("click", () => {
    if (hamburgerMenu.style.display !== "flex") {
        hamburgerMenu.style.display = "flex";
        hamburgerIcon.firstElementChild.src = "images/icon-close.svg";
        document.getElementById("logo-color").style.fill = "white";
        document.body.style.overflow= 'hidden';
    }
    else {
        hamburgerMenu.style.display="none";
        hamburgerIcon.firstElementChild.src = "images/icon-hamburger.svg";
        document.getElementById("logo-color").style.fill = "var(--dark-blue)";
        document.body.style.overflow= 'visible';
    }
    
})

tabsGroup[0].addEventListener("click", (e) => {
    if (e.target.id === "bookmarking-tab") {
        bookmarkingTab.classList.add("active-tab");
        searchingTab.classList.remove("active-tab");
        sharingTab.classList.remove("active-tab");

        bookmarkingSection.style.display = "block";
        searchingSection.style.display = "none";
        sharingSection.style.display = "none";
    } 
    else if (e.target.id === "searching-tab") {
        bookmarkingTab.classList.remove("active-tab");
        searchingTab.classList.add("active-tab");
        sharingTab.classList.remove("active-tab");

        bookmarkingSection.style.display = "none";
        searchingSection.style.display = "block";
        sharingSection.style.display = "none";
    }
    else if (e.target.id === "sharing-tab") { 
        bookmarkingTab.classList.remove("active-tab");
        searchingTab.classList.remove("active-tab");
        sharingTab.classList.add("active-tab");

        bookmarkingSection.style.display = "none";
        searchingSection.style.display = "none";
        sharingSection.style.display = "block";
    }
});

const setDropdown = () => {
    faqBlock.forEach((item) => {
        item.lastElementChild.classList.toggle("closed-answer");
        item.setAttribute("onclick", "dropdown(this)");
    });
}

const hideAnswers = () => {
    faqBlock.forEach((item) => {
        item.lastElementChild.classList.toggle("closed-answer");
    });
}

const dropdown = (item) => {
    item.lastElementChild.classList.toggle("closed-answer");

    item.childNodes[1].lastElementChild.classList.toggle("arrow");
    item.childNodes[1].lastElementChild.classList.toggle("arrow-closed");
}

setDropdown();
