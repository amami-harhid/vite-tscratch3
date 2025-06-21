/**
 * ブロック（四角形)
 */
const w = 480;
const h = 10;
/**
 * 底に配置する四角形の定義
 * @param color 
 * @returns 
 */
export const Bottom = function(color: string) {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <rect width="${w}" height="${h}" fill="${color}" />
</svg>
`;
}
