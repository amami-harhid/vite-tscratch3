/**
 * 【01】練習課題
 */
import {Pg, Lib} from "@tscratch3/tscratch3likejs/s3lib-importer";

import type { IPgMain as PgMain } from '@Type/pgMain';
import type { IStage as Stage } from '@Type/stage'
import type { ISprite as Sprite } from '@Type/sprite';


// ---------------------------------
// アセットをインポートする
// ---------------------------------
const CatSvg = 'https://amami-harhid.github.io/tscratch3assets/assets/cat.svg';
const JurassicSvg = 'https://amami-harhid.github.io/tscratch3assets/assets/Jurassic.svg';

// ---------------------------------
// SUBをインポートする
// ---------------------------------
import { Constants } from "./sub/constants";

// ---------------------------------
// タイトルを設定する
// ---------------------------------
Pg.title = "Practice01";

// ---------------------------------
// ステージとスプライトの変数を定義する
// ---------------------------------
let stage: Stage;
let sprite: Sprite;

// 事前ロード処理
Pg.preload = async function( this: PgMain) {
    this.Image.load(CatSvg, Constants.CAT);
    this.Image.load(JurassicSvg, Constants.Jurassic);
}

// 事前準備処理
Pg.prepare = async function prepare() {
    // --------------------
    // ステージを作る
    // --------------------
    stage = new Lib.Stage();
    stage.Image.add(Constants.Jurassic)
    
    // --------------------
    // CAT スプライトを作る
    // --------------------
    sprite = new Lib.Sprite('sprite');
    sprite.Image.add( Constants.CAT );
}

// イベント定義処理
Pg.setting = async function setting() {

    sprite.Event.whenFlag( async function( this: Sprite ){
        this.Motion.Direction.degree = 90;
    });
}
