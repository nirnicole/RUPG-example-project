"use strict";
class pokemonApi extends Api {
    constructor(url = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 10)}`, method = "GET", success = (data) => data) {
        super(url, method, success);
    }
    // async getPokemaon(id: number){
    //     this.url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    //     return await this.callApiAjax()
    // }
    processData(rawData) {
        this.proccesedData = rawData.sprites.back_default;
        return this;
    }
}
