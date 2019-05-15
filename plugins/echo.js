import Echo from "laravel-echo"
window.Pusher = require('pusher-js');
export default ({ app }, inject) => {
  inject('echo', new Echo({
    broadcaster: 'pusher',
    key: 'c8c8c608c86e9773b24b',
    cluster: 'eu',
    encrypted: true
  }));
}
