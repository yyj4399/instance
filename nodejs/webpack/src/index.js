// import _ from 'lodash';
import { cube } from './math.js';
import printMe from './print';
import './styles.css';

function component () {
  // var element = document.createElement('div');
  var element = document.createElement('pre');

  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  var btn = document.createElement('button');
  btn.innerHTML = '点我';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

// document.body.appendChild(component());
let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if(module.hot){
  module.hot.accept('./print.js', ()=>{
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  });
}