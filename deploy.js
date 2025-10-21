const ghpages = require('gh-pages');
const path = require('path');

// 配置GitHub Pages部署
const options = {
  branch: 'gh-pages',
  repo: 'https://github.com/[your-username]/[your-repo-name].git', // 替换为您的仓库URL
  dest: '.'
};

console.log('开始部署到GitHub Pages...');

ghpages.publish(path.join(__dirname, 'build'), options, (err) => {
  if (err) {
    console.error('部署失败:', err);
  } else {
    console.log('部署成功！');
    console.log('请访问您的GitHub Pages URL查看结果。');
  }
});
