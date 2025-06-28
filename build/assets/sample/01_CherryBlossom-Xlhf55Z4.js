import { _ as c, a as t, __tla as __tla_0 } from "../index-BP3kCZCx.js";
Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const o = {
        Forest: "Forest",
        ClassicPiano: "ClassicPiano",
        Cherry: "Cherry",
        Togemaru: "Togemaru",
        GoogleFont: "GoogleFont"
    }, g = `
<svg xmlns="http://www.w3.org/2000/svg" width="480" height="360" viewBox="0 0 480 360">
    <rect width="480" height="360" fill="#000000" />
</svg>
`;
    class l {
        static get texts() {
            return [
                [
                    "Petals are dancing in the wind"
                ],
                [
                    "Touch me to start."
                ]
            ];
        }
        static fontFaceUrl(e) {
            const n = [];
            for (const f of l.texts)for (const h of f)h != " " && (n.includes(h) || n.push(h));
            const a = n.sort().join("");
            return `https://fonts.googleapis.com/css2?family=${e}&display=swap&text='+${encodeURIComponent(a)}`;
        }
    }
    const w = "/assets/Forest-6VjELwBO.png", m = "data:image/svg+xml,%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='130.38413'%20height='139.21092'%20viewBox='0,0,130.38413,139.21092'%3e%3cg%20transform='translate(-174.93272,-110.48507)'%3e%3cg%20data-paper-data='{&quot;isPaintingLayer&quot;:true}'%20fill-rule='nonzero'%20stroke='%23f20000'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20style='mix-blend-mode:%20normal'%3e%3cpath%20d='M183.76419,139.52841l8.18527,14.85474l-15.46106,9.3979l9.09474,10.00421l11.82316,5.45684l9.3979,1.81895l10.61053,-0.90947l15.1579,-7.57895l-2.42526,-12.12632l-5.76,-9.09474l-10.00421,-7.88211l-14.55158,-3.6379z'%20fill='%23f2cfd4'/%3e%3cpath%20d='M218.93052,168.32842l17.58316,7.27579'%20fill='none'/%3e%3cpath%20d='M241.36421,167.7221l-6.97263,-12.73264l-1.81895,-16.37053l3.94105,-14.85474l7.27579,-7.57895l3.6379,-3.94105l3.94105,8.18527l2.12211,7.57895l19.09895,-9.70106l-0.30316,16.37053l-6.97263,16.97685l-10.61053,12.12632z'%20fill='%23f2cfd4'/%3e%3cpath%20d='M248.94316,151.04841l-7.88211,23.04001'%20fill='none'/%3e%3cpath%20d='M246.82106,177.72631l12.42948,-12.12632l15.76422,-3.94105l11.52,0.90947l16.97685,6.36632l-6.66948,6.66948l-6.36632,6.06316l5.76,6.06316l6.36632,6.66948l-1.21263,2.72842l-14.55158,1.81895l-12.12632,-0.30316l-12.73264,-3.33474l-8.18527,-7.88211z'%20fill='%23f2cfd4'/%3e%3cpath%20d='M241.06105,178.33263l22.13053,0.90947'%20fill='none'/%3e%3cpath%20d='M229.84421,187.42737l0.60632,8.48842l-4.24421,15.1579l-6.06316,7.57895l-10.30737,8.79158l-15.76422,3.33474l-0.60632,-17.28001l-15.46106,-2.72842l6.06316,-10.00421l9.70106,-8.48842l11.21685,-5.45684l10.30737,-1.51579z'%20fill='%23f2cfd4'/%3e%3cpath%20d='M247.42737,191.06527l-12.12632,12.73264l-2.12211,16.06737l2.12211,13.03579l8.18527,14.85474l9.70106,-14.85474l14.55158,9.09474l5.45684,-13.03579l-2.72842,-14.24843l-3.94105,-10.30737l-6.66948,-6.06316z'%20fill='%23f2cfd4'/%3e%3cpath%20d='M233.78526,184.39579l-14.85474,10.91369'%20fill='none'/%3e%3cpath%20d='M239.54526,184.39579l6.66948,16.97685'%20fill='none'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", p = "/assets/ClassicalPiano-B_FIxY62.wav", u = "/assets/TogeMaruGothic-700-Bold-YtwdCofw.woff";
    c.title = "【01_CherryBlossom】桜の花びらが舞う";
    let r, s, i;
    const y = "Reggae+One", k = l.fontFaceUrl(y);
    c.preload = async function() {
        this.Image.load(w, o.Forest), this.Image.load(m, o.Cherry), this.Sound.load(p, o.ClassicPiano), this.Font.load(u, o.Togemaru), this.Font.load(k, o.GoogleFont);
    };
    c.prepare = async function() {
        r = new t.Stage, r.Image.add(o.Forest), r.SvgText.add("Black", g), s = new t.Sprite("Introduction"), s.Font.add(o.GoogleFont);
        const e = l.texts[0], n = l.texts[1], a = {
            fontFamily: o.GoogleFont,
            fontSize: 25,
            fontStyle: "bold",
            color: "red"
        };
        s.SvgText.addTexts("0", e, a), s.SvgText.addTexts("1", n, a), s.Looks.hide(), i = new t.Sprite("Cherry"), i.Image.add(o.Cherry), i.Looks.Size.scale = [
            20,
            20
        ], i.Looks.hide();
    };
    c.setting = async function() {
        r.Event.whenFlag(async function*() {
            for(this.Looks.Backdrop.name = "Black", this.Looks.Effect.set(t.ImageEffective.GHOST, 95), this.Sound.add(o.ClassicPiano);;)await this.Sound.playUntilDone(o.ClassicPiano), yield;
        }), s.Event.whenFlag(async function*() {
            for(this.Looks.Costume.name = "0", this.Looks.show(), await this.Control.wait(2), this.Event.broadcast("IntroStart");;)await this.Control.wait(1), this.Looks.Costume.next(), yield;
        }), s.Event.whenBroadcastReceived("IntroStart", async function*() {
            for(;;){
                if (this.Sensing.isMouseTouching()) {
                    this.Event.broadcast("CherryStart"), this.Control.stopOtherScripts(this), this.Looks.hide();
                    break;
                }
                yield;
            }
        }), s.Event.whenBroadcastReceived("IntroStart", async function*() {
            for(;;)await this.Control.wait(.5), this.Looks.Effect.set(t.ImageEffective.GHOST, 50), await this.Control.wait(.5), this.Looks.Effect.set(t.ImageEffective.GHOST, 0), yield;
        }), i.Event.whenFlag(async function() {
            this.Pen.prepare(), this.Looks.hide(), this.Looks.Size.scale = [
                200,
                200
            ], this.Looks.Effect.clear(), this.Motion.Rotation.style = t.RotationStyle.ALL_AROUND;
        }), i.Event.whenBroadcastReceived("CherryStart", async function*() {
            for(;;){
                this.Motion.Move.randomPosition(), this.Motion.Position.y = t.getRandomValueInRange(100, 180);
                const e = t.getRandomValueInRange(10, 50);
                this.Looks.Size.scale = {
                    w: e,
                    h: e
                }, this.Control.clone(), await this.Control.wait(.05), yield;
            }
        }), i.Control.whenCloned(async function*() {
            this.Looks.show(), this.Looks.Effect.set(t.ImageEffective.COLOR, t.getRandomValueInRange(0, 240));
            const e = this.Looks.Size.w;
            this.Looks.Effect.set(t.ImageEffective.GHOST, 100 - e / 50 * 100);
            const n = t.getRandomValueInRange(-15, 15);
            for(;;){
                const a = (180 - this.Motion.Position.y + 20) / 360;
                if (this.Motion.Position.y -= t.getRandomValueInRange(5, 10) * a, this.Motion.Position.x += t.getRandomValueInRange(-2, 2), this.Motion.Direction.degree += n, this.Pen.stampStage(), this.Pen.stamp(), this.Motion.Position.y < -170) break;
                yield;
            }
            this.Control.remove();
        });
    };
});
