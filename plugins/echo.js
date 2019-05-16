import Echo from "laravel-echo"
window.Pusher = require('pusher-js');
export default ({ app }, inject) => {
  inject('echo', new Echo({
    broadcaster: 'pusher',
    key: '383f974a37c5123fb0c7',
    cluster: 'eu',
    encrypted: true
  }));
}
