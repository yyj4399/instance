import _ from 'lodash';
import print from './print';
// import printMe from './print';

if (process.env.NODE_ENV !== 'production') {
  console.log('开发模式');
}

function component () {
  // var element = document.createElement('div');
  // var element = document.createElement('pre');

  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.innerHTML = [
  //   'Hello webpack!'
  // ].join('\n\n');
  // let ss = 'ss';
  var element = document.createElement('div');
  // var button = document.createElement('button');
  // var br = document.createElement('br');
  // button.innerHTML = '点这里';
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.appendChild(br);
  // element.appendChild(button);
  // button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
  //   var print = module.default;
  //   print();
  // });
  // const _ = import(/* webpackChunkName: "lodash" */ 'lodash');
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // return element;

  var btn = document.createElement('button');
  btn.innerHTML = '点我';
  btn.onclick = print();
  element.appendChild(btn);

  return element;
}

// getComponent().then(component => {
//   document.body.appendChild(component);
// });
// document.body.appendChild(component());
// 将let修改为var，是因为使用uglifyjs-webpack-plugin压缩时，会报错: 
// Unexpected token: name «src_element», expected: punc «;»
// WTF文档?
let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if(module.hot){
  module.hot.accept('./print.js', ()=>{
    console.log('Accepting the updated printMe module!');
    // document.body.removeChild(element);
    // element = component(); // 重新渲染页面后，component 更新 click 事件处理
    // document.body.appendChild(element);
  });
}