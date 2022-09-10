class yeApi extends Api{

    constructor(apiInterface:AxiosCall | AjaxCall = new AjaxCall(), url: string = "https://api.kanye.rest"){
        super(apiInterface, url)
    }

    //overriden
    async getData(){
        //proccesing
        let resolvedPromise = await this.callApi()
        return resolvedPromise
    }

    //overriden
    processData(rawData: any){
        this.proccesedData = {quote: rawData.quote}
        return this.proccesedData
    }
}
