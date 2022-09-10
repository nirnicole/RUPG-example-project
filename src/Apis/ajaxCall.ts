class AjaxCall {

    async getApi(url:string ){
        return await $.ajax({
            method: "GET",
            url:  url,
            success: result => result,
            error: result => "error"
        })
    }
}