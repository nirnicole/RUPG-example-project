"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class pokemonApi extends Api {
    constructor(apiInterface = new AjaxCall(), url = `https://pokeapi.co/api/v2/pokemon/1`) {
        super(apiInterface, url);
    }
    //overriden
    getData(id = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            //proccesing
            if (id === undefined || id === 0) {
                id = Math.floor(Math.random() * 900 + 1);
            }
            this.url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
            let resolvedPromise = yield this.callApi();
            return resolvedPromise;
        });
    }
    processData(rawData) {
        this.pname = rawData.name;
        this.frontPicture = rawData.sprites.front_default;
        let data = { picture: this.frontPicture, pname: this.pname };
        this.proccesedData = data;
        return this.proccesedData;
    }
}
let Pokemon;
//# sourceMappingURL=pokemonApi.js.map