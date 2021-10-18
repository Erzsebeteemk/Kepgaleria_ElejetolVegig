// T: KEZDŐKÉP, -CÍM, -SZÖVEG                                     
                                        // Kezdőkép, -cím, -szöveg   (A data.js tömb 1. elemében levő, data0 nevű objektum 3 mezőjének tartalmát tölti be.)
                                        // $(".kep").attr("src", data0.photo)
                                        // $(".clicked").text(data0.title)
                                        // $(".szoveg").text(data0.description)
                                    // F: Azért nem kell leírni a fenti sorokoat, mert a betöltőfg definiálása UTÁN!!! és NEM ELŐTTE!!! meghívta a betöltőfg-t index=0 kezdőértékkel.   

// T: GENERALVÁLTOZÓK                                        
let index = 0
let elozobetoltes = 0
                                    // Ezt a 2 sort majd várhatóan kitörlöm.
                                        // $(".thumbnail[data-szamozo='" + elozobetoltes + "']").toggleClass("op")
                                        // $(".thumbnail[data-szamozo='0']").toggleClass("op")



// T: BETÖLTŐFG
                                    // F: 0 bemeneti értékkel indul a betöltőfüggvény + append-es függvényhez hozzátettem indulásként a data-szímozo=0- s thumbnail toggle-zását.
let betoltofg = (kepIndexe) => {
                                        console.log(elozobetoltes)
                                        console.log(kepIndexe)
    $(".thumbnail[data-szamozo='" + elozobetoltes + "']").toggleClass("op")

    $(".kep").attr("src", kepadatoktomb[kepIndexe].photo)
    $(".clicked").text(kepadatoktomb[kepIndexe].title)
    $(".szoveg").text(kepadatoktomb[kepIndexe].description)

    $(".thumbnail[data-szamozo='" + kepIndexe + "']").toggleClass("op")
                                    // F: 2 MEGOLDÁS: Egyik megoldás: ..." + kepIndexe + "...   Másik megoldás: ` ...${kepIndexe}...`
                                        // $(` .thumbnail[data-szamozo='${kepIndexe}'] `).toggleClass("op")

                                    // K-J:.........................K-J: A felső toggle-s változat működik mindkettő jelöléssel (de arra a 2 első thumbnail-re nem, amelyek a html-ben vannak!!!), de a css box-shadow változat valamiért nem működik.
                                        // $(".thumbnail[data-szamozo='" + kepIndexe + "']").css("box-shadow", "0 0 10px 15px black")
                                        // $(` .thumbnail[data-szamozo='${kepIndexe}'] `).css("box-shadow", "0 0 10px 15px black")

    elozobetoltes = kepIndexe
}
betoltofg(0)
                                    // K: ..........................Ez a 2 sor rendben van a prg-ban, de érdekel, hogy ezt a betoltofg(0)  -t miért nem csinálja meg minden eges felhasználói prg-futtatáskor? 



// T: NYILAKRA KATTINTÁS
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



// T: THUMBNAILEK
                                        // Thumbnaileket betöltjük a JQuery-vel a data.js-ben tárolt tömbből, és 
                                    // F: RÖGTÖN!!! IDE ILLESZTJÜK A THUMBNAILRE KATTINTÁS FÜGGVÉNYT IS, az a GreenFox javaslata. 
                                    //DE: ha közvetlenül a .thumbnail lenne 1 loopban az eseményhez kötve és egyben ő lenne az eseménykezelő is, akkor csak minden 2. thumbnail-nél toggle-zna.
                                    //Megoldás: Delegáljuk a .thumbnail parentjéhez az esemény figyelését, így még akár a .thumbnail appendje előtt is hivatkozhatunk rá.
                                        //stackoverflow.com/posts/33392417
kepadatoktomb.forEach((tombelem, szamol) => {

    $("#keptarvalaszto").append(` <div class="thumbnail" data-szamozo="${szamol}" >   <img class="kiskep"   src="${tombelem.photo}" alt="kiskepek"> </div>  `)
        let modwidth=90
        $(".kiskep").width(modwidth)
}
)
$(".thumbnail[data-szamozo='0']").toggleClass("op")


$("#keptarvalaszto").on("click", ".thumbnail", function() {
            let melyikreKattintott = $(this).attr('data-szamozo')
            betoltofg (melyikreKattintott)
})
