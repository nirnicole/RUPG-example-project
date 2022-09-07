class baconApi extends Api{

    constructor(url: string = "https://baconipsum.com/api/?type=meat-and-filler&paras=1", method: string = "GET", success = (data: any)=>data){
        super(url, method, success)
    }

    //overriden
    processData(rawData: any){
        this.proccesedData = rawData[0]
        return this
    }

}