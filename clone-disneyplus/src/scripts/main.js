document.addEventListener("DOMContentLoaded", () => {
    selectTab();
    toggleAnswer();
    hideHeroElements();
});

function selectTab() {
    const buttons = document.querySelectorAll("[data-tab-button]");

    for (let button of buttons) {
        button.addEventListener("click", (btn) => {
            const targetTab = btn.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`)
            hideAllTabs();
            tab.classList.add("shows__list--is-active");
            removeActiveButton();
            btn.target.classList.add("shows__tabs__button--is-active");
        })
    }
}

function removeActiveButton() {
    const buttons = document.querySelectorAll("[data-tab-button]");

    for (let button of buttons) {
        button.classList.remove("shows__tabs__button--is-active");
    }
}

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll("[data-tab-id]");

    for (let tab of tabsContainer) {
        tab.classList.remove("shows__list--is-active");
    }
}

function toggleAnswer() {
    const questions = document.querySelectorAll("[data-faq-question]");

    for (let question of questions) {
        question.addEventListener("click", (element) => {
            const openClass = "faq__questions__item--is-open";
            const parent = element.target.parentNode;

            parent.classList.toggle(openClass);
        });
    }
}

function hideHeroElements() {
    const heroSection = document.querySelector(".hero");
    const heroHeight = heroSection.clientHeight;

    window.addEventListener("scroll", () => {
        const currentPosition = window.scrollY;
        const header = document.querySelector("header");
        const hiddenClass = "header--is-hidden";

        if (currentPosition < heroHeight) {
            header.classList.add(hiddenClass);
        } else {
            header.classList.remove(hiddenClass);
        }
    });
}
