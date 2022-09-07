class pokemonApi extends Api{

    pname: string | undefined
    frontPicture: string | undefined

    constructor(url: string = `https://pokeapi.co/api/v2/pokemon/1`, method: string = "GET", success = (data: any)=>data){
        super(url, method, success)
    }

    async getPokemaon(id: number | undefined){
        if(id === undefined || id===0){
            id = Math.floor(Math.random()*900 +1)
        }
        this.url = `https://pokeapi.co/api/v2/pokemon/${id}/`
        return await this.callApiAjax()
    }

    processData(rawData: any){
        this.proccesedData = rawData
        this.pname = rawData.name
        this.frontPicture = rawData.sprites.front_default
        return this
    }
}