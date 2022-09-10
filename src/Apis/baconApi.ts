class baconApi extends Api{
    
    constructor(apiInterface:AxiosCall | AjaxCall = new AjaxCall(), url: string = "https://baconipsum.com/api/?type=meat-and-filler&paras=1"){
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
        this.proccesedData = {bacon: rawData[0]}
        return this.proccesedData
    }

}
