// Initialize app
var myApp = new Framework7({
  touch: {
    // enabled for development
    disableContextMenu:false
    },
  routes: [
    {
      path: '/index/',
      url: 'index.html',
    },
    {
      path: '/about/',
      url: 'about.html',
    },
    {
      path: '/create-listing/',
      url: 'create-listing.html',
    },
    {
      path: '/buy/',
      url: 'buy.html',
    },
    {
      path: '/login/',
      id: 'login',
      url: 'login.html',
      options: {
        animate: true,
      }
    },

  ]

});


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
// var mainView = myApp.addView('.view-main', {
//   // Because we want to use dynamic navbar, we need to enable it for this view:
//   dynamicNavbar: true
// });


// Handle Cordova Device Ready Event
$$(document).on('deviceready', function () {
  console.log("Device is ready!");


});

// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
// myApp.onPageInit('login-screen', function (page) {

// });

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
  // Get page data from event data
  var page = e.detail.page;

  if (page.name === 'about') {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
  }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
  // Following code will be executed for page with data-page attribute equal to "about"
  myApp.alert('Here comes About page');
})

//login screen po up
$$('.login-screen .list-button').on('click', function () {
  var uname = $$('.login-screen input[name = "username"]').val();
  var pwd = $$('.login-screen input[name = "password"]').val();

  myApp.alert('Username: ' + uname + ', Password: ' + pwd, function () {
    // myApp.closeModal('.login-screen');
  });
});

//



// Dom Events
$$('.panel-left').on('panel:open', function () {
  console.log('Panel left: open');
});
$$('.panel-left').on('panel:opened', function () {
  console.log('Panel left: opened');
});

// Instance Events
// var panelRight = myApp.panel.right;
// panelRight.on('open', function () {
//   console.log('Panel right: open');
// });
// panelRight.on('opened', function () {
//   console.log('Panel right: opened');
// });

// App Events
myApp.on('panelClose', function (panel) {
  console.log('Panel ' + panel.side + ': close');
});
myApp.on('panelClosed', function (panel) {
  console.log('Panel ' + panel.side + ': closed');
});
