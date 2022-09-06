class Api {

     url: string =""
     method: string =""
     success: (data: any)=> any

    constructor(url: string, method: string, success: (data: any)=> any){
        this.url = url
        this.method = method
        this.success = success
    }

    callApiAjax(){
        return $.ajax({
            method: this.method,
            url:  this.url,
            success: data => data
        })
    }
}