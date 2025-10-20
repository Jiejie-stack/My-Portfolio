# Weijie Huang Portfolio - React Version

这是一个使用React + Tailwind CSS构建的现代化个人作品集网站，展示了Weijie Huang在数据科学、机器学习和用户体验设计方面的专业能力。

## 🚀 技术栈

- **前端框架**: React 18
- **样式框架**: Tailwind CSS
- **动画库**: Framer Motion
- **路由**: React Router DOM
- **图标**: Heroicons (SVG)
- **字体**: Inter (Google Fonts)

## 📦 安装和运行

### 前置要求
- Node.js (版本 14 或更高)
- npm 或 yarn

### 安装依赖
```bash
npm install
# 或
yarn install
```

### 启动开发服务器
```bash
npm start
# 或
yarn start
```

项目将在 [http://localhost:3000](http://localhost:3000) 启动

### 构建生产版本
```bash
npm run build
# 或
yarn build
```

## 🏗️ 项目结构

```
src/
├── components/          # 可复用组件
│   ├── Header.js       # 导航栏组件
│   ├── Footer.js       # 页脚组件
│   ├── ScrollToTop.js  # 滚动到顶部组件
│   └── LoadingSpinner.js # 加载动画组件
├── pages/              # 页面组件
│   ├── Home.js         # 主页
│   ├── About.js        # 关于页面
│   ├── Projects.js     # 项目页面
│   └── Contact.js      # 联系页面
├── App.js              # 主应用组件
├── index.js            # 应用入口
└── index.css           # 全局样式
```

## ✨ 主要功能

### 🎨 设计特色
- **现代简约**: 采用简洁的设计语言，突出内容
- **渐变色彩**: 使用蓝色到紫色的渐变主题
- **玻璃拟态**: 导航栏采用毛玻璃效果
- **卡片设计**: 内容以卡片形式组织，层次清晰

### 🎭 交互效果
- **滚动动画**: 页面滚动时的元素渐入效果
- **悬停效果**: 丰富的鼠标悬停交互
- **平滑过渡**: 所有交互都有平滑的过渡动画
- **响应式布局**: 适配桌面、平板和手机设备

### 📱 响应式设计
- 移动端优先的设计理念
- 断点适配：sm (640px), md (768px), lg (1024px), xl (1280px)
- 灵活的网格布局系统

## 🎯 页面功能

### 主页 (Home)
- 英雄区域：个人介绍和主要技能展示
- 关于部分：简要个人背景和专业领域
- 工作经验：详细的工作经历和成就
- 项目展示：精选项目预览
- 技能展示：技术技能和工具熟练度

### 关于页面 (About)
- 个人故事：详细的个人背景和职业发展
- 教育经历：学术背景和时间线
- 技能与成就：专业技能和重要成就
- 个人理念：工作哲学和价值观

### 项目页面 (Projects)
- 项目筛选：按类别筛选项目
- 项目详情：完整项目展示和案例研究
- 模态窗口：详细的项目信息展示
- 技术栈：每个项目使用的技术和工具

### 联系页面 (Contact)
- 联系表单：功能完整的联系表单
- 联系信息：多种联系方式
- 常见问题：FAQ部分
- 社交媒体链接：LinkedIn和邮箱链接

## 🛠️ 开发工具

### 代码质量
- ESLint：代码规范检查
- Prettier：代码格式化
- React DevTools：React调试工具

### 性能优化
- 代码分割：按需加载组件
- 图片优化：WebP格式支持
- 懒加载：图片和组件懒加载
- 缓存策略：静态资源缓存

## 📱 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 🚀 部署

### Vercel (推荐)
1. 连接GitHub仓库
2. 选择项目根目录
3. 设置构建命令：`npm run build`
4. 设置输出目录：`build`
5. 部署

### Netlify
1. 连接GitHub仓库
2. 设置构建命令：`npm run build`
3. 设置发布目录：`build`
4. 部署

### 传统服务器
1. 运行 `npm run build`
2. 将 `build` 目录上传到服务器
3. 配置Web服务器指向 `build` 目录

## 🔧 自定义配置

### 修改主题色彩
在 `tailwind.config.js` 中修改颜色配置：

```javascript
theme: {
  extend: {
    colors: {
      'blue-primary': '#007AFF',
      'purple-primary': '#5856D6',
    }
  }
}
```

### 添加新页面
1. 在 `src/pages/` 中创建新组件
2. 在 `src/App.js` 中添加路由
3. 在 `src/components/Header.js` 中添加导航链接

## 📄 许可证

© 2025 Weijie Huang. 保留所有权利。

---

*这个React版本提供了更好的性能、可维护性和用户体验，同时保持了原有设计的所有特色和功能。*
