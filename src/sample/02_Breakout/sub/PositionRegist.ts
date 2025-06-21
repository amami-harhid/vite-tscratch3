/**
 * 位置情報レジスター
 */
export class PositionRegist {

    static instance: PositionRegist;

    static getInstance(): PositionRegist{
        if(PositionRegist.instance == undefined){
            PositionRegist.instance = new PositionRegist();
        }
        return PositionRegist.instance;
    }
    private positions: number[];
    constructor() {
        // 10個の要素を作り 0で埋める
        this.positions = new Array(10).fill(0);
    }
    /**
     * 位置情報を初期化する
     * @param v 初期値
     */
    clear(v: number) : void {
        // FPS間隔で止めずに終わるまで繰り返す(yield無し)
        // eslint-disable-next-line loopCheck/s3-loop-plugin
        for(let idx=0; idx<this.positions.length; idx++) {
            this.positions[idx] = v;
        }

    }
    /**
     * 位置情報をシフトする
     * @param x - 先頭の値
     */
    set(x: number) {
        // eslint-disable-next-line loopCheck/s3-loop-plugin
        for(let idx=0; idx<this.positions.length-1; idx++) {
            this.positions[idx+1] = this.positions[idx];
        }
        this.positions[0] = x;
    }
    /**
     * 位置情報の過去分をインデクスで指定して取り出す
     * @param idx 
     * @returns 
     */
    get(idx: number): number {
        if(idx){
            if(idx < this.positions.length){
                return this.positions[idx];
            }
        }
        return this.positions[this.positions.length-1];
    }

}