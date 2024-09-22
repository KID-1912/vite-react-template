# vite-pure-template

一个纯净的 vite react 模板，仅统一配置与目录结构

## 目录结构

参考 [create-react-app 目录结构](https://create-react-app.dev/docs/folder-structure)

```
vite-pure-template
├─dist
├─node_modules
├─public
├─src
|  ├─assets
|  |   ├─style
|  |   ├─image
|  |   ├─svg
|  ├─components
|  ├─context
|  ├─hooks
|  ├─layouts
|  ├─pages
|  ├─router
|  ├─types
|  ├─utils
|  ├─App.tsx
|  ├─main.tsx
├─.env
├─.env.development
├─.env.production
├─.eslintrc.cjs
├─.gitignore
├─.prettierrc.cjs
├─auto-imports.d.ts
├─eslintrc-auto-import.json
├─index.html
├─package-lock.json
├─package.json
├─postcss.config.js
├─README.md
├─tsconfig.json
├─vite.config.ts
├─windi.config.ts
```

## 集成特性

### 环境变量

---

### 插件

- @vitejs/plugin-react

- vite-plugin-html

- vite-plugin-legacy-swc

- eslint：@typescript-eslint/parser、vite-plugin-eslint、@typescript-eslint/eslint-plugin

- prettier：eslint-config-prettier、eslint-plugin-prettier

- vite-plugin-svgr

- windicss

- sass/less

- postcss: autoprefixer/cssnano

- unplugin-auto-import/unplugin-icons

- antd