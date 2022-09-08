/*
  Author: Nir Nicole
  Date: 24/8/22
  M |V| C architecture:
  this is the View module.
  this script contains all of the page rendering flow,
  driven by the Controller and according to the Model(logicModule).
*/
const rupgRender = function () {

    //template design pattern
    const renderPage = function(res: any){
        console.log(res);
        renderUsers(res.users.userList)
        renderMainUser(res.users.mainUser)
        renderQuote(res.kanye.proccesedData)
        renderPokemon(res.pokemon.frontPicture, res.pokemon.pname)
        renderAboutMe(res.bacon.proccesedData)
    }

    const renderMainUser = function (mainUser: typeof User| undefined) {
        const source = $("#mainUser-template").html()
        const template = Handlebars.compile(source)
        let newHTML = template(mainUser)
        $(".user-container").empty()
        $(".user-container").append(newHTML)
      }

    const renderUsers = function (users: typeof User[]) {
        const source = $("#users-template").html()
        const template = Handlebars.compile(source)
        let newHTML = template({ users })
        $(".friends-container").empty()
        $(".friends-container").append(newHTML)
      }

      const renderQuote = function (quote: string) {
        const source = $("#yeQuote-template").html()
        const template = Handlebars.compile(source)
        let newHTML = template({quote: quote})
        $(".quote-container").empty()
        $(".quote-container").append(newHTML)
      }

      const renderPokemon = function (picture: string | undefined, pname: string | undefined) {
        Handlebars.registerHelper('makeCapital', (str) => `${str.charAt(0).toUpperCase() + str.slice(1)}`)
        const source = $("#pokemon-template").html()
        const template = Handlebars.compile(source)
        let newHTML = template({picture: picture, pname: pname})
        $(".pokemon-container").empty()
        $(".pokemon-container").append(newHTML)
      }

      const renderAboutMe = function (bacon: string | undefined) {
        const source = $("#aboutMe-template").html()
        const template = Handlebars.compile(source)
        let newHTML = template({bacon: bacon})
        $(".meat-container").empty()
        $(".meat-container").append(newHTML)
      }

      return {
        renderPage,
        renderMainUser,
        renderUsers,
        renderQuote,
        renderPokemon,
        renderAboutMe
}
}


