# vite-tscratch3

コーディングをするとき、すぐに動かしてみたくなりますよね。
演習課題プログラミングをするときって、こうしたらどうなるかな？って試行錯誤してみたりしますよね。
Typescriptはブラウザではそのまま動かない仕組みですので、いったんJavascriptに変換しないといけません（これをビルドといいます）。
試行錯誤中に「修正するたびに再ビルド」（コマンドを実行）をする必要があるとしたら、少しイラっとしそうな気がします。

というわけで 『Vite(ヴィート)』を導入してみました。

『Vite(ヴィート)』では、コンソールで次のようにたたいておけば、/sample/01_practice/ の中のTypescriptを高速ビルドしてブラウザーへも自動表示してくれます。

```
$ npm run dev ./src/sample/01_practice/
```
しかもしかも、表示中にコードを修正したら「自動ビルド」＋と「自動リロード」をしてくれるという優れもの！
コーディングに集中できてとってもよさげです。（パスの最後に / をつけるのを忘れずに！）

上のコマンドは 次のコマンドを実行します。

```
$ vite --open ./src/sample/01_practice/
```


# TSファイルを置く場所

srcディレクトリの下に 演習課題に合った名前のサブディレクトリを作り、その中に課題のファイルを作りましょう。
サブディレクトリの下にさらに別のサブディレクトリを作っても大丈夫です。

- index.html
- index.ts

この２つでＯＫです。あとはお好みで「assetsディレクトリー」を用意したり、「subディレクトリー」を用意してくださいね。

# ビルド

次のコマンドで src の下の「index.html」+「*.ts」をコンパイルビルドします。

```
npm run build 
```

次のコマンドが実行されます。
```
tsc && vite build --emptyOutDir
```

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

# fot subset 対応（試行)

https://zenn.dev/cococig/articles/1d494847985263


# Sample

これを作りたい
https://scratch.mit.edu/projects/1076651918/
https://scratch.mit.edu/projects/415730046/
https://scratch.mit.edu/projects/564648585/
https://scratch.mit.edu/projects/743072130/