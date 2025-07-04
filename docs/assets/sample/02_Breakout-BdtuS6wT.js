import { _ as B, a as o, __tla as __tla_0 } from "../index-BX_7rBdP.js";
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
    }, r = 30, d = 20, M = function(n) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" width="${r}" height="${d}" viewBox="0 0 ${r} ${d}">
    <rect x="0" y="0" rx="2" ry="2" width="${r}" height="${d}" fill="black" fill-opacity="0.2" />
    <rect x="1" y="1" rx="3" ry="3" width="${r - 2}" height="${d - 2}" fill="${n}" />
</svg>
`;
    }, y = 30, P = 30, l = 15, p = function(n) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" width="${y}" height="${P}" viewBox="0 0 ${y} ${P}">
    <circle cx="${l}" cy="${l}" r="${l}" fill="${n}"/>
</svg>
`;
    }, S = 50, u = 5, m = function(n) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${u}" viewBox="0 0 ${S} ${u}">
    <rect width="${S}" height="${u}" fill="${n}" />
</svg>
`;
    }, R = 480, v = 10, x = function(n) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" width="${R}" height="${v}" viewBox="0 0 ${R} ${v}">
    <rect width="${R}" height="${v}" fill="${n}" />
</svg>
`;
    };
    class C {
        static instance;
        static getInstance() {
            return C.instance == null && (C.instance = new C), C.instance;
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
    const j = "red", z = 24, T = "normal", f = function(n, A, t, a) {
        const k = {
            fontFamily: a,
            fontSize: z,
            fontStyle: T,
            color: j
        };
        n.SvgText.addTexts(A, t, k);
    }, L = "/assets/Forest-6VjELwBO.png", D = "/assets/Whisker_Stalker-CtL1ymV7.wav", $ = "data:audio/wav;base64,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", H = "/assets/TogeMaruGothic-700-Bold-YtwdCofw.woff", Q = C.getInstance();
    B.title = "ブロック崩し";
    let s, E, I, h, g, w, c;
    B.preload = async function() {
        this.Image.load(L, i.Forest), this.Sound.load(D, i.BGM), this.Sound.load($, i.Pew), this.Font.load(H, i.Togemaru);
    };
    B.prepare = async function() {
        s = new o.Stage, s.Image.add(i.Forest), s.Sound.add(i.BGM), s.Sound.setOption(o.SoundOption.VOLUME, 10), E = new o.Sprite("block"), E.SvgText.add("B1", M("#f00000")), E.SvgText.add("B2", M("#00F000")), E.SvgText.add("B3", M("#0000F0")), E.Looks.hide(), I = new o.Sprite("Introduction"), I.Font.add(i.Togemaru), f(I, "T0", [
            "ブロック崩し"
        ], i.Togemaru), f(I, "T1", [
            "Touch me to start."
        ], i.Togemaru), f(I, "T2", [
            "The paddle moves with the mouse. "
        ], i.Togemaru), I.Looks.hide(), h = new o.Sprite("ball"), h.SvgText.add("Ball", p("#ff0000")), h.Motion.Position.xy = [
            0,
            -100
        ], h.Looks.hide(), g = new o.Sprite("bar"), g.SvgText.add("Bar", m("blue")), g.Motion.Position.xy = [
            0,
            -160
        ], g.Looks.hide(), w = new o.Sprite("Bottom"), w.SvgText.add("Bottom", x("#ff0000")), w.Motion.Position.xy = [
            0,
            -183
        ], c = new o.Monitors, c.add(i.MonitorPoint, "得点"), c.get(i.MonitorPoint).scale = {
            w: 100,
            h: 100
        }, c.get(i.MonitorPoint).hide(), c.get(i.MonitorPoint).value = 0;
    };
    B.setting = async function() {
        s.Event.whenFlag(async function*() {
            c.get(i.MonitorPoint).value = 0, this.Looks.Backdrop.name = "Black";
            let A = 50;
            for(s.Sound.setOption(o.SoundOption.VOLUME, A);;)s.Sound.setOption(o.SoundOption.VOLUME, A), await s.Sound.playUntilDone(i.BGM), A < 100 && (A += 10, s.Sound.setOption(o.SoundOption.VOLUME, A)), yield;
        }), E.Event.whenFlag(async function() {
            this.Sound.add(i.Pew), this.Looks.hide();
        }), E.Event.whenBroadcastReceived(e.Start, async function*() {
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
                for (const a of A)this.Motion.Position.x = a, this.Control.clone(), this.Looks.Costume.next();
                this.Motion.Position.y -= 25;
            }
            c.get(i.MonitorPoint).show();
        }), E.Control.whenCloned(async function() {
            this.Looks.show();
        }), E.Control.whenCloned(async function*() {
            for(;;){
                if (this.Sensing.isTouchingToSprites([
                    h
                ])) {
                    c.get(i.MonitorPoint).value += 1, this.Sound.play(i.Pew), this.Event.broadcast(e.BallTouch), this.Looks.hide();
                    break;
                }
                yield;
            }
            await this.Control.wait(.5), this.Control.remove();
        }), I.Event.whenFlag(async function*() {
            const A = this.Looks.Costume.names;
            for(this.Looks.Costume.name = A[0], this.Looks.show(), this.Event.broadcast(e.IntroStart);;)await this.Control.wait(1), this.Looks.Costume.next(), yield;
        }), I.Event.whenBroadcastReceived(e.IntroStart, async function*() {
            for(;;){
                if (this.Sensing.isMouseTouching()) {
                    this.Control.stopOtherScripts(this), this.Event.broadcast(e.Question), this.Looks.hide();
                    break;
                }
                yield;
            }
        }), I.Event.whenBroadcastReceived(e.IntroStartNext, async function(A) {
            console.log("Recieved IntroStartNext");
            const t = this.Looks.Costume.names;
            this.Looks.Costume.name = t[t.length - 1], this.Looks.Effect.set(o.ImageEffective.GHOST, 0), this.Looks.show(), await this.Control.wait(2), this.Looks.hide(), this.Event.broadcast(e.Start, A);
        }), s.Event.whenBroadcastReceived(e.Question, async function*() {
            let A = 0;
            for(;;){
                const t = await this.Sensing.askAndWait("PLAY MODE( 1:SUPER EASY, 2:NORMAL, 3:HARD )");
                if (t == "1" || t == "2" || t == "3") {
                    const a = parseInt(t);
                    a == 1 && (A = 3), a == 2 && (A = 2), a == 3 && (A = 1);
                    break;
                }
                yield;
            }
            this.Event.broadcast(e.IntroStartNext, A);
        }), I.Event.whenBroadcastReceived(e.IntroStart, async function*() {
            for(;;)await this.Control.wait(.5), this.Looks.Effect.set(o.ImageEffective.GHOST, 50), await this.Control.wait(.5), this.Looks.Effect.set(o.ImageEffective.GHOST, 0), yield;
        }), h.Event.whenFlag(async function() {
            this.Looks.hide();
        }), h.Event.whenBroadcastReceived(e.Start, async function() {
            this.Motion.Position.xy = [
                0,
                0
            ], this.Looks.show();
            const A = o.Keyboard.SPACE, t = ()=>this.Sensing.isKeyDown(A);
            await this.Control.waitUntil(t), this.Event.broadcast(e.GAME_START);
        }), h.Event.whenBroadcastReceived(e.BallTouch, async function() {
            this.Motion.Direction.degree += o.getRandomValueInRange(-5, 5) + 180;
        }), h.Event.whenBroadcastReceived(e.GAME_START, async function*() {
            this.Motion.Direction.degree = 180;
            const A = g.Looks.Size.drawingSize;
            for(;;){
                if (this.Motion.Move.steps(10), this.Sensing.isTouchingToSprites([
                    g
                ])) {
                    this.Motion.Position.y += A.h * 3;
                    const t = Q.get(3) - g.Motion.Position.x, a = this.Motion.Direction.degree;
                    this.Motion.Direction.degree += o.getRandomValueInRange(-5, -5) * t - a;
                } else if (this.Sensing.isTouchingToSprites([
                    w
                ])) break;
                this.Motion.Move.ifOnEdgeBounce(), yield;
            }
            this.Control.stopAll(), console.log("GameOver");
        }), g.Event.whenFlag(async function() {
            this.Looks.hide();
        }), g.Event.whenBroadcastReceived(e.Start, async function(A) {
            this.Motion.Position.xy = [
                0,
                -160
            ], this.Looks.Size.scale = [
                A * 100,
                150
            ], Q.clear(this.Motion.Position.x), this.Looks.show();
        }), g.Event.whenBroadcastReceived(e.Start, async function*() {
            for(;;){
                const A = o.mousePosition, t = this.Motion.Position.xy;
                this.Motion.Move.toXY(A.x, t.y), Q.set(this.Motion.Position.x), yield;
            }
        });
    };
});
