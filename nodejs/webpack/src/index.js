import _ from 'lodash';
import './style.css';
import Avatar from './avatar.jpeg';

function component () {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myAvatar = new Image();
  myAvatar.src = Avatar;
  element.appendChild(myAvatar);

  return element;
}

document.body.appendChild(component());