import { _ as w, a as o, __tla as __tla_0 } from "../index-Bmbx4PuQ.js";
Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const i = {
        Forest: "Forest",
        BGM: "ClassicPiano",
        Togemaru: "Togemaru",
        Pew: "Pew",
        MonitorPoint: "MonitorPoint"
    }, e = {
        Start: "Start",
        IntroStart: "IntroStart",
        IntroStartNext: "IntroStartNext",
        BallTouch: "ballTouch",
        Question: "Question",
        GAME_START: "GAME_START"
    }, C = 30, r = 20, B = function(n) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" width="${C}" height="${r}" viewBox="0 0 ${C} ${r}">
    <rect x="0" y="0" rx="2" ry="2" width="${C}" height="${r}" fill="black" fill-opacity="0.2" />
    <rect x="1" y="1" rx="3" ry="3" width="${C - 2}" height="${r - 2}" fill="${n}" />
</svg>
`;
    }, Q = 30, y = 30, M = 15, k = function(n) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" width="${Q}" height="${y}" viewBox="0 0 ${Q} ${y}">
    <circle cx="${M}" cy="${M}" r="${M}" fill="${n}"/>
</svg>
`;
    }, l = 50, S = 5, p = function(n) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" width="${l}" height="${S}" viewBox="0 0 ${l} ${S}">
    <rect width="${l}" height="${S}" fill="${n}" />
