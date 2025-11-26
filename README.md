# カフェこもれびのホームページ

## 使用技術

- microCMS
- Next.js
- BootStrap
- Vercel
- GitHub
- GoogleFont(yusei-magic-regular)
- ChatGPT,Gemini(画像生成)

## microCMS に作成したデータ

### menu

- name(メニュー名): テキストフィールド
- taste(味)?: 複数コンテンツ参照-味
- image(画像)?: 画像
- description(説明)?: テキストエリア
- amount(値段): 数字

### 味

- flavor(味): テキストフィールド

## 機能

- メニュー一覧表示
- メニュー詳細表示
- メニュー検索

## ディレクトリ構造

### app

- ホーム画面(page.tsx,page.module.css)

### app/\_components

- Header
- メニュー詳細画面での画像(MenuImage)
- メニュー一覧表示(MenuList)
- メニュー検索機能(Search)

### app/\_libs

- microCMS からデータをとってくる(microcms.ts)

### app/[menu]/

- メニュー詳細画面(page.tsx,page.module.css)
- 検索結果(search/page.tsx)
