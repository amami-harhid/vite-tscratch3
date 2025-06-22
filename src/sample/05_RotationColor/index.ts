/**
 * 【05】Rotation Color Disk
 */
import {Pg, Lib} from "@tscratch3/tscratch3likejs/s3lib-importer";
import type { IPgMain as PgMain } from '@Type/pgMain';
import type { IStage as Stage } from '@Type/stage'
import type { ISprite as Sprite } from '@Type/sprite';


import { Constant } from './sub/constants';
import { Message } from "./sub/messages";
import { Ball } from './sub/ball';
import { BlackBackdrop } from "./sub/blackBacdrop";

Pg.title = "回転する色"

//---------------------------------
// ステージ、スプライト変数の定義
//---------------------------------
/** ステージ */
let stage: Stage;
/** コントローラー */
let controller: Sprite;
/** ドット */
let dot: Sprite;
/** ボール(赤) */
let redBall: Sprite;
/** ボール(黄) */
let yellowBall: Sprite;
/** ボール(青) */
let blueBall: Sprite;
/** テキスト */
let text: Sprite;
// ---------------------------------
// アセットをインポートする
// ---------------------------------
import ControllerSvg from './assets/controller.svg';
import ChantingMp3 from './assets/chanting8bit.mp3';
import DamageMp3 from './assets/damage8bit.mp3';
import TogemaruWoff from './assets/TogeMaruGothic-700-Bold.woff';

// --------------------------------
// 事前ロード処理
// --------------------------------
Pg.preload = async function preload( this: PgMain ) {
    this.Image.load( ControllerSvg, Constant.Controller );
    this.Sound.load( ChantingMp3, Constant.Chanting );
    this.Sound.load( DamageMp3, Constant.Damage );
    this.Font.load( TogemaruWoff, Constant.Togemaru );
}

// --------------------------------
// 事前準備処理
// --------------------------------
Pg.prepare = async function prepare() {

    //----------------
    // ステージを作る
    //----------------
    stage = new Lib.Stage();
    stage.SvgText.add( Constant.BlackBground, BlackBackdrop );

    //----------------
    // スプライト（コントローラー）を作る
    //----------------
    controller = new Lib.Sprite('Controller');
    controller.Image.add( Constant.Controller );
    controller.Looks.hide();

    //----------------
    // スプライト（ドット）を作る
    //----------------
    dot = new Lib.Sprite('dot');
    dot.SvgText.add( Constant.RedBall, Ball("#ff0000") );
    dot.SvgText.add( Constant.YellowBall, Ball("#ffff00") );
    dot.SvgText.add( Constant.RedBall, Ball("#003fff") );
    dot.Looks.Size.scale = [10,10];
    dot.Motion.Position.xy = [0, 0];
    dot.Looks.hide();

    //----------------
    // スプライト（赤ボール）を作る
    //----------------
    redBall = new Lib.Sprite('redBall');
    redBall.SvgText.add( Constant.RedBall, Ball("#ff0000") );
    redBall.Looks.Size.scale = [10,10];
    redBall.Motion.Position.xy = [0, 0];
    redBall.Looks.hide();

    //----------------
    // スプライト（黄ボール）を作る
    //----------------
    yellowBall = new Lib.Sprite('yellowBall');
    yellowBall.SvgText.add( Constant.RedBall, Ball("#ffff00") );
    yellowBall.Looks.Size.scale = [60,60];
    yellowBall.Motion.Position.xy = [-220, -155];
    yellowBall.Looks.hide();

    //----------------
    // スプライト（青ボール）を作る
    //----------------
    blueBall = new Lib.Sprite('blueBall');
    blueBall.SvgText.add( Constant.RedBall, Ball("#003fff") );
    blueBall.Looks.Size.scale = [60,60];
    blueBall.Motion.Position.xy = [-220, -155];
    blueBall.Looks.hide();

    //----------------
    // スプライト（テキスト）を作る
    //----------------
    text = new Lib.Sprite('text');
    // フォントを追加してSVG化した画像を追加する
    text.Font.add(Constant.Togemaru);
    {
        const fontSize = 35;
        const fontStyle = 'bold';
        const color = '#ffffff';
        const fontFamily = Constant.Togemaru;
        const textStr = text.SvgText.toSvg(["カラー円盤ゲーム"], fontSize, fontStyle, color, fontFamily);
        text.SvgText.add( Constant.Title, textStr, fontFamily );    
    }
    {
        const fontSize = 15;
        const fontStyle = 'bold';
        const color = '#ff0000';
        const fontFamily = Constant.Togemaru;
        const textArr = [
            "← / → を使って回転させよう",
            "迫ってくるドットを同じ色で受け止めよう"
        ];
        const textStr = text.SvgText.toSvg(textArr, fontSize, fontStyle, color, fontFamily);
        text.SvgText.add( Constant.Guide, textStr, fontFamily );    
    }

    text.Looks.show();
    // 幽霊の効果
    text.Looks.Effect.set( Lib.ImageEffective.GHOST, 0 );
}

