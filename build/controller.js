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
callAll().then((result) => {
    console.log(result);
});
function callAll() {
    return __awaiter(this, void 0, void 0, function* () {
        let result;
        let kanyePromise = new yeApi().callApiAjax();
        let baconPromise = new baconApi().callApiAjax();
        let pokePromise = new pokemonApi().getPokemaon(4);
        let pokePromise2 = new pokemonApi().getPokemaon(Math.floor(Math.random() * 10));
        let userGenPromise = new userGenApi().callApiAjax();
        yield Promise.all([kanyePromise, baconPromise, pokePromise, userGenPromise, pokePromise2])
            .then(function (results) {
            result = {
                kanyeRes: results[0],
                baconPromise: results[1],
                pokePromise: results[2].sprites.back_default,
                userPromise: results[3],
                pokePromise2: results[4].sprites.back_default,
            };
        });
        return result;
    });
}
