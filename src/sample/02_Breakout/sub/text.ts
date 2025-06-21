import type { ISprite } from "@Type/sprite";

const color = 'red';
const fontSize = 24;
const fontStyle = 'normal';
/**
 * テキスト配列をＳＶＧ化してスプライトへ追加する
 * @param entity 
 * @param name 
 * @param texts 
 * @param fontFamily 
 */
export const addSvg = function(entity:ISprite, name:string, texts:string[], fontFamily:string): void {
    // テキスト配列を
    const svg = entity.SvgText.toSvg(texts, fontSize, fontStyle, color, fontFamily);
    entity.SvgText.add(name, svg, fontFamily);
}
