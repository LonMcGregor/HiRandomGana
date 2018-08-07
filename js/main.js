"use strict";

/* Aliases for sanity */
const $ = document.querySelector.bind(document);
const $a = document.querySelectorAll.bind(document);
const $$ = document.createElement.bind(document);

const hiraganaMap = new Map([
    [0x3042, "A"],
    [0x3044, "I"],
    [0x3046, "U"],
    [0x3048, "E"],
    [0x304A, "O"],
    [0x304B, "KA"],
    [0x304C, "GA"],
    [0x304D, "KI"],
    [0x304E, "GI"],
    [0x304F, "KU"],
    [0x3050, "GU"],
    [0x3051, "KE"],
    [0x3052, "GE"],
    [0x3053, "KO"],
    [0x3054, "GO"],
    [0x3055, "SA"],
    [0x3056, "ZA"],
    [0x3057, "SHI"],
    [0x3058, "JI"],
    [0x3059, "SU"],
    [0x305A, "ZU"],
    [0x305B, "SE"],
    [0x305C, "ZE"],
    [0x305D, "SO"],
    [0x305E, "ZO"],
    [0x305F, "TA"],
    [0x3060, "DA"],
    [0x3061, "CHI"],
    [0x3062, "JI"],
    [0x3064, "TSU"],
    [0x3065, "ZU"],
    [0x3066, "TE"],
    [0x3067, "DE"],
    [0x3068, "TO"],
    [0x3069, "DO"],
    [0x306A, "NA"],
    [0x306B, "NI"],
    [0x306C, "NU"],
    [0x306D, "NE"],
    [0x306E, "NO"],
    [0x306F, "HA"],
    [0x3070, "BA"],
    [0x3071, "PA"],
    [0x3072, "HI"],
    [0x3073, "BI"],
    [0x3074, "PI"],
    [0x3075, "HU"],
    [0x3076, "BU"],
    [0x3077, "PU"],
    [0x3078, "HE"],
    [0x3079, "BE"],
    [0x307A, "PE"],
    [0x307B, "HO"],
    [0x307C, "BO"],
    [0x307D, "PO"],
    [0x307E, "MA"],
    [0x307F, "MI"],
    [0x3080, "MU"],
    [0x3081, "ME"],
    [0x3082, "MO"],
    [0x3084, "YA"],
    [0x3086, "YU"],
    [0x3088, "YO"],
    [0x3089, "RA"],
    [0x308A, "RI"],
    [0x308B, "RU"],
    [0x308C, "RE"],
    [0x308D, "RO"],
    [0x308F, "WA"],
    [0x3092, "WO"],
    [0x3093, "N"]
]);
let hiraganaBag = new Map(hiraganaMap.entries());

function initBag(){
    hiraganaBag = new Map(hiraganaMap.entries());
}

function nextRandom(){
    if(hiraganaBag.size === 0){
        initBag();
    }
    let random = Math.floor(Math.random() * Math.floor(hiraganaBag.size)) % hiraganaBag.size;
    console.log("Choice:" + random);
    const iter = hiraganaBag.entries();
    let next = '';
    while(random-- >= 0){
        next = iter.next().value;
    }
    hiraganaBag.delete(next[0]);
    return next;
}

function randomHiragana(){
    const next = nextRandom();
    $("#test").innerText = String.fromCharCode(next[0]);
    $("#answer").value = next[1];
    console.log("Current Choice:",next,"Current bag:", hiraganaBag);
}

function setDims(){
    if(window.innerWidth > window.innerHeight - 130){
        $("#test").style.fontSize = (window.innerHeight - 130) + "px";
    } else {
        $("#test").style.fontSize = (window.innerWidth) + "px";
    }
}

function showSettings(){
    $("#settings").classList.toggle("visible");
    $("#game").classList.toggle("visible");
}

function dark(){
    $("body").classList.toggle("dark");
    window.localStorage.setItem("dark", $("#dark").checked);
}

function loadSettings(){
    if(window.localStorage.getItem("dark") === "true"){
        $("#dark").checked = true;
        $("body").classList.add("dark");
    }
}

$("#test").addEventListener("click", randomHiragana);
$a(".showsettings").forEach(button => {
    button.addEventListener("click", showSettings);
});
$("#dark").addEventListener("change", dark);
window.addEventListener('resize', setDims);
setDims();
loadSettings();
