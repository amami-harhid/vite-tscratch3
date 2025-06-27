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
import { GoogleFonts } from "./sub/googleFonts";

const Sprite = "Sprite";
let stage:Stage;
let cat: Sprite;
let text01:Sprite, text02:Sprite, text03:Sprite;

const Texts = GoogleFonts.textsGuidance;
const Texts2 = GoogleFonts.textsQizJp;
const Texts3 = GoogleFonts.textsAnswserJp;

Pg.preload = async function preload(this: PgMain) {
    this.Image.load('./assets/cat01.svg', Constant.Cat01);
    this.Image.load('./assets/cat02.svg', Constant.Cat02);
    this.Image.load('./assets/cat03.svg', Constant.Cat03);
    this.Image.load('./assets/cat04.svg', Constant.Cat04);
    this.Font.load(GoogleFonts.fontFaceUrlJPGuidance, Constant.GoogleFontsJPGuidance)
    this.Font.load(GoogleFonts.fontFaceUrlJP, Constant.GoogleFontsJP)
    this.Font.load(GoogleFonts.fontFaceUrlEN, Constant.GoogleFontsEN)
}
Pg.prepare = async function prepare() {

    stage = new Lib.Stage();
    stage.SvgText.add('BackDrop', backdrop);

    cat = new Lib.Sprite('quizeCat');
    cat.Image.add( Constant.Cat01 );
    cat.Image.add( Constant.Cat02 );
    cat.Image.add( Constant.Cat03 );
    cat.Image.add( Constant.Cat04 );
    cat.Motion.Position.xy = [0, -100];
    cat.Looks.Size.scale = [50, 50];

    text01 = new Lib.Sprite(Sprite);
    text01.Font.add(Constant.GoogleFontsJPGuidance);
    text01.Motion.Position.xy = [0, 100];
    //text01.Looks.hide();
    // eslint-disable-next-line loopCheck/s3-loop-plugin
    for(const counter of Lib.Iterator(Texts.length)){
        const texts = Texts[counter];
        const color = 'black';
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
    text02.Motion.Position.xy = [0, 50];
    text02.Font.add( Constant.GoogleFontsJP );
    text02.Looks.Size.scale = [150,150];
    //text02.Looks.hide();

    // eslint-disable-next-line loopCheck/s3-loop-plugin
    for(const counter of Lib.Iterator(Texts2.length)){
        const texts = Texts2[counter];
        const color = 'red';
        const fontSize = 25;
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
    text02.Motion.Position.xy = [0, 0];
    //text03.Looks.hide();
    // eslint-disable-next-line loopCheck/s3-loop-plugin
    for(const counter of Lib.Iterator(Texts3.length)){
        const texts = Texts3[counter];
        const color = 'blue';
        const fontSize = 15;
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
    stage.Event.whenBroadcastReceived('Clear', async function*(this:Sprite){

    })
    cat.Event.whenFlag( async function*(this:Sprite){
        for(;;) {
            await this.Control.wait(1);
            this.Looks.Costume.next();
            yield;
        }
    });

}