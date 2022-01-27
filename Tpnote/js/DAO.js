import Game from "./Models/Game.js";

export default class DAO {

    static #mapGames = new Map();

    static #myFavGames = new Map();

    static URL = "";

    static async downloadGamesDatas(research) {

        this.#mapGames.clear();

        try {
            this.URL = "https://www.giantbomb.com/api/games/?api_key=e7e927f170d6dbf5575571b5b6441c47e207f072&format=json&limit=12&filter=name:" + research

            const resGamesList = await fetch(this.URL);


            const jsonListRequest = await resGamesList.json();

            const gamesList = jsonListRequest.results;

            if (!gamesList || !Array.isArray(gamesList)) {
                throw new Error("Données réponse non conformes");
            }

            for (let i = 0; i < gamesList.length; i++) {
                const tempJsonListRequest = gamesList[i];

                const game = new Game(tempJsonListRequest);
                this.#mapGames.set(game.name, game);
            }

            return this.#mapGames;
        } catch (error) {
            console.error(error);
            alert("Erreur pendant le téléchargement des Jeux");
        }
    }

    static addToMyFavGames(game){
        game.setFavorites();
        this.#myFavGames.set(game.name);
        this.saveMyFavGames();
    }

    static removeFromMyFavGames(game) {
        game.setFavorites()
        this.#myFavGames.delete(game.name);
        this.saveMyFavGames();
    }

    static saveMyFavGames(){
        const myGamesTab = Array.from(this.#myFavGames.values());
        window.localStorage.setItem("myFavGames", JSON.stringify(myGamesTab));
    }

    static loadMyGames() {

        this.#myFavGames = new Map();
        const json = window.localStorage.getItem("myFavGames");
        if (!json) {
            return this.#myFavGames;
        }
        const parsedTab = JSON.parse(json);
        parsedTab.forEach(gameObj => {
            gameObj.setFavorites();
        });
        return this.#myFavGames;
    }


}