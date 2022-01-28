import App from "./App.js";
import GameSheetDiv from "./Componnents/GameSheetDiv.js";

export default class GameSheetManager{
    static async gamePreviewOnClick(game){
        App.displayLoaderPageSection();
        App.pageSection.innerHTML = "";

        const divGameSheet = document.createElement("div");
        divGameSheet.classList.add("gameSheet");
        App.pageSection.append(divGameSheet);

        const divGameSheetContent = new GameSheetDiv(game);
        divGameSheet.append(divGameSheetContent.div);
    }
}