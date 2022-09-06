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
class Apiclass {
    constructor() {
    }
    callAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            let kanyePromise = this.yeApi();
            let kanyePromise2 = this.yeApi();
            let kanyePromise3 = this.yeApi();
            yield Promise.all([kanyePromise, kanyePromise2, kanyePromise3])
                .then(function (results) {
                result = {
                    kanyeRes: results[0],
                    kanyeRes2: results[1],
                    kanyeRes3: results[2]
                };
            });
            return result;
        });
    }
    yeApi() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield $.ajax({
                method: "GET",
                url: "https://api.kanye.rest",
                success: function (data) {
                    console.log("hi");
                    console.log(data.quote);
                    return data.quate;
                }
            });
        });
    }
}
const renderAll2 = function (str, str2) {
    const source = $("#first-template").html();
    const template = Handlebars.compile(source);
    let newHTML = template({ text: str });
    $("body").append(newHTML);
};
