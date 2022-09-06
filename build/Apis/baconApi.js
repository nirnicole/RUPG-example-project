"use strict";
class baconApi extends Api {
    constructor(url = "https://baconipsum.com/api/?type=meat-and-filler", method = "GET", success = (data) => data) {
        super(url, method, success);
    }
}
