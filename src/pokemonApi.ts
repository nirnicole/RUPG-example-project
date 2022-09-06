class pokemonApi extends Api{

    constructor(url: string = "https://pokeapi.co/api/v2/pokemon/0", method: string = "GET", success = (data: any)=>data){
        super(url, method, success)
    }

    async getPokemaon(id: number){
        this.url = `https://pokeapi.co/api/v2/pokemon/${id}/`
        return await this.callApiAjax()
    }


}