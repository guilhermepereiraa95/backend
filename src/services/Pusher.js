const Pusher = require('pusher');

const pusher = new Pusher({
  appId: "1430542",
  key: "81dfc3beb94ac0494c83",
  secret: "a3e96d79292b0f1714e8",
  cluster: "sa1",
  useTLS: true
});

module.exports = pusher;