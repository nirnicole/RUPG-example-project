class Api {

     private url: string =""
     private method: string =""
     private success: (data: any)=> any

     proccesedData: any 

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

    processData(rawData: any){
        this.proccesedData = rawData
        return this
    }
}