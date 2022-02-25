# UMI-NEXT
> 参考项目[文档](https://next.umijs.org/)

## 项目结构
```
├── config
│   └── config.ts
├── dist
├── mock
│   └── app.ts｜tsx
├── src
│   ├── .umi
│   ├── .umi-production
│   ├── app.ts
│   ├── layout
│   │   ├── BasicLayout.tsx
│   │   ├── index.less
│   ├── models
│   │   ├── global.ts
│   │   └── index.ts
│   ├── pages
│   │   ├── index.less
│   │   └── index.tsx
│   ├── utils // 推荐目录
│   │   └── index.ts
│   ├── services // 推荐目录
│   │   └── api.ts
│   ├── global.ts
│   ├── global.(css|less|sass|scss)
│   └── plugin.ts 
├── node_modules
│   └── .cache
│       ├── bundler-webpack
│       ├── mfsu
│       └── mfsu-deps
├── .env
├── package.json
├── tsconfig.json
└── typings.d.ts
```

### 踩坑记

1. `node` 版本 `16`以上
2. 按照文档上推荐的结构是没有`src`目录的,如果使用`约定式路由`的时候不需要额外在变更 `config/config.ts` 中的 `defineConfig.conventionRoutes.base`属性