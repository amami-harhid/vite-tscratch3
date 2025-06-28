/**
 * 【08】QIZ
 */
import {Pg, Lib} from "@tscratch3/tscratch3likejs/s3lib-importer";
import type { IPgMain as PgMain } from '@Type/pgMain';
import type { IStage as Stage } from '@Type/stage'
import type { ISprite as Sprite } from '@Type/sprite';

//---------------------------------
// Sub Inport
//---------------------------------
import { backdrop } from './sub/backdrop';
import { Constant } from "./sub/constants";
import { Qiz } from "./sub/qiz";
import { Messages } from './sub/messages';

const Sprite = "Sprite";
let stage:Stage;
let cat: Sprite;
let text01:Sprite, text02:Sprite, text03:Sprite;

const Texts = Qiz.textsGuidance;
const Texts2 = Qiz.textsQizJp;
const Texts3 = Qiz.textsAnswserJp;

import Cat01 from './assets/blackCat01.svg';
import Cat02 from './assets/blackCat02.svg';
import Cat03 from './assets/blackCat03.svg';
import Den from './assets/den.mp3';
import OK from './assets/OK.mp3';
import NG from './assets/NG.mp3';

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
Pg.prepare = async function prepare() {

    stage = new Lib.Stage();
    stage.SvgText.add('BackDrop', backdrop);

    cat = new Lib.Sprite('quizeCat');
    cat.Image.add( Constant.QUESTION );
    cat.Image.add( Constant.ZANNEN );
    cat.Image.add( Constant.SEIKAI );
    cat.Motion.Position.xy = [0, -120];
    cat.Looks.Size.scale = [80, 80];
    cat.Sound.add(Constant.DEN);
    cat.Sound.add(Constant.OK);
    cat.Sound.add(Constant.NG);

    text01 = new Lib.Sprite(Sprite);
    text01.Font.add(Constant.GoogleFontsJPGuidance);
    text01.Motion.Position.xy = [0, 80];
    text01.Looks.Size.scale = [100, 400];
    //text01.Looks.hide();
    // eslint-disable-next-line loopCheck/s3-loop-plugin
    for(const counter of Lib.Iterator(Texts.length)){
        const texts = Texts[counter];
        const color = 'white';
        const fontSize = 25;
        const fontStyle = 'bold';
        const option = {
            fontFamily: Constant.GoogleFontsJPGuidance,
            color: color,
            fontSize: fontSize,
            fontStyle: fontStyle,
        }
        text01.SvgText.addTexts(`text01-${counter}`, texts,  option);
    }

    text02 = new Lib.Sprite(Sprite);
    text02.Motion.Position.xy = [0, 50];
    text02.Font.add( Constant.GoogleFontsJP );
    text02.Looks.Size.scale = [90,100];
    text02.Looks.hide();

    // eslint-disable-next-line loopCheck/s3-loop-plugin
    for(const counter of Lib.Iterator(Texts2.length)){
        const texts = Texts2[counter];
        const correctAnswer = texts[0];
        texts.shift(); // 先頭要素を削除
        console.log('counter',counter,texts);
        const color = 'white';
        const fontSize = 20;
        const fontStyle = 'normal';
        const option = {
            fontFamily:Constant.GoogleFontsJP,
            color: color,
            fontSize: fontSize,
            fontStyle: fontStyle,
        }
        text02.SvgText.addTexts(`text02-${counter}-${correctAnswer}`, texts, option);
    }

    text03 = new Lib.Sprite(Sprite);
    text03.Font.add( Constant.GoogleFontsEN );    
    text03.Motion.Position.xy = [0, 80];
    text03.Looks.Size.scale = [80, 80];
    text03.Looks.hide();

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
        text03.SvgText.addTexts(`text03-${counter}`, texts, option);
    }


}
Pg.setting = async function setting() {

    let point = 0;

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
                this.Event.broadcast(Messages.QUIZE, quizeNo+1 )
            }
        
        }else{
            this.Event.broadcast(Messages.QUIZE, quizeNo);
        }

    });

    cat.Event.whenFlag( async function(this:Sprite){
        this.Looks.hide();
        point = 0;
        this.Event.broadcast(Messages.INIT);
    });
    cat.Event.whenBroadcastReceived(Messages.INIT, async function(this:Sprite){
        this.Looks.hide();
    });
    cat.Event.whenBroadcastReceived(Messages.QUIZE, async function(this:Sprite){
        this.Looks.show();
        this.Sound.play(Constant.DEN);
        this.Looks.Costume.name = Constant.QUESTION;        
    });
    cat.Event.whenBroadcastReceived(Messages.SEIKAI, async function(this:Sprite){
        this.Looks.show();
        this.Sound.play(Constant.OK);
        this.Looks.Costume.name = Constant.SEIKAI;        
    });
    cat.Event.whenBroadcastReceived(Messages.ZANNEN, async function(this:Sprite){
        this.Looks.show();
        this.Sound.play(Constant.NG);
        this.Looks.Costume.name = Constant.ZANNEN;        
    });

    text01.Event.whenFlag( async function(this:Sprite){
        this.Looks.Costume.name = 'text01-0';
        await this.Control.wait(0.5);
        this.Looks.hide();
        await this.Control.wait(0.5);
        this.Motion.Position.xy = [0, 100];
        this.Looks.Size.scale = [100,100];
        this.Looks.Costume.name = 'text01-1';
        this.Looks.show();
        // スペースキーが押されるまで待つ
        await this.Control.waitUntil(()=>this.Sensing.isKeyDown(Lib.Keyboard.SPACE));
        this.Event.broadcast(Messages.QUIZE, 0 );
    });
    text01.Event.whenBroadcastReceived( Messages.INIT, async function(this:Sprite){
        this.Looks.hide();
    });
    text01.Event.whenBroadcastReceived(Messages.QUIZE, async function(this:Sprite){
        this.Looks.hide();        
    });
    text01.Event.whenBroadcastReceived(Messages.COMPLETE, async function(this:Sprite){
        this.Looks.Costume.name = 'text01-2';
        this.Looks.show();
        const texts = [`正解数は${point}でした`];
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
        this.SvgText.addTexts(`text01-tokuten`, texts,  option);
        this.Looks.Costume.name = 'text01-tokuten';
    });

    text02.Event.whenBroadcastReceived(Messages.QUIZE, async function(this:Sprite, quizeNo: number){
        const names = this.Looks.Costume.names;
        const name = names[quizeNo];
        this.Looks.Costume.name = name;
        const correctNo = name.replace(/text02-\d+-/,'');
        console.log('no',quizeNo,'name',name,'correctNo',correctNo);
        this.Motion.Position.xy = [0, 80];
        this.Looks.show();
        await this.Control.wait(0.5);
        await this.Event.broadcastAndWait( Messages.QUESTION, quizeNo, correctNo, names);
    });
    text02.Event.whenBroadcastReceived( Messages.INIT, async function(this:Sprite){
        this.Looks.hide();
    });
    text02.Event.whenBroadcastReceived(Messages.ANSWER, async function(this:Sprite){
        this.Looks.hide();
    });
    text02.Event.whenBroadcastReceived(Messages.COMPLETE, async function(this:Sprite){
        this.Looks.hide();
    });

    text03.Event.whenBroadcastReceived(  Messages.INIT, async function(this:Sprite){
        this.Looks.hide();
    });
    text03.Event.whenBroadcastReceived(Messages.QUIZE, async function(this:Sprite){
        this.Looks.hide();
    });
    text03.Event.whenBroadcastReceived(Messages.COMPLETE, async function(this:Sprite){
        this.Looks.hide();
    });

    text03.Event.whenBroadcastReceived(Messages.ANSWER, async function(this:Sprite, quizeNo: number){
        this.Motion.Position.xy = [0, 80];
        this.Looks.Size.scale = [80, 80];
        this.Looks.Costume.name = `text03-${quizeNo}`;
        this.Looks.show();
    });

}