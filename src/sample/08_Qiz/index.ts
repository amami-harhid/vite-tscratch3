/**
 * 【08】QIZ
 */
import {Pg, Lib} from "@tscratch3/tscratch3likejs/s3lib-importer";
import type { IPgMain as PgMain } from '@Type/pgMain';
import type { IStage as Stage } from '@Type/stage'
import type { ISprite as Sprite } from '@Type/sprite';

//---------------------------------
// Sub インポートする
//---------------------------------
import { backdrop } from './sub/backdrop';
import { Constant } from "./sub/constants";
import { Messages } from './sub/messages';
import { Qiz } from "./sub/qiz";

//---------------------------------
// Qiz 問題と答え
//---------------------------------
const Texts = Qiz.textsGuidance;
const Texts2 = Qiz.textsQizJp;
const Texts3 = Qiz.textsAnswserJp;

//---------------------------------
// ステージ、スプライト変数の定義
//---------------------------------
const Sprite = "Sprite";
let stage:Stage;
let cat: Sprite;
let guidanceText:Sprite, questionText:Sprite, answerText:Sprite;
let reference: Sprite;

// ---------------------------------
// アセットをインポートする
// ---------------------------------
import Cat01 from './assets/blackCat01.svg';
import Cat02 from './assets/blackCat02.svg';
import Cat03 from './assets/blackCat03.svg';
import Den from './assets/den.mp3';
import OK from './assets/OK.mp3';
import NG from './assets/NG.mp3';

// --------------------------------
// 事前ロード処理
// --------------------------------
Pg.preload = async function preload(this: PgMain) {
    this.Image.load( Cat01, Constant.QUESTION);
    this.Image.load( Cat02, Constant.ZANNEN);
    this.Image.load( Cat03, Constant.SEIKAI);
    this.Font.load(Qiz.fontFaceUrlJPGuidance, Constant.GoogleFontsJPGuidance)
    this.Font.load(Qiz.fontFaceUrlJP, Constant.GoogleFontsJP)
    this.Font.load(Qiz.fontFaceUrlEN, Constant.GoogleFontsEN)
    this.Sound.load(Den, Constant.DEN);
    this.Sound.load(OK, Constant.OK);
    this.Sound.load(NG, Constant.NG);
}

// --------------------------------
// 事前準備処理
// --------------------------------
Pg.prepare = async function prepare() {

    //-----------------------------
    // ステージをつくる
    //-----------------------------
    stage = new Lib.Stage();
    stage.SvgText.add('BackDrop', backdrop);

    //-----------------------------
    reference = new Lib.Sprite('reference');
    reference.Font.add( Constant.GoogleFontsJP );
    reference.Motion.Position.xy = [180, -140];
    reference.Looks.Size.scale = [50, 50];
    {
        const color = 'white';
        const fontSize = 15;
        const fontStyle = 'bold';
        const option = {
            fontFamily: Constant.GoogleFontsJPGuidance,
            color: color,
            fontSize: fontSize,
            fontStyle: fontStyle,
        }
        reference.SvgText.addTexts('ref', ['小学生向けクイズ<br/>https://hisasuke.com/'], option);
    }

    //-----------------------------
    // スプライト（ネコ）をつくる
    //-----------------------------
    cat = new Lib.Sprite('quizeCat');
    cat.Image.add( Constant.QUESTION );
    cat.Image.add( Constant.ZANNEN );
    cat.Image.add( Constant.SEIKAI );
    cat.Motion.Position.xy = [0, -100];
    cat.Looks.Size.scale = [60, 50];
    cat.Sound.add(Constant.DEN);
    cat.Sound.add(Constant.OK);
    cat.Sound.add(Constant.NG);

    //-----------------------------
    // スプライト（ガイダンス）をつくる
    //-----------------------------
    guidanceText = new Lib.Sprite(Sprite);
    guidanceText.Font.add(Constant.GoogleFontsJPGuidance);
    guidanceText.Motion.Position.xy = [0, 80];
    guidanceText.Looks.Size.scale = [100, 400];
    //text01.Looks.hide();
    const color = 'white';
    const fontSize = 25;
    const fontStyle = 'bold';
    const option = {
        fontFamily: Constant.GoogleFontsJPGuidance,
        color: color,
        fontSize: fontSize,
        fontStyle: fontStyle,
    }
    // eslint-disable-next-line loopCheck/s3-loop-plugin
    for(const counter of Lib.Iterator(Texts.length)){
        const texts = Texts[counter];
        guidanceText.SvgText.addTexts(`text01-${counter}`, texts,  option);
    }

    questionText = new Lib.Sprite(Sprite);
    questionText.Motion.Position.xy = [0, 50];
    questionText.Font.add( Constant.GoogleFontsJP );
    questionText.Looks.Size.scale = [90,100];
    questionText.Looks.hide();

    // eslint-disable-next-line loopCheck/s3-loop-plugin
    for(const counter of Lib.Iterator(Texts2.length)){
        const texts = Texts2[counter];
        const correctAnswer = texts[0];
        texts.shift(); // 先頭要素を削除
        const color = 'white';
        const fontSize = 20;
        const fontStyle = 'normal';
        const option = {
            fontFamily:Constant.GoogleFontsJP,
            color: color,
            fontSize: fontSize,
            fontStyle: fontStyle,
        }
        questionText.SvgText.addTexts(`text02-${counter}-${correctAnswer}`, texts, option);
    }

    answerText = new Lib.Sprite(Sprite);
    answerText.Font.add( Constant.GoogleFontsEN );    
    answerText.Motion.Position.xy = [0, 80];
    answerText.Looks.Size.scale = [80, 80];
    answerText.Looks.hide();

    // eslint-disable-next-line loopCheck/s3-loop-plugin
    for(const counter of Lib.Iterator(Texts3.length)){
        const texts = Texts3[counter];
        const color = 'white';
        const fontSize = 25;
        const fontStyle = 'normal';
        const option = {
            fontFamily: Constant.GoogleFontsEN,
            color: color,
            fontSize: fontSize,
            fontStyle: fontStyle,
        }
        answerText.SvgText.addTexts(`text03-${counter}`, texts, option);
    }
}

