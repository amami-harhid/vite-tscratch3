import { a as S, c as o, __tla as __tla_0 } from "../index-D2v2F40U.js";
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
        GameOver: "GameOver",
        BlackBground: "BlackBground",
        ShortMistery001: "ShortMistery001"
    }, i = {
        Start: "Start",
        View: "View",
        Small: "Small",
        GameOver: "GameOver"
    }, u = 30, y = 30, v = 15, w = function(g) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" width="${u}" height="${y}" viewBox="0 0 ${u} ${y}">
    <circle cx="${v}" cy="${v}" r="${v}" fill="${g}"/>
</svg>
`;
    }, B = `
<svg xmlns="http://www.w3.org/2000/svg" width="480" height="360" viewBox="0 0 480 360">
    <rect width="480" height="360" fill="#000000" />
</svg>
`, k = "/assets/controller-CJzbtSnH.svg", p = "/assets/chanting8bit-m_OGwPii.mp3", G = "/assets/damage8bit-BpQsoc_U.mp3", L = "/assets/TogeMaruGothic-700-Bold-YtwdCofw.woff", M = "/assets/Short_mistery_001-e2f3Mzlr.mp3";
    S.title = "回転する色";
    let f, l, n, a;
    const E = "#ff0000", T = "#ffff00", C = "#003fff";
    let h = 0;
    S.preload = async function() {
        this.Image.load(k, t.Controller), this.Sound.load(p, t.Chanting), this.Sound.load(G, t.Damage), this.Font.load(L, t.Togemaru), this.Sound.load(M, t.ShortMistery001);
    };
    S.prepare = async function() {
        f = new o.Stage, f.SvgText.add(t.BlackBground, B), f.Sound.add(t.ShortMistery001), l = new o.Sprite("Controller"), l.Image.add(t.Controller), l.Looks.hide(), n = new o.Sprite("dot"), n.Sound.add(t.Chanting), n.Sound.add(t.Damage), n.SvgText.add(t.RedBall, w(E)), n.SvgText.add(t.YellowBall, w(T)), n.SvgText.add(t.BlueBall, w(C)), n.Looks.Size.scale = [
            30,
            30
        ], n.Motion.Position.xy = [
            0,
            0
        ], n.Looks.hide(), a = new o.Sprite("text"), a.Font.add(t.Togemaru);
        {
            const s = "bold", r = "#ffffff", c = t.Togemaru, d = a.SvgText.toSvg([
                "カラー円盤ゲーム"
            ], 35, s, r, c);
            a.SvgText.add(t.Title, d, c);
        }
        {
            const s = "bold", r = "#ff0000", c = t.Togemaru, d = [
                "← / → を使って回転させよう",
                "迫ってくるドットを同じ色で受け止めよう"
            ], m = a.SvgText.toSvg(d, 15, s, r, c);
            a.SvgText.add(t.Guide, m, c);
        }
        {
            const s = "bold", r = "#ff0000", c = t.Togemaru, d = [
                "GameOver"
            ], m = a.SvgText.toSvg(d, 35, s, r, c);
            a.SvgText.add(t.GameOver, m, c);
        }
        a.Looks.show(), a.Looks.Effect.set(o.ImageEffective.GHOST, 0);
    };
    S.setting = async function() {
        f.Event.whenFlag(async function*() {
            this.Looks.Effect.set(o.ImageEffective.GHOST, 0);
        }), f.Event.whenBroadcastReceived(i.Start, async function*() {
            for(this.Looks.Effect.set(o.ImageEffective.GHOST, 0), this.Sound.add(t.ShortMistery001);;)await this.Sound.playUntilDone(t.ShortMistery001), yield;
        }), f.Event.whenBroadcastReceived(i.GameOver, async function() {
            this.Control.stopOtherScripts(this);
        }), l.Event.whenFlag(async function*() {
            this.Looks.hide(), this.Looks.Effect.set(o.ImageEffective.GHOST, 100);
        }), a.Event.whenFlag(async function*() {
            this.Looks.Costume.name = t.Title, this.Looks.Effect.set(o.ImageEffective.GHOST, 0), this.Looks.show(), await this.Control.wait(1), this.Looks.Costume.name = t.Guide, await this.Control.wait(2);
            let e = 0;
            for (const s of o.Iterator(5))e += 20, this.Looks.Effect.set(o.ImageEffective.GHOST, e), await this.Control.wait(.1), yield;
            this.Event.broadcast(i.View), this.Looks.hide();
        }), a.Event.whenBroadcastReceived(i.GameOver, async function() {
            this.Looks.Effect.set(o.ImageEffective.GHOST, 0), this.Looks.Costume.name = t.GameOver, this.Looks.show();
        }), l.Event.whenBroadcastReceived(i.View, async function*() {
            this.Looks.show();
            let e = 100;
            for (const s of o.Iterator(5))e -= 20, this.Looks.Effect.set(o.ImageEffective.GHOST, e), await this.Control.wait(.05), yield;
            this.Event.broadcast(i.Small);
        }), l.Event.whenBroadcastReceived(i.Small, async function*() {
            let e = 100;
            for (const s of o.Iterator(10))e -= 5, this.Looks.Size.scale = [
                e,
                e
            ], await this.Control.wait(.05), yield;
            this.Event.broadcast(i.Start);
        }), l.Event.whenBroadcastReceived(i.Start, async function*() {
            for(;;)this.Sensing.isKeyDown(o.Keyboard.RIGHT) ? this.Motion.Direction.degree += 5 : this.Sensing.isKeyDown(o.Keyboard.LEFT) && (this.Motion.Direction.degree -= 5), await this.Control.wait(.01), yield;
        }), l.Event.whenBroadcastReceived(i.GameOver, async function() {
            this.Looks.Effect.set(o.ImageEffective.GHOST, 90), this.Control.stopOtherScripts(this);
        }), n.Event.whenFlag(async function*() {
            h = 20, this.Looks.hide();
        }), n.Event.whenBroadcastReceived(i.Start, async function*() {
            const e = this.Looks.Costume.names;
            for(console.log("CostumeNames", e);;){
                this.Motion.Move.randomPosition(), this.Motion.Position.x *= .5, this.Motion.Position.x > 0 ? this.Motion.Position.x += 100 : this.Motion.Position.x -= 100, this.Motion.Position.y *= .5, this.Motion.Position.y > 0 ? this.Motion.Position.y += 100 : this.Motion.Position.y -= 100;
                const s = o.randomInteger(0, e.length - 1), r = e[s];
                if (this.Looks.Costume.name = r, console.log("idx, this.Looks.Costume.name", s, r), this.Control.clone(), await this.Control.wait(o.randomDecimal(.2, 3)), h < 0) {
                    this.Event.broadcast(i.GameOver);
                    break;
                }
                yield;
            }
        }), n.Control.whenCloned(async function*() {
            const e = this.Looks.Costume.name;
            this.Motion.Point.toTarget(l);
            const s = o.randomDecimal(1, 2);
            for(console.log("STEPS", s), this.Looks.show();;){
                if (this.Motion.Move.steps(s), this.Sensing.isTouchingToSprites([
                    l
                ])) {
                    this.Motion.Move.steps(s), e == t.RedBall && this.Sensing.isTouchingToColor(E) || e == t.YellowBall && this.Sensing.isTouchingToColor(T) || e == t.BlueBall && this.Sensing.isTouchingToColor(C) ? (this.Sound.play(t.Chanting), h += 2) : (this.Sound.play(t.Damage), h -= 1), console.log("point=", h), this.Looks.hide();
                    break;
                }
                h < 0 && this.Looks.Effect.set(o.ImageEffective.GHOST, 100), yield;
            }
            await this.Control.wait(1), this.Control.remove();
        }), n.Event.whenBroadcastReceived(i.GameOver, async function() {
            this.Control.stopOtherScripts(this);
        });
    };
});
