document.addEventListener("DOMContentLoaded", () => {
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
});

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
