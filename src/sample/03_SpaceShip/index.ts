/**
 * 【03】SpaceShip
 */
import {Pg, Lib} from "@tscratch3/tscratch3likejs/s3lib-importer";
import type { IPgMain as PgMain } from '@Type/pgMain';
import type { IStage as Stage } from '@Type/stage'
import type { ISprite as Sprite } from '@Type/sprite';

import { Constant } from './sub/constants';
import { Ball } from './sub/Ball';
import { BlackBackdrop } from './sub/blackBacdrop';
import { Bottom } from './sub/Bottom';

Pg.title = "Space ship game"

//---------------------------------
// ステージ、スプライト変数の定義
//---------------------------------
let stage: Stage;
let spaceShip: Sprite;
let textSprite: Sprite, bullet: Sprite;
let spaceDebris: Sprite;
let bottom: Sprite;

// ---------------------------------
// アセットをインポートする
// ---------------------------------
import Debris01Svg from './assets/debris01.svg';
import Metro02Svg from './assets/debris02.svg';
import Metro03Svg from './assets/debris03.svg';
import ExplosionSvg from './assets/Explosion.svg';
import ExplosionWav from './assets/explosion.wav';
import AsteroidSvg from './assets/universe_asteroid.svg';
import SpaceShip01Svg from './assets/spaceShip1.svg';
import SpaceShip02Svg from './assets/spaceShip2.svg';
import TogemaruWoff from './assets/TogeMaruGothic-700-Bold.woff';
import HarryPotterWoff from './assets/HarryPotter-ov4z.woff';
import ShotWav from './assets/shot.wav';
import SpaceShipWhooshMp3 from './assets/spaceship-whoosh.mp3';
import type { TAddOption } from "@tscratch3/tscratch3likejs/Type/svgText/ISvgText";

// --------------------------------
// 事前ロード処理
// --------------------------------
Pg.preload = async function preload( this: PgMain) {

    this.Image.load( Debris01Svg, Constant.Debris01);
    this.Image.load( Metro02Svg, Constant.Debris02);
    this.Image.load( Metro03Svg, Constant.Debris03);
    this.Image.load( ExplosionSvg, Constant.Explosion);
    this.Image.load( AsteroidSvg, Constant.Asteroid);
    this.Image.load( SpaceShip01Svg, Constant.Spaceship01 );
    this.Image.load( SpaceShip02Svg, Constant.Spaceship02 );

    this.Font.load( TogemaruWoff, Constant.Togemaru);
    this.Font.load( HarryPotterWoff, Constant.HarryPotter);

    this.Sound.load( ExplosionWav, Constant.Explosion);
    this.Sound.load( ShotWav, Constant.Shot);
    this.Sound.load( SpaceShipWhooshMp3, Constant.SpaceShipWoosh);
}

