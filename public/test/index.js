/*
 * @Author: yaoweijian rubygba@foxmail.com
 * @Date: 2023-06-25 10:27:38
 * @LastEditors: yaoweijian rubygba@foxmail.com
 * @LastEditTime: 2023-06-27 14:04:59
 * @FilePath: /little-pack/public/test/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { myAll } from './promise.js'

console.log('myAll', myAll)

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1 res')
  }, 100)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2 res')
  }, 1000)
})

const allRes = await Promise.all([p1, p2])
console.log('allRes', allRes)
// console.log(myAll([p1, p2]))
console.log(myAll([p1, p2])
  .then(res => console.log(res))
  .catch(e => console.error(e)))

import { lazyMan } from './hook.js'
const a = new lazyMan('aaa').sleep(100).sleepBefore(500)