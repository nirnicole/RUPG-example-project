class userGenApi extends Api{

    userList: typeof User[]  = [] 
    mainUser: typeof User | undefined 

    constructor(url: string = "https://randomuser.me/api/?results=7", method: string = "GET", success = (data: any)=>data){
        super(url, method, success)
    }

    async getData(){
        return await this.callApiAjax()
    }

    async processData(rawData: any){
        this.userList = await JSON.parse(JSON.stringify(rawData))

        this.userList =  this.userList.map( u =>  (this.computeUser(u)))
        this.mainUser = this.userList[0]
        this.userList.shift()

        return this
    }

    computeUser(rawUser: any){
        let user: typeof User = {
            fname: rawUser.name.first,
            lname:  rawUser.name.last,
            picture: rawUser.picture.thumbnail, 
            city:  rawUser.location.city,
            state: rawUser.location.state,
        }

        return user
    }

}


let User: {
    fname: string,
    lname: string ,
    picture: string, 
    city: string ,
    state: string,
}