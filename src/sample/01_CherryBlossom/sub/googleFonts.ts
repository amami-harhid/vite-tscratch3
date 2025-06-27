export class GoogleFonts {

    static get texts(): string[][] {
        return [
            ["Petals are dancing in the wind"],
            ["Touch me to start."],
        ];
    }

    static fontFaceUrl( fontFamily: string ) : string {
        const targets: string[] = [];
        // eslint-disable-next-line loopCheck/s3-loop-plugin
        for(const strs of GoogleFonts.texts){
            // eslint-disable-next-line loopCheck/s3-loop-plugin
            for(const str of strs){
                if( str != ' '){
                    if( !targets.includes(str) ) {
                        targets.push(str);
                    }    
                }
            }
        }
        const target = targets.sort().join("");

        const url = `https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap&text='+${encodeURIComponent(target)}`;
        return url;
    }

}