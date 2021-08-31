# hello-world
vue create hello-world

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# ファイル説明

### node_modules
npm installした際に配置されるライブラリ郡。触ることほどんどない。
### babel.config.js
ほとんどのブラウザに対応しているES5にコンバートしてくれるもの。
これもあまり触らない。

### package.json
アプリの説明書みたいなもの。
buildは本番環境リリースファイルを作るコマンド。

### public
静的ファイル配置する
最適化しないファイル郡。
favicon以外、基本的には触らない。
index.htmlは、ビルドした際に自動で追記される。

### src
assetsには、画像、CSSを配置する。
componentsには、Vueコンポーネントを配置する。
main.jsは、各.vueファイルを参照する。

