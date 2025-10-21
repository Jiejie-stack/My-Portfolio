# GitHub Pages 部署指南

## 问题解决

### 图片不显示的原因
1. **构建问题**：图片文件没有正确复制到build目录
2. **路径问题**：GitHub Pages的base path配置不正确
3. **部署配置**：缺少正确的GitHub Actions配置

### 解决方案

#### 1. 确保图片正确构建
```bash
npm run build
```
检查 `build/resources/` 文件夹是否包含所有图片文件。

#### 2. 配置GitHub Pages

**方法一：使用GitHub Actions（推荐）**

1. 将代码推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择 "GitHub Actions" 作为源
4. 推送代码后，GitHub Actions会自动构建和部署

**方法二：手动部署**

1. 运行 `npm run build`
2. 将 `build` 文件夹中的所有内容推送到 `gh-pages` 分支
3. 在仓库设置中选择 `gh-pages` 分支作为源

#### 3. 验证部署

部署完成后，访问您的GitHub Pages URL：
- 格式：`https://[username].github.io/[repository-name]`
- 检查图片是否正常显示

#### 4. 常见问题排查

**图片仍然不显示？**

1. **检查控制台错误**：
   - 打开浏览器开发者工具
   - 查看Network标签页
   - 检查图片请求是否返回404错误

2. **检查图片路径**：
   - 确保图片路径以 `/resources/` 开头
   - 检查GitHub Pages的base path设置

3. **清除缓存**：
   - 强制刷新页面（Ctrl+F5）
   - 清除浏览器缓存

4. **检查文件大小**：
   - 确保图片文件没有超过GitHub的限制
   - 当前图片文件大小都在合理范围内

#### 5. 文件结构验证

部署后的正确结构应该是：
```
https://[username].github.io/[repository-name]/
├── index.html
├── resources/
│   ├── hero-image.png
│   ├── project-ai-platform.png
│   ├── project-ai-calendar.png
│   └── project-analytics-dashboard.png
└── static/
    ├── css/
    └── js/
```

## 技术说明

### React Router 配置
如果使用React Router，可能需要配置 `basename`：

```jsx
<BrowserRouter basename="/repository-name">
  <App />
</BrowserRouter>
```

### 图片路径
所有图片路径都使用绝对路径：
```jsx
<img src="/resources/hero-image.png" alt="Description" />
```

这确保了在GitHub Pages上图片路径的正确性。

## 部署检查清单

- [ ] 运行 `npm run build` 成功
- [ ] `build/resources/` 文件夹包含所有图片
- [ ] 推送到GitHub仓库
- [ ] 配置GitHub Pages源
- [ ] 访问部署的URL
- [ ] 检查图片是否正常显示
- [ ] 测试所有页面功能
