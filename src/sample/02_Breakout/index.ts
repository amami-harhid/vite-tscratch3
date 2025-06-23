/**
 * 【02】Breakout
 */
import {Pg, Lib} from "@tscratch3/tscratch3likejs/s3lib-importer";

import type { IPgMain as PgMain } from '@Type/pgMain';
import type { IStage as Stage } from '@Type/stage'
import type { ISprite as Sprite } from '@Type/sprite';
import type { IMonitors as Motnitors } from "@Type/monitors";

import { Constant } from './sub/constants';
import { Message } from './sub/message';
import { addSvg } from './sub/text';
import { Block } from './sub/Block';
import { Ball } from './sub/Ball';
import { Bar } from './sub/Bar'
import { Bottom } from './sub/Bottom';
import { PositionRegist } from './sub/PositionRegist';
const positionRegist = PositionRegist.getInstance();

// ---------------------------------
// アセットをインポートする
// ---------------------------------
import ForestImg from './assets/Forest.png';
import ClassicPianoWav from './assets/ClassicalPiano.wav';
import PewWav from './assets/Pew.wav';
import TogemaruWoff from './assets/TogeMaruGothic-700-Bold.woff';
import HarryPotterWoff from './assets/HarryPotter-ov4z.woff';

// ---------------------------------
// タイトルを設定する
// ---------------------------------
Pg.title = "ブロック崩し"

// ---------------------------------
// ステージとスプライトの変数を定義する
// ---------------------------------
let stage: Stage;
let block: Sprite;
let textSprite: Sprite;
let ball: Sprite;
let bar: Sprite;
let bottom: Sprite;
let monitors: Motnitors;


