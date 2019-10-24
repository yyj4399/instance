import _ from 'lodash';
import printMe from './print';

if (process.env.NODE_ENV !== 'production') {
  console.log('开发模式');
}

function component () {
  // var element = document.createElement('div');
  var element = document.createElement('pre');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.innerHTML = [
  //   'Hello webpack!'
  // ].join('\n\n');

  var btn = document.createElement('button');
  btn.innerHTML = '点我';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

// document.body.appendChild(component());
// 将let修改为var，是因为使用uglifyjs-webpack-plugin压缩时，会报错: 
// Unexpected token: name «src_element», expected: punc «;»
// WTF文档?
var element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if(module.hot){
  module.hot.accept('./print.js', ()=>{
    console.log('Accepting the updated printMe module!');
    // document.body.removeChild(element);
    // element = component(); // 重新渲染页面后，component 更新 click 事件处理
    // document.body.appendChild(element);
  });
}