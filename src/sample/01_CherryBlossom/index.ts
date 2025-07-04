/**
 * 【01】桜の花びらが舞う
 */
import {Pg, Lib} from "@tscratch3/tscratch3likejs/s3lib-importer";
import type {IPgMain as PgMain} from "@Type/pgMain";
import type {ISprite as Sprite} from "@Type/sprite";
import type {IStage as Stage} from "@Type/stage";
import type { TAddOption } from "@Type/svgText/ISvgText";

// ---------------------------------
// Subをインポートする
// ---------------------------------
import { Constant } from './sub/constants';
import { BlackBackdrop } from './sub/blackBacdrop';
import { GoogleFonts } from "./sub/googleFonts";
import { Message } from "./sub/messages";

// ---------------------------------
// アセットをインポートする
// ---------------------------------
import ForestImg from './assets/Forest.png'; // Scratch3内の背景素材より
import CherryImg from './assets/Cherry.svg';
import ClassicalPianoSound from './assets/bach_syuyo_spiano.wav';// 「音楽の卵」様提供フリー素材より
import TogeMaruGothicFont from './assets/TogeMaruGothic-700-Bold.woff'; // 

Pg.title = "【01_CherryBlossom】桜の花びらが舞う"

//---------------------------------
// ステージ、スプライト変数の定義
//---------------------------------
let stage: Stage;
let textSprite: Sprite;
let cherry: Sprite;

//---------------------------------
// GoogleFont を読み込むためのURL
//---------------------------------
const fontFamily = "Reggae+One";
const GoogleFontsUrl = GoogleFonts.fontFaceUrl(fontFamily);

// --------------------------------
// 事前ロード処理
// --------------------------------
Pg.preload = async function preload(this:PgMain) {
    this.Image.load( ForestImg, Constant.Forest );
    this.Image.load( CherryImg, Constant.Cherry );
    this.Sound.load( ClassicalPianoSound, Constant.ClassicPiano );
    this.Font.load( TogeMaruGothicFont, Constant.Togemaru );
    this.Font.load( GoogleFontsUrl, Constant.GoogleFont );
}
// --------------------------------
// 事前準備処理
// --------------------------------
Pg.prepare = async function prepare() {
    // ステージを作る
    stage = new Lib.Stage();
    // ステージに背景を追加
    stage.Image.add( Constant.Forest );
    stage.SvgText.add( "Black", BlackBackdrop );
    textSprite = new Lib.Sprite('Introduction');
    textSprite.Font.add(Constant.GoogleFont);
    const texts01 = GoogleFonts.texts[0];
    const texts02 = GoogleFonts.texts[1];
    const option: TAddOption = {
        fontFamily: Constant.GoogleFont,
        fontSize: 25,
        fontStyle: 'bold',
        color: 'red'
    }
    textSprite.SvgText.addTexts("0", texts01, option);
    textSprite.SvgText.addTexts("1", texts02, option);
    textSprite.Looks.hide();

    cherry = new Lib.Sprite('Cherry');
    cherry.Image.add( Constant.Cherry );
    cherry.Looks.Size.scale = [20, 20];
    cherry.Looks.hide();
}
// --------------------------------
// イベント定義処理
// --------------------------------
Pg.setting = async function setting() {

    // 【ステージ】緑の旗が押されたときの動作の定義
    stage.Event.whenFlag(async function*(this:Stage){
        this.Looks.Backdrop.name = "Black";
        // 花びらスタンプの跡を残すために透明度を高めておく
        this.Looks.Effect.set(Lib.ImageEffective.GHOST, 99);
        this.Sound.add(Constant.ClassicPiano);
        for(;;){
            this.Event.broadcast(Message.SOUND_START); // しばらくしたら再生を止める
            await this.Sound.playUntilDone(Constant.ClassicPiano);
            yield;
        }
    });

    // 【テキスト】緑の旗が押されたときの動作の定義
    textSprite.Event.whenFlag(async function*(this:Sprite){
        this.Looks.Costume.name = "0";
        this.Looks.show();
        await this.Control.wait(2);
        this.Event.broadcast('IntroStart');
        for(;;) {
            await this.Control.wait(1);
            this.Looks.Costume.next();
            yield;
        }
    });

    // 【テキスト】メッセージ（IntroStart)を受け取ったときの動作の定義
    textSprite.Event.whenBroadcastReceived('IntroStart', async function*(this:Sprite){
        for(;;){
            if(this.Sensing.isMouseTouching()){
                this.Event.broadcast('CherryStart');
                this.Control.stopOtherScripts(this);
                this.Looks.hide();
                break;
            }
            yield;
        }
    });

    // 【テキスト】メッセージ（IntroStart)を受け取ったときの動作の定義
    textSprite.Event.whenBroadcastReceived('IntroStart', async function*(this:Sprite){
        for(;;){
            await this.Control.wait(0.5);
            this.Looks.Effect.set(Lib.ImageEffective.GHOST, 50);
            await this.Control.wait(0.5);
            this.Looks.Effect.set(Lib.ImageEffective.GHOST, 0);
            yield;
        }
    });

    // 【花びら】緑の旗が押されたときの動作の定義
    cherry.Event.whenFlag(async function(this:Sprite){
        this.Pen.prepare();
        this.Looks.hide();
        this.Looks.Size.scale = [200,200];
        this.Looks.Effect.clear();
        this.Motion.Rotation.style = Lib.RotationStyle.ALL_AROUND;
    });

    // 【花びら】メッセージ（CherryStart）を受け取ったときの動作の定義
    cherry.Event.whenBroadcastReceived('CherryStart', async function*(this:Sprite){
        // どこかの場所に移動してクローンを作りつづける。
        for(;;){
            this.Motion.Move.randomPosition();
            this.Motion.Position.y = Lib.randomInteger(100,180);
            const size = Lib.randomInteger(10,50);
            this.Looks.Size.scale = {w:size,h:size};
            // 本体の色の効果をランダムに変える（クローンに引き継がせる）
            this.Looks.Effect.set(Lib.ImageEffective.COLOR,Lib.randomInteger(0,240))
            this.Control.clone();
            await this.Control.wait(0.05);
            yield;
        }
    });

    // 【花びら】クローンされたときの動作の定義
    cherry.Control.whenCloned(async function*(this:Sprite){
        // 表示する（本体は非表示のまま）
        this.Looks.show();
        // 回転する角度をランダムに決める( -15～15 )（クローンに引き継がせる）
        const degree = Lib.randomInteger(-15,15);
        // ずっと繰り返す
        for(;;) {
            // 落ちる速度の率：Y座標に応じて変える( 落ちていくほど速くする )
            const ySpeed = (180 - this.Motion.Position.y + 20)/360;
            // 落ちる速度は ランダムに変わる。でも落ちるほど速くする
            this.Motion.Position.y -= Lib.randomInteger(5,10) * ySpeed;
            // 横方向にフラフラさせる
            this.Motion.Position.x += Lib.randomInteger(-2,2);
            // 回転させる
            this.Motion.Direction.degree += degree;
            // 背景部をスタンプする
            this.Pen.stampStage();
            // 背景スタンプの上に 花びらをスタンプする
            this.Pen.stamp();
            // Y座標が -170より小さいとき（ 十分に下に落ちたとき ）
            if(this.Motion.Position.y < -170){
                // 繰り返しを抜ける
                break;
            }
            yield;
        }
        // このクローンを削除する
        this.Control.remove();
    });
}
