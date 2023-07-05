/*
 * @Date: 2023-07-05 07:30:25
 * @LastEditors: yaoweijian rubygba@foxmail.com
 * @LastEditTime: 2023-07-05 07:58:44
 * @FilePath: /little-pack/public/test/jsx.js
 * @Description: koro desc
 */
import React from './myReact.js'

// export default () => {
//   let x = 'hello world'
//   return (
//     <div>
//       <h1>jsx title</h1>
//       <section>
//         <p>{x}</p>
//       </section>
//     </div>
//   )
// }

export default (() => {
  let x = 'hello world';
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "jsx title"), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("p", null, x)));
});