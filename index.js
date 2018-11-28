#! node

//顶部"#! node"很重要，表示node来执行这个文件

//创建用户输入的目录名称，如果没有输入则默认light-app
let _userdir = 'light-app';
if (process.argv.slice(2)[0]) {
    _userdir = process.argv.slice(2)[0];
}

let fs = require('fs');
let path = require('path');

let _src = path.join(__dirname, 'templates');
fs.readdir(_src, function(err, files) {
    if (err) {}
    console.info('读取文件：', files);
});

function copyTemplate(from, to) {
    from = path.join(__dirname, 'templates', from);
    write(to, fs.readFileSync(from, 'utf-8'))
}

function write(path, str, mode) {
    fs.writeFileSync(path, str)
}

function mkdir(path, fn) {
    fs.mkdir(path, function(err) {
        fn && fn()
    });
}

let PATH = './' + _userdir;

mkdir(PATH, function() {
    //拷贝文件
    copyTemplate('index.html', PATH + '/index.html')
});