"use strict";
class baconApi extends Api {
    constructor(url = "https://baconipsum.com/api/?type=meat-and-filler&paras=1", method = "GET", success = (data) => data) {
        super(url, method, success);
    }
    //overriden
    processData(rawData) {
        this.proccesedData = rawData[0];
        return this;
    }
}