// --------------------------------
// イベント定義処理
// --------------------------------
Pg.setting = async function setting() {
    // 緑の旗が押されたときの動作    
    stage.Event.whenFlag(async function*( this: Stage ){
        // 幽霊の効果
        this.Looks.Effect.set(Lib.ImageEffective.GHOST, 0);
        // 背景を指定
        //this.Looks.Backdrop.name = Constant.Maze1;
    });

    // メッセージ(Start)を受け取ったときの動作
    stage.Event.whenBroadcastReceived( Message.Start, async function*( this: Stage ){
        // 幽霊の効果 ( 0% ) : 完全非透明
        this.Looks.Effect.set(Lib.ImageEffective.GHOST, 0);
        // 音を追加
        this.Sound.add( Constant.ShortMistery001 );
        // ずっと繰り返す
        for(;;) {
            await this.Sound.playUntilDone( Constant.ShortMistery001 );
            yield;
        }
    })
    // 緑の旗が押されたときの動作    
    controller.Event.whenFlag(async function*( this: Sprite ){
        this.Looks.hide();
        // 幽霊の効果
        this.Looks.Effect.set( Lib.ImageEffective.GHOST, 100 );    
    });

    // 緑の旗が押されたときの動作    
    text.Event.whenFlag(async function*( this: Sprite ){
        // コスチュームを指定
        this.Looks.Costume.name = Constant.Title;
        this.Looks.Effect.set( Lib.ImageEffective.GHOST, 0 );
        // 表示する
        this.Looks.show();
        await this.Control.wait(1);
        // コスチュームを指定
        this.Looks.Costume.name = Constant.Guide;
        await this.Control.wait(2);

        let ghost = 0;
        for(const _ of Lib.Iterator(5)) {
            ghost += 20;
            this.Looks.Effect.set( Lib.ImageEffective.GHOST, ghost );
            await this.Control.wait(0.1);
            yield;
        }
        // メッセージ( Start )を送る
        this.Event.broadcast( Message.View );
        // 隠す
        this.Looks.hide();        
    });

    // メッセージ(View)を受け取ったときの動作
    controller.Event.whenBroadcastReceived( Message.View, async function*( this: Sprite ){
        this.Looks.show();
        let ghost = 100;
        for(const _ of Lib.Iterator(5)) {
            ghost -= 20;
            // 幽霊の効果
            this.Looks.Effect.set( Lib.ImageEffective.GHOST, ghost );
            await this.Control.wait(0.05);
            yield;
        }
        this.Event.broadcast(Message.Small);
    });
    // メッセージ(Small)を受け取ったときの動作
    controller.Event.whenBroadcastReceived( Message.Small, async function*( this: Sprite ){
        let scale = 100;
        for(const _ of Lib.Iterator(10)) {
            scale -= 5;
            this.Looks.Size.scale = [scale, scale];
            await this.Control.wait(0.05);
            yield;
        }
        this.Event.broadcast(Message.Start);
    });
    // メッセージ(Start)を受け取ったときの動作
    controller.Event.whenBroadcastReceived( Message.Start, async function*( this: Sprite ){
        // 回転する速さ
        const DEGREE = 5;
        for(;;) {
            if(this.Sensing.isKeyDown(Lib.Keyboard.RIGHT)) {
                this.Motion.Direction.degree += DEGREE;
            }else if(this.Sensing.isKeyDown(Lib.Keyboard.LEFT)) {
                this.Motion.Direction.degree -= DEGREE;
            }
            await this.Control.wait(0.01);
            yield;
        }
    });
    
    dot.Event.whenFlag( async function*( this:Sprite ){
        this.Looks.hide();
        for(;;) {
            // ランダムな位置に移動
            // ランダムなコスチュームに変更
            // クローンを作る
            // ランダムな時間だけ待つ
            yield;
        }
    });

    dot.Control.whenCloned( async function( this:Sprite ){
        this.Looks.show();
        // コントローラーへ向く
        // 少しずつ進む
        // コントローラーに触っていて、赤色が赤色へ、黄色が黄色へ、青色が青色に触れたら
        // -- 音を鳴らす
        // -- 点数を増やす
        // -- クローンを消す
        // コントローラーに触っていて、同じ色に触れていないとき
        // -- 音を鳴らす
        // -- HP を減らす
        // -- クローンを削除する
    });
}
