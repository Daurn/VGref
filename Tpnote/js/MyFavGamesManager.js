import App from "./App.js";
import DAO from "./DAO.js";
import GamePreviewDiv from "./Componnents/GamePreviewDiv.js";

export default class MyFavGamesManager {

    static favoritesButtonOnClick(){

        const myFavGames = DAO.loadMyGames();

        App.pageSection.innerHTML = "";

        const divMyFavorites = document.createElement("div");
        divMyFavorites.classList.add("myFavorites");
        //divMyFavorites.addEventListener("click", ReasearchManager.researchButtonOnClick.bind(ReasearchManager));
        App.pageSection.append(divMyFavorites)

        myFavGames.forEach(favGame=>{
            const divPreview = new GamePreviewDiv(favGame, this.favoritesButtonOnClick.bind(this));
            divMyFavorites.append(divPreview.div);
        })
    }

}