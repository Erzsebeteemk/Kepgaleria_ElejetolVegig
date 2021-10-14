//JQuery-vel töltöttem be a képet, címet, szöveget a html-be gyakorlatilag.
$(".kep").attr("src", data0.photo)
$(".clicked").text(data0.title)
$(".szoveg").text(data0.description)

let index=0

//BETÖLTŐFG a data.js tömb 1. elemében levő, data0 nevű objektum 3 mezőjének tartalmát tölti be.//
//0 bemeneti értékkel indul//
let betoltofg = (kepIndexe) => {
    console.log(kepIndexe)

    $(".kep").attr("src", kepadatoktomb[kepIndexe].photo)
    $(".clicked").text(kepadatoktomb[kepIndexe].title)
    $(".szoveg").text(kepadatoktomb[kepIndexe].description)


    //............ $(".thumbnail[data-szamozo='kepIndexe']").css("box-shadow", "0 0 10px 15px grey")
    //............ $(".thumbnail[data-szamozo='kepIndexe']").css("border", "blue")
    //............ $(".thumbnail[data-szamozo='kepIndexe']").toggleClass("op")


}
betoltofg(index)


//Nyilakra kattintás//
$(".jobbra").click(() => {
                                    console.log("jobbra kattintva")
    index = index+1
    if (index > kepadatoktomb.length-1) {
        index = 0
    }

    betoltofg(index)
}
)

$(".balra").click(() => {
                                    console.log("balra kattintva")
    index = index-1
    if (index < 0) {
        index = kepadatoktomb.length-1
    }

    betoltofg(index)
}
)



//Thumbnail-eket betöltjük a JQuery-vel a data.js-ben tárolt tömbből, és 
//RÖGTÖN! IDE ILLESZTJÜK A THUMBNAILRE KATTINTÁS FÜGGVÉNYT IS!
kepadatoktomb.forEach((tombelem, szamol) => {

    $("#keptarvalaszto").append(` <div class="thumbnail" data-szamozo="${szamol}" >   <img class="kiskep"   src="${tombelem.photo}" alt="kiskepek"> </div>  `)

        let modwidth=90
        $(".kiskep").width(modwidth)

        $(".thumbnail").click((event) => {
    
            let melyikreKattintott = $(event.currentTarget).attr('data-szamozo');  
            index = parseInt(melyikreKattintott)
    
            betoltofg (melyikreKattintott)
    }
    )
    }
    )

