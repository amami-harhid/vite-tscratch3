/**
 * 【06】Let's go home
 */
import {Pg, Lib} from "@tscratch3/tscratch3likejs/s3lib-importer";
import type { IPgMain as PgMain } from '@Type/pgMain';
import type { IStage as Stage } from '@Type/stage'
import type { ISprite as Sprite } from '@Type/sprite';

import { Constant } from './sub/constants';
//import { Message } from "./sub/messages";

Pg.title = "おうちにかえろう"

//---------------------------------
// ステージ、スプライト変数の定義
//---------------------------------
/** ステージ */
let stage: Stage;
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
Pg.prepare = async function prepare() {

    //----------------
    // ステージを作る
    //----------------
    stage = new Lib.Stage();

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
    house.Image.add( Constant.House );
    house.Looks.hide();

    //----------------
    // スプライト（ペン）を作る
    //----------------
    pen = new Lib.Sprite('pen');
    //pen.Image.add( Constant.DogA );
    //pen.Looks.Effect.set( Lib.ImageEffective.GHOST, 50 );
}

// --------------------------------
// イベント定義処理
// --------------------------------
Pg.setting = async function setting() {
    // 緑の旗が押されたときの動作    
    stage.Event.whenFlag(async function*( this: Stage ){

    });

    // 緑の旗が押されたときの動作    
    dog.Event.whenFlag(async function*( this: Sprite ){
        this.Looks.hide();
        this.Motion.Position.xy = [-100, 180];
    });
    // 緑の旗が押されたときの動作    
    box1.Event.whenFlag(async function*( this: Sprite ){
        this.Motion.Position.xy = [-160, -160];
        this.Looks.Size.scale = [100,150];
        this.Looks.show();
    });
    // 緑の旗が押されたときの動作    
    box2.Event.whenFlag(async function*( this: Sprite ){
        this.Motion.Position.xy = [170, -170];
        this.Looks.Size.scale = [100,100];
        this.Looks.show();
    });

    // 緑の旗が押されたときの動作    
    house.Event.whenFlag(async function*( this: Sprite ){
        this.Motion.Position.xy = [190, -30];
        this.Looks.Size.scale = [50,50];
        // 表示する
        this.Looks.show();
    });
    // 緑の旗が押されたときの動作    
    dog.Event.whenFlag(async function*( this: Sprite ){
        this.Looks.Size.scale = [20,20];
        // 表示する
        this.Looks.hide();
        for(;;) {
            const x = Lib.randomInteger(-220, -170);
            this.Motion.Position.xy = [x, 170];
            await this.Control.wait( Lib.randomDecimal(1,3) );
            this.Control.clone();
            yield;
        }
    });
    dog.Control.whenCloned(async function*(this:Sprite){
        // 表示する
        this.Looks.show();
        for(;;) {
            let touching = false;
            this.Motion.Position.y -= 5;
            if( this.Sensing.isTouchingToColor('#000000')){
                this.Motion.Position.y += 6;
                touching = true;
                this.Motion.Move.steps(10);
            }
            while( this.Sensing.isTouchingToColor('#0000ff')){
                this.Motion.Position.y += 6;
                touching = true;
                yield;
            }
            if( this.Sensing.isTouchingToColor('#ff0019')) {
                break;
            }
            if( this.Sensing.isTouchingEdge()) {
                break;
            }
            await this.Control.wait(0.1);
            if(touching == true){
                this.Motion.Move.steps(10);
                this.Looks.Costume.next();
            }
            yield;
        }

        this.Control.remove();
    });
    pen.Event.whenFlag(async function*( this: Sprite ){
        this.Pen.prepare();
        this.Pen.up();
        this.Pen.Size.thickness = 2;
        await this.Control.wait(0.5);
        for(;;) {
            this.Motion.Move.mousePosition();
            if(this.Sensing.isMouseDown()) {
                this.Pen.down();
    
            }else{
                this.Pen.up();
            }
            yield;
        }
    });

}
