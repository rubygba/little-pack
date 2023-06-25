/*
 * @Author: yaoweijian rubygba@foxmail.com
 * @Date: 2023-06-25 10:26:26
 * @LastEditors: yaoweijian rubygba@foxmail.com
 * @LastEditTime: 2023-06-25 10:58:31
 * @FilePath: /little-pack/littlepack.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 1. 找到入口
// 2. 解析入口，提取依赖 // babel AST explorer
// 3. 递归解析入口的依赖，创建文件间的依赖图，描述所有文件的依赖关系
// 4. 把所有文件打包成一个

const fe = require('fs')
const babylon = require('babylon')
const traverse = require('babel-traverse').default

function createAsset(filename) {
  const content = fs.readFileSync(filename, 'utf-8')
  const ast = babylon.parse(content, {
    sourceType: 'module'
  })
  
}

createAsset('./src/entry.js')