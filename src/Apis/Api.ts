/*
this is the parent class of all api classes.
every structual change will be made here and be inherited to each api class (see the error handeling for example).
note that each api will also implement its uniqe data proccess according to its destination api.
by default, all api calls are now a "GET" call.
*/
class Api {

    url: string =""
    method: string =""
    success: (data: any)=> any

    proccesedData: any 
    callerInteface: AxiosCall | AjaxCall

    constructor(callerInteface:AjaxCall | AxiosCall , url: string, method: string = "GET", success: (data: any)=> any = (data)=>data){
        this.callerInteface = callerInteface    //dependancy injection
        this.url = url
        this.method = method
        this.success = success
    }
    
    async callApi(attempts:number = 0){
        let response: any = await this.callerInteface
        .getApi(this.url)
        .catch((error) =>{
            if(attempts++ < 3){
            console.warn(`error in : ${this.constructor.name} \n
                        Attampts left: ${3-attempts}\n
                        trying again...`);
            return this.callApi(attempts)
            }else{
                console.log(`attampet limit reached, please check whats wrong`);
            }
        })

        return response
    }

    processData(rawData: any){
        this.proccesedData = rawData
        return this
    }
}