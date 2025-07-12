/**
 * ブロック（四角形)
 */
const w = 480;
const h = 50;
/**
 * ブロック：四角形の定義（二重にして影効果をつける）
 * @param color 
 * @returns 
 */
export const Block = function(color: string) {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <rect x="0" y="0" width="${w}" height="${h}" fill="${color}" />
</svg>
`;
}
