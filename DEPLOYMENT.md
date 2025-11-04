# 部署教程 - 最简单快捷的方式

本教程将帮助您将作品集网站部署到服务器。我们提供了多种部署方式，从最简单到最灵活。

---

## 📋 目录

1. [方式一：GitHub Pages（最简单，推荐）](#方式一github-pages最简单推荐)
2. [方式二：Vercel（免费，自动部署）](#方式二vercel免费自动部署)
3. [方式三：Netlify（免费，简单）](#方式三netlify免费简单)
4. [方式四：传统服务器部署](#方式四传统服务器部署)
5. [常见问题解决](#常见问题解决)

---

## 方式一：GitHub Pages（最简单，推荐）⭐

GitHub Pages 是最简单的免费部署方式，适合个人作品集网站。

### 步骤 1：准备项目

确保您的项目已经在 GitHub 上：

1. 如果没有 GitHub 账号，请先注册：https://github.com
2. 在 GitHub 上创建一个新仓库（Repository）
3. 将本地代码上传到 GitHub：

```bash
# 在项目根目录执行
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

### 步骤 2：安装依赖并构建

```bash
# 安装依赖
npm install

# 构建项目（生成 build 文件夹）
npm run build
```

### 步骤 3：配置 GitHub Pages

#### 方法 A：使用 GitHub Actions（推荐，自动部署）

1. 确保项目中已经有 `.github/workflows/deploy.yml` 文件（项目已包含）
2. 如果没有，创建文件 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Setup Pages
      uses: actions/configure-pages@v4
      
    - name: Upload artifact
      uses: actions/upload-pages-artifact@v3
      with:
        path: ./build
        
    - name: Deploy to GitHub Pages
      id: deployment
      uses: actions/deploy-pages@v4
```

3. 在 GitHub 仓库设置中启用 GitHub Pages：
   - 进入仓库页面
   - 点击 `Settings`（设置）
   - 在左侧菜单找到 `Pages`
   - 在 `Source` 中选择 `GitHub Actions`
   - 保存设置

4. 推送代码到 GitHub：

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push
```

5. 等待几分钟，GitHub Actions 会自动构建并部署
6. 访问您的网站：`https://你的用户名.github.io/你的仓库名/`

#### 方法 B：手动部署（简单但需要手动操作）

1. 在项目根目录执行：

```bash
# 安装 gh-pages 工具（如果还没安装）
npm install --save-dev gh-pages

# 构建项目
npm run build

# 部署到 GitHub Pages
npm run deploy
```

2. 在 GitHub 仓库设置中启用 GitHub Pages：
   - 进入仓库页面 → `Settings` → `Pages`
   - 在 `Source` 中选择 `gh-pages` 分支
   - 保存设置

3. 访问您的网站：`https://你的用户名.github.io/你的仓库名/`

### 步骤 4：配置自定义域名（可选）

如果您有自己的域名：

1. 在仓库的 `Settings` → `Pages` 中，输入您的自定义域名
2. 在您的域名 DNS 设置中添加 CNAME 记录：
   - 类型：CNAME
   - 名称：@ 或 www
   - 值：`你的用户名.github.io`

---

## 方式二：Vercel（免费，自动部署）⭐

Vercel 提供免费的自动部署，非常适合 React 应用。

### 步骤 1：准备项目

确保项目代码已推送到 GitHub（参考方式一的步骤 1）

### 步骤 2：部署到 Vercel

1. 访问 Vercel：https://vercel.com
2. 使用 GitHub 账号登录
3. 点击 `Add New Project`（添加新项目）
4. 导入您的 GitHub 仓库
5. 配置项目：
   - **Framework Preset**: Create React App
   - **Root Directory**: `./`（默认）
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
6. 点击 `Deploy`（部署）

### 步骤 3：完成

- Vercel 会自动构建和部署您的网站
- 部署完成后会提供一个免费域名：`https://你的项目名.vercel.app`
- 每次推送代码到 GitHub，Vercel 会自动重新部署

### 步骤 4：配置自定义域名（可选）

1. 在项目设置中找到 `Domains`
2. 添加您的自定义域名
3. 按照提示配置 DNS 记录

---

## 方式三：Netlify（免费，简单）

Netlify 也是一个很好的免费部署平台。

### 步骤 1：准备项目

确保项目代码已推送到 GitHub

### 步骤 2：部署到 Netlify

#### 方法 A：通过网页界面（最简单）

1. 访问 Netlify：https://www.netlify.com
2. 使用 GitHub 账号登录
3. 点击 `Add new site` → `Import an existing project`
4. 选择 `GitHub` 并授权
5. 选择您的仓库
6. 配置构建设置：
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
7. 点击 `Deploy site`

#### 方法 B：通过 Netlify CLI

```bash
# 安装 Netlify CLI
npm install -g netlify-cli

# 登录 Netlify
netlify login

# 构建项目
npm run build

# 部署
netlify deploy --prod --dir=build
```

### 步骤 3：完成

- 部署完成后会提供一个免费域名：`https://随机名称.netlify.app`
- 可以在设置中修改为自定义名称

---

## 方式四：传统服务器部署

如果您有自己的服务器（如阿里云、腾讯云等），可以按以下步骤部署。

### 步骤 1：构建项目

```bash
# 安装依赖
npm install

# 构建项目
npm run build
```

### 步骤 2：上传文件

1. 将 `build` 文件夹中的所有文件上传到服务器的网站根目录
   - 常见路径：`/var/www/html` 或 `/usr/share/nginx/html`
2. 可以使用 FTP 工具（如 FileZilla）或 SCP 命令：

```bash
# 使用 SCP 上传（Linux/Mac）
scp -r build/* username@服务器IP:/var/www/html/

# 或使用 rsync
rsync -avz build/ username@服务器IP:/var/www/html/
```

### 步骤 3：配置 Web 服务器

#### Nginx 配置示例

```nginx
server {
    listen 80;
    server_name 你的域名.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### Apache 配置示例

创建 `.htaccess` 文件在网站根目录：

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### 步骤 4：配置 HTTPS（推荐）

使用 Let's Encrypt 免费 SSL 证书：

```bash
# 安装 Certbot
sudo apt-get install certbot python3-certbot-nginx

# 获取证书（Nginx）
sudo certbot --nginx -d 你的域名.com

# 或 Apache
sudo certbot --apache -d 你的域名.com
```

---

## 常见问题解决

### 问题 1：页面刷新后 404 错误

**原因**：React Router 使用客户端路由，需要服务器配置支持。

**解决方案**：
- **GitHub Pages**: 确保 `homepage` 在 `package.json` 中正确配置
- **Nginx**: 添加 `try_files $uri $uri/ /index.html;`
- **Apache**: 添加 `.htaccess` 重写规则（见上方）

### 问题 2：资源路径错误

**原因**：构建后的资源路径可能不正确。

**解决方案**：
1. 检查 `package.json` 中的 `homepage` 字段
2. 对于 GitHub Pages，应该是：`"homepage": "https://用户名.github.io/仓库名"`
3. 对于根域名，应该是：`"homepage": "https://你的域名.com"`

### 问题 3：图片不显示

**原因**：图片路径可能在构建后不正确。

**解决方案**：
1. 确保图片放在 `public/resources/` 目录下
2. 在代码中使用 `/resources/图片名.png` 而不是相对路径
3. 重新构建项目：`npm run build`

### 问题 4：样式不生效

**原因**：CSS 文件可能未正确加载。

**解决方案**：
1. 检查浏览器控制台是否有错误
2. 确保 `index.css` 已正确导入
3. 清除浏览器缓存后重新加载

### 问题 5：GitHub Pages 部署后显示空白页面

**原因**：可能是路由配置问题。

**解决方案**：
1. 检查 `package.json` 中的 `homepage` 是否正确
2. 检查 `App.js` 中的 `basename` 配置
3. 确保 `build` 文件夹中的 `index.html` 正确

---

## 📝 快速检查清单

部署前检查：

- [ ] 代码已推送到 GitHub
- [ ] `package.json` 中的 `homepage` 已正确配置
- [ ] 已运行 `npm run build` 并成功
- [ ] `build` 文件夹中包含所有文件
- [ ] 图片资源路径正确
- [ ] 测试本地构建：`npx serve -s build`

部署后检查：

- [ ] 网站可以正常访问
- [ ] 所有页面路由正常
- [ ] 图片和资源加载正常
- [ ] 移动端显示正常
- [ ] 链接和导航正常工作

---

## 🎉 完成！

您的作品集网站现在已经部署到服务器了！

**推荐部署方式**：
- **最简单**：GitHub Pages（适合个人项目）
- **最灵活**：Vercel（适合 React 应用，自动部署）
- **最稳定**：Netlify（功能丰富，CDN 加速）

如有任何问题，请查看项目的 README.md 或提交 Issue。

---

**最后更新**：2025-01-27

