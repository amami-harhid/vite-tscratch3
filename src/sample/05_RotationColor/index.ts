/**
 * 【05】Rotation Color Disk
 */
import {Pg, Lib} from "@tscratch3/tscratch3likejs/s3lib-importer";
import type { IPgMain as PgMain } from '@Type/pgMain';
import type { IStage as Stage } from '@Type/stage'
import type { ISprite as Sprite } from '@Type/sprite';
import type { IMonitors as Motnitors } from "@Type/monitors";

//---------------------------------
// Sub Inport
//---------------------------------
import { Constant } from './sub/constants';
import { Message } from "./sub/messages";
import { Ball } from './sub/ball';
import { BlackBackdrop } from "./sub/blackBacdrop";
import { addTitle, addGuidance, addAlert, addGameOverSvg } from "./sub/svgText";

Pg.title = "回転する色"

//---------------------------------
// ステージ、スプライト変数の定義
//---------------------------------
/** コントローラー */
let controller: Sprite;
/** ドット */
let dot: Sprite;
/** テキスト */
let text: Sprite;
/** モニター */
let monitors: Motnitors;
// ---------------------------------
// 色
// ---------------------------------
const RedBallColor = '#ff0000';
const YellowBallColor = '#ffff00';
const BlueBallColor = '#003fff';
// ---------------------------------
// アセットをインポートする
// ---------------------------------
import ControllerSvg from './assets/controller.svg';
import ChantingMp3 from './assets/chanting8bit.mp3';
import DamageMp3 from './assets/damage8bit.mp3';
import TogemaruWoff from './assets/TogeMaruGothic-700-Bold.woff';
import ShortMistery001Mp3 from './assets/Short_mistery_001.mp3';


// --------------------------------
// 事前ロード処理
// --------------------------------
Pg.preload = async function preload( this: PgMain ) {
    this.Image.load( ControllerSvg, Constant.Controller );
    this.Sound.load( ChantingMp3, Constant.Chanting );
    this.Sound.load( DamageMp3, Constant.Damage );
    this.Font.load( TogemaruWoff, Constant.Togemaru );
    this.Sound.load( ShortMistery001Mp3, Constant.ShortMistery001 );

}

// --------------------------------
// 事前準備処理
// --------------------------------
Pg.prepare = async function prepare( this : PgMain ) {

    //----------------
    // ステージを設定
    //----------------
    this.stage.SvgText.add( Constant.BlackBground, BlackBackdrop );
    this.stage.Sound.add( Constant.ShortMistery001 );

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
    dot.Sound.add( Constant.Chanting );
    dot.Sound.add( Constant.Damage );
    dot.SvgText.add( Constant.RedBall, Ball(RedBallColor) );
    dot.SvgText.add( Constant.YellowBall, Ball(YellowBallColor) );
    dot.SvgText.add( Constant.BlueBall, Ball(BlueBallColor) );
    dot.Looks.Size.scale = [30, 30];
    dot.Motion.Position.xy = [0, 0];
    dot.Looks.hide();

    //----------------
    // スプライト（テキスト）を作る
    //----------------
    text = new Lib.Sprite('text');
    // フォントを追加してSVG化した画像を追加する
    text.Font.add(Constant.Togemaru);
    // タイトル
    addTitle( text );
    // ガイダンス
    addGuidance( text );
    // アラート（注意）
    addAlert( text );
    // GameOver
    addGameOverSvg(text);

    text.Looks.show();
    // 幽霊の効果
    text.Looks.Effect.set( Lib.ImageEffective.GHOST, 0 );

    monitors = new Lib.Monitors();
    monitors.add( Constant.MonitorPoint, '成功');
    monitors.get( Constant.MonitorPoint ).hide();
    monitors.add( Constant.MonitorFail, '失敗');
    monitors.get( Constant.MonitorFail ).hide();
}

