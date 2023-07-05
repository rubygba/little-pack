/*
 * @Date: 2023-07-05 07:34:26
 * @LastEditors: yaoweijian rubygba@foxmail.com
 * @LastEditTime: 2023-07-05 07:52:36
 * @FilePath: /little-pack/public/test/renderer.js
 * @Description: koro desc
 */
export function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === 'object' ? child : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  };
}