</svg>
`;
    }, u = 480, R = 10, m = function(n) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" width="${u}" height="${R}" viewBox="0 0 ${u} ${R}">
    <rect width="${u}" height="${R}" fill="${n}" />
</svg>
`;
    };
    class c {
        static instance;
        static getInstance() {
            return c.instance == null && (c.instance = new c), c.instance;
        }
        positions;
        constructor(){
            this.positions = new Array(10).fill(0);
        }
        clear(A) {
            for(let t = 0; t < this.positions.length; t++)this.positions[t] = A;
        }
        set(A) {
            for(let t = 0; t < this.positions.length - 1; t++)this.positions[t + 1] = this.positions[t];
            this.positions[0] = A;
        }
        get(A) {
            return A && A < this.positions.length ? this.positions[A] : this.positions[this.positions.length - 1];
        }
    }
    const x = "red", j = 24, z = "normal", v = function(n, A, t, g) {
        const P = {
            fontFamily: g,
            fontSize: j,
            fontStyle: z,
            color: x
        };
        n.SvgText.addTexts(A, t, P);
    }, L = "/assets/Forest-6VjELwBO.png", D = "/assets/Whisker_Stalker-CtL1ymV7.wav", T = "data:audio/wav;base64,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", $ = "/assets/TogeMaruGothic-700-Bold-YtwdCofw.woff", f = c.getInstance();
    w.title = "ブロック崩し";
    let a, s, E, I, d, h;
    w.preload = async function() {
        this.Image.load(L, i.Forest), this.Sound.load(D, i.BGM), this.Sound.load(T, i.Pew), this.Font.load($, i.Togemaru);
    };
    w.prepare = async function() {
        this.stage.Image.add(i.Forest), this.stage.Sound.add(i.BGM), this.stage.Sound.setOption(o.SoundOption.VOLUME, 10), a = new o.Sprite("block"), a.SvgText.add("B1", B("#f00000")), a.SvgText.add("B2", B("#00F000")), a.SvgText.add("B3", B("#0000F0")), a.Looks.hide(), s = new o.Sprite("Introduction"), s.Font.add(i.Togemaru), v(s, "T0", [
            "ブロック崩し"
        ], i.Togemaru), v(s, "T1", [
            "Touch me to start."
        ], i.Togemaru), v(s, "T2", [
            "The paddle moves with the mouse. "
        ], i.Togemaru), s.Looks.hide(), E = new o.Sprite("ball"), E.SvgText.add("Ball", k("#ff0000")), E.Motion.Position.xy = [
            0,
            -100
        ], E.Looks.hide(), I = new o.Sprite("bar"), I.SvgText.add("Bar", p("blue")), I.Motion.Position.xy = [
            0,
            -160
        ], I.Looks.hide(), d = new o.Sprite("Bottom"), d.SvgText.add("Bottom", m("#ff0000")), d.Motion.Position.xy = [
            0,
            -183
        ], h = new o.Monitors, h.add(i.MonitorPoint, "得点"), h.get(i.MonitorPoint).scale = {
            w: 100,
            h: 100
        }, h.get(i.MonitorPoint).hide(), h.get(i.MonitorPoint).value = 0;
    };
    w.setting = async function() {
        this.stage.Event.whenFlag(async function*() {
            h.get(i.MonitorPoint).value = 0, this.Looks.Backdrop.name = "Black";
            let A = 50;
            for(this.Sound.setOption(o.SoundOption.VOLUME, A);;)this.Sound.setOption(o.SoundOption.VOLUME, A), await this.Sound.playUntilDone(i.BGM), A < 100 && (A += 10, this.Sound.setOption(o.SoundOption.VOLUME, A)), yield;
        }), a.Event.whenFlag(async function() {
            this.Sound.add(i.Pew), this.Looks.hide();
        }), a.Event.whenBroadcastReceived(e.Start, async function*() {
            this.Looks.hide(), this.Motion.Position.y = 130;
            const A = [
                -160,
                -120,
                -80,
                -40,
                0,
                40,
                80,
                120,
                160
            ];
            for (const t of o.Iterator(5)){
                for (const g of A)this.Motion.Position.x = g, this.Control.clone(), this.Looks.Costume.next();
                this.Motion.Position.y -= 25;
            }
            h.get(i.MonitorPoint).show();
        }), a.Control.whenCloned(async function() {
            this.Looks.show();
        }), a.Control.whenCloned(async function*() {
            for(;;){
                if (this.Sensing.Sprite.isTouching([
                    E
                ])) {
                    h.get(i.MonitorPoint).value += 1, this.Sound.play(i.Pew), this.Event.broadcast(e.BallTouch), this.Looks.hide();
                    break;
                }
                yield;
            }
            await this.Control.wait(.5), this.Control.remove();
        }), s.Event.whenFlag(async function*() {
            const A = this.Looks.Costume.names;
            for(this.Looks.Costume.name = A[0], this.Looks.show(), this.Event.broadcast(e.IntroStart);;)await this.Control.wait(1), this.Looks.Costume.next(), yield;
        }), s.Event.whenBroadcastReceived(e.IntroStart, async function*() {
            for(;;){
                if (this.Sensing.Mouse.isTouching) {
                    this.Control.stopOtherScripts(this), this.Event.broadcast(e.Question), this.Looks.hide();
                    break;
                }
                yield;
            }
        }), s.Event.whenBroadcastReceived(e.IntroStartNext, async function(A) {
            console.log("Recieved IntroStartNext");
            const t = this.Looks.Costume.names;
            this.Looks.Costume.name = t[t.length - 1], this.Looks.Effect.set(o.ImageEffective.GHOST, 0), this.Looks.show(), await this.Control.wait(2), this.Looks.hide(), this.Event.broadcast(e.Start, A);
        }), this.stage.Event.whenBroadcastReceived(e.Question, async function*() {
            let A = 0;
            for(;;){
                const t = await this.Sensing.askAndWait("PLAY MODE( 1:SUPER EASY, 2:NORMAL, 3:HARD )");
                if (t == "1" || t == "2" || t == "3") {
                    const g = parseInt(t);
                    g == 1 && (A = 3), g == 2 && (A = 2), g == 3 && (A = 1);
                    break;
                }
                yield;
            }
            this.Event.broadcast(e.IntroStartNext, A);
        }), s.Event.whenBroadcastReceived(e.IntroStart, async function*() {
            for(;;)await this.Control.wait(.5), this.Looks.Effect.set(o.ImageEffective.GHOST, 50), await this.Control.wait(.5), this.Looks.Effect.set(o.ImageEffective.GHOST, 0), yield;
        }), E.Event.whenFlag(async function() {
            this.Looks.hide();
        }), E.Event.whenBroadcastReceived(e.Start, async function() {
            this.Motion.Position.xy = [
                0,
                0
            ], this.Looks.show();
            const A = o.Keyboard.SPACE, t = ()=>this.Sensing.Key.isDown(A);
            await this.Control.waitUntil(t), this.Event.broadcast(e.GAME_START);
        }), E.Event.whenBroadcastReceived(e.BallTouch, async function() {
            this.Motion.Direction.degree += o.getRandomValueInRange(-5, 5) + 180;
        }), E.Event.whenBroadcastReceived(e.GAME_START, async function*() {
            this.Motion.Direction.degree = 180;
            const A = I.Looks.Size.drawingSize;
            for(;;){
                if (this.Motion.Move.steps(10), this.Sensing.Sprite.isTouching([
                    I
                ])) {
                    this.Motion.Position.y += A.h * 3;
                    const t = f.get(3) - I.Motion.Position.x, g = this.Motion.Direction.degree;
                    this.Motion.Direction.degree += o.getRandomValueInRange(-5, -5) * t - g;
                } else if (this.Sensing.Sprite.isTouching([
                    d
                ])) break;
                this.Motion.Move.ifOnEdgeBounce(), yield;
            }
            this.Control.stopAll(), console.log("GameOver");
        }), I.Event.whenFlag(async function() {
            this.Looks.hide();
        }), I.Event.whenBroadcastReceived(e.Start, async function(A) {
            this.Motion.Position.xy = [
                0,
                -160
            ], this.Looks.Size.scale = [
                A * 100,
                150
            ], f.clear(this.Motion.Position.x), this.Looks.show();
        }), I.Event.whenBroadcastReceived(e.Start, async function*() {
            for(;;){
                const A = o.mousePosition, t = this.Motion.Position.xy;
                this.Motion.Move.toXY(A.x, t.y), f.set(this.Motion.Position.x), yield;
            }
        });
    };
});
