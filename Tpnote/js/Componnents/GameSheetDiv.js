import Game from "../Models/Game.js";

export default class GameSheetDiv{
    div;

    constructor(game, callBackClick) {
        const divGameSheet = document.createElement("div");
        divGameSheet.classList.add("gameSheet");

        let name = game.name;
        let smallImage = game.smallImage;
        let releaseDate = game.releaseDate;
        let smallDescription = game.smallDescription;
        let description = game.description;



        divGameSheet.innerHTML =
            "<div class=\"firstPart\">\n" +
            "        <h2>" + name + "</h2>\n" +
            "        <img src=\" " + smallImage + "\" alt=\"" + name + "\">\n" +
            "    </div>\n" +
            "    <div class=\"secondPart\">\n" +
            "        <div class=\"platform\">\n" +
                        game.displayPlatforms() +
            "        </div>\n" +
            "        <h3>Sortie :<br>" + releaseDate + "</h3>\n" +
            "        <button type=\"button\" class='favoritesChange'> [+/-] Favoris</button>\n" +
            "    </div>\n" +
            "    <div class=\"smallDescription\">\n" +
                    smallDescription +
            "    </div>\n" +
            "    <div class=\"description\">\n" +
                    description +
            "    </div>" +
            "</div>";

        if (callBackClick) {
            divGameSheet.onclick = () => {
                callBackClick(game);
            };
        }
        this.div = divGameSheet;
    }
}