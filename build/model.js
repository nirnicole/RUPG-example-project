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
class Api {
    constructor() {
    }
    callAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            let kanyePromise = $.ajax({
                method: "GET",
                url: "https://api.kanye.rest",
                success: (data) => data
            });
            let kanyePromise2 = $.ajax({
                method: "GET",
                url: "https://api.kanye.rest",
                success: (data) => data
            });
            yield Promise.all([kanyePromise, kanyePromise2])
                .then(function (results) {
                result = {
                    kanyeRes: results[0],
                    kanyeRes2: results[1]
                };
            });
            return result;
        });
    }
}