// --------------------------------
// イベント定義処理
// --------------------------------
Pg.setting = async function setting( this: PgMain ) {

    // 緑の旗が押されたときの動作    
    this.stage.Event.whenFlag(async function( this: Stage ){
        // モニター値初期化
        monitors.get(Constant.MonitorPoint).hide();
        monitors.get(Constant.MonitorPoint).value = 20;
        monitors.get(Constant.MonitorFail).hide();
        monitors.get(Constant.MonitorFail).value = 0;
        // 幽霊の効果を(0)にする
        this.Looks.Effect.set(Lib.ImageEffective.GHOST, 0);
    });

    // メッセージ(Start)を受け取ったときの動作
    this.stage.Event.whenBroadcastReceived( Message.Start, async function*( this: Stage ){
        // 幽霊の効果 ( 0% ) : 完全非透明
        this.Looks.Effect.set(Lib.ImageEffective.GHOST, 0);
        // 音を追加
        this.Sound.add( Constant.ShortMistery001 );
        // ずっと繰り返す
        for(;;) {
            // 終わるまで音を鳴らす
            await this.Sound.playUntilDone( Constant.ShortMistery001 );
            yield;
        }
    });

    // メッセージ(GameOver)を受け取ったときの動作
    this.stage.Event.whenBroadcastReceived( Message.GameOver, async function(this : Stage){
        // ステージの他のスクリプトを止める
        this.Control.stopOtherScripts(this);
    });

    // 緑の旗が押されたときの動作    
    controller.Event.whenFlag(async function*( this: Sprite ){
        // 隠す
        this.Looks.hide();
        // 幽霊の効果
        this.Looks.Effect.set( Lib.ImageEffective.GHOST, 100 );    
    });

    // 緑の旗が押されたときの動作    
    text.Event.whenFlag(async function*( this: Sprite ){
        // コスチュームを指定
        this.Looks.Costume.name = Constant.Title;
        // 表示する
        this.Looks.show();
        // (1)秒待つ
        await this.Control.wait(1);
        // コスチュームを指定
        this.Looks.Costume.name = Constant.Guide;
        // 幽霊の効果の値 (0)にする
        let ghost = 0;
        // 幽霊の効果を (ghost)%にする
        this.Looks.Effect.set( Lib.ImageEffective.GHOST, ghost );
        // (1)秒待つ
        await this.Control.wait(1);

        // (5)回繰り返す
        for(const _ of Lib.Iterator(5)) {
            // 幽霊の効果の値を (20)ずつ増やす
            ghost += 20;
            // 幽霊の効果を (ghost)%にする
            this.Looks.Effect.set( Lib.ImageEffective.GHOST, ghost );
            // 少しだけ待つ
            await this.Control.wait(0.1);
            yield;
        }

        // コスチュームを指定
        this.Looks.Costume.name = Constant.Alert;
        // 幽霊の効果の値 (0)にする
        ghost = 0;
        // 幽霊の効果を (ghost)%にする
        this.Looks.Effect.set( Lib.ImageEffective.GHOST, ghost );
        // (1)秒待つ
        await this.Control.wait(1);
        // (5)回繰り返す
        for(const _ of Lib.Iterator(5)) {
            // 幽霊の効果の値を (20)ずつ増やす
            ghost += 20;
            // 幽霊の効果を (ghost)%にする
            this.Looks.Effect.set( Lib.ImageEffective.GHOST, ghost );
            // 少しだけ待つ
            await this.Control.wait(0.1);
            yield;
        }

        // メッセージ( Start )を送る
        this.Event.broadcast( Message.View );
        // 隠す
        this.Looks.hide();        
    });

    // メッセージ(GameOver)を受け取ったときの動作の定義
    text.Event.whenBroadcastReceived( Message.GameOver, async function(this:Sprite){
        // 幽霊の効果を (0)%にする
        this.Looks.Effect.set( Lib.ImageEffective.GHOST, 0 );
        // コスチュームを (GameOver)にする
        this.Looks.Costume.name = Constant.GameOver;
        // 表示する
        this.Looks.show();
    });

    // メッセージ(View)を受け取ったときの動作
    controller.Event.whenBroadcastReceived( Message.View, async function*( this: Sprite ){
        // 表示する
        this.Looks.show();
        // 幽霊効果の値(100)%
        let ghost = 100;
        // (5)回繰り返す
        for(const _ of Lib.Iterator(5)) {
            // 幽霊効果の値を (20)ずつ減らす
            ghost -= 20;
            // 幽霊の効果を (ghost)にする
            this.Looks.Effect.set( Lib.ImageEffective.GHOST, ghost );
            // すこしだけ待つ
            await this.Control.wait(0.05);
            yield;
        }
        // メッセージ(Small)を送る
        this.Event.broadcast(Message.Small);
    });
    
    // メッセージ(Small)を受け取ったときの動作
    controller.Event.whenBroadcastReceived( Message.Small, async function*( this: Sprite ){
        // 大きさの値--初期値(100)%
        let scale = 100;
        // (10)回繰り返す
        for(const _ of Lib.Iterator(10)) {
            // (5)ずつ減らす
            scale -= 5;
            // 大きさを設定
            this.Looks.Size.scale = [scale, scale];
            // 少しだけ待つ
            await this.Control.wait(0.05);
            yield;
        }
        // メッセージ(Start)を送る
        this.Event.broadcast(Message.Start);
    });
    
    // メッセージ(Start)を受け取ったときの動作
    controller.Event.whenBroadcastReceived( Message.Start, async function*( this: Sprite ){
        // 回転する速さ
        const DEGREE = 5;
        // ずっと繰り返す
        for(;;) {
            if(this.Sensing.isKeyDown(Lib.Keyboard.RIGHT)) {
                // 右向き矢印がおされたとき
                // 向きを(DEGREE)ずつ変える( 右向きに回転 )
                this.Motion.Direction.degree += DEGREE;
            }else if(this.Sensing.isKeyDown(Lib.Keyboard.LEFT)) {
                // 左向き矢印がおされたとき
                // 向きを(-DEGREE)ずつ変える( 左向きに回転 )
                this.Motion.Direction.degree -= DEGREE;
            }
            // 少しだけ待つ-- (0.01)秒
            await this.Control.wait(0.01);
            yield;
        }
    });

    // メッセージ(GameOver)を受け取ったときの動作の定義
    controller.Event.whenBroadcastReceived( Message.GameOver, async function(this:Sprite){
        // 幽霊の効果を(90)にする
        this.Looks.Effect.set( Lib.ImageEffective.GHOST, 90 );
        // このスプライト(controller)の他のスクリプトを止める
        this.Control.stopOtherScripts(this);
    });

    // 旗が押されたときの動作の定義
    dot.Event.whenFlag( async function*( this:Sprite ){
        // 隠す
        this.Looks.hide();
    });
    
    // メッセージ(Start)を受け取ったときの動作
    dot.Event.whenBroadcastReceived( Message.Start, async function*( this: Sprite ){
        // 変数モニターを表示する
        monitors.get(Constant.MonitorPoint).show();
        monitors.get(Constant.MonitorFail).show();

        // 現在のコスチュームの名前の一覧を取り出しておく
        // ランダムなコスチュームにするために使う
        const CostumeNames = this.Looks.Costume.names;

        // ずっと繰り返す
        for(;;) {
            // ランダムな位置に移動させる
            this.Motion.Move.randomPosition();

            // X座標>0 のとき +100ずつ, X座標<=0 のとき -100 ずつ変える
            this.Motion.Position.x *= 0.5;
            if(this.Motion.Position.x > 0){
                this.Motion.Position.x += 100;
            }else{
                this.Motion.Position.x -= 100;
            }

            // Y座標を 0.5 倍する
            this.Motion.Position.y *= 0.5;
            // Y座標>0 のとき +100ずつ, Y座標<=0 のとき -100 ずつ変える
            if(this.Motion.Position.y > 0){
                this.Motion.Position.y += 100;
            }else{
                this.Motion.Position.y -= 100;
            }

            // ランダムなコスチュームに変更
            const idx = Lib.randomInteger(0, CostumeNames.length-1);
            const costumeName = CostumeNames[ idx ];
            this.Looks.Costume.name = costumeName;

            // クローンを作る
            this.Control.clone();
            // ランダムな時間だけ待つ
            await this.Control.wait( Lib.randomDecimal(0.2, 3));
            yield;
        }
    });
    
    // メッセージ(GameOver)を受け取ったときの動作
    dot.Event.whenBroadcastReceived( Message.GameOver, async function( this: Sprite ){
        // このスプライト(dot)の他のスクリプトを止める
        this.Control.stopOtherScripts(this);
    });

    // クローンされたときの動作の定義
    dot.Control.whenCloned( async function*( this:Sprite ){
        // 現在のコスチュームの名前を取り出しておく
        const costumeName = this.Looks.Costume.name; 
        // コントローラーへ向く
        this.Motion.Point.toTarget(controller);
        // 進む速さをランダムに決める( 1 ～ 2 )
        const STEPS = Lib.randomDecimal(1, 2);
        // 表示する
        this.Looks.show();
        // ずっと繰り返す
        for(;;) {
            // 少しずつ進む
            this.Motion.Move.steps(STEPS);
            // スプライト「controller」に触れたときの判定
            if( this.Sensing.isTouchingToSprites([controller])) {
                // 少し進む
                this.Motion.Move.steps(STEPS);
                // コントローラーに触っていて、赤色が赤色へ、黄色が黄色へ、青色が青色に触れたら
                if( (costumeName == Constant.RedBall && this.Sensing.isTouchingToColor(RedBallColor)) ||
                    (costumeName == Constant.YellowBall && this.Sensing.isTouchingToColor(YellowBallColor)) ||
                    (costumeName == Constant.BlueBall && this.Sensing.isTouchingToColor(BlueBallColor)) ) {
                    // 音を鳴らす
                    this.Sound.play( Constant.Chanting );
                    // 点数を増やす( +2 )
                    monitors.get(Constant.MonitorPoint).value += 2;
                }else{
                    this.Sound.play( Constant.Damage );
                    // 失敗数を増やす( +1 )
                    monitors.get(Constant.MonitorFail).value += 1;
                }
                // 隠す
                this.Looks.hide();
                // 繰り返しを抜ける
                break;
            }
            // 失敗数 が 9 より大になったときの判定
            if( monitors.get(Constant.MonitorFail).value > 9) {
                // 隠す
                this.Looks.hide();
                // 幽霊の効果を(100)にする
                this.Looks.Effect.set( Lib.ImageEffective.GHOST, 100 );
                // メッセージ(GameOver)を送る
                this.Event.broadcast(Message.GameOver);
            }
            yield;
        }
        // (1)秒待つ
        await this.Control.wait(1);
        // クローンを削除する
        this.Control.remove();
    });

}
