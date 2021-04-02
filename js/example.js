//vormi objekt
let myForm = {
    input_type : [ "number", "text" ],
    step : "0.01",
    onchange : "",
    id : [ "ostuhind", "ostukogus", "müügihind", "müügikogus", "ostukulu", "müügikulu" ],
    value : [ "" ]
}

//VORMI KOOSTAMINE
var getMyForm = myForm.id;
let formFields = { } //Tühi objekt, mille täidab järgnev loop

for (i = 0; i < getMyForm.length; i++) {
       formFields[getMyForm[i]] = '<br>' + getMyForm[i] + '<br><input type="' + myForm.input_type[0] + '" step="' + myForm.step + '" oninput="arvutaja();" id="' + getMyForm[i] + '" value="' + myForm.value[0] + '" />'
}

//vormi nupud
let calcNupud = {
    nupp2 : '<input type = "button" id = "button" value = "Puhasta" onclick = "puhastaja();"></input>'
}

//Vormi välja joonistamine läbi loopi
var formOutput = '<form id = \"kalkulaator\">';
for (i = 0; i < getMyForm.length; i++) { 
        formOutput += (formFields[myForm.id[i]]); //lisab muutujale loopi väljundi
}

//Tulemuse dokumenti kuvamine
$("#app").html(formOutput + "<br>" + calcNupud.nupp2 + "</form><p id = \"selgitus\"></p>");

//Arvutaja funktsioon koos jQuery-ga
//
function arvutaja() {
let a = $("#" + myForm.id[0]).val(); //ostuhind
let b = $("#" + myForm.id[1]).val(); //ostukogus
let c = $("#" + myForm.id[2]).val(); //müügihind
let d = $("#" + myForm.id[3]).val(); //müügikogus
let e = $("#" + myForm.id[4]).val(); //tehingukulu ostul
let f = $("#" + myForm.id[5]).val(); //tehingukulu müügil

// arvutab tehingukasumi, ümardan tulemuse, väljastab
let calc_kogukulu = parseFloat(a * b);
let calc_kasum = parseFloat((c * d) - (a * b)); //parseInt() või parseFloat() teisendab teksti numbriks
let calc_kulu = parseFloat(e) + parseFloat(f); 
let calc_netotulu = calc_kasum - calc_kulu;
let breakeven = ((parseFloat(e) + parseFloat(f))/parseFloat(b)) + parseFloat(a);

//prindib arvutuse välja aknasse
$("#selgitus").html("Investeering: " + calc_kogukulu + "$<br>Tehingukasum: " + (calc_kasum).toFixed(2) + " $<br>Tehingukulud: " + (calc_kulu).toFixed(2) + " $<br>Netokasum: " + (calc_netotulu).toFixed(2) + " $" + "<br>Breakeven: " + (breakeven).toFixed(2) + " $");
}

// Vormi puhastaja funktsioon nupule
function puhastaja() {
    document.getElementById("kalkulaator").reset(); //JQUERY-s pole reset methodi
    $("#selgitus").text("Sisesta andmed!"); //väljastab teate
}