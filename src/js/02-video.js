import Player from '@vimeo/player';
const throttle = require("lodash.throttle");
console.log(Player);
localStorage.setItem('test', 'test');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(trackTime, 1000));
function trackTime(timeupdate) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(timeupdate.seconds)
  );
}


const videoplayerCurrentTime = localStorage.getItem('videoplayer-current-time');
if (videoplayerCurrentTime) {
    player.setCurrentTime(videoplayerCurrentTime)
}
  
