export class GoogleFonts {

    /**
     * 和文（導入）
     */
    static get textsGuidance(): string[][] {
        return [
            ['クイズゲーム（３択クイズ）'],
            ['スペースキーで始まるよ'],

        ];
    }
    /**
     * 和文
     * https://hisasuke.com/animal-quiz/
     */
    static get textsQizJp(): string[][] {
        return [
            ['【クイズ０１】<br/>カバの汗の色は？<br/>1. 無色<br/>2. 黄色<br/>3. 赤色'],
            ['【クイズ０２】<br/>サメの歯が生えかえる周期は？？<br/>1. １週間くらい<br/>2. １カ月くらい<br/>3. １年くらい'],
            ['【クイズ０３】<br/>ウミガメが産卵の時に涙を流す理由は？<br/>1. 感動したから<br/>2. 目の乾燥を防ぐため<br/>3. 体内の塩分調整のため'],
        ];
    }
    /**
     * 英文
     */
    static get textsAnswserJp(): string[][] {
        return [
            ['正解は ３番<br/>カバの汗は最初は透明ですが<br/>すぐに酸化して赤色になります<br/>この赤い汗はカバの皮膚の<br/>日焼けや乾燥の防止、<br/>細菌感染を防ぐ効果があるそうです'],
            ['正解は １番の１週間くらい<br/>10日で１列の歯が生えかえるので<br/>１生の間で２万本くらいは<br/>生え変わることになります'],
            ['正解は ３番の塩分調整<br/>ウミガメは海水を飲むので<br/>血液中の塩分濃度が高くならないよう<br/>涙で塩分を外に出しています<br/>産卵とはあまり関係なかったです'],
        ];
    }
    /**
     * font subset フィルター用
     * @param fullTexts 
     * @returns 
     */
    private static textFilter( fullTexts: string[][] ) : string {
        const targets: string[] = [];
        // eslint-disable-next-line loopCheck/s3-loop-plugin
        for(const strs of fullTexts){
            // eslint-disable-next-line loopCheck/s3-loop-plugin
            for(const str of strs){
                const _str = str.replaceAll(/<br\/>/g,'').replaceAll(/\s/g,'');
                const _strSplit = _str.split('');
                // eslint-disable-next-line loopCheck/s3-loop-plugin
                for(const _strOne of _strSplit) {
                    if( _strOne != ' '){
                        if( !targets.includes(_strOne) ) {
                            targets.push(_strOne);
                        }    
                    }    
                }
            }
        }
        const target = targets.sort().join("");
        return target;
    }
    /**
     * 和文FONT URL
     */
    static get fontFaceUrlJPGuidance( ) : string {
        const fontFamily = "UoqMunThenKhung";
        const fullTexts = GoogleFonts.textsGuidance;
        const target = GoogleFonts.textFilter(fullTexts);
        const url = `https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap&text='+${encodeURIComponent(target)}`;
        return url;
    }
    /**
     * 和文FONT URL
     */
    static get fontFaceUrlJP( ) : string {
        const fontFamily = "UoqMunThenKhung";
        const fullTexts = GoogleFonts.textsQizJp;
        const target = GoogleFonts.textFilter(fullTexts);
        const url = `https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap&text='+${encodeURIComponent(target)}`;
        return url;
    }
    /**
     * 英文FONT URL
     */
    static get fontFaceUrlEN( ) : string {
        const fontFamily = "UoqMunThenKhung";
        const fullTexts = GoogleFonts.textsAnswserJp;
        const target = GoogleFonts.textFilter(fullTexts);
        const url = `https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap&text='+${encodeURIComponent(target)}`;
        return url;
    }
}