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
class baconApi extends Api {
    constructor(apiInterface = new AjaxCall(), url = "https://baconipsum.com/api/?type=meat-and-filler&paras=1") {
        super(apiInterface, url);
    }
    //overriden
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            //proccesing
            let resolvedPromise = yield this.callApi();
            return resolvedPromise;
        });
    }
    //overriden
    processData(rawData) {
        this.proccesedData = { bacon: rawData[0] };
        return this.proccesedData;
    }
}
//# sourceMappingURL=baconApi.js.map