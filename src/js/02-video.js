import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);


const getTime = function (event) {
    localStorage.setItem('videoplayer-current-time', event.seconds);
  };
  
  iframePlayer.on('timeupdate', throttle(getTime, 1000));
  
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    iframePlayer.setCurrentTime(currentTime);
  }