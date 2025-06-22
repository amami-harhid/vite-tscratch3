import { a as w, c as t, __tla as __tla_0 } from "../index-D2v2F40U.js";
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
        Togemaru: "Togemaru",
        HarryPotter: "HarryPotter",
        Pew: "Pew"
    }, n = {
        Start: "Start",
        IntroStart: "IntroStart",
        BallTouch: "ballTouch",
        Question: "Question",
        GAME_START: "GAME_START"
    }, z = "red", j = 24, p = "normal", f = function(e, A, i, I) {
        const P = e.SvgText.toSvg(i, j, p, z, I);
        e.SvgText.add(A, P, I);
    }, r = 30, d = 20, B = function(e) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" width="${r}" height="${d}" viewBox="0 0 ${r} ${d}">
    <rect x="0" y="0" rx="2" ry="2" width="${r}" height="${d}" fill="black" fill-opacity="0.2" />
    <rect x="1" y="1" rx="3" ry="3" width="${r - 2}" height="${d - 2}" fill="${e}" />
</svg>
`;
    }, y = 30, u = 30, l = 15, k = function(e) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" width="${y}" height="${u}" viewBox="0 0 ${y} ${u}">
    <circle cx="${l}" cy="${l}" r="${l}" fill="${e}"/>
</svg>
`;
    }, M = 50, S = 5, x = function(e) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" width="${M}" height="${S}" viewBox="0 0 ${M} ${S}">
    <rect width="${M}" height="${S}" fill="${e}" />
