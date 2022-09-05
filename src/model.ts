class Api {

    constructor(){

    }

    async callAll() {
        let result

        let kanyePromise = $.ajax({
            method: "GET",
            url: "https://api.kanye.rest",
            success: (data) => data
        })
        let kanyePromise2 = $.ajax({
                method: "GET",
                url: "https://api.kanye.rest",
                success: (data) => data
            })
        
        await Promise.all([kanyePromise, kanyePromise2])
        .then(function (results) {
            result =  {
                kanyeRes: results[0],
                kanyeRes2: results[1]
            }
        })

        return result
    
    }

}