"use strict";
class yeApi extends Api {
    constructor(url = "https://api.kanye.rest", method = "GET", success = (data) => data) {
        super(url, method, success);
    }
    processData(rawData) {
        this.processData = rawData.quote;
        return this;
    }
}
