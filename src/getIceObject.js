const $ = require('jquery');

function getIceObject(cb) {
  $.ajax ({
    url: "https://global.xirsys.net/_turn/tantrinh.github.io/",
    type: "PUT",
    //async: false,
    headers: {
    "Authorization": "Basic " + btoa("TanTrinh:18d66fac-439a-11e8-8c70-9fc70ae91c5b")
    },
    success: function (res){
      //console.log("ICE List: "+res.v.iceServers);
      cb(res.v.iceService);
    }
  });
}

module.exports = getIceObject;
