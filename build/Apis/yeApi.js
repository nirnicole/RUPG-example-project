"use strict";
class yeApi extends Api {
    constructor(url = "https://api.kanye.rest", method = "GET", success = (data) => data) {
        super(url, method, success);
    }
    processData(rawData) {
        this.proccesedData = rawData.quote;
        return this;
    }
}
//# sourceMappingURL=yeApi.js.map