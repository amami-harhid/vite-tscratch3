import { _ as t, a as p, __tla as __tla_0 } from "../index-Bmbx4PuQ.js";
Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const e = {
        APPLE: "Apple"
    }, n = "https://amami-harhid.github.io/tscratch3assets", i = n + "/assets/Apple.svg";
    t.title = "演習01";
    let s;
    t.preload = async function() {
        this.Image.load(i, e.APPLE);
    };
    t.prepare = async function() {
        s = new p.Sprite("sprite"), s.Image.add(e.APPLE);
    };
    t.setting = async function() {};
});
