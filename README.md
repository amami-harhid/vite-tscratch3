# vite-tscratch3

Typescriptコーディングをするときに、さくさくとビルドできたらいいですよね。
Tscratch3を使った演習課題プログラミングをするとき、試行錯誤したいときがありますよね。
試行錯誤時に、いちいちビルドし直しをしていたら少しイラっとしそうです。

というわけで Vite(ヴィート)を導入してみました。

コンソールで次のようにたたくだけで、/sample/01_practice/ の中のTypescriptをビルドしてブラウザーに自動表示してくれます。
しかも、表示中に コードを変えたら「自動ビルド」＋「自動リロード」してくれるので、コーディングがとてもはかどりそうです。

```
$ vite /sample/01_practice/
```

# TSファイルを置く場所

srcディレクトリの下に 演習課題に合った名前のサブディレクトリを作って、その中に課題のファイルを作りましょう。

- index.html
- index.ts

この２つでＯＫです。あとはお好みで assetsディレクトリーを用意したり、subディレクトリーを用意してくださいね。

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

