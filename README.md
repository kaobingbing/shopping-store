# 智慧商城 (hm-shopping)

一个基于 Vue 2 的移动端 H5 商城项目，实现了完整的电商购物流程，包括商品浏览、搜索、购物车、下单结算、订单管理等核心功能。

## 项目截图

> 建议运行项目后补充截图

## 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Vue | 2.6 | 渐进式前端框架 |
| Vue Router | 3.5 | 前端路由管理 |
| Vuex | 3.6 | 全局状态管理 |
| Vant | 2.13 | 移动端 UI 组件库 |
| Axios | 1.13 | HTTP 请求库 |
| Less | 4.0 | CSS 预处理器 |
| postcss-px-to-viewport | 1.1 | 移动端视口适配 |

## 功能模块

### 首页
- 顶部搜索框入口
- 轮播 Banner
- 分类导航（新品首发入口）
- 主会场活动图
- "猜你喜欢"商品列表

### 分类页
- 左侧一级分类导航
- 右侧二级分类展示
- 分类商品列表跳转

### 搜索
- 关键词搜索
- 搜索历史记录（本地存储，可清空）

### 商品详情
- 商品图片轮播
- 价格、销量、名称展示
- 服务承诺（七天无理由退货、48小时发货）
- 用户评价列表
- 富文本商品描述
- 加入购物车 / 立即购买
- 数量选择弹窗

### 购物车
- 商品列表展示（商品图、名称、单价、数量）
- 全选 / 反选 / 单选
- 数量增减
- 编辑模式（取消全选、删除选中商品）
- 合计价格与结算入口
- 未登录 / 空购物车状态提示

### 订单结算
- 收货地址展示
- 订单明细（商品列表、数量、金额）
- 订单总金额、优惠券、配送费用
- 余额支付
- 买家留言
- 提交订单（支持购物车结算 / 立即购买两种模式）

### 我的订单
- 标签页切换：全部、待支付、待发货、待收货、待评价
- 订单商品列表、状态展示
- 订单操作（付款、取消、确认收货、评价）

### 个人中心
- 用户头像与会员信息
- 账户余额、积分、优惠券概览
- 全部订单 / 待支付 / 待发货 / 待收货快捷入口
- 我的服务入口（收货地址、领券中心、优惠券、帮助、积分、售后）
- 退出登录

### 登录 / 鉴权
- 手机号 + 图形验证码 + 短信验证码登录
- Vuex 持久化存储登录状态（localStorage）
- 路由守卫拦截（我的订单、结算页需要登录）
- 未登录操作自动弹窗引导登录

## 项目结构

```
shopping-store
├── public/
├── src
│   ├── api/                  # API 接口层
│   │   ├── address.js        # 收货地址接口
│   │   ├── cart.js           # 购物车接口
│   │   ├── category.js       # 分类接口
│   │   ├── home.js           # 首页数据接口
│   │   ├── login.js          # 登录接口（图形验证码、短信、登录）
│   │   ├── order.js          # 订单接口（结算、提交、列表）
│   │   ├── product.js        # 商品接口（列表、详情、评价）
│   │   └── user.js           # 用户信息接口
│   ├── assets/               # 静态资源（图片）
│   ├── components/           # 通用组件
│   │   ├── CountBox.vue      # 数量选择器（加减按钮）
│   │   ├── GoodsItem.vue     # 商品卡片
│   │   └── OrderListItem.vue # 订单列表项
│   ├── mixins/
│   │   └── loginConfirm.js   # 登录确认混入
│   ├── router/
│   │   └── index.js          # 路由配置（含鉴权守卫）
│   ├── store/
│   │   ├── index.js          # Vuex Store 入口
│   │   └── modules/
│   │       ├── cart.js       # 购物车模块
│   │       └── user.js       # 用户模块
│   ├── styles/
│   │   ├── common.css
│   │   └── common.less       # 全局样式
│   ├── utils/
│   │   ├── request.js        # Axios 封装（拦截器、Token 注入）
│   │   ├── storage.js        # localStorage 工具
│   │   └── vant-ui.js        # Vant 组件按需注册
│   ├── views/
│   │   ├── layout/           # 底部 Tab 栏布局
│   │   │   ├── index.vue     # 布局容器
│   │   │   ├── home.vue      # 首页
│   │   │   ├── category.vue  # 分类页
│   │   │   ├── cart.vue      # 购物车
│   │   │   └── user.vue      # 个人中心
│   │   ├── login/            # 登录页
│   │   ├── myorder/          # 我的订单
│   │   ├── pay/              # 订单结算
│   │   ├── prodetail/        # 商品详情
│   │   └── search/           # 搜索 & 搜索结果列表
│   ├── App.vue
│   └── main.js
├── .browserslistrc
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── babel.config.js
├── jsconfig.json
├── package.json
├── postcss.config.js
├── vue.config.js
└── yarn.lock
```

## 快速开始

### 环境要求

- Node.js >= 12
- Yarn（推荐）或 npm

### 安装依赖

```bash
yarn install
```

### 开发启动

```bash
yarn serve
```

浏览器访问 `http://localhost:8080` 即可查看。

### 生产构建

```bash
yarn build
```

构建产物输出到 `dist/` 目录。

### 代码检查

```bash
yarn lint
```

## 配置说明

### 接口地址

后端 API 部署在 `http://smart-shop.itheima.net`，接口封装在 `src/api/` 目录下。如需切换后端地址，修改 `src/utils/request.js` 中的 `baseURL` 和各接口文件中的请求 URL。

### 移动端适配

使用 `postcss-px-to-viewport` 将 px 单位自动转换为 vw 单位，设计稿基准宽度为 375px。无需手动进行视口换算。

### 路径别名

`@` 指向 `src/` 目录，在 `jsconfig.json` 中配置，支持路径智能提示。

## 后端接口来源

本项目后端 API 由黑马程序员提供，仅供学习参考使用。接口文档参考黑马程序员"智慧商城"项目教程。

## 许可证

仅供学习交流使用。
