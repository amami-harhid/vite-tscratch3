/**
 * 【06】Let's go home
 */
import {Pg, Lib} from "@tscratch3/tscratch3likejs/s3lib-importer";
import type { IPgMain as PgMain } from '@Type/pgMain';
import type { IStage as Stage } from '@Type/stage'
import type { ISprite as Sprite } from '@Type/sprite';

import { Constant } from './sub/constants';

Pg.title = "おうちにかえろう"

//---------------------------------
// ステージ、スプライト変数の定義
//---------------------------------
/** 箱 */
let box1: Sprite;
let box2: Sprite;
/** お家 */
let house: Sprite;
/** 犬 */
let dog: Sprite;
/** ペン */
let pen: Sprite;

// ---------------------------------
// アセットをインポートする
// ---------------------------------
import BoxSvg from './assets/box.svg';
import DogASvg from './assets/dog_a.svg';
import DogBSvg from './assets/dog_b.svg';
import HouseSvg from './assets/home.svg';

// --------------------------------
// 事前ロード処理
// --------------------------------
Pg.preload = async function preload( this: PgMain ) {
    this.Image.load( BoxSvg, Constant.Box );
    this.Image.load( DogASvg, Constant.DogA );
    this.Image.load( DogBSvg, Constant.DogB );
    this.Image.load( HouseSvg, Constant.House );
}

// --------------------------------
// 事前準備処理
// --------------------------------
Pg.prepare = async function prepare( this: PgMain) {

    //----------------
    // スプライト（犬）を作る
    //----------------
    dog = new Lib.Sprite('Dog');
    dog.Image.add( Constant.DogA );
    dog.Image.add( Constant.DogB );
    dog.Looks.hide();

    //----------------
    // スプライト（箱1）を作る
    //----------------
    box1 = new Lib.Sprite('box1');
    box1.Image.add( Constant.Box );
    box1.Looks.hide();

    //----------------
    // スプライト（箱2）を作る
    //----------------
    box2 = new Lib.Sprite('box2');
    box2.Image.add( Constant.Box );
    box2.Looks.hide();

    //----------------
    // スプライト（お家）を作る
    //----------------
    house = new Lib.Sprite('house');
    house.Image.add( Constant.House ); //お家のコスチューム
    house.Looks.hide();

    //----------------
    // スプライト（ペン）を作る
    //----------------
    pen = new Lib.Sprite('pen');
}

// --------------------------------
// イベント定義処理
// --------------------------------
Pg.setting = async function setting( this : PgMain) {

    // 緑の旗が押されたときの動作    
    this.stage.Event.whenFlag(async function*( this: Stage ){
        // 何もしない
    });

    // 緑の旗が押されたときの動作    
    dog.Event.whenFlag(async function*( this: Sprite ){
        // 隠す
        this.Looks.hide();
        // 位置座標を設定
        this.Motion.Position.xy = [-100, 180];
    });

    // 緑の旗が押されたときの動作    
    box1.Event.whenFlag(async function*( this: Sprite ){
        // 位置座標を設定
        this.Motion.Position.xy = [-160, -160];
        // 大きさ（横/縦)を設定
        this.Looks.Size.scale = [100,150];
        // 表示する
        this.Looks.show();
    });

    // 緑の旗が押されたときの動作    
    box2.Event.whenFlag(async function*( this: Sprite ){
        // 位置座標を設定
        this.Motion.Position.xy = [170, -170];
        // 大きさ（横/縦)を設定
        this.Looks.Size.scale = [100,100];
        // 表示する
        this.Looks.show();
    });

    // 緑の旗が押されたときの動作    
    house.Event.whenFlag(async function*( this: Sprite ){
        // 位置座標を設定
        this.Motion.Position.xy = [190, -30];
        // 大きさ（横/縦)を設定
        this.Looks.Size.scale = [50,50];
        // 表示する
        this.Looks.show();
    });
    // 緑の旗が押されたときの動作    
    dog.Event.whenFlag(async function*( this: Sprite ){
        // 大きさ（横/縦)を設定
        this.Looks.Size.scale = [20,20];
        // 表示する
        this.Looks.hide();
        // ずっと繰り返す
        for(;;) {
            // X座標用のランダムな値( -220 ～ -170 )
            const x = Lib.randomInteger(-220, -170);
            // X座標をランダムな値に、Y座標を(170)にする
            this.Motion.Position.xy = [x, 170];
            // ランダム(1～3)な秒数だけ待つ
            await this.Control.wait( Lib.randomDecimal(1,3) );
            // クローンを作る
            this.Control.clone();
            yield;
        }
    });
    dog.Control.whenCloned(async function*(this:Sprite){
        // 表示する
        this.Looks.show();
        // ずっと繰り返す
        for(;;) {
            // タッチフラグ
            let touching = false;
            // Y座標を (5)ずつ減らす
            this.Motion.Position.y -= 5;
            // 色[黒](#000000)に触れたかの判定
            if( this.Sensing.Color.isTouching('#000000')){
                // Y座標を(6)ずつ変える 
                this.Motion.Position.y += 6;
                // タッチした
                touching = true;
                // (10)進める
                this.Motion.Move.steps(10);
            }
            // 色[青](#0000ff)に触れている間、繰り返す
            while( this.Sensing.Color.isTouching('#0000ff')){
                // Y座標を(6)ずつ変える 
                this.Motion.Position.y += 6;
                // タッチした
                touching = true;
                yield;
            }
            // 色[赤](#ff0019)に触れたかの判定
            if( this.Sensing.Color.isTouching('#ff0019')) {
                // 繰り返しを抜ける
                break;
            }
            // 端に触れたかの判定
            if( this.Sensing.Edge.isTouching) {
                // 繰り返しを抜ける
                break;
            }
            // 少しだけ待つ
            await this.Control.wait(0.1);
            // 触れたかの判定
            if(touching == true){
                // (10)進める
                this.Motion.Move.steps(10);
                // 次のコスチュームにする
                this.Looks.Costume.next();
            }
            yield;
        }

        this.Control.remove();
    });

    // 緑の旗が押されたときの動作
    pen.Event.whenFlag(async function*( this: Sprite ){
        // ペンの開始準備
        this.Pen.prepare();
        // ペンを上げる
        this.Pen.up();
        // ペンの太さを(2)にする
        this.Pen.Size.thickness = 2;
        // 緑の旗を押してから(0.5)秒だけ待つ
        await this.Control.wait(0.5);
        // ずっと繰り返す
        for(;;) {
            // ペンスプライトをマウスの位置に移動させる
            this.Motion.Move.mousePosition();
            // マウスが押されたときの判定
            if(this.Sensing.Mouse.isDown) {
                // ペンを下げる
                this.Pen.down();
    
            }else{
                // そうでないときはペンを上げる
                this.Pen.up();
            }
            yield;
        }
    });

}
