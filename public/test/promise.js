/*
 * @Author: yaoweijian rubygba@foxmail.com
 * @Date: 2023-06-23 09:15:21
 * @LastEditors: yaoweijian rubygba@foxmail.com
 * @LastEditTime: 2023-06-25 10:24:47
 * @FilePath: /little-pack/public/test/promise.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function myAll (arr) {
  return new Promise ((resolve, reject) => {
    if (!Array.isArray(arr)) return reject(new Error('传入参数必须是数组'))

    let result = []
    let count = 0
    arr.forEach((item, i) => Promise.resolve(item).then((val) => {
      count++
      result[i] = val

      if (count >= arr.length) {
        return resolve(result)
      }
    }))
    // if (count >= arr.length - 1) {
    //   return resolve(result)
    // }
  }).catch(e => reject(e))
  
}