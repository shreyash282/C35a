class Form {
    constructor(){

    }
    display(){
        var title = createElement('h2')
        title.html("Multiplayer Car Racing Game")
        title.position(430,0)
        var input = createInput("")
        input.position(550,200)
        var button = createButton("start")
        button.position(550,250)
        var greeting =createElement('h3')
        button.mousePressed(function(){
            button.hide()
            input.hide()
            var name = input.value()
            playerCount += 1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("BONJOUR " +name)
            greeting.position(550,300)
        })
    }

}