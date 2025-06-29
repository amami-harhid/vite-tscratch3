import { _ as h, a as t, __tla as __tla_0 } from "../index-Cy9bhml5.js";
Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const o = {
        Asteroid: "Asteroid",
        SpaceShipWoosh: "SpaceShipWoosh",
        Spaceship01: "Spaceship01",
        Spaceship02: "Spaceship02",
        BlackBground: "BlackBGround",
        Black: "Black",
        HarryPotter: "HarryPotter",
        Togemaru: "Togemaru",
        Explosion: "Explosion",
        Shot: "shot",
        Debris01: "Debris01",
        Debris02: "Debris02",
        Debris03: "Debris03",
        Bullet: "bullet"
    }, f = 30, w = 30, d = 15, u = function(c) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" width="${f}" height="${w}" viewBox="0 0 ${f} ${w}">
    <circle cx="${d}" cy="${d}" r="${d}" fill="${c}"/>
</svg>
`;
    }, v = `
<svg xmlns="http://www.w3.org/2000/svg" width="480" height="360" viewBox="0 0 480 360">
    <rect width="480" height="360" fill="#000000" />
</svg>
`, p = 480, g = 10, k = function(c) {
        return `
<svg xmlns="http://www.w3.org/2000/svg" width="${p}" height="${g}" viewBox="0 0 ${p} ${g}">
    <rect width="${p}" height="${g}" fill="${c}" />
