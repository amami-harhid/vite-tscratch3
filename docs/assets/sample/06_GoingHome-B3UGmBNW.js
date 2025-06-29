import { _ as r, a as e, __tla as __tla_0 } from "../index-Cy9bhml5.js";
Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const o = {
        Box: "Box",
        House: "House",
        DogA: "DogA",
        DogB: "DogB"
    }, g = "data:image/svg+xml,%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='185'%20height='177'%20viewBox='0,0,185,177'%3e%3cg%20transform='translate(-147.5,-91.5)'%3e%3cg%20data-paper-data='{&quot;isPaintingLayer&quot;:true}'%20fill='%2366c7ff'%20fill-rule='nonzero'%20stroke='%23000000'%20stroke-width='5'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20style='mix-blend-mode:%20normal'%3e%3cpath%20d='M150,266v-172h180v172z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", d = "/assets/dog_a-DE07FjDS.svg", f = "/assets/dog_b-BteB2Tp-.svg", p = "data:image/svg+xml,%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='286.94623'%20height='209.5'%20viewBox='0,0,286.94623,209.5'%3e%3cdefs%3e%3clinearGradient%20x1='151.5'%20y1='180'%20x2='328.5'%20y2='180'%20gradientUnits='userSpaceOnUse'%20id='color-1'%3e%3cstop%20offset='0'%20stop-color='%2391ff66'/%3e%3cstop%20offset='1'%20stop-color='%23ffb566'/%3e%3c/linearGradient%3e%3clinearGradient%20x1='106.41051'%20y1='93'%20x2='378.41051'%20y2='93'%20gradientUnits='userSpaceOnUse'%20id='color-2'%3e%3cstop%20offset='0'%20stop-color='%231d00ff'/%3e%3cstop%20offset='1'%20stop-color='%2300ffe9'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20transform='translate(-99.20798,-39)'%3e%3cg%20data-paper-data='{&quot;isPaintingLayer&quot;:true}'%20fill-rule='nonzero'%20stroke='%23000000'%20stroke-width='5'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20style='mix-blend-mode:%20normal'%3e%3cg%3e%3cpath%20d='M151.5,246v-132h177v132z'%20fill='url(%23color-1)'%20stroke-linecap='butt'/%3e%3cpath%20d='M236.41051,41.5l-130,102l272,1l-142,-103'%20fill='url(%23color-2)'%20stroke-linecap='round'/%3e%3cpath%20d='M198.41051,143.5l-1,102h35l1,-100.98z'%20fill='%23ff0019'%20stroke-linecap='round'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
    r.title = "おうちにかえろう";
    let h, i, n, a, t, c;
    r.preload = async function() {
        this.Image.load(g, o.Box), this.Image.load(d, o.DogA), this.Image.load(f, o.DogB), this.Image.load(p, o.House);
    };
    r.prepare = async function() {
        h = new e.Stage, t = new e.Sprite("Dog"), t.Image.add(o.DogA), t.Image.add(o.DogB), t.Looks.hide(), i = new e.Sprite("box1"), i.Image.add(o.Box), i.Looks.hide(), n = new e.Sprite("box2"), n.Image.add(o.Box), n.Looks.hide(), a = new e.Sprite("house"), a.Image.add(o.House), a.Looks.hide(), c = new e.Sprite("pen");
    };
    r.setting = async function() {
        h.Event.whenFlag(async function*() {}), t.Event.whenFlag(async function*() {
            this.Looks.hide(), this.Motion.Position.xy = [
                -100,
                180
            ];
        }), i.Event.whenFlag(async function*() {
            this.Motion.Position.xy = [
                -160,
                -160
            ], this.Looks.Size.scale = [
                100,
                150
            ], this.Looks.show();
        }), n.Event.whenFlag(async function*() {
            this.Motion.Position.xy = [
                170,
                -170
            ], this.Looks.Size.scale = [
                100,
                100
            ], this.Looks.show();
        }), a.Event.whenFlag(async function*() {
            this.Motion.Position.xy = [
                190,
                -30
            ], this.Looks.Size.scale = [
                50,
                50
            ], this.Looks.show();
        }), t.Event.whenFlag(async function*() {
            for(this.Looks.Size.scale = [
                20,
                20
            ], this.Looks.hide();;){
                const s = e.randomInteger(-220, -170);
                this.Motion.Position.xy = [
                    s,
                    170
                ], await this.Control.wait(e.randomDecimal(1, 3)), this.Control.clone(), yield;
            }
        }), t.Control.whenCloned(async function*() {
            for(this.Looks.show();;){
                let s = !1;
                for(this.Motion.Position.y -= 5, this.Sensing.isTouchingToColor("#000000") && (this.Motion.Position.y += 6, s = !0, this.Motion.Move.steps(10)); this.Sensing.isTouchingToColor("#0000ff");)this.Motion.Position.y += 6, s = !0, yield;
                if (this.Sensing.isTouchingToColor("#ff0019") || this.Sensing.isTouchingEdge()) break;
                await this.Control.wait(.1), s == !0 && (this.Motion.Move.steps(10), this.Looks.Costume.next()), yield;
            }
            this.Control.remove();
        }), c.Event.whenFlag(async function*() {
            for(this.Pen.prepare(), this.Pen.up(), this.Pen.Size.thickness = 2, await this.Control.wait(.5);;)this.Motion.Move.mousePosition(), this.Sensing.isMouseDown() ? this.Pen.down() : this.Pen.up(), yield;
        });
    };
});
