 import _ from 'lodash';
 import './style.css';
 import Icon from './icon.png';
 import Data from './data.xml';
 import printMe  from './print.js';

 function component() {
  var element = document.createElement('div');

  var btn = document.createElement('button');

  // lodash 是由当前 script 脚本 import 导入进来的
  element.innerHTML = _.join(['Hello', 'webpackApp'], ' ');
  btn.innerHTML = '点击这里，然后查看 console！';
  btn.onclick = printMe;
  element.appendChild(btn);

 element.classList.add('hello');
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  console.log(Data);
  return element;
}

document.body.appendChild(component());