Pg.preload = async function( this: PgMain) {
    this.Image.load( ForestImg, Constant.Forest );
    this.Sound.load( ClassicPianoWav, Constant.ClassicPiano );
    this.Sound.load( PewWav, Constant.Pew );
    this.Font.load( TogemaruWoff, Constant.Togemaru);
    this.Font.load( HarryPotterWoff, Constant.HarryPotter);
}
Pg.prepare = async function prepare() {
    // --------------------
    // ステージを作る
    // --------------------
    stage = new Lib.Stage();
    // ステージに背景を追加
    stage.Image.add( Constant.Forest );
    stage.Sound.add(Constant.ClassicPiano);
    stage.Sound.setOption(Lib.SoundOption.VOLUME, 10);
    
    // --------------------
    // ブロックを作る
    // --------------------
    block = new Lib.Sprite('block');
    // 色を指定したSVGを名前(B1,B2,B3)をつけて追加する
    block.SvgText.add( "B1", Block("#f00000") );
    block.SvgText.add( "B2", Block("#00F000") );
    block.SvgText.add( "B3", Block("#0000F0") );
    block.Looks.hide();

    // --------------------
    // テキストを作る
    // --------------------
    textSprite = new Lib.Sprite('Introduction');
    textSprite.Font.add(Constant.Togemaru);
    addSvg(textSprite, "T0", ["ブロック崩し"], Constant.Togemaru );
    addSvg(textSprite, "T1", ["Touch me to start."], Constant.Togemaru );
    textSprite.Looks.hide();

    // --------------------
    // ボールを作る
    // --------------------
    ball = new Lib.Sprite('ball');
    ball.SvgText.add("Ball", Ball("#ff0000") );
    ball.Font.add(Constant.HarryPotter);
    const X = ball.SvgText.toSvg(['X'], 20, "normal", "red", Constant.HarryPotter);
    ball.SvgText.add("X", X, Constant.HarryPotter);
    ball.Motion.Position.xy = [0, -100];//{x:0,y:-100};
    ball.Looks.hide();

    // --------------------
    // バーを作る
    // --------------------
    bar = new Lib.Sprite('bar');
    bar.SvgText.add("Bar", Bar("blue"));
    bar.Motion.Position.xy = [0, -160];//{x:0,y:-160};
    bar.Looks.hide();

    // --------------------
    // 底を作る
    // --------------------
    bottom = new Lib.Sprite('Bottom');
    bottom.SvgText.add('Bottom', Bottom('#ff0000'));
    bottom.Motion.Position.xy = [0, -183]; //{x:0,y:-183};

    //---------------------
    // モニター
    //---------------------
    monitors = new Lib.Monitors();
    monitors.add( Constant.MonitorPoint, '得点');
    monitors.get( Constant.MonitorPoint).hide();
    monitors.get( Constant.MonitorPoint).value = 0;
}
Pg.setting = async function setting() {

    // 緑の旗が押されたときの動作
    stage.Event.whenFlag(async function*( this: Stage ){
        // モニター得点を初期化
        monitors.get( Constant.MonitorPoint ).value = 0;
        // 背景を Black にする
        this.Looks.Backdrop.name = "Black";
        // ずっと繰り返し、終わるまで音を鳴らす（ClassicPiano)
        let volume = 5;
        // 音の大きさを設定
        stage.Sound.setOption(Lib.SoundOption.VOLUME, volume);
        for(;;){
            // 音の大きさを設定
            stage.Sound.setOption(Lib.SoundOption.VOLUME, volume);
            // 終わるまで音を鳴らす
            await stage.Sound.playUntilDone(Constant.ClassicPiano);
            // 音が100より小さいときに音をだんだん大きくする
            if(volume < 100){
                // 音を大きくする
                volume += 10;
                // 音の大きさを設定
                stage.Sound.setOption(Lib.SoundOption.VOLUME, volume);
            }
            yield;
        }
    });

    // 緑の旗が押されたときの動作
    block.Event.whenFlag(async function( this: Sprite ){
        // 音Pew を追加する ( ユーザ操作後に追加することで ワーニングを回避する )
        this.Sound.add(Constant.Pew);
        // 隠す
        this.Looks.hide();
    }); 

    // Message.Start を受け取ったときの動作
    block.Event.whenBroadcastReceived( Message.Start, async function*( this: Sprite ){
        // 本体を隠す
        this.Looks.hide();
        // 本体のY座標を 150 にする
        this.Motion.Position.y = 150;
        // クローンの X座標の定義（配列）
        const xArr = [-160,-120,-80,-40, 0, 40, 80, 120, 160];
        // 縦に 5行、縦に xArrの要素数分の列分、クローンを作る(繰り返しで待たない--> yield無し)
        // eslint-disable-next-line loopCheck/s3-loop-plugin
        for(const _ of Lib.Iterator(5)){
            //const promise = [];
            // eslint-disable-next-line loopCheck/s3-loop-plugin
            for(const x of xArr){
                // 本体のＸ座標を xArrの要素にする
                this.Motion.Position.x = x;
                // クローンを作る
                this.Control.clone();
                // クローン作成後に次のコスチュームにする
                this.Looks.Costume.next();
            }
            // １行分のクローンを作ったあと、Y座標を下方向にずらす
            this.Motion.Position.y -= 25;
        }
        // モニターを表示
        monitors.get( Constant.MonitorPoint).show();

    });
    
    // 緑の旗が押されたときの動作
    block.Control.whenCloned(async function( this: Sprite ){
        // 表示する
        this.Looks.show();
    });

    // ブロックがクローンされたときの動作
    block.Control.whenCloned(async function*( this: Sprite ){
        // ずっと繰り返す（もしボールに触れたなら繰り返しを抜ける）
        for(;;){
            // もしボールに触れたなら
            if(this.Sensing.isTouchingToSprites([ball])){
                // 得点ＵＰ
                monitors.get( Constant.MonitorPoint).value += 1;
                // Pew の音を鳴らす
                this.Sound.play(Constant.Pew);
                // メッセージ(BallTouch)を送る
                this.Event.broadcast( Message.BallTouch );
                // 隠す
                this.Looks.hide();
                break;
            }
            yield;
        }
        // 0.5秒待ち、クローンを削除する
        await this.Control.wait(0.5);
        this.Control.remove();
    });

    // 緑の旗が押されたときの動作
    textSprite.Event.whenFlag(async function*( this: Sprite ){
        // コスチュームを "T1" にする
        this.Looks.Costume.name = "T1";
        // 表示する
        this.Looks.show();
        // メッセージ（IntroStart）を送る
        this.Event.broadcast( Message.IntroStart );
        // ずっと繰り返す
        for(;;) {
            // 1秒待つ
            await this.Control.wait(1);
            // 次のコスチュームにする
            this.Looks.Costume.next();
            yield;
        }
    });

    // メッセージ（IntroStart)を受け取ったときの動作
    textSprite.Event.whenBroadcastReceived( Message.IntroStart, async function*( this: Sprite ){
        // ずっと繰り返す ( マウスに触れたときに繰り返しを抜ける )
        for(;;){
            // マウスに触れたとき
            if(this.Sensing.isMouseTouching()){
                // メッセージ（ Question )を送る
                this.Event.broadcast( Message.Question );
                // 隠す
                this.Looks.hide();
                break;
            }
            yield;
        }
    });

    // メッセージ（Question)を受け取ったときの動作
    stage.Event.whenBroadcastReceived( Message.Question, async function*( this: Stage ){
        // バーサイズ変数の定義
        let barSize = 0;
        // ずっと繰り返す（ 質問の答えが 1,2,3 のとき、繰り返しを抜ける）
        for(;;) {
            // 質問をして待つ
            const level = await this.Sensing.askAndWait('PLAY MODE( 1:EASY, 2:NORMAL, 3:HARD )');
            // 答えが 1, 2, 3 のとき、バーサイズを設定して、繰り返しを抜ける
            if(level == '1' || level == '2' || level == '3'){
                const _level:number = parseInt(level); // 文字を整数に変換する
                if(_level == 1) barSize = 3;
                if(_level == 2) barSize = 2;
                if(_level == 3) barSize = 1;
                // 繰り返しを抜ける
                break;
            }
            yield;
        }
        // メッセージ( Start )を送る、バーサイズをパラメータとして一緒に送る
        this.Event.broadcast( Message.Start, barSize );
    });

    // メッセージ（IntroStart)を受け取ったときの動作
    textSprite.Event.whenBroadcastReceived( Message.IntroStart, async function*( this: Sprite ){
        // ずっと繰り返す
        for(;;){
            // 0.5秒待つ
            await this.Control.wait(0.5);
            // 幽霊の効果を 50% にする
            this.Looks.Effect.set(Lib.ImageEffective.GHOST, 50);
            // 0.5秒待つ
            await this.Control.wait(0.5);
            // 幽霊の効果を 0% にする
            this.Looks.Effect.set(Lib.ImageEffective.GHOST, 0);
            yield;
        }
    });

    // 緑の旗が押されたときの動作
    ball.Event.whenFlag(async function( this: Sprite ){
        // 隠す
        this.Looks.hide();
    });

    // Message.Start を受け取ったときの動作
    ball.Event.whenBroadcastReceived( Message.Start, async function( this: Sprite ){
        // ボールの位置を 中央( X,Y = 0,0 )にする
        this.Motion.Position.xy = [0,0];//{x:0,y:0};
        // 表示する
        this.Looks.show();
        // スペースキーが押されたかの判定処理
        const key = Lib.Keyboard.SPACE
        const isKeyDown = ()=>{
            return this.Sensing.isKeyDown(key)
        }
        // スペースキーが押されるまで待つ
        await this.Control.waitUntil(isKeyDown);
        // メッセージ( GAME_START )を送る
        this.Event.broadcast( Message.GAME_START );
    });

    // Message.BallTouch を受け取ったときの動作
    ball.Event.whenBroadcastReceived( Message.BallTouch, async function( this: Sprite ){
        // ボールの向きを 反対方向にして(+180)、少しだけ角度をランダムに変える（ -5 ～ 5 )
        this.Motion.Direction.degree += (Lib.getRandomValueInRange(-5, 5)+180);
    });

    // Message.GAME_START を受け取ったときの動作
    ball.Event.whenBroadcastReceived( Message.GAME_START, async function*( this: Sprite ){
        // ボールを 真下の向きにする
        this.Motion.Direction.degree = 180;
        // バースプライトの表示域(幅wと高さh)を取得する
        const barDimension:{w:number,h:number} = bar.Looks.Size.drawingSize;
        // ずっと繰り返す
        for(;;){
            // 10 進ませる
            this.Motion.Move.steps(10);
            if(this.Sensing.isTouchingToSprites([bar])){
                // バースプライトに触れたとき
                // ボールスプライトのY座標を少しだけ 上にあげる
                // (バースプライト３倍の高さを ボールスプライトの y座標に加算する）
                this.Motion.Position.y += barDimension.h*3;
                const speed = positionRegist.get(3) - bar.Motion.Position.x;
                const degree = this.Motion.Direction.degree;
                this.Motion.Direction.degree += (Lib.getRandomValueInRange(-5, -5)*speed -degree);
            }else if(this.Sensing.isTouchingToSprites([bottom])) {
                // ボタンスプライトに触れたとき
                // 繰り返しを抜ける
                break;
            }
            // もし端に触れたら跳ね返る
            this.Motion.Move.ifOnEdgeBounce();
            yield;
        }
        // すべての動作を止める
        this.Control.stopAll();
        // コンソールログ出力
        console.log('GameOver');

    });
    
    // 緑の旗が押されたときの動作
    bar.Event.whenFlag(async function( this: Sprite ){
        // 隠す
        this.Looks.hide();
    });

    // Message.Startを受け取ったときの動作( 送り側が渡している barSizeをパラメータとして受け取る)
    bar.Event.whenBroadcastReceived( Message.Start, async function( this: Sprite, barSize: number ){
        // 位置を設定
        this.Motion.Position.xy = [0, -160];//{x:0,y:-160};
        // 大きさを設定
        this.Looks.Size.scale = [barSize*100, 150];//{w:barSize*100, h:150};
        // X座標で位置情報レジスタをクリアする
        positionRegist.clear(this.Motion.Position.x);
        // 表示する
        this.Looks.show();
    });
    
    // Message.Startを受け取ったときの動作
    bar.Event.whenBroadcastReceived( Message.Start, async function*( this: Sprite ){
        // ずっと繰り返す
        for(;;){
            // マウス座標を取得
            const mousePos = Lib.mousePosition;
            // バーの位置を取得
            const selfPosition = this.Motion.Position.xy;
            // X座標をマウスのX座標にする（ Y は変えない )
            this.Motion.Move.toXY(mousePos.x, selfPosition.y);
            // 位置情報レジスターに現在位置(X座標)を登録する
            positionRegist.set(this.Motion.Position.x);
            yield;
        }
    });
}
