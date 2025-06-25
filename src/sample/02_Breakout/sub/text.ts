import type { TAddOption } from "@tscratch3/tscratch3likejs/Type/svgText/ISvgText";
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
    const option: TAddOption = {
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontStyle: fontStyle,
        color: color,
    }
    entity.SvgText.addTexts(name, texts, option);
}
