"use strict";
class Api {
    constructor(url, method, success) {
        this.url = "";
        this.method = "";
        this.url = url;
        this.method = method;
        this.success = success;
    }
    callApiAjax() {
        return $.ajax({
            method: this.method,
            url: this.url,
            success: data => data
        });
    }
}
