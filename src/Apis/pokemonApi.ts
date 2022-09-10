class pokemonApi extends Api{

    pname: string | undefined
    frontPicture: string | undefined
    
    constructor(apiInterface:AxiosCall | AjaxCall = new AjaxCall(), url: string = `https://pokeapi.co/api/v2/pokemon/1`){
        super(apiInterface, url)
    }

    //overriden
    async getData(id: number | undefined = 0){
        //proccesing
        if(id === undefined || id===0){
            id = Math.floor(Math.random()*900 +1)
        }
        this.url = `https://pokeapi.co/api/v2/pokemon/${id}/`
        let resolvedPromise = await this.callApi()
        return resolvedPromise
    }

    processData(rawData: any){
        this.pname = rawData.name
        this.frontPicture = rawData.sprites.front_default
        let data: typeof Pokemon = {picture: this.frontPicture, pname: this.pname}
        this.proccesedData = data
        return this.proccesedData
    }
}

let Pokemon:{
    picture: string | undefined,
    pname: string | undefined
}