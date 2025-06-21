/**
 * バー（四角形)
 */
const w = 50;
const h = 5;
/**
 * バー（長方形）の定義
 * @param color 
 * @returns 
 */
export const Bar = function(color: string) {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <rect width="${w}" height="${h}" fill="${color}" />
</svg>
`;
}
