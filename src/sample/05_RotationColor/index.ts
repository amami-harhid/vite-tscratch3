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

Pg.title = "回転する色"

//---------------------------------
// ステージ、スプライト変数の定義
//---------------------------------
/** ステージ */
let stage: Stage;
/** コントローラー */
let controller: Sprite;
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

    //----------------
    // スプライト（コントローラー）を作る
    //----------------
    controller = new Lib.Sprite('Controller');
    controller.Image.add( Constant.Controller );

    //----------------
    // スプライト（赤ボール）を作る
    //----------------
    redBall = new Lib.Sprite('redBall');
    redBall.SvgText.add( Constant.RedBall, Ball("#ff0000") );
    redBall.Looks.Size.scale = [60,60];
    redBall.Motion.Position.xy = [-220, -155];
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
    const fontSize = 35;
    const fontStyle = 'bold';
    const color = '#ff2f00';
    const fontFamily = Constant.Togemaru;
    const text1 = text.SvgText.toSvg(["カラー円盤ゲーム"], fontSize, fontStyle, color, fontFamily);
    text.SvgText.add( Constant.Title, text1, fontFamily );
    // 幽霊の効果
    text.Looks.Effect.set( Lib.ImageEffective.GHOST, 50 );
}

// --------------------------------
// イベント定義処理
// --------------------------------
Pg.setting = async function setting() {

    // 緑の旗が押されたときの動作    
    stage.Event.whenFlag(async function*( this: Stage ){
        // 幽霊の効果
        this.Looks.Effect.set(Lib.ImageEffective.GHOST, 100);
        // 背景を指定
        this.Looks.Backdrop.name = Constant.Maze1;
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
    text.Event.whenFlag(async function*( this: Sprite ){
        // コスチュームを指定
        this.Looks.Costume.name = Constant.Title;
        // 表示する
        this.Looks.show();
        // 2秒待つ
        await this.Control.wait(2);
        // メッセージ( Start )を送る
        this.Event.broadcast( Message.Start );
        // 隠す
        this.Looks.hide();        
    });


}
