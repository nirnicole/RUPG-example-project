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
    constructor(url, method, success) {
        this.url = "";
        this.method = "";
        this.url = url;
        this.method = method;
        this.success = success;
    }
    callApiAjax(attempts = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield $.ajax({
                method: this.method,
                url: this.url,
                success: result => result,
                error: result => "error"
            }).catch((error) => {
                console.warn(error);
                if (attempts++ < 3) {
                    console.log(`error in : ${this.constructor.name} trying again...`);
                    return this.callApiAjax(attempts);
                }
                else {
                    console.log(`attampet limit reached(${attempts}), please check whats wrong`);
                }
            });
            return response;
        });
    }
    processData(rawData) {
        this.proccesedData = rawData;
        return this;
    }
}
//# sourceMappingURL=Api.js.map