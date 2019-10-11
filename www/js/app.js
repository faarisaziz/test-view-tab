var app = new Framework7({
  root: '#app',
  name: 'TestApp',
  id: 'com.test.app',
  routes: routes,
  theme: 'auto',
  // statusbar: {
  //   enable: true,
  //   overlay: 'auto',
  //   iosOverlaysWebView: false,
  //   androidOverlaysWebView: false,
  //   androidBackgroundColor: '#19bbbb',
  //   androidTextColor: 'white',
  // },
});

var mainView = app.views.create('.view-main');

$(document).on("deviceready", function() {
  var currentUser = localStorage.getItem("user");
  if (currentUser != null) {
    mainView.router.navigate({url: '/'});
  } else {
    mainView.router.navigate({url: '/get-started/'});
  }
});