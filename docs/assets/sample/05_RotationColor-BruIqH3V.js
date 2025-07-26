import { _ as g, a as e, __tla as __tla_0 } from "../index-Bmbx4PuQ.js";
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
    }, s = {
        Start: "Start",
        View: "View",
        Small: "Small",
        GameOver: "GameOver"
    }, w = 30, u = 30, S = 15, v = function(a) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${u}" viewBox="0 0 ${w} ${u}">
    <circle cx="${S}" cy="${S}" r="${S}" fill="${a}"/>
</svg>
`;
    }, T = `
<svg xmlns="http://www.w3.org/2000/svg" width="480" height="360" viewBox="0 0 480 360">
    <rect width="480" height="360" fill="#000000" />
</svg>
`, C = function(a) {
        const h = {
            fontFamily: t.Togemaru,
            fontSize: 35,
            fontStyle: "bold",
            color: "#ffffff"
        };
        a.SvgText.addTexts(t.Title, [
            "カラー円盤ゲーム"
        ], h);
    }, B = function(a) {
        const h = {
            fontFamily: t.Togemaru,
            fontSize: 15,
            fontStyle: "bold",
            color: "#ff0000"
        }, d = [
            "← / → を使って回転させよう",
            "迫ってくるドットを同じ色で受け止めよう"
        ];
        a.SvgText.addTexts(t.GameOver, d, h);
    }, k = function(a) {
        const h = {
            fontFamily: t.Togemaru,
            fontSize: 15,
            fontStyle: "bold",
            color: "#ff0000"
        }, d = [
            "失敗数が１０になったらゲームオーバー"
        ];
        a.SvgText.addTexts(t.Alert, d, h);
    }, p = function(a) {
        const h = {
            fontFamily: t.Togemaru,
            fontSize: 35,
            fontStyle: "bold",
            color: "#ff0000"
        }, d = [
            "GameOver"
        ];
        a.SvgText.addTexts(t.GameOver, d, h);
    }, G = "/assets/controller-CJzbtSnH.svg", L = "/assets/chanting8bit-m_OGwPii.mp3", x = "/assets/damage8bit-BpQsoc_U.mp3", O = "/assets/TogeMaruGothic-700-Bold-YtwdCofw.woff", F = "/assets/Short_mistery_001-e2f3Mzlr.mp3";
    g.title = "回転する色";
    let c, n, r, i;
    const y = "#ff0000", E = "#ffff00", M = "#003fff";
    g.preload = async function() {
        this.Image.load(G, t.Controller), this.Sound.load(L, t.Chanting), this.Sound.load(x, t.Damage), this.Font.load(O, t.Togemaru), this.Sound.load(F, t.ShortMistery001);
    };
    g.prepare = async function() {
        this.stage.SvgText.add(t.BlackBground, T), this.stage.Sound.add(t.ShortMistery001), c = new e.Sprite("Controller"), c.Image.add(t.Controller), c.Looks.hide(), n = new e.Sprite("dot"), n.Sound.add(t.Chanting), n.Sound.add(t.Damage), n.SvgText.add(t.RedBall, v(y)), n.SvgText.add(t.YellowBall, v(E)), n.SvgText.add(t.BlueBall, v(M)), n.Looks.Size.scale = [
            30,
            30
        ], n.Motion.Position.xy = [
            0,
            0
        ], n.Looks.hide(), r = new e.Sprite("text"), r.Font.add(t.Togemaru), C(r), B(r), k(r), p(r), r.Looks.show(), r.Looks.Effect.set(e.ImageEffective.GHOST, 0), i = new e.Monitors, i.add(t.MonitorPoint, "成功"), i.get(t.MonitorPoint).hide(), i.add(t.MonitorFail, "失敗"), i.get(t.MonitorFail).hide();
    };
    g.setting = async function() {
        this.stage.Event.whenFlag(async function() {
            i.get(t.MonitorPoint).hide(), i.get(t.MonitorPoint).value = 20, i.get(t.MonitorFail).hide(), i.get(t.MonitorFail).value = 0, this.Looks.Effect.set(e.ImageEffective.GHOST, 0);
        }), this.stage.Event.whenBroadcastReceived(s.Start, async function*() {
            for(this.Looks.Effect.set(e.ImageEffective.GHOST, 0), this.Sound.add(t.ShortMistery001);;)await this.Sound.playUntilDone(t.ShortMistery001), yield;
        }), this.stage.Event.whenBroadcastReceived(s.GameOver, async function() {
            this.Control.stopOtherScripts(this);
        }), c.Event.whenFlag(async function*() {
            this.Looks.hide(), this.Looks.Effect.set(e.ImageEffective.GHOST, 100);
        }), r.Event.whenFlag(async function*() {
            this.Looks.Costume.name = t.Title, this.Looks.show(), await this.Control.wait(1), this.Looks.Costume.name = t.Guide;
            let o = 0;
            this.Looks.Effect.set(e.ImageEffective.GHOST, o), await this.Control.wait(1);
            for (const l of e.Iterator(5))o += 20, this.Looks.Effect.set(e.ImageEffective.GHOST, o), await this.Control.wait(.1), yield;
            this.Looks.Costume.name = t.Alert, o = 0, this.Looks.Effect.set(e.ImageEffective.GHOST, o), await this.Control.wait(1);
            for (const l of e.Iterator(5))o += 20, this.Looks.Effect.set(e.ImageEffective.GHOST, o), await this.Control.wait(.1), yield;
            this.Event.broadcast(s.View), this.Looks.hide();
        }), r.Event.whenBroadcastReceived(s.GameOver, async function() {
            this.Looks.Effect.set(e.ImageEffective.GHOST, 0), this.Looks.Costume.name = t.GameOver, this.Looks.show();
        }), c.Event.whenBroadcastReceived(s.View, async function*() {
            this.Looks.show();
            let o = 100;
            for (const l of e.Iterator(5))o -= 20, this.Looks.Effect.set(e.ImageEffective.GHOST, o), await this.Control.wait(.05), yield;
            this.Event.broadcast(s.Small);
        }), c.Event.whenBroadcastReceived(s.Small, async function*() {
            let o = 100;
            for (const l of e.Iterator(10))o -= 5, this.Looks.Size.scale = [
                o,
                o
            ], await this.Control.wait(.05), yield;
            this.Event.broadcast(s.Start);
        }), c.Event.whenBroadcastReceived(s.Start, async function*() {
            for(;;)this.Sensing.Key.isDown(e.Keyboard.RIGHT) ? this.Motion.Direction.degree += 5 : this.Sensing.Key.isDown(e.Keyboard.LEFT) && (this.Motion.Direction.degree -= 5), await this.Control.wait(.01), yield;
        }), c.Event.whenBroadcastReceived(s.GameOver, async function() {
            this.Looks.Effect.set(e.ImageEffective.GHOST, 90), this.Control.stopOtherScripts(this);
        }), n.Event.whenFlag(async function*() {
            this.Looks.hide();
        }), n.Event.whenBroadcastReceived(s.Start, async function*() {
            i.get(t.MonitorPoint).show(), i.get(t.MonitorFail).show();
            const o = this.Looks.Costume.names;
            for(;;){
                this.Motion.Move.randomPosition(), this.Motion.Position.x *= .5, this.Motion.Position.x > 0 ? this.Motion.Position.x += 100 : this.Motion.Position.x -= 100, this.Motion.Position.y *= .5, this.Motion.Position.y > 0 ? this.Motion.Position.y += 100 : this.Motion.Position.y -= 100;
                const l = e.randomInteger(0, o.length - 1), f = o[l];
                this.Looks.Costume.name = f, this.Control.clone(), await this.Control.wait(e.randomDecimal(.2, 3)), yield;
            }
        }), n.Event.whenBroadcastReceived(s.GameOver, async function() {
            this.Control.stopOtherScripts(this);
        }), n.Control.whenCloned(async function*() {
            const o = this.Looks.Costume.name;
            this.Motion.Point.toTarget(c);
            const l = e.randomDecimal(1, 2);
            for(this.Looks.show();;){
                if (this.Motion.Move.steps(l), this.Sensing.Sprite.isTouching([
                    c
                ])) {
                    this.Motion.Move.steps(l), o == t.RedBall && this.Sensing.Color.isTouching(y) || o == t.YellowBall && this.Sensing.Color.isTouching(E) || o == t.BlueBall && this.Sensing.Color.isTouching(M) ? (this.Sound.play(t.Chanting), i.get(t.MonitorPoint).value += 2) : (this.Sound.play(t.Damage), i.get(t.MonitorFail).value += 1), this.Looks.hide();
                    break;
                }
                i.get(t.MonitorFail).value > 9 && (this.Looks.hide(), this.Looks.Effect.set(e.ImageEffective.GHOST, 100), this.Event.broadcast(s.GameOver)), yield;
            }
            await this.Control.wait(1), this.Control.remove();
        });
    };
});
