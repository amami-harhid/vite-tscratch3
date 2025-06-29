import { _ as w, a as b, __tla as __tla_0 } from "../index-Cy9bhml5.js";
Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const T = `
<svg xmlns="http://www.w3.org/2000/svg" width="480" height="360" viewBox="0 0 480 360">
    <rect width="480" height="360" fill="#000000" />
</svg>
`, t = {
        GoogleFontsJPGuidance: "GoogleFontsJPGuidance",
        GoogleFontsJP: "GoogleFontsJP",
        GoogleFontsEN: "GoogleFontsEn",
        QUESTION: "Cat01",
        ZANNEN: "Cat02",
        SEIKAI: "Cat03",
        DEN: "DEN",
        OK: "OK",
        NG: "NG"
    }, o = {
        QUESTION: "QUESTION",
        INIT: "INIT",
        QIZ: "QUIZE",
        SEIKAI: "SEIKAI",
        ZANNEN: "ZANNEN",
        ANSWER: "ANSWER",
        COMPLETE: "COMPLETE"
    };
    class r {
        static get textsGuidance() {
            return [
                [
                    "クイズゲーム（３択クイズ）"
                ],
                [
                    "画面タッチで進めてね"
                ],
                [
                    "クイズ終了！"
                ]
            ];
        }
        static get textsQizJp() {
            return [
                [
                    "3",
                    "【クイズ０１】<br/>カバの汗の色は？<br/>1.　無色<br/>2.　黄色<br/>3.　赤色"
                ],
                [
                    "1",
                    "【クイズ０２】<br/>サメの歯が生えかえる周期は？？<br/>1.　１週間くらい<br/>2.　１カ月くらい<br/>3.　１年くらい"
                ],
                [
                    "3",
                    "【クイズ０３】<br/>ウミガメが産卵の時に涙を流す理由は？<br/>1.　感動したから<br/>2.　目の乾燥を防ぐため<br/>3.　体内の塩分調整のため"
                ],
                [
                    "1",
                    "【クイズ０４】<br/>アフリカに生息するダチョウの卵<br/>その重さに近いのは？<br/>1.　1Kg<br/>2.　10Kg<br/>3.　100Kg"
                ],
                [
                    "3",
                    "【クイズ０５】<br/>次の3つの動物の内<br/>最も長く寝る動物は？<br/>1.　ネコ<br/>2.　ラクダ<br/>3.　コアラ"
                ],
                [
                    "3",
                    "【クイズ０６】<br/>象の鼻は<br/>どのようにしてできているでしょう？<br/>1.　鼻の先だけ骨がありその他は筋肉<br/>2.　鼻の付け根だけ骨がありその他は筋肉<br/>3.　全てが筋肉"
                ],
                [
                    "3",
                    "【クイズ０７】<br/>マンボウはとても多くの卵を産みます<br/>さて何匹くらい生むでしょうか？<br/>1.　２百万～３百万匹<br/>2.　２千万～３千万匹<br/>3.　２億～３億匹"
                ],
                [
                    "2",
                    "【クイズ０８】<br/>馬はどのように<br/>呼吸しているでしょうか？<br/>1.　口からだけ<br/>2.　鼻からだけ<br/>3.　鼻と口から"
                ],
                [
                    "2",
                    "【クイズ０９】<br/>ゴリラの握力は<br/>強いことで有名ですが<br/>人間の何倍あるでしょうか？<br/>1.　２倍<br/>2.　１０倍<br/>3.　１００倍"
                ],
                [
                    "2",
                    "【クイズ１０】<br/>犬の鼻は<br/>どのような状態でしょうか？<br/>1.　毛で覆われている<br/>2.　濡れている<br/>3.　腫れている"
                ]
            ];
        }
        static get textsAnswserJp() {
            return [
                [
                    "正解は　３番の「赤」<br/>カバの汗は最初は透明ですが<br/>すぐに酸化して赤色になります<br/>この赤い汗はカバの皮膚の<br/>日焼けや乾燥の防止、<br/>細菌感染を防ぐ効果があるそうです"
                ],
                [
                    "正解は　１番の「１週間くらい」<br/>10日で１列の歯が生えかえるので<br/>１生の間で２万本くらいは<br/>生え変わることになります"
                ],
                [
                    "正解は　３番の「塩分調整のため」<br/>ウミガメは海水を飲むので<br/>血液中の塩分濃度が高くならないよう<br/>涙で塩分を外に出しています<br/>産卵とはあまり関係なかったです"
                ],
                [
                    "正解は　１番の「１ｋｇぐらい」<br/>ダチョウの卵は世界最大の卵で、重さは<br/>約1.2Kgから1.6Kgほどです。ニワトリの卵の<br/>25個から30個分に相当します"
                ],
                [
                    "正解は　３番の「コアラ」<br/>ユーカリの葉にはほとんど栄養がないから<br/>消費エネルギーを抑えるために寝る時間が<br/>多いそうです。<br/>主食のユーカリの葉には毒が含まれていて<br/>解毒するために多くの睡眠が必要だそうです"
                ],
                [
                    "正解は　３番の「全てが筋肉」<br/>骨がないから小さな物を器用につまめます。<br/>長い鼻を使う筋肉の力がすごいですね"
                ],
                [
                    "正解は　３番の「２億～３億匹」<br/>この数は推測値で実際に数えたわけでは<br/>ありません。マンボウの卵は<br/>小さく浮遊性であり,他の魚に<br/>食べられたり環境の影響で死んで<br/>しまったりして成魚になるのはほんの<br/>わずか、数匹ほどです"
                ],
                [
                    "正解は　２番の「鼻からだけ」<br/>馬の呼吸が荒いのは<br/>鼻からでしか呼吸できないためです。"
                ],
                [
                    "正解は　２番の「１０倍」<br/>人間の握力が約４７Ｋｇほど<br/>ゴリラの握力は４００～５００ｋｇも<br/>あります。リンゴを握りつぶすことも<br/>できると言われています"
                ],
                [
                    "正解は　２番の「濡れている」<br/>濡れていることにより匂いの分子が<br/>くっつきやすく嗅覚がより敏感に<br/>なっています"
                ]
            ];
        }
        static textFilter(h) {
            const s = [];
            for (const c of h)for (const i of c){
                const l = i.replaceAll(/<br\/>/g, "").replaceAll(/\s/g, "").split("");
                for (const g of l)g != " " && (s.includes(g) || s.push(g));
            }
            return s.sort().join("");
        }
        static get fontFaceUrlJPGuidance() {
            const h = "UoqMunThenKhung", s = r.textsGuidance, n = r.textFilter(s);
            return `https://fonts.googleapis.com/css2?family=${h}&display=swap&text='+${encodeURIComponent(n)}`;
        }
        static get fontFaceUrlJP() {
            const h = "UoqMunThenKhung", s = r.textsQizJp, n = r.textFilter(s);
            return `https://fonts.googleapis.com/css2?family=${h}&display=swap&text='+${encodeURIComponent(n)}`;
        }
        static get fontFaceUrlEN() {
            const h = "UoqMunThenKhung", s = r.textsAnswserJp, n = r.textFilter(s);
            return `https://fonts.googleapis.com/css2?family=${h}&display=swap&text='+${encodeURIComponent(n)}`;
        }
    }
    const L = "/assets/blackCat01-5DfUgPqk.svg", F = "/assets/blackCat02-BDtzF7Oy.svg", C = "/assets/blackCat03-BisdsYxq.svg", G = "/assets/den-JIQ9x_Nd.mp3", P = "/assets/OK-Jdg1c7Sk.mp3", A = "/assets/NG-BYQBgWQH.mp3", I = r.textsGuidance, N = r.textsQizJp, v = r.textsAnswserJp, x = "Sprite";
    let S, a, u, d, f, E;
    w.preload = async function() {
        this.Image.load(L, t.QUESTION), this.Image.load(F, t.ZANNEN), this.Image.load(C, t.SEIKAI), this.Font.load(r.fontFaceUrlJPGuidance, t.GoogleFontsJPGuidance), this.Font.load(r.fontFaceUrlJP, t.GoogleFontsJP), this.Font.load(r.fontFaceUrlEN, t.GoogleFontsEN), this.Sound.load(G, t.DEN), this.Sound.load(P, t.OK), this.Sound.load(A, t.NG);
    };
    w.prepare = async function() {
        S = new b.Stage, S.SvgText.add("BackDrop", T), E = new b.Sprite("reference"), E.Font.add(t.GoogleFontsJP), E.Motion.Position.xy = [
            180,
            -160
        ], E.Looks.Size.scale = [
            50,
            50
        ];
        {
            const g = {
                fontFamily: t.GoogleFontsJPGuidance,
                color: "white",
                fontSize: 15,
                fontStyle: "bold"
            };
            E.SvgText.addTexts("ref", [
                "小学生向けクイズ<br/>https://hisasuke.com/"
            ], g);
        }
        a = new b.Sprite("quizeCat"), a.Image.add(t.QUESTION), a.Image.add(t.ZANNEN), a.Image.add(t.SEIKAI), a.Motion.Position.xy = [
            0,
            -100
        ], a.Looks.Size.scale = [
            60,
            50
        ], a.Sound.add(t.DEN), a.Sound.add(t.OK), a.Sound.add(t.NG), u = new b.Sprite(x), u.Font.add(t.GoogleFontsJPGuidance), u.Motion.Position.xy = [
            0,
            80
        ], u.Looks.Size.scale = [
            100,
            400
        ];
        const c = {
            fontFamily: t.GoogleFontsJPGuidance,
            color: "white",
            fontSize: 25,
            fontStyle: "bold"
        };
        for (const i of b.Iterator(I.length)){
            const e = I[i];
            u.SvgText.addTexts(`text01-${i}`, e, c);
        }
        d = new b.Sprite(x), d.Motion.Position.xy = [
            0,
            50
        ], d.Font.add(t.GoogleFontsJP), d.Looks.Size.scale = [
            90,
            100
        ], d.Looks.hide();
        for (const i of b.Iterator(N.length)){
            const e = N[i], l = e[0];
            e.shift();
            const k = {
                fontFamily: t.GoogleFontsJP,
                color: "white",
                fontSize: 20,
                fontStyle: "normal"
            };
            d.SvgText.addTexts(`text02-${i}-${l}`, e, k);
        }
        f = new b.Sprite(x), f.Font.add(t.GoogleFontsEN), f.Motion.Position.xy = [
            0,
            80
        ], f.Looks.Size.scale = [
            80,
            80
        ], f.Looks.hide();
        for (const i of b.Iterator(v.length)){
            const e = v[i], y = {
                fontFamily: t.GoogleFontsEN,
                color: "white",
                fontSize: 25,
                fontStyle: "normal"
            };
            f.SvgText.addTexts(`text03-${i}`, e, y);
        }
    };
    w.setting = async function() {
        const h = ()=>!!(S.Sensing.isKeyDown(b.Keyboard.SPACE) || S.Sensing.isMouseTouching() && S.Sensing.isMouseDown());
        let s = 0;
        S.Event.whenBroadcastReceived(o.QUESTION, async function(n, c, i) {
            const e = await this.Sensing.askAndWait("番号を入れてね");
            e == "1" || e == "2" || e == "3" ? (this.Event.broadcast(o.ANSWER, n), e == c ? (s += 1, this.Event.broadcast(o.SEIKAI)) : this.Event.broadcast(o.ZANNEN), await this.Control.waitUntil(()=>h()), n + 1 > i.length - 1 ? (console.log("OWARI"), this.Event.broadcast(o.COMPLETE)) : this.Event.broadcast(o.QIZ, n + 1)) : this.Event.broadcast(o.QIZ, n);
        }), a.Event.whenFlag(async function() {
            this.Looks.hide(), s = 0, this.Event.broadcast(o.INIT);
        }), a.Event.whenBroadcastReceived(o.INIT, async function() {
            this.Looks.show();
        }), a.Event.whenBroadcastReceived(o.QIZ, async function() {
            this.Looks.show(), this.Sound.play(t.DEN), this.Looks.Costume.name = t.QUESTION;
        }), a.Event.whenBroadcastReceived(o.SEIKAI, async function() {
            this.Looks.show(), this.Sound.play(t.OK), this.Looks.Costume.name = t.SEIKAI;
        }), a.Event.whenBroadcastReceived(o.ZANNEN, async function() {
            this.Looks.show(), this.Sound.play(t.NG), this.Looks.Costume.name = t.ZANNEN;
        }), a.Event.whenBroadcastReceived(o.COMPLETE, async function() {
            s > 5 ? this.Looks.Costume.name = t.SEIKAI : this.Looks.Costume.name = t.ZANNEN;
        }), u.Event.whenFlag(async function() {
            this.Looks.hide(), this.Motion.Position.xy = [
                0,
                80
            ], this.Looks.Size.scale = [
                100,
                400
            ], await this.Control.wait(.5), this.Looks.Costume.name = "text01-0", this.Looks.show(), await this.Control.wait(1), this.Motion.Position.xy = [
                0,
                100
            ], this.Looks.Size.scale = [
                100,
                100
            ], this.Looks.Costume.name = "text01-1", this.Looks.show(), await this.Control.waitUntil(()=>h()), this.Event.broadcast(o.QIZ, 0);
        }), u.Event.whenBroadcastReceived(o.INIT, async function() {
            this.Looks.hide();
        }), u.Event.whenBroadcastReceived(o.QIZ, async function() {
            this.Looks.hide();
        }), u.Event.whenBroadcastReceived(o.COMPLETE, async function() {
            this.Looks.Costume.name = "text01-2", this.Looks.show();
            const e = {
                fontFamily: t.GoogleFontsJPGuidance,
                color: "white",
                fontSize: 25,
                fontStyle: "bold"
            };
            await this.Control.wait(1), this.SvgText.replaceTexts("text01-tokuten", [
                `正解数は${s}でした`
            ], e), this.Looks.Costume.name = "text01-tokuten", await this.Control.wait(1);
            const l = d.Looks.Costume.names.length;
            s == l ? this.SvgText.replaceTexts("text01-tokuten", [
                "満点、素晴らしい！"
            ], e) : s / l > .7 ? this.SvgText.replaceTexts("text01-tokuten", [
                `${l}問中、正解(${s})、よく出来ました`
            ], e) : s / l > .3 ? this.SvgText.replaceTexts("text01-tokuten", [
                `${l}問中、正解(${s})、まあまあだね`
            ], e) : this.SvgText.replaceTexts("text01-tokuten", [
                `${l}問中、正解(${s})、もっと頑張ろう`
            ], e);
        }), d.Event.whenBroadcastReceived(o.QIZ, async function(n) {
            const c = this.Looks.Costume.names, i = c[n];
            this.Looks.Costume.name = i;
            const e = i.replace(/text02-\d+-/, "");
            this.Motion.Position.xy = [
                0,
                80
            ], this.Looks.show(), await this.Control.wait(.5), await this.Event.broadcastAndWait(o.QUESTION, n, e, c);
        }), d.Event.whenBroadcastReceived(o.INIT, async function() {
            this.Looks.hide();
        }), d.Event.whenBroadcastReceived(o.ANSWER, async function() {
            this.Looks.hide();
        }), d.Event.whenBroadcastReceived(o.COMPLETE, async function() {
            this.Looks.hide();
        }), f.Event.whenBroadcastReceived(o.INIT, async function() {
            this.Looks.hide();
        }), f.Event.whenBroadcastReceived(o.QIZ, async function() {
            this.Looks.hide();
        }), f.Event.whenBroadcastReceived(o.COMPLETE, async function() {
            this.Looks.hide();
        }), f.Event.whenBroadcastReceived(o.ANSWER, async function(n) {
            this.Motion.Position.xy = [
                0,
                80
            ], this.Looks.Size.scale = [
                80,
                80
            ], this.Looks.Costume.name = `text03-${n}`, this.Looks.show();
        });
    };
});
