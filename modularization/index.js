const Tiger = require ("./Tiger")
const Wolf = require ("./Wolf")

const fighting = (Tiger,Wolf) => {
    if(Tiger.strength>Wolf.strength) {
        Tiger.growl()
        return
    }

    if(Wolf.strength>Tiger.strength) {
        Wolf.howl()
        return
    }

    console.log ("Tiger and Wolf have same strength")
}

const tiger = new Tiger()
const wolf = new Wolf()

fighting(tiger,wolf)