I use PostCSS cli for a font-scaling (CSS lock) plugin.

PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.

PostCSS is used by industry leaders including Wikipedia, Twitter, Alibaba, and JetBrains. The Autoprefixer PostCSS plugin is one of the most popular CSS processors.

PostCSS takes a CSS file and provides an API to analyze and modify its rules (by transforming them into an Abstract Syntax Tree). This API can then be used by plugins to do a lot of useful things, e.g. to find errors automatically insert vendor prefixes.

PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use. It is recommended by Google and used in Twitter and Taobao.

Write your CSS rules without vendor prefixes (in fact, forget about them entirely):


npm
postcss
postcss-cli
autoprefixer
