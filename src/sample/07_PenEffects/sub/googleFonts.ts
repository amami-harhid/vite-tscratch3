export class GoogleFonts {

    /**
     * 和文（導入）
     */
    static get textsGuidance(): string[][] {
        return [
            ['Tscratch3'],
            ['文字のスプライトを'],
            ['PEN機能でスタンプします'],
            ['面白いビュジュアル効果が<br/>できました'],
            ['平家物語の和文と英文を使って<br/>ご紹介！'],
            ['３種類のGoogleFontを<br/>使いました'],
            ['==FontFamily==<br/>(a)Stick<br/>(b)Yuji+Boku<br/>(c)Dancing+Script:wght@400..700'],
        ];
    }
    /**
     * 和文
     */
    static get textsHeikeMonogatariJp(): string[][] {
        return [
            ['祇園精舎の鐘の声<br/>諸行無常の響あり'],
            ['沙羅双樹の花の色<br/>盛者必衰の理をあらはす'],
            ['おごれる人も久しからず<br/>唯春の夜の夢のごとし'],
            ['たけき者も遂にはほろびぬ<br/>偏に風の前の塵に同じ'],
            ['祇<br/>園<br/>精<br/>舎<br/>の<br/>鐘<br/>の<br/>声'],
        ];
    }
    /**
     * 英文
     */
    static get textsHeikeMonogatariEn(): string[][] {
        return [
            ['The sound of the bells of Gion Monastery<br/>tells us that nothing in the world stays the same'],
            ['The colours of the blossoms of the Shorea tree<br/>signify that all that flourish must fade'],
            ['The arrogance does not last long<br/>just like spring night’s dream'],
            ['Even the mighty eventually falls<br/>all is like the dust before the wind']
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
                for(const _strOne of _strSplit){
                    if( _strOne != ' '){
                        if( !targets.includes(_strOne) ) {
                            targets.push(_strOne);
                        }    
                    }    
                }
            }
        }
        const target = targets.sort().join("");
        console.log(target);
        return target;
    }
    /**
     * 和文FONT URL
     */
    static get fontFaceUrlJPGuidance( ) : string {
        const fontFamily = "Stick";
        const fullTexts = GoogleFonts.textsGuidance;
        const target = GoogleFonts.textFilter(fullTexts);
        const url = `https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap&text='+${encodeURIComponent(target)}`;
        return url;
    }
    /**
     * 和文FONT URL
     */
    static get fontFaceUrlJP( ) : string {
        const fontFamily = "Yuji+Boku";
        const fullTexts = GoogleFonts.textsHeikeMonogatariJp;
        const target = GoogleFonts.textFilter(fullTexts);
        const url = `https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap&text='+${encodeURIComponent(target)}`;
        return url;
    }
    /**
     * 英文FONT URL
     */
    static get fontFaceUrlEN( ) : string {
        const fontFamily = "Dancing+Script:wght@400..700";
        const fullTexts = GoogleFonts.textsHeikeMonogatariEn;
        const target = GoogleFonts.textFilter(fullTexts);
        const url = `https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap&text='+${encodeURIComponent(target)}`;
        return url;
    }
}