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
this is the parent class of all api classes.
every structual change will be made here and be inherited to each api class (see the error handeling for example).
note that each api will also implement its uniqe data proccess according to its destination api.
by default, all api calls are now a "GET" call.
*/
class Api {
    constructor(callerInteface, url, method = "GET", success = (data) => data) {
        this.url = "";
        this.method = "";
        this.callerInteface = callerInteface; //dependancy injection
        this.url = url;
        this.method = method;
        this.success = success;
    }
    callApi(attempts = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callerInteface
                .getApi(this.url)
                .catch((error) => {
                this.errorHandeler(this.callApi, attempts);
            });
        });
    }
    errorHandeler(method, attempts) {
        if (attempts++ < 3) {
            console.warn(`error in : ${this.constructor.name} \n
                        Attampts left: ${3 - attempts}\n
                        trying again...`);
            return method(attempts);
        }
        else {
            console.log(`attampet limit reached, please check whats wrong`);
        }
    }
    processData(rawData) {
        this.proccesedData = rawData;
        return this;
    }
}
//# sourceMappingURL=Api.js.map