class userGenApi extends Api{

    userList: typeof UserList | undefined 
    mainUser: typeof User | undefined 

    constructor(apiInterface:AxiosCall | AjaxCall = new AjaxCall(), url: string = "https://randomuser.me/api/?results=7"){
        super(apiInterface, url)
    }

    async getData(){
        //proccesing
        let resolvedPromise = await this.callApi()
        return resolvedPromise.results
    }

    //override
    processData(rawData: any){
        let rawUserlist = JSON.parse(JSON.stringify(rawData))
        rawUserlist =  rawUserlist.map( (u: any) =>  (this.computeUser(u)))
        this.mainUser = rawUserlist[0]
        rawUserlist.shift
        this.userList = {users: rawUserlist}
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

let UserList: {
    users: typeof User []
}