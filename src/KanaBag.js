import Hiragana from "./Hiragana";
import Katakana from "./Katakana";

const MasterHiraganaBag = new Map(Hiragana);
const MasterKatakanaBag = new Map(Katakana);

class KanaBag {
    constructor(bag) {
        this.fullBag = bag;
        this.reset();
    }

    reset(){
        this.currentBag = new Map(this.fullBag.entries());
        this.nextRandom();
    }

    nextRandom(){
        if(this.currentBag.size === 0){
            this.currentBag = new Map(HiraganaBag.entries()); /* todo make method */
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
        return next;
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
