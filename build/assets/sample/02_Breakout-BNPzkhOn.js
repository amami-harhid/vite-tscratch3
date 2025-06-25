import { _ as B, a as o, __tla as __tla_0 } from "../index-DhqPUomI.js";
Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const t = {
        Forest: "Forest",
        ClassicPiano: "ClassicPiano",
        Togemaru: "Togemaru",
        HarryPotter: "HarryPotter",
        Pew: "Pew",
        MonitorPoint: "MonitorPoint"
    }, n = {
        Start: "Start",
        IntroStart: "IntroStart",
        BallTouch: "ballTouch",
        Question: "Question",
        GAME_START: "GAME_START"
    }, h = 30, d = 20, l = function(e) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" width="${h}" height="${d}" viewBox="0 0 ${h} ${d}">
    <rect x="0" y="0" rx="2" ry="2" width="${h}" height="${d}" fill="black" fill-opacity="0.2" />
    <rect x="1" y="1" rx="3" ry="3" width="${h - 2}" height="${d - 2}" fill="${e}" />
</svg>
`;
    }, v = 30, y = 30, M = 15, z = function(e) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" width="${v}" height="${y}" viewBox="0 0 ${v} ${y}">
    <circle cx="${M}" cy="${M}" r="${M}" fill="${e}"/>
</svg>
`;
    }, S = 50, R = 5, j = function(e) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" width="${S}" height="${R}" viewBox="0 0 ${S} ${R}">
    <rect width="${S}" height="${R}" fill="${e}" />
