class Api {

     url: string =""
     method: string =""
     success: (data: any)=> any

     proccesedData: any 

    constructor(url: string, method: string, success: (data: any)=> any){
        this.url = url
        this.method = method
        this.success = success
    }

    async callApiAjax(attempts:number = 0){
        let response: any = await $.ajax({
            method: this.method,
            url:  this.url,
            success: result => result,
            error: result => "error"
        }).catch((error) =>{
            console.warn(error);
            if(attempts++ < 3){
            console.log(`error in : ${this.constructor.name} trying again...`);
            return this.callApiAjax(attempts)
            }else{
                console.log(`attampet limit reached(${attempts}), please check whats wrong`);
            }
        })

        return response
    }

    processData(rawData: any){
        this.proccesedData = rawData
        return this
    }
}