const MasterHiraganaBag = new Map([
    ["あ", "A"],
    ["い", "I"],
    ["う", "U"],
    ["え", "E"],
    ["お", "O"],
    ["か", "KA"],
    ["が", "GA"],
    ["き", "KI"],
    ["ぎ", "GI"],
    ["く", "KU"],
    ["ぐ", "GU"],
    ["け", "KE"],
    ["げ", "GE"],
    ["こ", "KO"],
    ["ご", "GO"],
    ["さ", "SA"],
    ["ざ", "ZA"],
    ["し", "SHI"],
    ["じ", "JI"],
    ["す", "SU"],
    ["ず", "ZU"],
    ["せ", "SE"],
    ["ぜ", "ZE"],
    ["そ", "SO"],
    ["ぞ", "ZO"],
    ["た", "TA"],
    ["だ", "DA"],
    ["ち", "CHI"],
    ["じ", "JI"],
    ["つ", "TSU"],
    ["づ", "ZU"],
    ["て", "TE"],
    ["で", "DE"],
    ["と", "TO"],
    ["ど", "DO"],
    ["な", "NA"],
    ["に", "NI"],
    ["ぬ", "NU"],
    ["ね", "NE"],
    ["の", "NO"],
    ["は", "HA"],
    ["ば", "BA"],
    ["ぱ", "PA"],
    ["ひ", "HI"],
    ["び", "BI"],
    ["ぴ", "PI"],
    ["ふ", "HU"],
    ["ぶ", "BU"],
    ["ぷ", "PU"],
    ["へ", "HE"],
    ["べ", "BE"],
    ["ぺ", "PE"],
    ["ほ", "HO"],
    ["ぼ", "BO"],
    ["ぽ", "PO"],
    ["ま", "MA"],
    ["み", "MI"],
    ["む", "MU"],
    ["め", "ME"],
    ["も", "MO"],
    ["や", "YA"],
    ["ゆ", "YU"],
    ["よ", "YO"],
    ["ら", "RA"],
    ["り", "RI"],
    ["る", "RU"],
    ["れ", "RE"],
    ["ろ", "RO"],
    ["わ", "WA"],
    ["を", "WO"],
    ["ん", "N"]
]);

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
        let next = ['F','F'];
        while(random-- >= 0){
            next = iter.next().value;
        }
        this.currentBag.delete(next[0]);
        this.currentChar = next[0];
        this.currentPrompt = next[1];
        return next;
    }
}

class HiraganaBag extends KanaBag {
    constructor(){
        super(MasterHiraganaBag);
    }
}

export default HiraganaBag;