</svg>
`;
    }, Q = 480, f = 10, k = function(e) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" width="${Q}" height="${f}" viewBox="0 0 ${Q} ${f}">
    <rect width="${Q}" height="${f}" fill="${e}" />
</svg>
`;
    };
    class r {
        static instance;
        static getInstance() {
            return r.instance == null && (r.instance = new r), r.instance;
        }
        positions;
        constructor(){
            this.positions = new Array(10).fill(0);
        }
        clear(A) {
            for(let i = 0; i < this.positions.length; i++)this.positions[i] = A;
        }
        set(A) {
            for(let i = 0; i < this.positions.length - 1; i++)this.positions[i + 1] = this.positions[i];
            this.positions[0] = A;
        }
        get(A) {
            return A && A < this.positions.length ? this.positions[A] : this.positions[this.positions.length - 1];
        }
    }
    const x = "red", D = 24, T = "normal", P = function(e, A, i, a) {
        const p = {
            fontFamily: a,
            fontSize: D,
            fontStyle: T,
            color: x
        };
        e.SvgText.addTexts(A, i, p);
    }, m = "/assets/Forest-6VjELwBO.png", H = "/assets/ClassicalPiano-B_FIxY62.wav", L = "data:audio/wav;base64,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", $ = "/assets/TogeMaruGothic-700-Bold-YtwdCofw.woff", F = "/assets/HarryPotter-ov4z-BcA-z3s5.woff", u = r.getInstance();
    B.title = "ブロック崩し";
    let s, E, C, g, I, w, c;
    B.preload = async function() {
        this.Image.load(m, t.Forest), this.Sound.load(H, t.ClassicPiano), this.Sound.load(L, t.Pew), this.Font.load($, t.Togemaru), this.Font.load(F, t.HarryPotter);
    };
    B.prepare = async function() {
        s = new o.Stage, s.Image.add(t.Forest), s.Sound.add(t.ClassicPiano), s.Sound.setOption(o.SoundOption.VOLUME, 10), E = new o.Sprite("block"), E.SvgText.add("B1", l("#f00000")), E.SvgText.add("B2", l("#00F000")), E.SvgText.add("B3", l("#0000F0")), E.Looks.hide(), C = new o.Sprite("Introduction"), C.Font.add(t.Togemaru), P(C, "T0", [
            "ブロック崩し"
        ], t.Togemaru), P(C, "T1", [
            "Touch me to start."
        ], t.Togemaru), C.Looks.hide(), g = new o.Sprite("ball"), g.SvgText.add("Ball", z("#ff0000")), g.Font.add(t.HarryPotter), g.Motion.Position.xy = [
            0,
            -100
        ], g.Looks.hide(), I = new o.Sprite("bar"), I.SvgText.add("Bar", j("blue")), I.Motion.Position.xy = [
            0,
            -160
        ], I.Looks.hide(), w = new o.Sprite("Bottom"), w.SvgText.add("Bottom", k("#ff0000")), w.Motion.Position.xy = [
            0,
            -183
        ], c = new o.Monitors, c.add(t.MonitorPoint, "得点"), c.get(t.MonitorPoint).scale = {
            w: 100,
            h: 100
        }, c.get(t.MonitorPoint).hide(), c.get(t.MonitorPoint).value = 0;
    };
    B.setting = async function() {
        s.Event.whenFlag(async function*() {
            c.get(t.MonitorPoint).value = 0, this.Looks.Backdrop.name = "Black";
            let A = 5;
            for(s.Sound.setOption(o.SoundOption.VOLUME, A);;)s.Sound.setOption(o.SoundOption.VOLUME, A), await s.Sound.playUntilDone(t.ClassicPiano), A < 100 && (A += 10, s.Sound.setOption(o.SoundOption.VOLUME, A)), yield;
        }), E.Event.whenFlag(async function() {
            this.Sound.add(t.Pew), this.Looks.hide();
        }), E.Event.whenBroadcastReceived(n.Start, async function*() {
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
            for (const i of o.Iterator(5)){
                for (const a of A)this.Motion.Position.x = a, this.Control.clone(), this.Looks.Costume.next();
                this.Motion.Position.y -= 25;
            }
            c.get(t.MonitorPoint).show();
        }), E.Control.whenCloned(async function() {
            this.Looks.show();
        }), E.Control.whenCloned(async function*() {
            for(;;){
                if (this.Sensing.isTouchingToSprites([
                    g
                ])) {
                    c.get(t.MonitorPoint).value += 1, this.Sound.play(t.Pew), this.Event.broadcast(n.BallTouch), this.Looks.hide();
                    break;
                }
                yield;
            }
            await this.Control.wait(.5), this.Control.remove();
        }), C.Event.whenFlag(async function*() {
            for(this.Looks.Costume.name = "T1", this.Looks.show(), this.Event.broadcast(n.IntroStart);;)await this.Control.wait(1), this.Looks.Costume.next(), yield;
        }), C.Event.whenBroadcastReceived(n.IntroStart, async function*() {
            for(;;){
                if (this.Sensing.isMouseTouching()) {
                    this.Event.broadcast(n.Question), this.Looks.hide();
                    break;
                }
                yield;
            }
        }), s.Event.whenBroadcastReceived(n.Question, async function*() {
            let A = 0;
            for(;;){
                const i = await this.Sensing.askAndWait("PLAY MODE( 1:EASY, 2:NORMAL, 3:HARD )");
                if (i == "1" || i == "2" || i == "3") {
                    const a = parseInt(i);
                    a == 1 && (A = 3), a == 2 && (A = 2), a == 3 && (A = 1);
                    break;
                }
                yield;
            }
            this.Event.broadcast(n.Start, A);
        }), C.Event.whenBroadcastReceived(n.IntroStart, async function*() {
            for(;;)await this.Control.wait(.5), this.Looks.Effect.set(o.ImageEffective.GHOST, 50), await this.Control.wait(.5), this.Looks.Effect.set(o.ImageEffective.GHOST, 0), yield;
        }), g.Event.whenFlag(async function() {
            this.Looks.hide();
        }), g.Event.whenBroadcastReceived(n.Start, async function() {
            this.Motion.Position.xy = [
                0,
                0
            ], this.Looks.show();
            const A = o.Keyboard.SPACE, i = ()=>this.Sensing.isKeyDown(A);
            await this.Control.waitUntil(i), this.Event.broadcast(n.GAME_START);
        }), g.Event.whenBroadcastReceived(n.BallTouch, async function() {
            this.Motion.Direction.degree += o.getRandomValueInRange(-5, 5) + 180;
        }), g.Event.whenBroadcastReceived(n.GAME_START, async function*() {
            this.Motion.Direction.degree = 180;
            const A = I.Looks.Size.drawingSize;
            for(;;){
                if (this.Motion.Move.steps(10), this.Sensing.isTouchingToSprites([
                    I
                ])) {
                    this.Motion.Position.y += A.h * 3;
                    const i = u.get(3) - I.Motion.Position.x, a = this.Motion.Direction.degree;
                    this.Motion.Direction.degree += o.getRandomValueInRange(-5, -5) * i - a;
                } else if (this.Sensing.isTouchingToSprites([
                    w
                ])) break;
                this.Motion.Move.ifOnEdgeBounce(), yield;
            }
            this.Control.stopAll(), console.log("GameOver");
        }), I.Event.whenFlag(async function() {
            this.Looks.hide();
        }), I.Event.whenBroadcastReceived(n.Start, async function(A) {
            this.Motion.Position.xy = [
                0,
                -160
            ], this.Looks.Size.scale = [
                A * 100,
                150
            ], u.clear(this.Motion.Position.x), this.Looks.show();
        }), I.Event.whenBroadcastReceived(n.Start, async function*() {
            for(;;){
                const A = o.mousePosition, i = this.Motion.Position.xy;
                this.Motion.Move.toXY(A.x, i.y), u.set(this.Motion.Position.x), yield;
            }
        });
    };
});
