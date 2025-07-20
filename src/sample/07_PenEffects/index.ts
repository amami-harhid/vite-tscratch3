/**
 * 【07】PenEffects
 */
import {Pg, Lib} from "@tscratch3/tscratch3likejs/s3lib-importer";
import type { IPgMain as PgMain } from '@Type/pgMain';
import type { IStage as Stage } from '@Type/stage'
import type { ISprite as Sprite } from '@Type/sprite';

Pg.title = "平家物語の文字スタンプと画像効果"

//---------------------------------
// Sub Import
//---------------------------------
import { Costumes } from "./sub/Costumes";
import { backdrop } from './sub/backdrop';
import { Constant } from "./sub/constants";
import { Messages } from "./sub/messages";
import { GoogleFonts } from "./sub/googleFonts";

//---------------------------------
// Assets Import
//---------------------------------
import GionSyojyaWav from './assets/gionsyojya.wav';


//---------------------------------
// スプライト変数
//---------------------------------
const Gion = 'Gion'; // 祇園
let textGuidance:Sprite, textJapanese:Sprite, textEnglish:Sprite;

const Texts = GoogleFonts.textsGuidance;
const Texts2 = GoogleFonts.textsHeikeMonogatariJp;
const Texts3 = GoogleFonts.textsHeikeMonogatariEn;