// --------------------------------
// 事前準備処理
// --------------------------------
Pg.prepare = async function prepare() {
    //----------------
    // ステージを作る
    //----------------
    stage = new Lib.Stage();
    // 背景を追加
    stage.Image.add(Constant.Asteroid);
    stage.SvgText.add( Constant.BlackBground, BlackBackdrop );
    // 背景、幽霊の効果を 20%にする
    stage.Looks.Effect.set(Lib.ImageEffective.GHOST, 20);
    
    //----------------
    // スプライト（宇宙船）を作る
    //----------------
    spaceShip = new Lib.Sprite('spaceShip');
    // コスチューム追加
    spaceShip.Image.add(Constant.Spaceship01);
    spaceShip.Image.add(Constant.Spaceship02);
    // 大きさを 設定する
    spaceShip.Looks.Size.scale = [20, 20]; // {w:20, h:20}
    // 位置を 設定する
    spaceShip.Motion.Position.xy = [0, -150]; //{x:0, y:-150};
    // 隠す
    spaceShip.Looks.hide();

    //----------------
    // スプライト（テキスト）を作る
    //----------------
    textSprite = new Lib.Sprite('Introduction');
    // 大きさを 設定する
    textSprite.Looks.Size.scale = [200, 200]; //{w:200,h:200};
    // フォントを設定してテキストSVGをコスチュームに追加する
    textSprite.Font.add(Constant.HarryPotter);
    const fontSize = 35;
    const fontStyle = 'italic';
    const color = '#ffffff';
    const fontFamily = Constant.HarryPotter;
    const option: TAddOption = {
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontStyle: fontStyle,
        color: color,
    }
    textSprite.SvgText.addTexts("Text1", ["Space ship game"], option );

    //----------------
    // スプライト（底）を作る
    //----------------
    bottom = new Lib.Sprite('bottom');
    // 黒のSVGをコスチュームに追加
    bottom.SvgText.add( Constant.Black, Bottom('black'));
    // 位置を 設定する
    bottom.Motion.Position.xy = [0, -180]; //{x:0, y:-180};
    // 最背面に移動
    bottom.Looks.Layer.gotoBack();
    // 幽霊の効果
    bottom.Looks.Effect.set(Lib.ImageEffective.GHOST, 100);

    //----------------
    // スプライト（弾）を作る
    //----------------
    bullet = new Lib.Sprite( Constant.Bullet );
    // SVGをコスチュームに追加
    bullet.SvgText.add( Constant.Bullet, Ball('white'));
    // 大きさを設定
    bullet.Looks.Size.scale = [10, 10];//{w:10, h:10};
    // 隠す
    bullet.Looks.hide();

    //----------------
    // スプライト（宇宙ゴミ）を作る
    //----------------
    spaceDebris = new Lib.Sprite('Debri');
    // コスチュームを追加
    spaceDebris.Image.add(Constant.Debris01);
    spaceDebris.Image.add(Constant.Debris02);
    spaceDebris.Image.add(Constant.Debris03);
    spaceDebris.Image.add(Constant.Explosion);
    // 大きさを設定    
    spaceDebris.Looks.Size.scale = [50, 50]; //{w:50, h:50}
    // 隠す
    spaceDebris.Looks.hide();

}

