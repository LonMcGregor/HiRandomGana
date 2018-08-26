import Hiragana from "./Hiragana";
import Katakana from "./Katakana";

const MasterHiraganaBag = new Map(Hiragana);
const MasterKatakanaBag = new Map(Katakana);

class KanaBag {
    constructor(bag) {
        this.fullBag = bag;
        this.reset();
        this.cycleNextRandom();
    }

    reset(){
        this.currentBag = new Map(this.fullBag.entries());
    }

    cycleNextRandom(){
        if(this.currentBag.size === 0){
            this.reset();
        }
        let random = Math.floor(Math.random() * Math.floor(this.currentBag.size)) % this.currentBag.size;
        const iter = this.currentBag.entries();
        let next = ["F","F"];
        while(random-- >= 0){
            next = iter.next().value;
        }
        this.currentBag.delete(next[0]);
        this.currentChar = next[0];
        this.currentPrompt = next[1];
    }
}

export class HiraganaBag extends KanaBag {
    constructor(){
        super(MasterHiraganaBag);
    }
}

export class KatakanaBag extends KanaBag {
    constructor(){
        super(MasterKatakanaBag);
    }
}
