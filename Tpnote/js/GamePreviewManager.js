import App from "./App.js";
import DAO from "./DAO.js";
import GamePreviewDiv from "./Componnents/GamePreviewDiv.js";

export default class GamePreviewManager {

    static favoritesButtonOnClick(){

        const myFavGames = DAO.loadMyGames();

        App.pageSection.innerHTML = "";

        const divMyFavorites = document.createElement("div");
        divMyFavorites.classList.add("myFavorites");
        App.pageSection.append(divMyFavorites)

        myFavGames.forEach(favGame=>{
            const divPreview = new GamePreviewDiv(favGame, this.favoritesButtonOnClick.bind(this));
            divMyFavorites.append(divPreview.div);
        })
    }

}