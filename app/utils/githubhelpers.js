var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id="+ id + "&client_secret="+ sec;

function getUserInfo (username){
  return axios.get('https://api.github.com/users/'+ username + param);
}

var helpers = {
  getPlayersInfo: function(players){
    //fetch some data from github
    // axios.all waits for "map" to return everyting it has to do
    return axios.all(players.map(function(username){
      //get all of the users info
      return getUserInfo(username);
    })).then(function(info){
      //modify it so that I only see the data I care about
      return info.map(function(user){
        return user.data;
      });
    }).catch(function(err){
      //error catcher just in case
      console.warn('error in getPlayersInfo', err);
    });
  }
};

module.exports = helpers;
