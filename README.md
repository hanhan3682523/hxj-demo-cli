1、第一步 git 创建仓库
2、clone 项目，执行npm init
3、package.json中添加bin配置
"bin":{
    "hxj-demo-cli":"./index.js"  //此处的hxj-demo-cli 为你自己成cli名称
}
4、新增index.js文件
5、执行npm install -g，此时该cli就会被全局安装
6、思考：如何生成项目模板呢？
    思路1：把模板放到一个文件夹(templates)中保存，然后通过fs.mkdir()来创建项目目录，然后把文件从templates拷贝到项目中。
    思路2：便利服务器上的文件夹和文件内容，然后写到本地，通过readdir 读取文件目录及文件

7、执行npm adduser，创建npm账号
8、执行npm publish发布当前的项目 