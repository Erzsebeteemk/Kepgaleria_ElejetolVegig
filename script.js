                                        //T: Kezdőkép, -cím, -szöveg   (A data.js tömb 1. elemében levő, data0 nevű objektum 3 mezőjének tartalmát tölti be.)
                                        // $(".kep").attr("src", data0.photo)
                                        // $(".clicked").text(data0.title)
                                        // $(".szoveg").text(data0.description)
                                        // Azért nem kell leírni a fenti sorokoat, mert a betöltőfg definiálása UTÁN!!! és NEM ELŐTTE!!! meghívta a betöltőfg-t index=0 kezdőértékkel.   

let index=0
let elozobetoltes


// T: BETÖLTŐFG
//0 bemeneti értékkel indul//
let betoltofg = (kepIndexe) => {

    $(".kep").attr("src", kepadatoktomb[kepIndexe].photo)
    $(".clicked").text(kepadatoktomb[kepIndexe].title)
    $(".szoveg").text(kepadatoktomb[kepIndexe].description)

                                        console.log(kepIndexe)
    $(".thumbnail[data-szamozo='" + kepIndexe + "']").toggleClass("op")
                                        // $(` .thumbnail[data-szamozo='${kepIndexe}'] `).toggleClass("op")
                                        // .......................K-J: A felső toggle-s változat működik mindkettő jelöléssel (de arra a 2 első thumbnail-re nem, amelyek a html-ben vannak!!!), de a css box-shadow változat valamiért nem működik.
                                        // $(".thumbnail[data-szamozo='" + kepIndexe + "']").css("box-shadow", "0 0 10px 15px black")
                                        // $(` .thumbnail[data-szamozo='${kepIndexe}'] `).css("box-shadow", "0 0 10px 15px black")
}
betoltofg(0)




// T: Nyilakra kattintás//
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



// T: Thumbnail-eket betöltjük a JQuery-vel a data.js-ben tárolt tömbből, és 
//RÖGTÖN!!! IDE ILLESZTJÜK A THUMBNAILRE KATTINTÁS FÜGGVÉNYT IS!
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










// I. .proba-ra klikkelésre .proba opalos lesz
         $(".proba").click(function(){
            $(".proba").toggleClass("probaop")
         })
       
// II. .proba data-sz=2-ra klikkelésre .proba data-sz=2 opalos lesz
$(".proba[data-sz='2']").click(function(){
    $(".proba[data-sz='2']").toggleClass("probaop")
 })


 

//     let probafg = (bemenet) => {
//                                             console.log(bemenet)
//         $(".proba[data-sz='" + szamkent + "']").toggleClass("op")
//     }
    


//     $(".proba").click((event) => {
    
//         let kattintva = $(event.currentTarget).attr('data-sz');
//         szamkent = parseInt(kattintva) 
//         probafg (szamkent)
// }
// )
