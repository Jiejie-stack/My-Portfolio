# Vercel 部署配置说明

## 问题修复

如果您的 Vercel 网站显示空白页面，这是因为 `package.json` 中的 `homepage` 字段设置为 GitHub Pages 路径，导致资源路径错误。

## 解决方案

### 方法一：在 Vercel 中设置环境变量（推荐）

1. 登录 Vercel 控制台
2. 进入您的项目设置
3. 点击 **Settings** → **Environment Variables**
4. 添加以下环境变量：
   - **Name**: `PUBLIC_URL`
   - **Value**: `/`（或留空）
   - **Environment**: Production, Preview, Development（全部选择）
5. 点击 **Save**
6. 重新部署项目：
   - 进入 **Deployments** 页面
   - 点击最新部署右侧的 **...** 菜单
   - 选择 **Redeploy**

### 方法二：修改 Vercel 项目设置

1. 进入 Vercel 项目设置
2. 点击 **Settings** → **General**
3. 在 **Build & Development Settings** 中：
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`
4. 在 **Environment Variables** 中添加：
   - `PUBLIC_URL=/`（或留空）

### 方法三：使用 Vercel CLI（可选）

如果您使用 Vercel CLI，可以运行：

```bash
vercel env add PUBLIC_URL
# 输入值：/ 或留空
```

## 验证修复

部署完成后，访问您的网站：
- 检查浏览器控制台是否有错误
- 检查资源路径是否正确（应该以 `/` 开头，而不是 `/My-Portfolio`）
- 检查页面是否正常显示

## 常见问题

### Q: 为什么会出现空白页面？

A: 因为 `package.json` 中的 `homepage` 设置为 `https://Jiejie-stack.github.io/My-Portfolio`，这导致在 Vercel 构建时，所有资源路径都会加上 `/My-Portfolio` 前缀，导致资源无法加载。

### Q: 修改后会影响 GitHub Pages 部署吗？

A: 不会。代码已经更新，会自动检测部署平台。在 GitHub Pages 上会使用 `/My-Portfolio` 路径，在 Vercel 上会使用 `/` 路径。

### Q: 如何同时支持 GitHub Pages 和 Vercel？

A: 代码已经支持！`App.js` 会自动检测当前部署平台并设置正确的 basename。只需确保：
- GitHub Pages：保持 `homepage` 字段不变
- Vercel：设置 `PUBLIC_URL=/` 环境变量

## 文件说明

- `vercel.json`: Vercel 路由配置文件，确保所有路由都指向 `index.html`
- `src/App.js`: 已更新，自动检测部署平台并设置正确的 basename

---

**修复完成后，请重新部署项目！**

