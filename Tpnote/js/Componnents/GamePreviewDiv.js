import GameSheetManager from "../GameSheetManager.js";

export default class GamePreviewDiv{
    div;

    constructor(game, callBackClick) {
        const divGamePreview = document.createElement("div");
        divGamePreview.classList.add("gamePreview");

        let name = game.name;
        let image = game.image;

        divGamePreview.innerHTML =
            "<div class=\"gamePreview\" >\n" +
            "        <img src=\" " + image + "\" alt=\"" + name + "\">\n" +
            "        <div class=\"platform\">\n" +
                        game.displayPlatforms() +
            "        </div>\n" +
            "        <h3>" + name + "</h3>\n" +
            "</div>";

        if (callBackClick) {
            divGamePreview.onclick = () => {
                callBackClick(game);
            };
        }
        this.div = divGamePreview;
        console.log("test");
        this.div.addEventListener("click", function (){
            console.log("test event listener");
            GameSheetManager.gamePreviewOnClick(game);
        });
        //fonction annnyme pr appeler onclick
    }
}