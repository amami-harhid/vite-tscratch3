import { _ as m, a as e, __tla as __tla_0 } from "../index-BX_7rBdP.js";
Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const t = {
        Controller: "Controller",
        Chanting: "Chanting",
        Damage: "Damage",
        RedBall: "RedBall",
        YellowBall: "YellowBall",
        BlueBall: "BlueBall",
        Togemaru: "Togemaru",
        Title: "Title",
        Guide: "Guide",
        Alert: "Alert",
        GameOver: "GameOver",
        MonitorPoint: "Point",
        MonitorFail: "Fail",
        BlackBground: "BlackBground",
        ShortMistery001: "ShortMistery001"
    }, n = {
        Start: "Start",
        View: "View",
        Small: "Small",
        GameOver: "GameOver"
    }, u = 30, y = 30, v = 15, w = function(l) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" width="${u}" height="${y}" viewBox="0 0 ${u} ${y}">
    <circle cx="${v}" cy="${v}" r="${v}" fill="${l}"/>
</svg>
`;
    }, M = `
<svg xmlns="http://www.w3.org/2000/svg" width="480" height="360" viewBox="0 0 480 360">
    <rect width="480" height="360" fill="#000000" />
</svg>
`, B = function(l) {
        const h = {
            fontFamily: t.Togemaru,
            fontSize: 35,
            fontStyle: "bold",
            color: "#ffffff"
        };
        l.SvgText.addTexts(t.Title, [
            "カラー円盤ゲーム"
        ], h);
    }, k = function(l) {
        const h = {
            fontFamily: t.Togemaru,
            fontSize: 15,
            fontStyle: "bold",
            color: "#ff0000"
        }, g = [
            "← / → を使って回転させよう",
            "迫ってくるドットを同じ色で受け止めよう"
        ];
        l.SvgText.addTexts(t.GameOver, g, h);
    }, p = function(l) {
        const h = {
            fontFamily: t.Togemaru,
            fontSize: 15,
            fontStyle: "bold",
            color: "#ff0000"
        }, g = [
            "失敗数が１０になったらゲームオーバー"
        ];
        l.SvgText.addTexts(t.Alert, g, h);
    }, G = function(l) {
        const h = {
            fontFamily: t.Togemaru,
            fontSize: 35,
            fontStyle: "bold",
            color: "#ff0000"
        }, g = [
            "GameOver"
        ];
        l.SvgText.addTexts(t.GameOver, g, h);
    }, L = "/assets/controller-CJzbtSnH.svg", O = "/assets/chanting8bit-m_OGwPii.mp3", x = "/assets/damage8bit-BpQsoc_U.mp3", F = "/assets/TogeMaruGothic-700-Bold-YtwdCofw.woff", P = "/assets/Short_mistery_001-e2f3Mzlr.mp3";
    m.title = "回転する色";
    let d, c, s, r, a;
    const E = "#ff0000", T = "#ffff00", C = "#003fff";
    m.preload = async function() {
        this.Image.load(L, t.Controller), this.Sound.load(O, t.Chanting), this.Sound.load(x, t.Damage), this.Font.load(F, t.Togemaru), this.Sound.load(P, t.ShortMistery001);
    };
    m.prepare = async function() {
        d = new e.Stage, d.SvgText.add(t.BlackBground, M), d.Sound.add(t.ShortMistery001), c = new e.Sprite("Controller"), c.Image.add(t.Controller), c.Looks.hide(), s = new e.Sprite("dot"), s.Sound.add(t.Chanting), s.Sound.add(t.Damage), s.SvgText.add(t.RedBall, w(E)), s.SvgText.add(t.YellowBall, w(T)), s.SvgText.add(t.BlueBall, w(C)), s.Looks.Size.scale = [
            30,
            30
        ], s.Motion.Position.xy = [
            0,
            0
        ], s.Looks.hide(), r = new e.Sprite("text"), r.Font.add(t.Togemaru), B(r), k(r), p(r), G(r), r.Looks.show(), r.Looks.Effect.set(e.ImageEffective.GHOST, 0), a = new e.Monitors, a.add(t.MonitorPoint, "成功"), a.get(t.MonitorPoint).hide(), a.add(t.MonitorFail, "失敗"), a.get(t.MonitorFail).hide();
    };
    m.setting = async function() {
        d.Event.whenFlag(async function*() {
            a.get(t.MonitorPoint).hide(), a.get(t.MonitorPoint).value = 20, a.get(t.MonitorFail).hide(), a.get(t.MonitorFail).value = 0, this.Looks.Effect.set(e.ImageEffective.GHOST, 0);
        }), d.Event.whenBroadcastReceived(n.Start, async function*() {
            for(this.Looks.Effect.set(e.ImageEffective.GHOST, 0), this.Sound.add(t.ShortMistery001);;)await this.Sound.playUntilDone(t.ShortMistery001), yield;
        }), d.Event.whenBroadcastReceived(n.GameOver, async function() {
            this.Control.stopOtherScripts(this);
        }), c.Event.whenFlag(async function*() {
            this.Looks.hide(), this.Looks.Effect.set(e.ImageEffective.GHOST, 100);
        }), r.Event.whenFlag(async function*() {
            this.Looks.Costume.name = t.Title, this.Looks.show(), await this.Control.wait(1), this.Looks.Costume.name = t.Guide;
            let o = 0;
            this.Looks.Effect.set(e.ImageEffective.GHOST, o), await this.Control.wait(1);
            for (const i of e.Iterator(5))o += 20, this.Looks.Effect.set(e.ImageEffective.GHOST, o), await this.Control.wait(.1), yield;
            this.Looks.Costume.name = t.Alert, o = 0, this.Looks.Effect.set(e.ImageEffective.GHOST, o), await this.Control.wait(1);
            for (const i of e.Iterator(5))o += 20, this.Looks.Effect.set(e.ImageEffective.GHOST, o), await this.Control.wait(.1), yield;
            this.Event.broadcast(n.View), this.Looks.hide();
        }), r.Event.whenBroadcastReceived(n.GameOver, async function() {
            this.Looks.Effect.set(e.ImageEffective.GHOST, 0), this.Looks.Costume.name = t.GameOver, this.Looks.show();
        }), c.Event.whenBroadcastReceived(n.View, async function*() {
            this.Looks.show();
            let o = 100;
            for (const i of e.Iterator(5))o -= 20, this.Looks.Effect.set(e.ImageEffective.GHOST, o), await this.Control.wait(.05), yield;
            this.Event.broadcast(n.Small);
        }), c.Event.whenBroadcastReceived(n.Small, async function*() {
            let o = 100;
            for (const i of e.Iterator(10))o -= 5, this.Looks.Size.scale = [
                o,
                o
            ], await this.Control.wait(.05), yield;
            this.Event.broadcast(n.Start);
        }), c.Event.whenBroadcastReceived(n.Start, async function*() {
            for(;;)this.Sensing.isKeyDown(e.Keyboard.RIGHT) ? this.Motion.Direction.degree += 5 : this.Sensing.isKeyDown(e.Keyboard.LEFT) && (this.Motion.Direction.degree -= 5), await this.Control.wait(.01), yield;
        }), c.Event.whenBroadcastReceived(n.GameOver, async function() {
            this.Looks.Effect.set(e.ImageEffective.GHOST, 90), this.Control.stopOtherScripts(this);
        }), s.Event.whenFlag(async function*() {
            this.Looks.hide();
        }), s.Event.whenBroadcastReceived(n.Start, async function*() {
            a.get(t.MonitorPoint).show(), a.get(t.MonitorFail).show();
            const o = this.Looks.Costume.names;
            for(console.log("CostumeNames", o);;){
                this.Motion.Move.randomPosition(), this.Motion.Position.x *= .5, this.Motion.Position.x > 0 ? this.Motion.Position.x += 100 : this.Motion.Position.x -= 100, this.Motion.Position.y *= .5, this.Motion.Position.y > 0 ? this.Motion.Position.y += 100 : this.Motion.Position.y -= 100;
                const i = e.randomInteger(0, o.length - 1), f = o[i];
                this.Looks.Costume.name = f, console.log("idx, this.Looks.Costume.name", i, f), this.Control.clone(), await this.Control.wait(e.randomDecimal(.2, 3)), yield;
            }
        }), s.Event.whenBroadcastReceived(n.GameOver, async function*() {
            this.Control.stopOtherScripts(this);
        }), s.Control.whenCloned(async function*() {
            const o = this.Looks.Costume.name;
            this.Motion.Point.toTarget(c);
            const i = e.randomDecimal(1, 2);
            for(console.log("STEPS", i), this.Looks.show();;){
                if (this.Motion.Move.steps(i), this.Sensing.isTouchingToSprites([
                    c
                ])) {
                    this.Motion.Move.steps(i), o == t.RedBall && this.Sensing.isTouchingToColor(E) || o == t.YellowBall && this.Sensing.isTouchingToColor(T) || o == t.BlueBall && this.Sensing.isTouchingToColor(C) ? (this.Sound.play(t.Chanting), a.get(t.MonitorPoint).value += 2) : (this.Sound.play(t.Damage), a.get(t.MonitorFail).value += 1), this.Looks.hide();
                    break;
                }
                a.get(t.MonitorFail).value > 9 && (this.Looks.hide(), this.Looks.Effect.set(e.ImageEffective.GHOST, 100), this.Event.broadcast(n.GameOver)), yield;
            }
            await this.Control.wait(1), this.Control.remove();
        }), s.Event.whenBroadcastReceived(n.GameOver, async function() {
            this.Control.stopOtherScripts(this);
        });
    };
});
