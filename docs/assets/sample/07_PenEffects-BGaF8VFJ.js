import { _ as g, a as e, __tla as __tla_0 } from "../index-Bmbx4PuQ.js";
Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const m = {
        Text02: {
            cat2_0: "cat2-0"
        },
        Text03: {
            Costume_0: "costume-0"
        }
    }, E = `
<svg xmlns="http://www.w3.org/2000/svg" width="480" height="360" viewBox="0 0 480 360">
    <rect width="480" height="360" fill="#000000" />
</svg>
`, r = {
        GoogleFontsJPGuidance: "GoogleFontsJPGuidance",
        GoogleFontsJP: "GoogleFontsJP",
        GoogleFontsEN: "GoogleFontsEn"
    }, i = {
        PenClear: "PenClear",
        Start: "Start",
        NextStart: "NextStart"
    };
    class s {
        static get textsGuidance() {
            return [
                [
                    "Tscratch3"
                ],
                [
                    "文字のスプライトを"
                ],
                [
                    "PEN機能でスタンプします"
                ],
                [
                    "面白いビュジュアル効果が<br/>できました"
                ],
                [
                    "平家物語の和文と英文を使って<br/>ご紹介！"
                ],
                [
                    "３種類のGoogleFontを<br/>使いました"
                ],
                [
                    "==FontFamily==<br/>(a)Stick<br/>(b)Yuji+Boku<br/>(c)Dancing+Script:wght@400..700"
                ]
            ];
        }
        static get textsHeikeMonogatariJp() {
            return [
                [
                    "祇園精舎の鐘の声<br/>諸行無常の響あり"
                ],
                [
                    "沙羅双樹の花の色<br/>盛者必衰の理をあらはす"
                ],
                [
                    "おごれる人も久しからず<br/>唯春の夜の夢のごとし"
                ],
                [
                    "たけき者も遂にはほろびぬ<br/>偏に風の前の塵に同じ"
                ],
                [
                    "祇<br/>園<br/>精<br/>舎<br/>の<br/>鐘<br/>の<br/>声"
                ]
            ];
        }
        static get textsHeikeMonogatariEn() {
            return [
                [
                    "The sound of the bells of Gion Monastery<br/>tells us that nothing in the world stays the same"
                ],
                [
                    "The colours of the blossoms of the Shorea tree<br/>signify that all that flourish must fade"
                ],
                [
                    "The arrogance does not last long<br/>just like spring night’s dream"
                ],
                [
                    "Even the mighty eventually falls<br/>all is like the dust before the wind"
                ]
            ];
        }
        static textFilter(t) {
            const o = [];
            for (const c of t)for (const d of c){
                const S = d.replaceAll(/<br\/>/g, "").replaceAll(/\s/g, "").split("");
                for (const u of S)u != " " && (o.includes(u) || o.push(u));
            }
            const n = o.sort().join("");
            return console.log(n), n;
        }
        static get fontFaceUrlJPGuidance() {
            const t = "Stick", o = s.textsGuidance, n = s.textFilter(o);
            return `https://fonts.googleapis.com/css2?family=${t}&display=swap&text='+${encodeURIComponent(n)}`;
        }
        static get fontFaceUrlJP() {
            const t = "Yuji+Boku", o = s.textsHeikeMonogatariJp, n = s.textFilter(o);
            return `https://fonts.googleapis.com/css2?family=${t}&display=swap&text='+${encodeURIComponent(n)}`;
        }
        static get fontFaceUrlEN() {
            const t = "Dancing+Script:wght@400..700", o = s.textsHeikeMonogatariEn, n = s.textFilter(o);
            return `https://fonts.googleapis.com/css2?family=${t}&display=swap&text='+${encodeURIComponent(n)}`;
        }
    }
    const F = "/assets/gionsyojya-a8CXI2F4.wav";
    g.title = "平家物語の文字スタンプと画像効果";
    const x = "Gion";
    let f, a, h;
    const p = s.textsGuidance, w = s.textsHeikeMonogatariJp, k = s.textsHeikeMonogatariEn;
    g.preload = async function() {
        this.Font.load(s.fontFaceUrlJPGuidance, r.GoogleFontsJPGuidance), this.Font.load(s.fontFaceUrlJP, r.GoogleFontsJP), this.Font.load(s.fontFaceUrlEN, r.GoogleFontsEN), this.Sound.load(F, x);
    };
    g.prepare = async function() {
        this.stage.Sound.add(x), this.stage.SvgText.add("BackDrop", E), f = new e.Sprite, f.Font.add(r.GoogleFontsJPGuidance), f.Looks.hide();
        for (const t of e.Iterator(p.length)){
            const o = p[t], l = {
                fontFamily: r.GoogleFontsJPGuidance,
                color: "white",
                fontSize: 25,
                fontStyle: "normal"
            };
            f.SvgText.addTexts(`cat-${t}`, o, l);
        }
        a = new e.Sprite, a.Motion.Position.xy = {}, a.Font.add(r.GoogleFontsJP), a.Looks.hide();
        for (const t of e.Iterator(w.length)){
            const o = w[t], l = {
                fontFamily: r.GoogleFontsJP,
                color: "red",
                fontSize: 15,
                fontStyle: "normal"
            };
            a.SvgText.addTexts(`cat2-${t}`, o, l);
        }
        h = new e.Sprite, h.Font.add(r.GoogleFontsEN), h.Looks.hide();
        for (const t of e.Iterator(k.length)){
            const o = k[t], l = {
                fontFamily: r.GoogleFontsEN,
                color: "red",
                fontSize: 25,
                fontStyle: "bold"
            };
            h.SvgText.addTexts(`costume-${t}`, o, l);
        }
    };
    g.setting = async function() {
        this.stage.Event.whenFlag(async function*() {
            this.Looks.Effect.set(e.ImageEffective.GHOST, 0), this.Event.broadcast(i.PenClear);
        }), this.stage.Event.whenBroadcastReceived(i.Start, async function*() {
            for(this.Looks.Effect.set(e.ImageEffective.GHOST, 95);;)await this.Sound.playUntilDone(x), yield;
        }), f.Event.whenFlag(async function*() {
            this.Looks.show();
            const t = this.Looks.Costume.names;
            for (const o of t)this.Looks.Costume.name = o, await this.Control.wait(2), yield;
            this.Looks.hide(), await this.Control.wait(1), this.Event.broadcast(i.Start);
        }), a.Event.whenFlag(async function*() {
            this.Looks.hide(), this.Looks.Effect.clear();
        }), a.Event.whenBroadcastReceived(i.Start, async function*() {
            for(this.Looks.Size.scale = {
                w: 200,
                h: 200
            }, this.Looks.show(), this.Motion.Position.xy = {}, this.Looks.Costume.name = m.Text02.cat2_0, await this.Control.wait(2);;){
                if (this.Looks.Costume.next(), this.Looks.Costume.name == m.Text02.cat2_0) {
                    this.Looks.hide();
                    break;
                }
                await this.Control.wait(2), yield;
            }
            this.Event.broadcast(i.NextStart);
        }), a.Event.whenBroadcastReceived(i.NextStart, async function*() {
            const t = this.Looks.Costume.names;
            this.Looks.Costume.name = t[0];
            for (const o of e.Iterator(t.length * 5))this.Looks.Costume.next(), await this.Control.wait(3), yield;
            for (const o of e.Iterator(10))this.Looks.Effect.change(e.ImageEffective.GHOST, 10), await this.Control.wait(.1), yield;
            await this.Control.wait(1), this.Looks.hide(), this.Event.broadcast(i.PenClear), await this.Control.wait(3), this.Control.stopAll();
        }), a.Event.whenBroadcastReceived(i.PenClear, async function*() {
            this.Pen.clear();
        }), a.Event.whenBroadcastReceived(i.NextStart, async function*() {
            this.Motion.Direction.degree = 90, this.Pen.prepare(), this.Pen.Size.thickness = 1e3, this.Pen.HSVColor.brightness = 0, this.Pen.HSVColor.transparency = 100, this.Pen.down();
            let t = 2;
            for(;;)this.Looks.Size.w += t, this.Looks.Size.h += t, (this.Looks.Size.h > 900 || this.Looks.Size.h < 50) && (t *= -1), this.Motion.Move.steps(1), this.Motion.Move.ifOnEdgeBounce(), this.Pen.stampStage(), this.Pen.stamp(), this.Looks.Effect.change(e.ImageEffective.COLOR, 1), this.Motion.Direction.degree += 1, yield;
        }), h.Event.whenFlag(async function() {
            this.Looks.hide(), this.Looks.Effect.clear();
        }), h.Event.whenBroadcastReceived(i.NextStart, async function*() {
            for(this.Looks.Size.scale = {
                w: 150,
                h: 150
            }, this.Motion.Position.xy = {
                x: 0,
                y: 180
            }, this.Looks.Costume.name = m.Text03.Costume_0, this.Motion.Direction.degree = 90, this.Looks.Layer.gotoBack(), this.Looks.show();;)this.Motion.Position.y += -2, this.Looks.Effect.change(e.ImageEffective.COLOR, 2), this.Motion.Position.y < -180 && (this.Looks.Costume.next(), this.Motion.Position.y = 180), yield;
        });
    };
});
