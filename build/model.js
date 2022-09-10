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
/*
  Author: Nir Nicole
  Date: 07/09/22
  |M| V C architecture:
  this is the Model module.
  this script contains all of the page data,
  driven by the Controller and used by the View(renderModule).
*/
const rupgModel = function () {
    let yeInstance = new yeApi();
    let baconInstance = new baconApi();
    let pokeInstance = new pokemonApi();
    let usersInstance = new userGenApi();
    function getData() {
        return __awaiter(this, void 0, void 0, function* () {
            let kanyePromise = yeInstance.getData();
            let baconPromise = baconInstance.getData();
            let pokePromise = pokeInstance.getData();
            let userGenPromise = usersInstance.getData();
            return yield Promise.all([kanyePromise, baconPromise, pokePromise, userGenPromise])
                .then(function (results) {
                return {
                    kanye: yeInstance.processData(results[0]),
                    bacon: baconInstance.processData(results[1]),
                    pokemon: pokeInstance.processData(results[2]),
                    users: usersInstance.processData(results[3]),
                };
            });
        });
    }
    return {
        getData
    };
};
//# sourceMappingURL=model.js.map