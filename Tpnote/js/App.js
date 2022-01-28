import DAO from "./DAO.js";
import GamePreviewManager from "./GamePreviewManager.js";
import ReasearchManager from "./ReasearchManager.js";


export default class App{

    static pageSection;

    static researchBar;


    static init(){
        DAO.loadMyGames();
        DAO.downloadGamesDatas("");

        this.pageSection = document.querySelector(".pageSection");
        if (!this.pageSection) {
            throw new Error("sectionPage introuvable");
        }

        this.researchBar = document.querySelector(".researchBar");
        if (!this.researchBar) {
            throw new Error("boutonRecherche introuvable");
        }


        const researchButton = document.querySelector(".researchButton");
        if (!researchButton) {
            throw new Error("boutonRecherche introuvable");
        }
        researchButton.addEventListener("click", ReasearchManager.researchButtonOnClick.bind(ReasearchManager));


        const favoritesButton = document.querySelector(".favoritesButton");
        if (!favoritesButton) {
            throw new Error("boutonFavoris introuvable");
        }
        favoritesButton.addEventListener("click", GamePreviewManager.favoritesButtonOnClick.bind(GamePreviewManager));

    }

    static displayLoaderPageSection() {

        this.pageSection.innerHTML = "";
        const loader = document.createElement("div");
        loader.classList.add("loader");
        this.pageSection.append(loader);
    }
}

window.onload = App.init.bind(App);