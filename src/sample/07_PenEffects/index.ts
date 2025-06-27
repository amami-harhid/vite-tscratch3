/**
 * 【07】PenEffects
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
import { GoogleFonts } from "./sub/googleFonts";

const Sprite = "Sprite";
const Gion = 'Gion';
let stage:Stage;
let text01:Sprite, text02:Sprite, text03:Sprite;

const Texts = GoogleFonts.textsGuidance;
const Texts2 = GoogleFonts.textsHeikeMonogatariJp;
const Texts3 = GoogleFonts.textsHeikeMonogatariEn;

Pg.preload = async function preload(this: PgMain) {
    this.Font.load(GoogleFonts.fontFaceUrlJPGuidance, Constant.GoogleFontsJPGuidance)
    this.Font.load(GoogleFonts.fontFaceUrlJP, Constant.GoogleFontsJP)
    this.Font.load(GoogleFonts.fontFaceUrlEN, Constant.GoogleFontsEN)
    //this.Image.load(AssetHost+'/assets/Jurassic.svg', Jurassic );
    this.Sound.load('./assets/gionsyojya.wav', Gion);
    //this.Image.load('/assets/Apple.svg', Apple);
}
Pg.prepare = async function prepare() {

    stage = new Lib.Stage();
    stage.Sound.add( Gion );
    stage.SvgText.add('BackDrop', backdrop);    
    text01 = new Lib.Sprite(Sprite);
    text01.Font.add(Constant.GoogleFontsJPGuidance);
    text01.Looks.hide();
    // eslint-disable-next-line loopCheck/s3-loop-plugin
    for(const counter of Lib.Iterator(Texts.length)){
        const texts = Texts[counter];
        const color = 'white';
        const fontSize = 25;
        const fontStyle = 'normal';
        const option = {
            fontFamily: Constant.GoogleFontsJPGuidance,
            color: color,
            fontSize: fontSize,
            fontStyle: fontStyle,
        }
        text01.SvgText.addTexts(`cat-${counter}`, texts,  option);
    }

    text02 = new Lib.Sprite(Sprite);
    text02.Motion.Position.xy = {};
    text02.Font.add( Constant.GoogleFontsJP );
    text02.Looks.hide();

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
        text02.SvgText.addTexts(`cat2-${counter}`, texts, option);
    }

    text03 = new Lib.Sprite(Sprite);
    text03.Font.add( Constant.GoogleFontsEN );    
    text03.Looks.hide();
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
        text03.SvgText.addTexts(`${counter}`, texts, option);
    }


}
Pg.setting = async function setting() {
    text01.Event.whenFlag(async function*(this:Sprite){
        this.Looks.show();
        const names = this.Looks.Costume.names;
        for(const name of names){
            this.Looks.Costume.name = name;
            await this.Control.wait(2);
            yield;
        }
        this.Looks.hide();
        await this.Control.wait(1);
        this.Event.broadcast('Start');
    });
    stage.Event.whenBroadcastReceived('Start', async function*(this:Sprite){
        this.Looks.Effect.set(Lib.ImageEffective.GHOST, 95);
        this.Pen.clear();
        for(;;){
            await this.Sound.playUntilDone(Gion);
            yield;
        }
    })
    stage.Event.whenBroadcastReceived('Clear', async function*(this:Sprite){
        this.Pen.clear();
    })
    text02.Event.whenBroadcastReceived('Start', async function*(this:Sprite){
        this.Looks.Size.scale = {w:200, h:200};
        this.Looks.show();
        this.Motion.Position.xy = {};
        this.Looks.Costume.name = 'cat2-1';
        for(;;) {
            this.Looks.Costume.next();
            if(this.Looks.Costume.name == 'cat2-1') {
                break;
            }
            await this.Control.wait(2);
            yield;
        }
        this.Event.broadcast('Start2');
    });   
    text02.Event.whenBroadcastReceived('Start2', async function*(this:Sprite){
        const names = this.Looks.Costume.names;
        for(const _ of Lib.Iterator(names.length*5)) {
            this.Looks.Costume.next();
            await this.Control.wait(3);
            yield;
        }
        for(const _ of Lib.Iterator(10)){
            this.Looks.Effect.change(Lib.ImageEffective.GHOST, 10);
            await this.Control.wait(0.1);
            yield;
        }
        await this.Control.wait(1);
        this.Looks.hide();
        this.Event.broadcast('Clear');
        await this.Control.wait(3);
        this.Control.stopAll();
    
    });

    text02.Event.whenBroadcastReceived('Start2', async function*(this:Sprite){
        this.Motion.Direction.degree = 90;
        this.Pen.prepare();
        this.Pen.Size.thickness = 1000;
        this.Pen.HSVColor.brightness = 0;
        this.Pen.HSVColor.transparency = 100;//99.5;
        //this.Pen.clear();
        this.Pen.down();
        let dx = 2;
        for(;;) {
            this.Looks.Size.w += dx;
            this.Looks.Size.h += dx;
            if(this.Looks.Size.h > 900 || this.Looks.Size.h < 50) {
                dx *= -1;
            }
            // 進む。
            this.Motion.Move.steps(1);
            //console.log(this.Looks.Size.drawingSize);
            // 端に触れたら跳ね返る
            this.Motion.Move.ifOnEdgeBounce();
            this.Pen.stampStage();
            this.Pen.stamp();
            this.Looks.Effect.change(Lib.ImageEffective.COLOR, 1);
            this.Motion.Direction.degree += 1;
            yield;
        }
    });

    text03.Event.whenBroadcastReceived('Start2', async function*(this:Sprite){
        this.Looks.Size.scale = {w:150, h:150};
        this.Motion.Position.xy = {x:0, y:180};
        this.Looks.Costume.name = '1';
        this.Motion.Direction.degree = 90;
        this.Looks.Layer.gotoBack();
        this.Looks.show();
        for(;;) {
            this.Motion.Position.y += -2;
            this.Looks.Effect.change(Lib.ImageEffective.COLOR, 2);
            if(this.Motion.Position.y < -180){
                this.Looks.Costume.next();
                this.Motion.Position.y = 180;
            }
            yield;
        }
    });   

}