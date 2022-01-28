import App from "./App.js";
import DAO from "./DAO.js";
import GamePreviewDiv from "./Componnents/GamePreviewDiv.js";

export default class ReasearchManager{
    static async researchButtonOnClick(){
        App.displayLoaderPageSection();
        const gamesMap = await DAO.downloadGamesDatas(App.researchBar.value);
        App.pageSection.innerHTML = "";

        const divMyFavorites = document.createElement("div");
        divMyFavorites.classList.add("myFavorites");
        divMyFavorites.innerHTML = "";
        //App.pageSection.innerHTML = divMyFavorites.innerHTML;

        const gamesTab = Array.from(gamesMap.values());

        for(let i = 0; i < gamesTab.length; i++) {
            let gamePreviewDiv = new GamePreviewDiv(gamesTab[i],divMyFavorites);
            divMyFavorites.append(gamePreviewDiv.div);
        }
        App.pageSection.append(divMyFavorites);
    }
}