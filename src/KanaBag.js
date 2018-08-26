import Hiragana, {HiraganaNoDakuten} from "./Hiragana";
import Katakana, {KatakanaNoDakuten} from "./Katakana";

const MasterHiraganaBag = new Map(Hiragana);
const MasterKatakanaBag = new Map(Katakana);
const MasterKatakanaNoDakutenBag = new Map(KatakanaNoDakuten);
const MasterHiraganaNoDakutenBag = new Map(HiraganaNoDakuten);

class KanaBag {
    constructor(bag) {
        this.fullBag = bag;
        this.reset();
        this.cycleNextRandom();
    }

    total(){
        return this.fullBag.size;
    }

    remaining(){
        return this.currentBag.size;
    }

    done(){
        return this.total() - this.remaining();
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

export class KatakanaNoDakutenBag extends KanaBag {
    constructor(){
        super(MasterKatakanaNoDakutenBag);
    }
}

export class HiraganaNoDakutenBag extends KanaBag {
    constructor(){
        super(MasterHiraganaNoDakutenBag);
    }
}

export const AvailableBags = [
    {id: "hiragana", name: "Hiragana"},
    {id: "katakana", name: "Katakana"},
    {id: "hiragana-nd", name: "Hiragana (No Dakuten)"},
    {id: "katakana-nd", name: "Katakana (No Dakuten)"}
];

export const AvailableBagIds = AvailableBags.map(x => x.id);

export class BagFactory {
    makeBag(id){
        switch(id){
        case "hiragana":
            return new HiraganaBag();
        case "katakana":
            return new KatakanaBag();
        case "hiragana-nd":
            return new HiraganaNoDakutenBag();
        case "katakana-nd":
            return new KatakanaNoDakutenBag();
        default:
            throw Error("Invalid bag id "+id);
        }
    }
}
