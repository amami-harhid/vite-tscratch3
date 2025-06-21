/**
 * 【01】練習課題
 */
import {Pg, Lib} from "@tscratch3/tscratch3likejs/s3lib-importer";

import type { IPgMain as PgMain } from '@Type/pgMain';
import type { IStage as Stage } from '@Type/stage'
import type { ISprite as Sprite } from '@Type/sprite';


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

}

// 事前準備処理
Pg.prepare = async function prepare() {
    // --------------------
    // ステージを作る
    // --------------------
    stage = new Lib.Stage();
    
    // --------------------
    // ブロックを作る
    // --------------------
    sprite = new Lib.Sprite('sprite');


}

// イベント定義処理
Pg.setting = async function setting() {

    // 緑の旗が押されたときの動作
    stage.Event.whenFlag(async function*( this: Stage ){

    });

    // 緑の旗が押されたときの動作
    sprite.Event.whenFlag(async function( this: Sprite ){

    }); 

}