Pg.preload = async function preload(this: PgMain) {
    this.Font.load(GoogleFonts.fontFaceUrlJPGuidance, Constant.GoogleFontsJPGuidance)
    this.Font.load(GoogleFonts.fontFaceUrlJP, Constant.GoogleFontsJP)
    this.Font.load(GoogleFonts.fontFaceUrlEN, Constant.GoogleFontsEN)
    this.Sound.load(GionSyojyaWav, Gion);
}
Pg.prepare = async function prepare( this: PgMain) {

    // ステージの設定
    this.stage.Sound.add( Gion );
    this.stage.SvgText.add('BackDrop', backdrop);

    // テキストスプライトを作る
    textGuidance = new Lib.Sprite();
    textGuidance.Font.add(Constant.GoogleFontsJPGuidance);
    textGuidance.Looks.hide();
    // テキストを行ごとにSVG化してコスチュームとして追加
    // eslint-disable-next-line loopCheck/s3-loop-plugin
    for(const counter of Lib.Iterator(Texts.length)){
        // SVG化する文字列
        const texts = Texts[counter];
        // 文字の色（白)
        const color = 'white';
        // 文字サイズ
        const fontSize = 25;
        // 文字スタイル
        const fontStyle = 'normal';
        // 文字のオプション
        const option = {
            // フォントファミリー
            fontFamily: Constant.GoogleFontsJPGuidance,
            // 文字の色
            color: color,
            // 文字サイズ
            fontSize: fontSize,
            // 文字スタイル
            fontStyle: fontStyle,
        }
        // SVG化したコスチュームの名前の一部にはcounterの値を付与する
        textGuidance.SvgText.addTexts(`cat-${counter}`, texts,  option);
    }

    textJapanese = new Lib.Sprite();
    textJapanese.Motion.Position.xy = {};
    textJapanese.Font.add( Constant.GoogleFontsJP );
    textJapanese.Looks.hide();

    // eslint-disable-next-line loopCheck/s3-loop-plugin
    for(const counter of Lib.Iterator(Texts2.length)){
        const texts = Texts2[counter];
        const color = 'red';
        const fontSize = 15;
        const fontStyle = 'normal';
        const option = {
            fontFamily:Constant.GoogleFontsJP,
            color: color,
            fontSize: fontSize,
            fontStyle: fontStyle,
        }
        textJapanese.SvgText.addTexts(`cat2-${counter}`, texts, option);
    }

    textEnglish = new Lib.Sprite();
    textEnglish.Font.add( Constant.GoogleFontsEN );    
    textEnglish.Looks.hide();
    // eslint-disable-next-line loopCheck/s3-loop-plugin
    for(const counter of Lib.Iterator(Texts3.length)){
        const texts = Texts3[counter];
        const color = 'red';
        const fontSize = 25;
        const fontStyle = 'bold';
        const option = {
            fontFamily: Constant.GoogleFontsEN,
            color: color,
            fontSize: fontSize,
            fontStyle: fontStyle,
        }
        textEnglish.SvgText.addTexts(`costume-${counter}`, texts, option);
    }


}
Pg.setting = async function setting( this: PgMain ) {

    // 緑の旗が押されたときの動作の定義
    this.stage.Event.whenFlag(async function*( this:Stage ){
        // 背景の幽霊の効果を (0)にする
        this.Looks.Effect.set(Lib.ImageEffective.GHOST, 0);
        // メッセージ(PenClear)を送る
        this.Event.broadcast( Messages.PenClear );
    });
    // メッセージ(Start)を受け取ったときの動作の定義
    this.stage.Event.whenBroadcastReceived( Messages.Start, async function*( this:Stage ){
        // 背景をちょうどよい感じでスタンプするため
        // 背景の幽霊の効果を (95)にする
        this.Looks.Effect.set(Lib.ImageEffective.GHOST, 95);
        // ずっと繰り返す
        for(;;){
            // 終わるまで音を鳴らす
            await this.Sound.playUntilDone(Gion);
            yield;
        }
    });

    // 緑の旗が押されたときの動作の定義
    textGuidance.Event.whenFlag(async function*( this:Sprite ){
        // text01を表示する
        this.Looks.show();
        // コスチューム名の一覧を取り出しておく
        const names = this.Looks.Costume.names;
        // コスチューム名の一覧の要素数分、順番に処理する
        for(const name of names){
            // 順番にコスチュームを切り替える
            this.Looks.Costume.name = name;
            // (2)秒だけ待つ
            await this.Control.wait(2);
            yield;
        }
        // コスチュームの切り替えが終わったら、隠す
        this.Looks.hide();
        // (1)秒だけ待つ
        await this.Control.wait(1);
        // メッセージ(Start)を送る
        this.Event.broadcast( Messages.Start );
    });

    // 緑の旗が押されたときの動作の定義
    textJapanese.Event.whenFlag(async function*( this:Sprite ){
        // text02 を隠す
        this.Looks.hide();
        // 画像効果をなくす
        this.Looks.Effect.clear();
    });

    // メッセージ(Start)を受け取ったときの動作の定義
    textJapanese.Event.whenBroadcastReceived( Messages.Start, async function*( this:Sprite ){
        // text02 横縦の大きさを設定( 200 % )
        this.Looks.Size.scale = {w:200, h:200};
        // text02 表示する
        this.Looks.show();
        // 位置座標を初期化( 0, 0 )にする
        this.Motion.Position.xy = {};
        // コスチュームを設定(1番目のコスチューム)
        this.Looks.Costume.name = Costumes.Text02.cat2_0; //'cat2-0';
        // 最初のコスチュームに切り替えた後、(2)秒だけ待つ
        await this.Control.wait(2);
        // ずっと繰り返す
        for(;;) {
            // 次のコスチュームにする
            this.Looks.Costume.next();
            // 切り替えた後のコスチュームが最初のコスチュームのとき
            if(this.Looks.Costume.name == Costumes.Text02.cat2_0 ) { // 'cat2-1'
                // 隠す
                this.Looks.hide();
                // 繰り返しを抜ける
                break;
            }
            // (2)秒だけ待つ
            await this.Control.wait(2);
            yield;
        }
        // メッセージ(NextStart)を送る
        this.Event.broadcast( Messages.NextStart );
    });

    // メッセージ(NextStart)を受け取ったときの動作の定義
    textJapanese.Event.whenBroadcastReceived( Messages.NextStart, async function*( this:Sprite ){
        // コスチューム一覧を取り出しておく
        const names = this.Looks.Costume.names;
        // 最初のコスチュームに切り替えておく
        this.Looks.Costume.name = names[0];
        // コスチューム一覧の要素数 × 5 回分、繰り返す
        for(const _ of Lib.Iterator(names.length*5)) {
            // 次のコスチュームにする
            this.Looks.Costume.next();
            // (3)秒だけ待つ
            await this.Control.wait(3);
            yield;
        }
        // (10)回分、繰り返す ( 幽霊の効果を増やしていき だんだん見えなくする )
        for(const _ of Lib.Iterator(10)){
            // 幽霊の効果を (10)ずつ増やす
            this.Looks.Effect.change(Lib.ImageEffective.GHOST, 10);
            // すこしだけ待つ
            await this.Control.wait(0.1);
            yield;
        }
        // (1)秒だけ待つ
        await this.Control.wait(1);
        // 見えなくなった後に隠すことで完全に見えなくする
        this.Looks.hide();
        // メッセージ(PenClear)を送る
        this.Event.broadcast( Messages.PenClear );
        // (3)秒だけ待つ
        await this.Control.wait(3);
        // すべてを止める
        this.Control.stopAll();
    
    });

    // メッセージ(PenClear)を受け取ったときの動作の定義
    textJapanese.Event.whenBroadcastReceived( Messages.PenClear, async function*( this:Sprite ){
        // ペン描画を消す
        this.Pen.clear();
    });
    
    // メッセージ( NextStart )を受け取ったときの動作の定義
    textJapanese.Event.whenBroadcastReceived( Messages.NextStart, async function*( this:Sprite ){
        // 向きを右向き(=90度)にする
        this.Motion.Direction.degree = 90;
        // ペン描画を準備する
        this.Pen.prepare();
        // ペン太さを設定
        this.Pen.Size.thickness = 1000;
        // ペンの色（明るさ）
        this.Pen.HSVColor.brightness = 0;
        // ペンの色（透明度)
        this.Pen.HSVColor.transparency = 100;//99.5;
        // ペンを下げる
        this.Pen.down();
        // スプライトの大きさを変える量
        let dx = 2;
        // ずっと繰り返す
        for(;;) {
            // 大きさ（横) を (dx)ずつ変える
            this.Looks.Size.w += dx;
            // 大きさ（縦) を (dx)ずつ変える
            this.Looks.Size.h += dx;
            // 大きさが 大きくなりすぎたり小さくなりすぎたときは
            // 「スプライトの大きさを変える量」符号を反転させる
            if(this.Looks.Size.h > 900 || this.Looks.Size.h < 50) {
                // 符号を反転させることで 大きくなり続ける、小さくなりつづけるが
                // 反転する
                dx *= -1;
            }
            // すこしだけ進ませる
            this.Motion.Move.steps(1);
            // 端に着いたら跳ね返る
            this.Motion.Move.ifOnEdgeBounce();
            // ステージをスタンプする
            this.Pen.stampStage();
            // スプライトをスタンプする
            this.Pen.stamp();
            // スプライトの色の効果を (1)ずつ変える
            this.Looks.Effect.change(Lib.ImageEffective.COLOR, 1);
            // スプライトの向きを(1)ずつ変える=右回転
            this.Motion.Direction.degree += 1;
            yield;
        }
    });

    // 緑の旗が押されたときの動作の定義
    textEnglish.Event.whenFlag( async function( this: Sprite ){
        // text03 隠す
        this.Looks.hide();
        // 画像効果をなくす
        this.Looks.Effect.clear();
    });

    // メッセージ( NextStart )を受け取ったときの動作の定義
    textEnglish.Event.whenBroadcastReceived( Messages.NextStart, async function*( this:Sprite ){
        // 大きさを設定
        this.Looks.Size.scale = {w:150, h:150};
        // 位置座標を設定
        this.Motion.Position.xy = {x:0, y:180};
        // １番目のコスチュームにする
        this.Looks.Costume.name = Costumes.Text03.Costume_0; // '0';
        // 向きを右向き(90度)にする
        this.Motion.Direction.degree = 90;
        // 階層を最背面にする
        this.Looks.Layer.gotoBack();
        // 表示する
        this.Looks.show();
        // ずっと繰り返す
        for(;;) {
            // Y座標を(-2)ずつ変える=上から下へ移動
            this.Motion.Position.y += -2;
            // 色の効果を (2)ずつ変える
            this.Looks.Effect.change(Lib.ImageEffective.COLOR, 2);
            // 下のほうに到達したら次のコスチュームにして、縦位置を上のほうにする
            // 「端に触れたとき」ではなく「Y座標」で判定するのは、文字が端の外にはみ出る効果を狙うため
            if(this.Motion.Position.y < -180){
                // 次のコスチュームにする
                this.Looks.Costume.next();
                // Y座標を(180)にする
                this.Motion.Position.y = 180;
            }
            yield;
        }
    });   

}