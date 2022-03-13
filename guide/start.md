# 开始

本文会帮助你从头启动项目

## 前言

::: tip 关于组件

项目封装了一些组件，但是可能不能满足大部分的要求。所以，如果组件不满足你的要求，完全可以不用甚至删除代码自己写，不必坚持使用项目自带的组件。

:::

## 环境准备

本地环境需要安装 [pnpm](https://www.pnpm.cn/)、[Node.js](http://nodejs.org/) 和 [Git](https://git-scm.com/)

::: warning 注意

- [Node.js](http://nodejs.org/) 版本要求`14.x`以上，这里推荐 `16.x` 及以上。

:::

## 工具配置

如果您使用的 IDE 是[vscode](https://code.visualstudio.com/)(推荐)的话，可以安装以下工具来提高开发效率及代码格式化

- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Iconify 图标插件
- [I18n-ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) - i18n 插件
- [Volar](https://marketplace.visualstudio.com/items?itemName=MisterJ.vue-volar-extention-pack) - vue 开发
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css 格式化
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - .env 文件 高亮
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 脚本代码检查

## 代码获取

::: warning 注意

注意存放代码的目录及所有父级目录不能存在中文、韩文、日文以及空格，否则安装依赖后启动会出错。

:::

### 从 GitHub 获取代码

```bash
# clone 代码
git clone https://github.com/wxtling/tui

```

## 安装

### 安装 Node.js

如果您电脑未安装[Node.js](https://nodejs.org/en/)，请安装它。

**验证**

```bash
# 出现相应npm版本即可
npm -v
# 出现相应node版本即可
node -v

```

### 安装依赖

#### pnpm 安装

必须使用 [pnpm](https://www.pnpm.cn/)进行依赖安装（若其他包管理器安装不了需要自行处理）。

如果未安装`pnpm`，可以用下面命令来进行全局安装

```bash
# 全局安装 pnpm
npm i -g pnpm
# 验证
pnpm -v # 出现对应版本号即代表安装成功
```

#### 依赖安装命令

在项目根目录下，打开命令窗口执行，耐心等待安装完成即可

```bash
# 安装依赖
pnpm install
```

## npm script

参考 [运行、发布uni-app](https://uniapp.dcloud.io/quickstart-cli.html#%E8%BF%90%E8%A1%8C%E3%80%81%E5%8F%91%E5%B8%83uni-app)

```bash

{
    "dev:app": "uni -p app",
    "dev:h5": "uni",
    "dev:h5:ssr": "uni --ssr",
    "dev:mp-alipay": "uni -p mp-alipay",
    "dev:mp-baidu": "uni -p mp-baidu",
    "dev:mp-kuaishou": "uni -p mp-kuaishou",
    "dev:mp-lark": "uni -p mp-lark",
    "dev:mp-qq": "uni -p mp-qq",
    "dev:mp-toutiao": "uni -p mp-toutiao",
    "dev:mp-weixin": "uni -p mp-weixin",
    "dev:quickapp-webview": "uni -p quickapp-webview",
    "dev:quickapp-webview-huawei": "uni -p quickapp-webview-huawei",
    "dev:quickapp-webview-union": "uni -p quickapp-webview-union",
    "build:app": "uni build -p app",
    "build:h5": "uni build",
    "build:h5:ssr": "uni build --ssr",
    "build:mp-alipay": "uni build -p mp-alipay",
    "build:mp-baidu": "uni build -p mp-baidu",
    "build:mp-kuaishou": "uni build -p mp-kuaishou",
    "build:mp-lark": "uni build -p mp-lark",
    "build:mp-qq": "uni build -p mp-qq",
    "build:mp-toutiao": "uni build -p mp-toutiao",
    "build:mp-weixin": "uni build -p mp-weixin",
    "build:quickapp-webview": "uni build -p quickapp-webview",
    "build:quickapp-webview-huawei": "uni build -p quickapp-webview-huawei",
    "build:quickapp-webview-union": "uni build -p quickapp-webview-union",

    # 删除依赖  (`window` 系统手动删除该目录较慢，可以使用该命令来进行删除)
    "rfrely": "rimraf pnpm-lock.yaml && rimraf package.lock.json && rimraf yarn.lock && rimraf node_modules"
}


```

### 重新安装依赖

先删除 `node_modules`、`pnpm-lock.yaml`、`yarn.lock`、`package.lock.json` 后再进行依赖重新安装。

接下来你可以修改代码进行业务开发了。内建了模拟数据、状态管理、国际化等各种实用的功能辅助开发，请阅读其他章节了解更多。

## 目录说明

```bash

.
├── build # 打包脚本相关
│   ├── mock # 模拟数据 配置文件
│   ├── router # pages.json 生成器
│   └── index # vite 配置
├── mock # mock文件夹
├── src # 主目录
│   ├── api # 接口文件
│   ├── components # 公共组件
│   ├── enums # 枚举/常量
│   ├── hooks # hook
│   │   ├── component # 组件相关hook
│   │   └── core # 基础hook
│   ├── locales # 多语言
│   ├── pages # 页面
│   ├── router # 路由配置
│   ├── settings # 项目配置
│   │   ├── localeSetting.ts # 多语言配置
│   │   └── ThemeSetting.ts #  主题配置
│   ├── static # 资源目录
│   ├── store # 数据仓库
│   ├── utils # 工具类
│   ├── manifest.json # 应用的配置文件
│   ├── pages.json # 页面路由  整体控制应用的风格
│   └── uni.scss # 方便整体控制应用的风格
├── .env  # 环境变量配置
├── types # 类型文件
└── vite.config.ts # vite配置文件

```
