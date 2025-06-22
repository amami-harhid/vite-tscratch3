# vite-tscratch3

コーディングをするとき、すぐに動かしてみたくなりますよね。
演習課題プログラミングをするときって、こうしたらどうなるかな？って試行錯誤してみたりしますよね。
Typescriptはブラウザではそのまま動かない仕組みですので、いったんJavascriptに変換しないといけません（これをビルドといいます）。
試行錯誤中に「修正するたびに再ビルド」（コマンドを実行）をする必要があるとしたら、少しイラっとしそうな気がします。

というわけで 『Vite(ヴィート)』を導入してみました。

『Vite(ヴィート)』では、コンソールで次のようにたたいておけば、/sample/01_practice/ の中のTypescriptを高速ビルドしてブラウザーへも自動表示してくれます。

```
$ vite --open /sample/01_practice/
```
しかもしかも、表示中にコードを修正したら「自動ビルド」＋と「自動リロード」をしてくれるという優れもの！
コーディングに集中できてとってもよさげです。

```
$ npm run dev /sample/01_practice/
```
でも動きます。

# TSファイルを置く場所

srcディレクトリの下に 演習課題に合った名前のサブディレクトリを作って、その中に課題のファイルを作りましょう。

- index.html
- index.ts

この２つでＯＫです。あとはお好みで「assetsディレクトリー」を用意したり、「subディレクトリー」を用意してくださいね。

# LiveServer

このワークスペースでは、LiveServerのルートを次のように設定しています。

```
"liveServer.settings.root": "/build"
```

LiveServerは、buildディレクトリーをルートとして扱います。

# Eslint

このワークスペースでは、Eslint の設定を次のようにしています。

```
"eslint.useFlatConfig": true, // <-- eslint config を Flat Configとする設定(これがないとEslintは動かない)
"eslint.problems.shortenToSingleLine": true,  // <-- 問題がある行のハイライトを１行にして見やすくする
```

