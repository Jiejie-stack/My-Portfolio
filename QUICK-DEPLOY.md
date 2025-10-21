# 快速部署到GitHub Pages

## 🚀 立即解决图片显示问题

### 步骤1：安装部署依赖
```bash
npm install
```

### 步骤2：构建项目
```bash
npm run build
```

### 步骤3：验证构建结果
检查 `build/resources/` 文件夹是否包含所有图片文件：
- hero-image.png
- project-ai-platform.png
- project-ai-calendar.png
- project-analytics-dashboard.png

### 步骤4：部署到GitHub Pages

**方法一：使用npm脚本（推荐）**
```bash
npm run deploy
```

**方法二：手动部署**
1. 将 `build` 文件夹中的所有内容复制到 `gh-pages` 分支
2. 推送到GitHub

### 步骤5：配置GitHub Pages
1. 进入GitHub仓库的 Settings
2. 滚动到 "Pages" 部分
3. 选择 "Deploy from a branch"
4. 选择 `gh-pages` 分支
5. 选择 `/ (root)` 文件夹
6. 点击 Save

### 步骤6：验证部署
访问您的GitHub Pages URL：
`https://[your-username].github.io/[repository-name]`

## 🔧 如果图片仍然不显示

### 检查清单
- [ ] 确认 `build/resources/` 文件夹存在且包含图片
- [ ] 确认GitHub Pages源设置为 `gh-pages` 分支
- [ ] 清除浏览器缓存并强制刷新
- [ ] 检查浏览器开发者工具的网络标签页

### 常见问题
1. **404错误**：图片路径不正确
2. **缓存问题**：浏览器缓存了旧版本
3. **分支问题**：GitHub Pages源设置错误

## 📝 技术说明

### 图片路径
所有图片使用绝对路径 `/resources/image.png`，这在GitHub Pages上应该正常工作。

### React Router
已配置自动检测base path，无需手动设置。

### 构建过程
React构建过程会自动将 `public/resources/` 复制到 `build/resources/`。