// --------------------------------
// イベント定義処理
// --------------------------------
Pg.setting = async function setting() {
    // 緑の旗が押されたときの動作
    stage.Event.whenFlag(async function*( this: Stage ){
        // 音を追加(宇宙の音)
        this.Sound.add(Constant.SpaceShipWoosh);
        // 音量を設定
        this.Sound.setOption(Lib.SoundOption.VOLUME, 120);
        // ピッチを設定
        this.Sound.setOption(Lib.SoundOption.PITCH, -150);
        // 背景を設定
        this.Looks.Backdrop.name = Constant.BlackBground;
        // ずっと繰り返す
        for(;;){
            // 終わるまで音を鳴らす
            await this.Sound.playUntilDone(Constant.SpaceShipWoosh);
            yield;
        }
    });

    // 緑の旗が押されたときの動作
    textSprite.Event.whenFlag(async function*( this: Sprite ){
        // 幽霊の効果
        this.Looks.Effect.set(Lib.ImageEffective.GHOST, 90);
    })

    // 緑の旗が押されたときの動作
    spaceShip.Event.whenFlag(async function*( this: Sprite ){
        // 進む速さ
        const MoveStep = 10;
        // ずっと繰り返す
        for(;;){
            // 右矢印キーが押されたとき
            if(this.Sensing.isKeyDown(Lib.Keyboard.RIGHT)) {
                // X座標を 増やす
                this.Motion.Position.x += MoveStep;
            }
            // 左矢印キーが押されたとき
            if(this.Sensing.isKeyDown(Lib.Keyboard.LEFT)) {
                // X座標を 減らす
                this.Motion.Position.x -= MoveStep;                
            }
            yield;
        }

    })

    // 緑の旗が押されたときの動作
    spaceShip.Event.whenFlag(async function*( this: Sprite ){
        // 音を登録する（発射音）
        this.Sound.add(Constant.Shot);
        // ずっと繰り返す
        for(;;){
            // スペースキーが押されたとき
            if(this.Sensing.isKeyDown(Lib.Keyboard.SPACE)) {
                // 弾のクローンを作る
                bullet.Control.clone();
                // 音を鳴らす（発射音）
                this.Sound.play(Constant.Shot);
            }
            yield;
        }

    })

    // 緑の旗が押されたときの動作
    spaceShip.Event.whenFlag(async function*( this: Sprite ){
        // コスチュームを指定
        this.Looks.Costume.name = Constant.Spaceship01;
        // 表示する
        this.Looks.show();
        // ずっと繰り返す
        for(;;){
            // 1秒待つ
            await this.Control.wait(0.1);
            // 次のコスチュームにする
            this.Looks.Costume.next();
            yield;
        }
    });

    // 緑の旗が押されたときの動作
    bottom.Event.whenFlag(async function*( this: Sprite ){
        // 幽霊の効果= 100%  (完全透明化)
        this.Looks.Effect.set(Lib.ImageEffective.GHOST, 100);
    });

    // 弾がクローンされたときの動作
    bullet.Control.whenCloned(async function*( this: Sprite ){
        // コスチュームを指定
        this.Looks.Costume.name = Constant.Bullet;
        // 宇宙船の位置へ行く
        this.Motion.Move.toSprite(spaceShip);
        // 向きを 真上にする
        this.Motion.Direction.degree = 0;
        // 進む速さ
        const Steps = 10;
        // 表示する
        this.Looks.show();
        // ずっと繰り返す
        for(;;){
            // 端に触れたとき
            if(this.Sensing.isTouchingEdge()){
                // 繰り返しを抜ける
                break;
            }
            // 進ませる
            this.Motion.Move.steps(Steps);
            yield;
        }
        // クローンを削除する
        this.Control.remove();
    });

    // 緑の旗が押されたときの動作
    spaceDebris.Event.whenFlag(async function*( this: Sprite ){
        // 音（爆発音）を追加
        this.Sound.add(Constant.Explosion);
        // 本体を隠す
        this.Looks.hide();
        // コスチュームを指定する
        this.Looks.Costume.name = Constant.Debris01;
        // 位置を設定する
        this.Motion.Position.xy = [0, 180];// {x: 0, y: 180 }
        // コスチューム名の配列
        const Costumes = [Constant.Debris01,Constant.Debris02,Constant.Debris03];
        // ずっと繰り返す
        for(;;) {
            // X座標を -240 から 240 の間のランダムな値にする
            this.Motion.Position.x = Lib.randomInteger(-240, 240);
            // 1秒待つ
            await this.Control.wait(1);
            // クローンを作る
            this.Control.clone();
            // コスチューム名配列のなかからランダムに選び、コスチュームとする
            this.Looks.Costume.name = Costumes[Lib.randomInteger(0, Costumes.length-1)];
            yield;
        }
    });

    // デブリがクローンされたときの動作
    spaceDebris.Control.whenCloned(async function*( this: Sprite ){
        // 50 から 100 のランダムな大きさにする
        const scale = Lib.randomInteger(50,100);
        this.Looks.Size.scale = [scale, scale]; //{w:scale,h:scale};
        // -1 から 5 の間のランダムな角度を決める
        const degree = Lib.getRandomValueInRange(-1, 5);
        // 表示する
        this.Looks.show();
        // ずっと繰り返す
        for(;;) {
            // 底に触れたとき
            if(this.Sensing.isTouchingToSprites([bottom])) {
                // 隠して 繰り返しを抜ける
                this.Looks.hide();
                break;
            }
            // 弾に触れたとき
            if(this.Sensing.isTouchingToSprites([bullet])){
                // 音を鳴らす（爆発音）
                this.Sound.play(Constant.Explosion);
                // コスチュームを「爆発」にする
                this.Looks.Costume.name = Constant.Explosion;
                // 大きさを 120 にする
                this.Looks.Size.scale = [120, 120];//{w:120,h:120};
                // 幽霊の効果を80%にする（透明に近くする）
                this.Looks.Effect.set(Lib.ImageEffective.GHOST, 80);
                // 繰り返しを抜ける
                break;
            }
            // Y座標を 下方向へランダム値分変える（ふわふわと落ちていく効果を出す）
            this.Motion.Position.y += Lib.randomInteger(-5, 1)/2;
            // 角度を変える（回転）
            this.Motion.Direction.degree += degree;
            yield;
        }
        // 0.5 秒待つ
        await this.Control.wait(0.5);
        // このクローンを削除する
        this.Control.remove();
    })
}
