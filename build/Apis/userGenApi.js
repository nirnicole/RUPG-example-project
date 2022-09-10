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
class userGenApi extends Api {
    constructor(apiInterface = new AjaxCall(), url = "https://randomuser.me/api/?results=7") {
        super(apiInterface, url);
    }
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            //proccesing
            let resolvedPromise = yield this.callApi();
            return resolvedPromise.results;
        });
    }
    //override
    processData(rawData) {
        let rawUserlist = JSON.parse(JSON.stringify(rawData));
        rawUserlist = rawUserlist.map((u) => (this.computeUser(u)));
        this.mainUser = rawUserlist[0];
        rawUserlist.shift;
        this.userList = { users: rawUserlist };
        return this;
    }
    computeUser(rawUser) {
        let user = {
            fname: rawUser.name.first,
            lname: rawUser.name.last,
            picture: rawUser.picture.thumbnail,
            city: rawUser.location.city,
            state: rawUser.location.state,
        };
        return user;
    }
}
let User;
let UserList;
//# sourceMappingURL=userGenApi.js.map