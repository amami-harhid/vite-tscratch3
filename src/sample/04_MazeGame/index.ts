/**
 * 【04】Maze
 */
import {Pg, Lib} from "@tscratch3/tscratch3likejs/s3lib-importer";
import type { IPgMain as PgMain } from '@Type/pgMain';
import type { IStage as Stage } from '@Type/stage'
import type { ISprite as Sprite } from '@Type/sprite';
import type { TAddOption } from "@Type/svgText/ISvgText";


import { Constant } from './sub/constants';
import { Message } from "./sub/messages";

Pg.title = "迷路ゲーム"

//---------------------------------
// ステージ、スプライト変数の定義
//---------------------------------
/** ステージ */
let stage: Stage;
/** カエル */
let frog: Sprite;
/** テキスト */
let text: Sprite;
// ---------------------------------
// アセットをインポートする
// ---------------------------------
import Maze01Svg from './assets/maze1.svg';
import Maze02Svg from './assets/maze2.svg';
import Maze03Svg from './assets/maze3.svg';
import FrogSvg from './assets/frog.svg';
import TogemaruWoff from './assets/TogeMaruGothic-700-Bold.woff';
import ShortMistery001Mp3 from './assets/Short_mistery_001.mp3';
//import ClickMp3 from './assets/click.mp3';
import JudgeMp3 from './assets/judge.mp3';
import OpenDoorMp3 from './assets/open_door.mp3';
import PikoPikoMp3 from './assets/pikopiko.mp3';

// --------------------------------
// 事前ロード処理
// --------------------------------
Pg.preload = async function preload( this: PgMain ) {
    this.Image.load( Maze01Svg, Constant.Maze1 );
    this.Image.load( Maze02Svg, Constant.Maze2 );
    this.Image.load( Maze03Svg, Constant.Maze3 );
    this.Image.load( FrogSvg, Constant.Frog );
    this.Font.load( TogemaruWoff, Constant.Togemaru );
    this.Sound.load( ShortMistery001Mp3, Constant.ShortMistery001 );
    //this.Sound.load( ClickMp3, Constant.Click );
    this.Sound.load( JudgeMp3, Constant.Judge );
    this.Sound.load( OpenDoorMp3, Constant.OpenDoor );
    this.Sound.load( PikoPikoMp3, Constant.PikoPiko );
}

// --------------------------------
// 事前準備処理
// --------------------------------
Pg.prepare = async function prepare() {

    //----------------
    // ステージを作る
    //----------------
    stage = new Lib.Stage();
    // ステージに背景を追加
    stage.Image.add(Constant.Maze1);
    stage.Image.add(Constant.Maze2);
    stage.Image.add(Constant.Maze3);
    stage.Looks.Effect.set(Lib.ImageEffective.GHOST, 100);

    //----------------
    // スプライト（カエル）を作る
    //----------------
    frog = new Lib.Sprite('frog');
    frog.Image.add(Constant.Frog);
    frog.Looks.Size.scale = [60,60];
    frog.Motion.Position.xy = [-220, -155];
    frog.Looks.hide();

    //----------------
    // スプライト（テキスト）を作る
    //----------------
    text = new Lib.Sprite('text');
    // フォントを追加してSVG化した画像を追加する
    text.Font.add(Constant.Togemaru);
    const fontSize = 35;
    const fontStyle = 'bold';
    const color = '#000';
    const fontFamily = Constant.Togemaru;
    const option:TAddOption = {
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontStyle: fontStyle,
        color: color,
    };
    text.SvgText.addTexts( Constant.Title, ["迷路ゲーム"], option );
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

    // 緑の旗が押されたときの動作    
    frog.Event.whenFlag(async function( this: Sprite ){
        //this.Sound.add( Constant.Click );
        this.Sound.add( Constant.Judge );
        this.Sound.add( Constant.OpenDoor );
        this.Sound.add( Constant.PikoPiko );
        // 隠す
        this.Looks.hide();
        // 大きさを指定
        this.Looks.Size.scale = [50,50]; // {w:50, h:50}
        // 位置を指定
        this.Motion.Position.xy = [-220, -155]; // {x: -220, y: -155}
        // 回転方法を指定（左右のみ）
        this.Motion.Rotation.style = Lib.RotationStyle.LEFT_RIGHT;
    });

    // メッセージ(Start)を受け取ったときの動作
    frog.Event.whenBroadcastReceived( Message.Start, async function*( this: Sprite ){
        // 表示する
        this.Looks.show();
    });

    /** 進ませる距離 */
    const STEPS = 5;
    /**
     * 指定した距離を進ませる。
     * 白色に触れたとき、端に触れたときに、5の距離を戻す
     * @param entity 
     * @param degree 
     */
    const move = function(entity: Sprite, degree: number) : void {
        // 向きを設定
        entity.Motion.Direction.degree = degree;
        // 進ませる
        entity.Motion.Move.steps( STEPS );
        // 白色( #ffffff )に触れたとき
        if(entity.Sensing.isTouchingToColor('#ffffff')) {
            // 元に戻す
            entity.Motion.Move.steps( -STEPS );
        }
        // 端に触れたとき
        if(entity.Sensing.isTouchingEdge()) {
            // 元に戻す
            entity.Motion.Move.steps( -STEPS );
        }
    }

    // メッセージ(Start)を受け取ったときの動作
    frog.Event.whenBroadcastReceived( Message.Start, async function*( this: Sprite ) {
        // ずっと繰り返す
        for(;;){
            if(this.Sensing.isKeyDown(Lib.Keyboard.UP)){
                // 上向き矢印キーが押されたとき
                // 上向きにすすむ（進めないときは戻る）
                move(this,0);
                // 音を鳴らす
                this.Sound.play( Constant.PikoPiko );
            } else if(this.Sensing.isKeyDown(Lib.Keyboard.DOWN)){
                // 下向き矢印キーが押されたとき
                // 下向きにすすむ（進めないときは戻る）
                move(this,180);
                // 音を鳴らす
                this.Sound.play( Constant.PikoPiko );
            } else if(this.Sensing.isKeyDown(Lib.Keyboard.RIGHT)){
                // 右向き矢印キーが押されたとき
                // 右向きにすすむ（進めないときは戻る）
                move(this,90);
                // 音を鳴らす
                this.Sound.play( Constant.PikoPiko );
            } else if(this.Sensing.isKeyDown(Lib.Keyboard.LEFT)){
                // 左向き矢印キーが押されたとき
                // 左向きにすすむ（進めないときは戻る）
                move(this,-90);
                // 音を鳴らす
                this.Sound.play( Constant.PikoPiko );
            } else if(this.Sensing.isTouchingToColor('#ff0000')) {
                // 赤色に触れたとき
                console.log('RED');
                // 音を鳴らす
                this.Sound.play( Constant.Judge );
                // 次の背景にする
                this.Looks.Backdrop.next();
            } else if(this.Sensing.isTouchingToColor('#006bff')) {
                // 青色に触れたとき
                console.log('BLUE');
                // 音を鳴らす
                this.Sound.play( Constant.OpenDoor );
                // 次の背景にする
                this.Looks.Backdrop.next();
            } else if(this.Sensing.isTouchingToColor('#f00000')) {
                // 出口に触れたとき
                console.log('出口');
                // 繰り返しを抜ける
                break;
            }
            yield;
        }
        // 2秒間、言う！
        await this.Looks.Bubble.sayForSecs('成功！！', 2);
        this.Control.stopAll();
    });

}
