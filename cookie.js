//Created by T1TAN Studio

var cookie = {

  manager: [
    [],
    [],
    []
  ],

  //to add new cookie or update old use cookie.add(name, value[,options]);
  add: function(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
      var d = new Date();
      d.setTime(d.getTime() + expires * 1000);
      expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
      updatedCookie += "; " + propName;
      var propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += "=" + propValue;
      }
    }

    document.cookie = updatedCookie;

    let l = this.manager[0].length;
    this.manager[0][l] = name;
    this.manager[1][l] = value;
    this.manager[2][l] = options;
  },

  //and to remove cookie use cookie.remove(name);
  remove: function(name) {
    cookie.add(name, "", {
      expires: -1
    })
  },

  //to get cookie-value use cookie.get(name);
  get: function(name) {
    for (var i = 0; i < cookie.manager.length; i++) {
      if (name == cookie.manager[0][i]) {
        return cookie.manager[1][i];
        //it works only with cookie, which been added with cookie.add();
      }
    }
  }
}
