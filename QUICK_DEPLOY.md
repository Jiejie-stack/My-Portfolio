# 🚀 快速部署指南

## 最简单的方式：3 步完成部署

### 方法一：GitHub Pages（推荐）⭐

#### 步骤 1：推送代码到 GitHub

```bash
# 如果还没有初始化 Git
git init
git add .
git commit -m "Initial commit"
git branch -M main

# 添加到 GitHub（需要先创建仓库）
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

#### 步骤 2：启用 GitHub Pages

1. 进入 GitHub 仓库页面
2. 点击 `Settings`（设置）
3. 在左侧菜单找到 `Pages`
4. 在 `Source` 中选择 `GitHub Actions`
5. 保存设置

#### 步骤 3：等待自动部署

- 推送代码后，GitHub Actions 会自动构建和部署
- 等待 2-3 分钟，访问：`https://你的用户名.github.io/你的仓库名/`

✅ **完成！** 您的网站已经上线了！

---

### 方法二：Vercel（30 秒完成）⚡

1. 访问 https://vercel.com
2. 使用 GitHub 账号登录
3. 点击 `Add New Project`
4. 选择您的仓库
5. 点击 `Deploy`

✅ **完成！** 自动获得一个免费域名：`https://你的项目名.vercel.app`

---

### 方法三：Netlify（30 秒完成）⚡

1. 访问 https://www.netlify.com
2. 使用 GitHub 账号登录
3. 点击 `Add new site` → `Import an existing project`
4. 选择您的仓库
5. 配置：
   - Build command: `npm run build`
   - Publish directory: `build`
6. 点击 `Deploy site`

✅ **完成！** 自动获得一个免费域名：`https://随机名称.netlify.app`

---

## 需要帮助？

详细教程请查看：[DEPLOYMENT.md](./DEPLOYMENT.md)

常见问题请查看：[DEPLOYMENT.md#常见问题解决](./DEPLOYMENT.md#常见问题解决)

---

**推荐顺序**：
1. **GitHub Pages** - 最稳定，适合个人项目
2. **Vercel** - 最快速，自动部署
3. **Netlify** - 功能丰富，CDN 加速

