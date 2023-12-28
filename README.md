# 如何更新该文档

## 本地环境配置

> 请提前安装好 Node.js，版本大于等于18。

1. folk 该项目到你的仓库，克隆项目到本地。
2. 进入项目目录。

```bash
cd oervwiki/
```
3. 安装项目依赖
```js
npm install
```
4. 查看 package.json 中 vitepress 命令，本地运行选择`vitepress dev docs`。
5. 打开`http://localhost:5173/`本地访问wiki网站。

## 新增文档栏目

> vitepress 非常简洁，新增栏目只需要修改`.vitepress`下的`config.mts`

1. 打开 `config.mts`,在`xxx`文件夹中新增一条文档内容`new.md`。

```js
{ text: '在物理机中安装',
  collapsed:false,
  items: [
    {text:'LicheePi 4A',link:'devices/licheepi_4a'},
    {text:'VisionFive 2',link:'devices/visionfive_2'},
    {text:'Milk-V Pioneer Box',link:'devices/milk-v_pioneer_box'},
    {text:'全志D1哪吒',link:'devices/d1_nezha'},
    {text:'xxxx',link:'xxx/new.md'},
  ]
}
```
2. 手动创建`xxx`文件夹，在`xxx`文件夹下新增`new.md`文件，并完善文档内容。
3. 打开本地网站查看文档内容是否显示正常，如果内容正常，请提交修改到 github，并提交 pull request。
