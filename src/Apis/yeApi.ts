class yeApi extends Api{

    constructor(url: string = "https://api.kanye.rest", method: string = "GET", success = (data: any)=>data){
        super(url, method, success)
    }

    async processData(rawData: any){
        return await rawData.quate
    }
}