</svg>
`;
    }, y = "/assets/debris01-Be4eXJ0l.svg", x = "/assets/debris02-MGnLRlho.svg", b = "/assets/debris03-Cxvx3Csh.svg", L = "data:image/svg+xml,%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='137.86505'%20height='141.49624'%20viewBox='0,0,137.86505,141.49624'%3e%3cg%20transform='translate(-172.83882,-119.00199)'%3e%3cg%20data-paper-data='{&quot;isPaintingLayer&quot;:true}'%20fill-rule='nonzero'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20style='mix-blend-mode:%20normal'%3e%3cpath%20d='M239.21591,123.6521c0,0%202.1387,21.9955%208.028,23.2134c5.9589,1.0059%2036.55232,-21.37462%2036.55232,-21.37462c0,0%20-17.71462,23.52882%20-11.01752,30.66002c6.314,5.7345%2037.55194,-8.42813%2037.55194,-8.42813c0,0%20-31.74324,17.47903%20-32.90934,20.80863c-0.3482,3.0123%2017.0232,6.7706%2017.0232,6.7706c0,0%20-6.6947,4.7069%20-5.9968,8.5116c1.5723,8.2136%2012.3805,21.8593%2012.3805,21.8593c0,0%20-21.7912,-2.4413%20-25.1479,5.6099c-4.1923,10.0444%209.2854,31.3381%209.2854,31.3381l-26.502,-5.6099l-15.8625,21.8593c0,0%20-7.4097,-20.1291%20-16.2494,-23.9872c-6.3644,-2.7748%20-19.7314,8.5116%20-19.7314,8.5116l0.87657,-31.7882l-34.34257,9.9289c0,0%2023.5624,-10.525%2022.0527,-20.1183c-1.9553,-11.8544%20-18.88507,-20.26508%20-18.88507,-20.26508c0,0%2010.16537,-5.70462%2016.37027,-10.87962c0.47467,-0.62226%20-0.18641,-2.16928%20-0.18641,-2.16928l-10.45309,-7.24198c0,0%2019.6626,-1.72734%2022.4397,-9.15954c2.6626,-9.0679%20-10.8329,-26.3085%20-10.8329,-26.3085c0,0%2018.9197,21.1203%2031.3381,20.6986c8.9023,-0.393%2014.2182,-22.4396%2014.2182,-22.4396z'%20fill='%23ff0000'%20stroke='%23ff0000'%20stroke-width='1.54756'%20stroke-linecap='butt'/%3e%3cpath%20d='M237.74636,157.68192l5.8034,7.1575l9.99156,-7.3509l-4.38166,12.9608l23.6003,-2.3213l-11.59196,11.4799c0,0%20-0.31827,0.72712%20-0.40164,1.094c-2.025,8.9975%201.741,27.6627%201.741,27.6627l-13.5412,-16.056l-8.8984,36.1743l-0.56112,-30.95765l-10.37465,21.07602l0.71115,-21.50102l-17.05117,24.22515c0,0%2011.9456,-21.238%209.0919,-31.9184c-2.661,-8.7004%20-22.6331,-15.6691%20-22.6331,-15.6691c0,0%2018.9631,4.0438%2025.1479,-1.5476c4.4748,-4.0894%20-11.70015,-24.50711%20-11.70015,-24.50711l22.71722,24.85228z'%20fill='%23ffff00'%20stroke='%23ffff00'%20stroke-width='1.54756'%20stroke-linecap='round'/%3e%3cpath%20d='M252.5403,147.07813l5.14602,13.33117l18.25151,-6.07642l-12.65222,17.03176l35.92999,7.84114l-22.58397,11.40471c0,0%20-0.81671,0.92091%20-1.11486,1.42244c-7.28303,12.30898%20-10.63665,41.64698%20-10.63665,41.64698l-12.3151,-30.15459l-30.39814,49.12673l13.95047,-45.94539l-25.36879,26.14474l11.31332,-31.38493l-36.7232,27.60402c0,0%2027.76402,-25.6338%2028.65198,-42.75484c0.22709,-14.10759%20-25.91475,-33.92397%20-25.91475,-33.92397c0,0%2026.04934,15.01906%2037.84411,9.72151c8.55467,-3.89769%20-5.56431,-41.7452%20-5.56431,-41.7452l21.65506,47.51376z'%20fill='%23000cff'%20stroke='%23ffff00'%20stroke-width='1.54756'%20stroke-linecap='round'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", B = "/assets/explosion-BmSjC0Y7.wav", E = "/assets/universe_asteroid-Ce2l08d_.svg", I = "/assets/spaceShip1-BiRx8SR9.svg", C = "/assets/spaceShip2-DJnGVF9p.svg", D = "/assets/TogeMaruGothic-700-Bold-YtwdCofw.woff", M = "/assets/HarryPotter-ov4z-BcA-z3s5.woff", T = "/assets/shot-jIQ-blKq.wav", P = "/assets/spaceship-whoosh-BWZCT9pr.mp3";
    h.title = "Space ship game";
    let l, e, r, a, i, n;
    h.preload = async function() {
        this.Image.load(y, o.Debris01), this.Image.load(x, o.Debris02), this.Image.load(b, o.Debris03), this.Image.load(L, o.Explosion), this.Image.load(E, o.Asteroid), this.Image.load(I, o.Spaceship01), this.Image.load(C, o.Spaceship02), this.Font.load(D, o.Togemaru), this.Font.load(M, o.HarryPotter), this.Sound.load(B, o.Explosion), this.Sound.load(T, o.Shot), this.Sound.load(P, o.SpaceShipWoosh);
    };
    h.prepare = async function() {
        l = new t.Stage, l.Image.add(o.Asteroid), l.SvgText.add(o.BlackBground, v), l.Looks.Effect.set(t.ImageEffective.GHOST, 20), e = new t.Sprite("spaceShip"), e.Image.add(o.Spaceship01), e.Image.add(o.Spaceship02), e.Looks.Size.scale = [
            20,
            20
        ], e.Motion.Position.xy = [
            0,
            -150
        ], e.Looks.hide(), r = new t.Sprite("Introduction"), r.Looks.Size.scale = [
            200,
            200
        ], r.Font.add(o.HarryPotter);
        const m = {
            fontFamily: o.HarryPotter,
            fontSize: 35,
            fontStyle: "italic",
            color: "#ffffff"
        };
        r.SvgText.addTexts("Text1", [
            "Space ship game"
        ], m), n = new t.Sprite("bottom"), n.SvgText.add(o.Black, k("black")), n.Motion.Position.xy = [
            0,
            -180
        ], n.Looks.Layer.gotoBack(), n.Looks.Effect.set(t.ImageEffective.GHOST, 100), a = new t.Sprite(o.Bullet), a.SvgText.add(o.Bullet, u("white")), a.Looks.Size.scale = [
            10,
            10
        ], a.Looks.hide(), i = new t.Sprite("Debri"), i.Image.add(o.Debris01), i.Image.add(o.Debris02), i.Image.add(o.Debris03), i.Image.add(o.Explosion), i.Looks.Size.scale = [
            50,
            50
        ], i.Looks.hide();
    };
    h.setting = async function() {
        l.Event.whenFlag(async function*() {
            for(this.Sound.add(o.SpaceShipWoosh), this.Sound.setOption(t.SoundOption.VOLUME, 120), this.Sound.setOption(t.SoundOption.PITCH, -150), this.Looks.Backdrop.name = o.BlackBground;;)await this.Sound.playUntilDone(o.SpaceShipWoosh), yield;
        }), r.Event.whenFlag(async function*() {
            this.Looks.Effect.set(t.ImageEffective.GHOST, 90);
        }), e.Event.whenFlag(async function*() {
            for(;;)this.Sensing.isKeyDown(t.Keyboard.RIGHT) && (this.Motion.Position.x += 10), this.Sensing.isKeyDown(t.Keyboard.LEFT) && (this.Motion.Position.x -= 10), yield;
        }), e.Event.whenFlag(async function*() {
            for(this.Sound.add(o.Shot);;)this.Sensing.isKeyDown(t.Keyboard.SPACE) && (a.Control.clone(), this.Sound.play(o.Shot)), yield;
        }), e.Event.whenFlag(async function*() {
            for(this.Looks.Costume.name = o.Spaceship01, this.Looks.show();;)await this.Control.wait(.1), this.Looks.Costume.next(), yield;
        }), n.Event.whenFlag(async function*() {
            this.Looks.Effect.set(t.ImageEffective.GHOST, 100);
        }), a.Control.whenCloned(async function*() {
            this.Looks.Costume.name = o.Bullet, this.Motion.Move.toSprite(e), this.Motion.Direction.degree = 0;
            const s = 10;
            for(this.Looks.show(); !this.Sensing.isTouchingEdge();)this.Motion.Move.steps(s), yield;
            this.Control.remove();
        }), i.Event.whenFlag(async function*() {
            this.Sound.add(o.Explosion), this.Looks.hide(), this.Looks.Costume.name = o.Debris01, this.Motion.Position.xy = [
                0,
                180
            ];
            const s = [
                o.Debris01,
                o.Debris02,
                o.Debris03
            ];
            for(;;)this.Motion.Position.x = t.randomInteger(-240, 240), await this.Control.wait(1), this.Control.clone(), this.Looks.Costume.name = s[t.randomInteger(0, s.length - 1)], yield;
        }), i.Control.whenCloned(async function*() {
            const s = t.randomInteger(50, 100);
            this.Looks.Size.scale = [
                s,
                s
            ];
            const S = t.getRandomValueInRange(-1, 5);
            for(this.Looks.show();;){
                if (this.Sensing.isTouchingToSprites([
                    n
                ])) {
                    this.Looks.hide();
                    break;
                }
                if (this.Sensing.isTouchingToSprites([
                    a
                ])) {
                    this.Sound.play(o.Explosion), this.Looks.Costume.name = o.Explosion, this.Looks.Size.scale = [
                        120,
                        120
                    ], this.Looks.Effect.set(t.ImageEffective.GHOST, 80);
                    break;
                }
                this.Motion.Position.y += t.randomInteger(-5, 1) / 2, this.Motion.Direction.degree += S, yield;
            }
            await this.Control.wait(.5), this.Control.remove();
        });
    };
});
