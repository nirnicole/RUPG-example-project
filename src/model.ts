class Apiclass {

    constructor(){

    }

    async callAll() {
        let result

        let kanyePromise = this.yeApi()
        let kanyePromise2 = this.yeApi()
        let kanyePromise3 = this.yeApi()
        
        await Promise.all([kanyePromise, kanyePromise2, kanyePromise3])
        .then(function (results) {
            result =  {
                kanyeRes: results[0],
                kanyeRes2: results[1],
                kanyeRes3: results[2]            
            }
        })

        return result
    
    }

    async yeApi() {
        return await $.ajax({
            method: "GET",
            url: "https://api.kanye.rest",
            success: function(data){ 
                console.log("hi");
                console.log(data.quote);
                return data.quate}
        })
    }

}



  const renderAll2 = function (str: string, str2: string) {
    const source = $("#first-template").html()
    const template = Handlebars.compile(source)
    let newHTML = template({ text: str })
    $("body").append(newHTML)
  }