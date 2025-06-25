import { Constant } from "./constants";
import type { ISprite as Sprite } from "@Type/sprite";
import type { TAddOption } from "@Type/svgText/ISvgText";

/**
 * タイトル
 * @param entity 
 */
export const addTitle = function(entity: Sprite) {
    const fontSize = 35;
    const fontStyle = 'bold';
    const color = '#ffffff';
    const fontFamily = Constant.Togemaru;
    const option: TAddOption = {
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontStyle: fontStyle,
        color: color,
    };
    entity.SvgText.addTexts( Constant.Title, ["カラー円盤ゲーム"], option );    

}
/**
 * ガイダンス
 * @param entity 
 */
export const addGuidance = function(entity: Sprite) {

    const fontSize = 15;
    const fontStyle = 'bold';
    const color = '#ff0000';
    const fontFamily = Constant.Togemaru;
    const option: TAddOption = {
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontStyle: fontStyle,
        color: color,
    };
    const texts = [
        "← / → を使って回転させよう",
        "迫ってくるドットを同じ色で受け止めよう"
    ];
    entity.SvgText.addTexts( Constant.GameOver, texts, option );
}
/**
 * アラート（注意）
 * @param entity 
 */
export const addAlert = function(entity: Sprite) {
    const fontSize = 15;
    const fontStyle = 'bold';
    const color = '#ff0000';
    const fontFamily = Constant.Togemaru;
    const option: TAddOption = {
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontStyle: fontStyle,
        color: color,
    };
    const texts = [
        "失敗数が１０になったらゲームオーバー",
    ];
    entity.SvgText.addTexts( Constant.Alert, texts, option );
}
/**
 * GameOver
 * @param entity 
 */
export const addGameOverSvg = function(entity: Sprite) {
    const fontSize = 35;
    const fontStyle = 'bold';
    const color = '#ff0000';
    const fontFamily = Constant.Togemaru;
    const option: TAddOption = {
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontStyle: fontStyle,
        color: color,
    };
    const texts = [
        "GameOver"
    ];
    entity.SvgText.addTexts( Constant.GameOver, texts, option );
}