</svg>
`;
    }, R = 480, v = 10, T = function(e) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" width="${R}" height="${v}" viewBox="0 0 ${R} ${v}">
    <rect width="${R}" height="${v}" fill="${e}" />
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
    const D = "/assets/Forest-6VjELwBO.png", H = "/assets/ClassicalPiano-B_FIxY62.wav", m = "data:audio/wav;base64,UklGRjQMAABXQVZFZm10IBQAAAARAAEAIlYAAFwrAAAAAgQAAgD5A2ZhY3QEAAAAuBYAAGRhdGEADAAAAAAAAHd3//+vAAAAcSeoj4CAAIAAJwjpCQiAAAhwAgjsgAAIAAhwgoiPCAgACIAXgLAPCIAACAAXgKgPCIAACIAXgLAPCIAACAAXCKgPCIAACIAXgLCOAAiAAIBwg4DsgAAIgAB4AoDcCIAACAAIRwi4DwgIAAiAcAII7IAACIAAgCeAwA4IAAgIAHgCCPuIAIAACABxgwjdCIAAgACARwioj4AACIAACDcIyI4AgAAIgAA3gNAOgIAAgAAINwi4nwAIAAgACEeAgK+AAIAACAB4BAjNgAAIgAAAeAQI2A2AAAgACIBHCAjNgAAIgAAAODeA8IwAgAAIAIBwhYD4CQiAAAgACDeAAM8ACIAACAAIR4CA3QAIgAAIAAhHgAjdgACAAAgACHMDCPwJCIAAgAAAeIaA0IsAAAgACAAAd4CAroAAgACAAIBwhoDwiQCAgACAAIBHgAivCAAIAAgACHCGgJCfgAAIAAgACHCFgMAOCIAACIAAgHCFgLCPCIAACAAIAHAFCIivCIAAgAAACAB3gID7CIAACAAIgABwBQj4igCAAIAAgAAAd4CA+ogACIAAgAAAeIaAgK8AgAAIgAAACHAGCIivgACAAAgAgABwBwiInwiAAAgACAAIAHeACNyAAAgACAAIAIB3gIDwCggACIAAgAAAeAcICK+AAICA0E4AgACAAIAAd4AI+IkACIAAgACAAAB3gID4CoAAgAAIAAAIAHcAgPgLAAgACAAIAAAAd4EAyI8IgACAAAgAgABwBwCI+4kAgACAAAAACAB3goCA34AACAAIAAgAgAB3AAiorwAIAAgAgAAAAAB3AgiI3wiAAIAAgAAAgABwFwCI/QiAAIAACACAAIAAd4GAsK8IAAgAAAgAAAAAcEcICPgNCAAIgACAAAAIAHAXgID4jAAIAAgAAAgAAAAAdwMIqO+AAAiAAAAIAAAIAHA3CIj5jQAIAAgAgAAAAACAdwOAiP+AgACAAAgACAAIAAB3goCA3wiAAAgAgAAACAAAAHBHCID4jQCAAAgACAAACAAAAHeEgIDfCAAIgACAAACAAAAAcEcIgIjvgAAIgACAAAAIAAAACHeEgID8CoAAgAAAAAgAAAAQAHB3gICYv4AAgAAAAAgAEAAAAAB3FwiI+A0IgACAAAAIAAAIAAAAcWeAgIjPCIAACAAACAAAAAAAAAB3B4CA+A0IAAiAAAAIAIAAAAAAcGeAgIj4DQiAAAgAgAAAAACAEAAAdweAgOiOAAiAAIAAAIAAAAAAAABwdwAIiPiNAAgACACAAAAACAAAAQBwd4GAiPgOCIAACAAIAAAIAAAAAAAAdxcIiIjvgAAIgACAAAAIAAAAAAAAAHk5MwABCIi++v+PAAgACACAAAAACAAAAQAAdycIiIj/CAgACIAAAAgAAACAAAEAAHB3goCIiP+IAAgAgACAAAAAAAAYAAAAEHc3gICY+J8IgAAACAAAAAAYAAAAAAEQAHdngICI+I4ACIAAAAgAgAAAAAAAAAEAEHB3BYiIkP+AgACAAAgAgAAAAAAIEAAAAABxd4WAiJD8iwAACAAAAAEAAAABEBAAERAREHd3A4iIiP8KCAAACAAAAAAAAAAAAQABAQEBcXcngIiI+J+AAAgAAAgAAAAAAAAAAQAQAAERcHcngIiY+J8ACAAIAIAAAAAAAAAQAAABEBAQEHd3g4CYiPwPCIAACACAAAAAAIAQAAAAAAEQAAFxdzeIiIio/4kACAAAgAAAABAAAAABEAABAREQEXF3dwiIiIDvCIAACACAAAAAgBAYGAAAAAEQAAEBEXB3V4CIiIj4n4AAgAAAAAgAAAAQAAAAARAQABEQERBxd3cAiIiI+I8IgAAACAAACAAAAAEAAAABAAEBAREQEXF3d4GIkIj4nwAIAIAAAIAAABAAAAAAARAAAQEREBEREXd3J4CIiIn4rwgIAAAAAAAAAAAQABAQEBAQEQEhERESEiJ3d3eAiIgI+I+AAAgACAAACAAAAAAAAQAQAAEQEBAREBEREnd3VwiImIj41c9GAIAIEAAQAAEQAQERARESESEhEiIiIzIzM0MyM0N3d3eDiIiY+L+AAAAAAIABAAAQABAQEBABEREgERESEiIiIiMzcnd3Z4iAiIj5jwgIAAAIAAAAAAAAAAAQABAQEBAQERAREhESEiIid3d3hIiIiIj4rwgIAAAAAAAAAQAQAAEQEBAREBERIRESIhIyIiMzM3R3d3eIgIiIiP+IAAgAgAAAAAAYGAAAAAEAAQEQAREBERESISEhEiMiM3J3d3eBiIiIiPivCAgAAAAAAAABABAAAQEBEQERESERISEiIiIyMjMkIzNDcnd3d4GQiIiI+L+AAAAAAAAAAAABEAAREBABERESERISIhIjMjIzQzIzM0MzM3d3d1eIiIiIiPivCAgAAAAAAAABAAEQEBABERAREhEhISEiIiMyMzMkMzMkMzMzNHd3d1eICImIiPi/gAAAgAEAAAABAAEBAQERARESESEhISIiMjIyJDIjMyQzMzNDMzNDd3d3dwiIiIiIiP8KCACAAAABAAAAEAABEBABERARERESEhIiIjIyMjMkMzMzNCNDMjIzJHN3d3cXiIiIiJiI/4yAAAAAAAAQAAABEAABAREQEREREiEhEiIjIjMzMzQyQzIzQiIzMzMkMzMld3d3d4CIiIiIiIj/DAgAgAAQGAAAABAAEBC+9ywAEBABERARESEREhIiIiMyMzMkMzMzNDMzJDMzUxITMyN3d3d3gZCIiIiYiPnvCAgAAAAYGAAAAAAQAAEBAREQEQESESEhISIiMjIzMzQjMyQzMiQzMkMyMjMzIyISE3d3d3eBiJiIiIiIif+OgAAAAACAAQAAABAAARAQEAERERERERISIiIyMjJDMjIzMyQzMyQjQyIzMzMiIjEhISEREnd3d3eAiIiIiIiJiPjvgIAAAAAAAAAAAAABAAEBAQERARERIRESEiIiIjMyQyIjM0MyMzM0MjMzMzIxEhMSEhIREhERERF3d3dniIiQkIiIiJiI+P8ICAAIAAAAAAEAABAAARAQEAEREREREiEhIjEiMjMyJDMzM0MjM0MSMiIiEiIhERIREhEREREQAREQEABxd3d3goiIiYiJvwiACAiAgAiACIAIgAiACICAgICACAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", $ = "/assets/TogeMaruGothic-700-Bold-YtwdCofw.woff", L = "/assets/HarryPotter-ov4z-BcA-z3s5.woff", Q = c.getInstance();
    w.title = "ブロック崩し";
    let g, E, C, s, a, h;
    w.preload = async function() {
        this.Image.load(D, o.Forest), this.Sound.load(H, o.ClassicPiano), this.Sound.load(m, o.Pew), this.Font.load($, o.Togemaru), this.Font.load(L, o.HarryPotter);
    };
    w.prepare = async function() {
        g = new t.Stage, g.Image.add(o.Forest), g.Sound.add(o.ClassicPiano), g.Sound.setOption(t.SoundOption.VOLUME, 10), E = new t.Sprite("block"), E.SvgText.add("B1", B("#f00000")), E.SvgText.add("B2", B("#00F000")), E.SvgText.add("B3", B("#0000F0")), E.Looks.hide(), C = new t.Sprite("Introduction"), C.Font.add(o.Togemaru), f(C, "T0", [
            "ブロック崩し"
        ], o.Togemaru), f(C, "T1", [
            "Touch me to start."
        ], o.Togemaru), C.Looks.hide(), s = new t.Sprite("ball"), s.SvgText.add("Ball", k("#ff0000")), s.Font.add(o.HarryPotter);
        const A = s.SvgText.toSvg([
            "X"
        ], 20, "normal", "red", o.HarryPotter);
        s.SvgText.add("X", A, o.HarryPotter), s.Motion.Position.xy = [
            0,
            -100
        ], s.Looks.hide(), a = new t.Sprite("bar"), a.SvgText.add("Bar", x("blue")), a.Motion.Position.xy = [
            0,
            -160
        ], a.Looks.hide(), h = new t.Sprite("Bottom"), h.SvgText.add("Bottom", T("#ff0000")), h.Motion.Position.xy = [
            0,
            -183
        ];
    };
    w.setting = async function() {
        g.Event.whenFlag(async function*() {
            this.Looks.Backdrop.name = "Black";
            let A = 5;
            for(g.Sound.setOption(t.SoundOption.VOLUME, A);;)g.Sound.setOption(t.SoundOption.VOLUME, A), await g.Sound.playUntilDone(o.ClassicPiano), A < 100 && (A += 10, g.Sound.setOption(t.SoundOption.VOLUME, A)), yield;
        }), E.Event.whenFlag(async function() {
            this.Sound.add(o.Pew), this.Looks.hide();
        }), E.Event.whenBroadcastReceived(n.Start, async function*() {
            this.Looks.hide(), this.Motion.Position.y = 150;
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
            for (const i of t.Iterator(5)){
                for (const I of A)this.Motion.Position.x = I, this.Control.clone(), this.Looks.Costume.next();
                this.Motion.Position.y -= 25;
            }
        }), E.Control.whenCloned(async function() {
            this.Looks.show();
        }), E.Control.whenCloned(async function*() {
            for(;;){
                if (this.Sensing.isTouchingToSprites([
                    s
                ])) {
                    this.Sound.play(o.Pew), this.Event.broadcast(n.BallTouch), this.Looks.hide();
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
        }), g.Event.whenBroadcastReceived(n.Question, async function*() {
            let A = 0;
            for(;;){
                const i = await this.Sensing.askAndWait("PLAY MODE( 1:EASY, 2:NORMAL, 3:HARD )");
                if (i == "1" || i == "2" || i == "3") {
                    const I = parseInt(i);
                    I == 1 && (A = 3), I == 2 && (A = 2), I == 3 && (A = 1);
                    break;
                }
                yield;
            }
            this.Event.broadcast(n.Start, A);
        }), C.Event.whenBroadcastReceived(n.IntroStart, async function*() {
            for(;;)await this.Control.wait(.5), this.Looks.Effect.set(t.ImageEffective.GHOST, 50), await this.Control.wait(.5), this.Looks.Effect.set(t.ImageEffective.GHOST, 0), yield;
        }), s.Event.whenFlag(async function() {
            this.Looks.hide();
        }), s.Event.whenBroadcastReceived(n.Start, async function() {
            this.Motion.Position.xy = [
                0,
                0
            ], this.Looks.show();
            const A = t.Keyboard.SPACE, i = ()=>this.Sensing.isKeyDown(A);
            await this.Control.waitUntil(i), this.Event.broadcast(n.GAME_START);
        }), s.Event.whenBroadcastReceived(n.BallTouch, async function() {
            this.Motion.Direction.degree += t.getRandomValueInRange(-5, 5) + 180;
        }), s.Event.whenBroadcastReceived(n.GAME_START, async function*() {
            this.Motion.Direction.degree = 180;
            const A = a.Looks.Size.drawingSize;
            for(;;){
                if (this.Motion.Move.steps(10), this.Sensing.isTouchingToSprites([
                    a
                ])) {
                    this.Motion.Position.y += A.h * 3;
                    const i = Q.get(3) - a.Motion.Position.x, I = this.Motion.Direction.degree;
                    this.Motion.Direction.degree += t.getRandomValueInRange(-5, -5) * i - I;
                } else if (this.Sensing.isTouchingToSprites([
                    h
                ])) break;
                this.Motion.Move.ifOnEdgeBounce(), yield;
            }
            this.Control.stopAll(), console.log("GameOver");
        }), a.Event.whenFlag(async function() {
            this.Looks.hide();
        }), a.Event.whenBroadcastReceived(n.Start, async function(A) {
            this.Motion.Position.xy = [
                0,
                -160
            ], this.Looks.Size.scale = [
                A * 100,
                150
            ], Q.clear(this.Motion.Position.x), this.Looks.show();
        }), a.Event.whenBroadcastReceived(n.Start, async function*() {
            for(;;){
                const A = t.mousePosition, i = this.Motion.Position.xy;
                this.Motion.Move.toXY(A.x, i.y), Q.set(this.Motion.Position.x), yield;
            }
        });
    };
});
