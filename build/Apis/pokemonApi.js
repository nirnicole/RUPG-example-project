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
    constructor(url = `https://pokeapi.co/api/v2/pokemon/1`, method = "GET", success = (data) => data) {
        super(url, method, success);
    }
    getPokemaon(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id === undefined || id === 0) {
                id = Math.floor(Math.random() * 900 + 1);
            }
            this.url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
            return yield this.callApiAjax();
        });
    }
    processData(rawData) {
        this.proccesedData = rawData;
        this.pname = rawData.name;
        this.frontPicture = rawData.sprites.front_default;
        return this;
    }
}
//# sourceMappingURL=pokemonApi.js.map