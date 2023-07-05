/*
 * @Author: yaoweijian rubygba@foxmail.com
 * @Date: 2023-06-27 13:38:58
 * @LastEditors: yaoweijian rubygba@foxmail.com
 * @LastEditTime: 2023-06-27 14:28:43
 * @FilePath: /little-pack/public/test/hook.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export class lazyMan {
  constructor(name = '') {
    this.stack = []
    console.log(`my name is ${name}`)
    setTimeout(() => {
      this.next()
    }, 0)
  }

  next() {
    const work = this.stack.shift()
    work && work()
  }

  sleep(time = 1000) {
    this.stack.push(() => {
      setTimeout(() => {
        console.log(`sleep over ${time}`)
        this.next()
      }, time)
    })
    // this.next()
    return this
  }

  sleepBefore(time = 1000) {
    this.stack.unshift(() => {
      setTimeout(() => {
        console.log(`sleep over ${time} (before)`)
        this.next()
      }, time)
    })
    // this.next()
    return this
  }
}