import { _ as t, a as e, __tla as __tla_0 } from "../index-BI-1cn8T.js";
Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const s = {
        CAT: "CAT",
        Jurassic: "Jurassic"
    }, n = "https://amami-harhid.github.io/tscratch3assets/assets/cat.svg", r = "https://amami-harhid.github.io/tscratch3assets/assets/Jurassic.svg";
    t.title = "Practice01";
    let i, a;
    t.preload = async function() {
        this.Image.load(n, s.CAT), this.Image.load(r, s.Jurassic);
    };
    t.prepare = async function() {
        i = new e.Stage, i.Image.add(s.Jurassic), a = new e.Sprite("sprite"), a.Image.add(s.CAT);
    };
    t.setting = async function() {
        a.Event.whenFlag(async function() {
            this.Motion.Direction.degree = 90;
        });
    };
});
