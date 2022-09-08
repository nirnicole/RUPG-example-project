"use strict";
/*
  Author: Nir Nicole
  Date: 07/09/22
  |M| V C architecture:
  this is the Model module.
  this script contains all of the page data,
  driven by the Controller and used by the View(renderModule).
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//save the result object in here
const rupgModel = function () {
    let yeInstance = new yeApi();
    let baconInstance = new baconApi();
    let pokeInstance = new pokemonApi();
    let pokeInstance2 = new pokemonApi();
    let usersInstance = new userGenApi();
    let proccesedData;
    function getData() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield callAll().then(function (results) {
                console.log("start proccesing:");
                // console.log(results);
                proccesedData = {
                    users: usersInstance.processData(results.userPromise.results),
                    kanye: yeInstance.processData(results.kanyeRes),
                    bacon: baconInstance.processData(results.baconPromise),
                    pokemon: pokeInstance.processData(results.pokePromise),
                };
                return proccesedData;
            });
        });
    }
    function callAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let kanyePromise = yeInstance.callApiAjax();
            let baconPromise = baconInstance.callApiAjax();
            let pokePromise = pokeInstance.getPokemaon(0);
            let pokePromise2 = pokeInstance2.callApiAjax();
            let userGenPromise = usersInstance.getData();
            return yield Promise.all([kanyePromise, baconPromise, pokePromise, userGenPromise, pokePromise2])
                .then(function (results) {
                return {
                    kanyeRes: results[0],
                    baconPromise: results[1],
                    pokePromise: results[2],
                    userPromise: results[3],
                    pokePromise2: results[4],
                };
            });
        });
    }
    function processData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return data;
        });
    }
    return {
        getData
    };
};
//   const renderAll2 = function (str: string, str2: string) {
//     const source = $("#first-template").html()
//     const template = Handlebars.compile(source)
//     let newHTML = template({ text: str })
//     $("body").append(newHTML)
//   }
//# sourceMappingURL=model.js.map