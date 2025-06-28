export class Qiz {

    /**
     * 和文（導入）
     */
    static get textsGuidance(): string[][] {
        return [
            ['クイズゲーム（３択クイズ）'],
            ['スペースキーで進めてね'],
            ['クイズ終了！'],
        ];
    }
    /**
     * 和文
     * https://hisasuke.com/animal-quiz/
     */
    static get textsQizJp(): string[][] {
        return [
            ['3','【クイズ０１】<br/>カバの汗の色は？<br/>1.　無色<br/>2.　黄色<br/>3.　赤色'],
            ['1','【クイズ０２】<br/>サメの歯が生えかえる周期は？？<br/>1.　１週間くらい<br/>2.　１カ月くらい<br/>3.　１年くらい'],
            ['3','【クイズ０３】<br/>ウミガメが産卵の時に涙を流す理由は？<br/>1.　感動したから<br/>2.　目の乾燥を防ぐため<br/>3.　体内の塩分調整のため'],
            ['1','【クイズ０４】<br/>アフリカに生息するダチョウの卵<br/>その重さに近いのは？<br/>1.　1Kg<br/>2.　10Kg<br/>3.　100Kg'],
            ['3','【クイズ０５】<br/>次の3つの動物の内<br/>最も長く寝る動物は？<br/>1.　ネコ<br/>2.　ラクダ<br/>3.　コアラ'],
            ['3','【クイズ０６】<br/>象の鼻は<br/>どのようにしてできているでしょう？<br/>1.　鼻の先だけ骨がありその他は筋肉<br/>2.　鼻の付け根だけ骨がありその他は筋肉<br/>3.　全てが筋肉'],
            ['3','【クイズ０７】<br/>マンボウはとても多くの卵を産みます<br/>さて何匹くらい生むでしょうか？<br/>1.　２百万～３百万匹<br/>2.　２千万～３千万匹<br/>3.　２億～３億匹'],
            ['2','【クイズ０８】<br/>馬はどのように<br/>呼吸しているでしょうか？<br/>1.　口からだけ<br/>2.　鼻からだけ<br/>3.　鼻と口から'],
            ['2','【クイズ０９】<br/>ゴリラの握力は<br/>強いことで有名ですが<br/>人間の何倍あるでしょうか？<br/>1.　２倍<br/>2.　１０倍<br/>3.　１００倍'],
            ['2','【クイズ１０】<br/>犬の鼻は<br/>どのような状態でしょうか？<br/>1.　毛で覆われている<br/>2.　濡れている<br/>3.　腫れている'],

        ];
    }
    /**
     * 英文
     */
    static get textsAnswserJp(): string[][] {
        return [
            ['正解は　３番の「赤」<br/>カバの汗は最初は透明ですが<br/>すぐに酸化して赤色になります<br/>この赤い汗はカバの皮膚の<br/>日焼けや乾燥の防止、<br/>細菌感染を防ぐ効果があるそうです'],
            ['正解は　１番の「１週間くらい」<br/>10日で１列の歯が生えかえるので<br/>１生の間で２万本くらいは<br/>生え変わることになります'],
            ['正解は　３番の「塩分調整のため」<br/>ウミガメは海水を飲むので<br/>血液中の塩分濃度が高くならないよう<br/>涙で塩分を外に出しています<br/>産卵とはあまり関係なかったです'],
            ['正解は　１番の「１ｋｇぐらい」<br/>ダチョウの卵は世界最大の卵で、重さは<br/>約1.2Kgから1.6Kgほどです。ニワトリの卵の<br/>25個から30個分に相当します'],
            ['正解は　３番の「コアラ」<br/>ユーカリの葉にはほとんど栄養がないから<br/>消費エネルギーを抑えるために寝る時間が<br/>多いそうです。<br/>主食のユーカリの葉には毒が含まれていて<br/>解毒するために多くの睡眠が必要だそうです'],
            ['正解は　３番の「全てが筋肉」<br/>骨がないから小さな物を器用につまめます。<br/>長い鼻を使う筋肉の力がすごいですね'],
            ['正解は　３番の「２億～３億匹」<br/>この数は推測値で実際に数えたわけでは<br/>ありません。マンボウの卵は<br/>小さく浮遊性であり,他の魚に<br/>食べられたり環境の影響で死んで<br/>しまったりして成魚になるのはほんの<br/>わずか、数匹ほどです'],
            ['正解は　２番の「鼻からだけ」<br/>馬の呼吸が荒いのは<br/>鼻からでしか呼吸できないためです。'],
            ['正解は　２番の「１０倍」<br/>人間の握力が約４７Ｋｇほど<br/>ゴリラの握力は４００～５００ｋｇも<br/>あります。リンゴを握りつぶすことも<br/>できると言われています'],
            ['正解は　２番の「濡れている」<br/>濡れていることにより匂いの分子が<br/>くっつきやすく嗅覚がより敏感に<br/>なっています'],
        ]
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
        const fullTexts = Qiz.textsGuidance;
        const target = Qiz.textFilter(fullTexts);
        const url = `https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap&text='+${encodeURIComponent(target)}`;
        return url;
    }
    /**
     * 和文FONT URL
     */
    static get fontFaceUrlJP( ) : string {
        const fontFamily = "UoqMunThenKhung";
        const fullTexts = Qiz.textsQizJp;
        const target = Qiz.textFilter(fullTexts);
        const url = `https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap&text='+${encodeURIComponent(target)}`;
        return url;
    }
    /**
     * 英文FONT URL
     */
    static get fontFaceUrlEN( ) : string {
        const fontFamily = "UoqMunThenKhung";
        const fullTexts = Qiz.textsAnswserJp;
        const target = Qiz.textFilter(fullTexts);
        const url = `https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap&text='+${encodeURIComponent(target)}`;
        return url;
    }
}