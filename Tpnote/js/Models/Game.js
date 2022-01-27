export default class Game {
    name = "";
    nbPlatform = -1;
    platforms = [];
    image = "";
    smallImage = "";
    releaseDate = "";
    smallDescription = "";
    description = "";
    favorites = false;

    jsonGame;

    constructor(jsonGame) {
        this.jsonGame = jsonGame;

        this.name = jsonGame.name;
        this.nbPlatform = jsonGame.platforms.length;
        for (let i = 0; i < this.nbPlatform; i++){
            this.platforms.push(jsonGame.platforms[i].name);
        }
        this.image = jsonGame.image.screen_url;
        this.smallImage = jsonGame.image.small_url;
        this.releaseDate = jsonGame.expected_release_day;
        this.smallDescription = jsonGame.deck;
        this.description = jsonGame.description;
    }

    static setFavorites(){
        this.favorites = !this.favorites;
    }

    displayPlatforms(){
        let result = "";
        if (this.nbPlatform && !this.platforms ){
            result = result + this.nbPlatform;
        }
        else if(this.nbPlatform < 6){
            for (let i = 0; i < this.nbPlatform; i++){
                result = result + "<p>" + this.platforms[i] + "</p>\n"
            }
        } else {
            for (let i = 0; i < 4; i++){
                result = result + "<p>" + this.platforms[i] + "</p>\n"
            }
            result = result + "<p> +" + (this.nbPlatform - 4) + "</p>\n"
        }
        return result;
    }
}