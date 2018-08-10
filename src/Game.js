import React, { Component } from 'react';
import './main.css';

const $ = document.querySelector.bind(document);
const $a = document.querySelectorAll.bind(document);
const HiraganaBag = new Map([
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

class Game extends Component {

    constructor(props) {
        super(props);
        this.bag = new Map(HiraganaBag.entries());
    }

    nextRandom(){
        if(this.bag.size === 0){
            this.bag = new Map(HiraganaBag.entries()); /* todo make method */
        }
        let random = Math.floor(Math.random() * Math.floor(this.bag.size)) % this.bag.size;
        const iter = this.bag.entries();
        let next = '';
        while(random-- >= 0){
            next = iter.next().value;
        }
        this.bag.delete(next[0]);
        return next;
    }

    randomHiragana(){
        const next = this.nextRandom();
        $("#test").innerText = String.fromCharCode(next[0]);
        $("#answer").value = next[1];
        $("#target").innerText = String.fromCharCode(next[0]);
        $("#prompt").value = next[1];
        this.clearCanvas();
    }

    clearCanvas(){
        $("canvas").getContext("2d").clearRect(0, 0, $("canvas").width, $("canvas").height);
    }


    setDims(){
        if(window.innerWidth > window.innerHeight - 130){
            $a(".bigKana").forEach(kana => {
                kana.style.fontSize = (window.innerHeight - 130) + "px";
            });
        } else {
            $a(".bigKana").forEach(kana => {
                kana.style.fontSize = (window.innerWidth) + "px";
            });
        }
        $("canvas").width = $("canvas").parentElement.getBoundingClientRect().width;
        $("canvas").height = $("canvas").parentElement.getBoundingClientRect().height;
        /*this.clearCanvas();*/
    }

    showSettings(){/*
        if($("#settings.visible")){
            gameChosen();
        } else {
            $(".visible").classList.toggle("visible");
        }
        $("#settings").classList.toggle("visible");*/ /* TODO */
    }


    /** this.drawing = false */
    startDraw(){
        this.drawing = true;
        this.setDims();
    }

    endDraw(){
        this.drawing = false;
    }

    draw(e,d){
        if(this.drawing){
            const x = e.changedTouches ? e.changedTouches[0].screenX : e.pageX;
            const y = e.changedTouches ? e.changedTouches[0].screenY - 180 : e.pageY;
            const ctx = $("canvas").getContext("2d");
            ctx.fillStyle = $(".dark") ? "#ffffff" : "#000000";
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI*2, true);
            ctx.closePath();
            ctx.fill();
        }
    }

    /* showsettings in header

    $a(".showsettings").forEach(button => {
        button.addEventListener("click", showSettings);
    });
    $("#dark").addEventListener("change", dark);
    $("#whichGame").addEventListener("change", gameSwitch);
    */

    /*
    window.addEventListener('resize', setDims);
*/
    render(){
        return (
            <main id="game2" className="gamepage page visible">
                <header>
                    <h1>HiRandomGana</h1>
                    <button className="showsettings" onClick={() => this.showSettings()}><span role="img" aria-label="Settings">⚙</span><span>Settings</span></button>
                </header>

                <section>
                    <canvas
                    onMouseDown={(e, d) => this.startDraw(e,d)}
                    onTouchStart={(e,d) => this.startDraw(e,d)}
                    onMouseMove={(e,d) => this.draw(e,d)}
                    onTouchMove={(e,d) => this.draw(e,d)}
                    onMouseUp={(e,d) => this.endDraw(e,d)}
                    onTouchEnd={(e,d) => this.endDraw(e,d)}
                    ></canvas>
                    <div>
                        <button id="clear" onClick={() => this.clearCanvas()}><span role="img" aria-label="Clear">🗑</span></button>
                        <input id="prompt" type="text" value="A" readOnly />
                        <span id="target" className="bigKana">あ</span>
                        <button className="next" onClick={() => this.randomHiragana()}><span role="img" aria-label="Next">🔄</span></button>
                    </div>
                </section>
            </main>
        );
    }
}

export default Game;