// --------------------------------
// イベント定義処理
// --------------------------------
Pg.setting = async function setting() {

    let point = 0;
    // ----------------------------
    // Message( QUESTION )を受け取ったときの動作
    // ----------------------------
    stage.Event.whenBroadcastReceived( Messages.QUESTION, async function(this:Stage, quizeNo: number, correctAnswer: string, names:string[]){
        const answer = await this.Sensing.askAndWait('番号を入れてね');
        if(answer == '1' || answer == '2' || answer == '3') {
            this.Event.broadcast(Messages.ANSWER, quizeNo );
            if(answer == correctAnswer){
                point+=1;
                this.Event.broadcast(Messages.SEIKAI);
            }else{
                this.Event.broadcast(Messages.ZANNEN);
            }
            // スペースキーが押されるまで待つ
            await this.Control.waitUntil(()=>this.Sensing.isKeyDown(Lib.Keyboard.SPACE));

            if( quizeNo+1 > names.length-1) {
                console.log('OWARI');
                this.Event.broadcast(Messages.COMPLETE);
            }else{
                this.Event.broadcast(Messages.QIZ, quizeNo+1 )
            }
        
        }else{
            this.Event.broadcast(Messages.QIZ, quizeNo);
        }

    });

    // ----------------------------
    // 旗を押されたときの動作
    // ----------------------------
    cat.Event.whenFlag( async function(this:Sprite){
        this.Looks.hide();
        point = 0;
        this.Event.broadcast(Messages.INIT);
    });
    // ----------------------------
    // Message( INIT )を受け取ったときの動作
    // ----------------------------
    cat.Event.whenBroadcastReceived(Messages.INIT, async function(this:Sprite){
        this.Looks.show();
    });
    // ----------------------------
    // Message( QIZ )を受け取ったときの動作
    // ----------------------------
    cat.Event.whenBroadcastReceived(Messages.QIZ, async function(this:Sprite){
        this.Looks.show();
        this.Sound.play(Constant.DEN); // 問題を出すときの「デデンッ」の音
        this.Looks.Costume.name = Constant.QUESTION;        
    });
    // ----------------------------
    // Message( SEIKAI )を受け取ったときの動作
    // ----------------------------
    cat.Event.whenBroadcastReceived(Messages.SEIKAI, async function(this:Sprite){
        this.Looks.show();
        this.Sound.play(Constant.OK); // 正解の音
        this.Looks.Costume.name = Constant.SEIKAI;        
    });
    // ----------------------------
    // Message( ZANNEN )を受け取ったときの動作
    // ----------------------------
    cat.Event.whenBroadcastReceived(Messages.ZANNEN, async function(this:Sprite){
        this.Looks.show();
        this.Sound.play(Constant.NG); // 不正解の音
        this.Looks.Costume.name = Constant.ZANNEN;        
    });
    // ----------------------------
    // Message( COMPLETE )を受け取ったときの動作
    // ----------------------------
    cat.Event.whenBroadcastReceived(Messages.COMPLETE, async function(this:Sprite){
        if(point > 5) {
            this.Looks.Costume.name = Constant.SEIKAI;
        }else{
            this.Looks.Costume.name = Constant.ZANNEN;
        }
    });

    // ----------------------------
    // 旗を押されたときの動作
    // ----------------------------
    guidanceText.Event.whenFlag( async function(this:Sprite){
        this.Looks.hide();
        this.Motion.Position.xy = [0, 80];
        this.Looks.Size.scale = [100, 400];
        await this.Control.wait(0.5);
        this.Looks.Costume.name = 'text01-0';
        this.Looks.show();
        await this.Control.wait(1);
        this.Motion.Position.xy = [0, 100];
        this.Looks.Size.scale = [100,100];
        this.Looks.Costume.name = 'text01-1';
        this.Looks.show();
        // スペースキーが押されるまで待つ
        await this.Control.waitUntil(()=>this.Sensing.isKeyDown(Lib.Keyboard.SPACE));
        this.Event.broadcast(Messages.QIZ, 0 );
    });
    // ----------------------------
    // Message( INIT )を受け取ったときの動作
    // ----------------------------
    guidanceText.Event.whenBroadcastReceived( Messages.INIT, async function(this:Sprite){
        this.Looks.hide();
    });
    // ----------------------------
    // Message( QIZ )を受け取ったときの動作
    // ----------------------------
    guidanceText.Event.whenBroadcastReceived(Messages.QIZ, async function(this:Sprite){
        this.Looks.hide();        
    });
    // ----------------------------
    // Message( COMPLETE )を受け取ったときの動作
    // ----------------------------
    guidanceText.Event.whenBroadcastReceived(Messages.COMPLETE, async function(this:Sprite){
        this.Looks.Costume.name = 'text01-2';
        this.Looks.show();
        const color = 'white';
        const fontSize = 25;
        const fontStyle = 'bold';
        const option = {
            fontFamily: Constant.GoogleFontsJPGuidance,
            color: color,
            fontSize: fontSize,
            fontStyle: fontStyle,
        }
        await this.Control.wait(1);
        // コスチュームを変更
        this.SvgText.replaceTexts(`text01-tokuten`, [`正解数は${point}でした`],  option);
        this.Looks.Costume.name = 'text01-tokuten'; // 表示コスチューム名を変える
        await this.Control.wait(1);

        // コスチュームを再度変更
        const totalQuestions = questionText.Looks.Costume.names.length;
        if( point ==  totalQuestions ) {
            this.SvgText.replaceTexts(`text01-tokuten`, [`満点、素晴らしい！`],  option);

        } else if( point/totalQuestions > 0.7 ) {
            this.SvgText.replaceTexts(`text01-tokuten`, [`${totalQuestions}問中、正解(${point})、よく出来ました`],  option);

        } else if( point/totalQuestions > 0.3){
            this.SvgText.replaceTexts(`text01-tokuten`, [`${totalQuestions}問中、正解(${point})、まあまあだね`],  option);

        } else {
            this.SvgText.replaceTexts(`text01-tokuten`, [`${totalQuestions}問中、正解(${point})、もっと頑張ろう`],  option);

        }

    });

    // ----------------------------
    // Message( QIZ )を受け取ったときの動作
    // ----------------------------
    questionText.Event.whenBroadcastReceived(Messages.QIZ, async function(this:Sprite, quizeNo: number){
        const names = this.Looks.Costume.names;
        const name = names[quizeNo];
        this.Looks.Costume.name = name;
        const correctNo = name.replace(/text02-\d+-/,'');
        this.Motion.Position.xy = [0, 80];
        this.Looks.show();
        await this.Control.wait(0.5);
        await this.Event.broadcastAndWait( Messages.QUESTION, quizeNo, correctNo, names);
    });
    // ----------------------------
    // Message( INIT )を受け取ったときの動作
    // ----------------------------
    questionText.Event.whenBroadcastReceived( Messages.INIT, async function(this:Sprite){
        this.Looks.hide();
    });
    // ----------------------------
    // Message( ANSWER )を受け取ったときの動作
    // ----------------------------
    questionText.Event.whenBroadcastReceived(Messages.ANSWER, async function(this:Sprite){
        this.Looks.hide();
    });
    // ----------------------------
    // Message( COMPLETE )を受け取ったときの動作
    // ----------------------------
    questionText.Event.whenBroadcastReceived(Messages.COMPLETE, async function(this:Sprite){
        this.Looks.hide();
    });

    // ----------------------------
    // Message( INIT )を受け取ったときの動作
    // ----------------------------
    answerText.Event.whenBroadcastReceived(  Messages.INIT, async function(this:Sprite){
        this.Looks.hide();
    });
    // ----------------------------
    // Message( QIZ )を受け取ったときの動作
    // ----------------------------
    answerText.Event.whenBroadcastReceived(Messages.QIZ, async function(this:Sprite){
        this.Looks.hide();
    });
    // ----------------------------
    // Message( COMPLETE )を受け取ったときの動作
    // ----------------------------
    answerText.Event.whenBroadcastReceived(Messages.COMPLETE, async function(this:Sprite){
        this.Looks.hide();
    });

    // ----------------------------
    // Message( ANSWER )を受け取ったときの動作
    // ----------------------------
    answerText.Event.whenBroadcastReceived(Messages.ANSWER, async function(this:Sprite, quizeNo: number){
        this.Motion.Position.xy = [0, 80];
        this.Looks.Size.scale = [80, 80];
        this.Looks.Costume.name = `text03-${quizeNo}`;
        this.Looks.show();
    });

}