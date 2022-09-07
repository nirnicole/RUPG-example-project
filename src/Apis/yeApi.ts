class yeApi extends Api{

    constructor(url: string = "https://api.kanye.rest", method: string = "GET", success = (data: any)=>data){
        super(url, method, success)
    }

    processData(rawData: any){
        this.proccesedData = rawData.quote
        return this
    }
}