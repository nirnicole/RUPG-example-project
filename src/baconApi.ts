class baconApi extends Api{

    constructor(url: string = "https://baconipsum.com/api/?type=meat-and-filler", method: string = "GET", success = (data: any)=>data){
        super(url, method, success)
    }


}