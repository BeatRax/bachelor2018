// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  touch: {
    // enabled for development
    disableContextMenu: false
  },
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
      ]
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      console.log('Hello World!');
    },
  },
  // App routes
  routes: routes,
});


// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
});
var catalogView = app.views.create('#view-catalog', {
  url: '/catalog/'
});
var profileView = app.views.create('#view-profile', {
  url: '/profile/'
});
var gameView = app.views.create('#game-view', {
  url: '/progression-screen/'
});


function capturePhoto() {
  navigator.camera.getPicture(onSuccess, onFail, {
    quality: 100,
    allowEdit: true,
    targetWidth: 512,
    targetHeight: 512,
    destinationType: Camera.DestinationType.DATA_URL
  });

  function onSuccess(imageData) {
    // $$('.product-image').attr("src", "data:image/png;base64," + imageData);
    var test = imageData;
    $$('.product-image').attr("src", "data:image/jpeg;base64," + imageData);
    $$('.product-image').attr("data-src", imageData);
    // console.log("data:image/jpeg;base64," + imageData);
    console.log("not working?");
  }

  function onFail(message) {
    alert('Failed because: ' + message);
  }
}
$$(document).on('page:init', '.page[data-name="progression-screen"]', function (e) {
  console.log("!fired");












  
});
$$(document).on('page:init', '.page[data-name="home"]', function (e) {
  firebase.auth().onAuthStateChanged(function (user) {
    user = firebase.auth().currentUser;
    if (user) {
      console.log("user is: " + user.email)

      // Showproducts
      db.collection("Items").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().title}`);
          // var product = "<div class='col-50'><div class='img'><img data-id="+ doc.id +"></div><div class='details'><p>" + doc.data().title + "</p><p>" + doc.data().description + "</p><p><b>" + doc.data().price + ".-</b</p></div></div>";

          var product = "<div class='col-50 product-details-modal'><div class='img'><img data-id=" + doc.id + "></div><div class='details'><p>" + doc.data().title + "</p><p>" + doc.data().description + "</p><p><b>" + doc.data().price + ".-</b</p></div></div>";

          $$('.product-parent').append(product);
          $$('[data-id=' + doc.id + ']').css('background-image', 'url(data:image/jpeg;base64,' + doc.data().image + ')')
          // console.log(doc);
          // console.log(doc.data('title'));
        });
      });
    } else {
      console.log("no user");
      app.loginScreen.open('#my-login-screen');

      //dont show products
    }
  })
  $$('.product-details-modal').on('click', function () {
    console.log("hihihi");
  })
});
$$(document).on('page:init', '.page[data-name="create-listing"]', function (e) {

  $$('#capture-photo').on('click', function () {

    capturePhoto();
    console.log("capturePhoto fired!");
  })

  $$('#create-listing').on('click', function () {
    user = firebase.auth().currentUser;
    title = $$("input[name='title']").val();
    description = $$("textarea[name='description']").val();
    price = $$("input[name='price']").val();


    console.log("user " + user.uid);
    console.log("title " + title);
    console.log("desc " + description);
    console.log("price " + price);
    console.log($$('.product-image').attr('src'));
    db.collection("Items").doc().set({
      title: title,
      owner: user.uid,
      description: description,
      price: price,
      image: $$('.product-image').attr('data-src'),
      // image: "test image data",
      qrcode: "generated qr code data",
      datetime: new Date()
    })
      .then(function () {
        console.log("Document successfully written!");
        // page.view.router.refreshPreviousPage();
        app.router.back();
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  });
})


// Login Screen
$$('#my-login-screen .login-button').on('click', function () {
  var email = $$('#my-login-screen [name="email"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function (user) {
      console.log('Du er logget ind som:' + user.email);
      app.loginScreen.close('#my-login-screen');
      app.popup.open($('.popup-choice'), true);
      $('.product-parent').empty();
    })
    .catch(function (err) {
      console.log("register error: " + err);
    });
});

// Login Screen
$$('#my-login-screen .close').on('click', function () {
  app.loginScreen.close('#my-login-screen');
});

$$('#my-login-screen .registrer-button').on('click', function () {
  var email = $$('#my-login-screen [name="email"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function (user) {
      // save user information in 'users' collection
      db.collection("users").doc(firebase.auth().currentUser.uid).set({
        email: firebase.auth().currentUser.email,
        datetime: new Date()
      })
      
      app.loginScreen.close('#my-login-screen');
    })
    .catch(function (err) {
      console.log("register error: " + err);
    });
})

// General firestore user handling
firebase.initializeApp({
  apiKey: "AIzaSyBB5FrvVkgwLiRw0-oBG0s2sd5SlffYeTI",
  authDomain: "usedtoys-e4d2b.firebaseapp.com",
  databaseURL: "https://usedtoys-e4d2b.firebaseio.com",
  projectId: "usedtoys-e4d2b"
});
// var firebase = firebase.initializeApp(config);
var db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});

var ProductDetails = app.popup.create({
  content: "<div class='popup product-details'><div class='dynamic-content'><div class='preloader'></div></div><div class='predefined-content'><div class='col'><a class='link button popup-close'>Luk popup</a></div></div></div>",
  on: {
    open: function (popup) {
      var docRef = db.collection("Items").doc(popup._id);

      docRef.get().then(function (doc) {
        if (doc.exists) {
          $$('.product-details > .dynamic-content').empty();

          var product = "<div class='col-100 product-details-modal'><div class='img'><img data-id=" + doc.id + "></div><div class='details'><p>" + doc.data().title + "</p><p>" + doc.data().description + "</p><p><b>" + doc.data().price + ".-</b</p></div></div>";

          $$('.product-details > .dynamic-content').append(product);
          $$('[data-id=' + doc.id + ']').css('background-image', 'url(data:image/jpeg;base64,' + doc.data().image + ')')

          // Get user details
          var docRef = db.collection("users").doc(doc.data().owner);
          docRef.get().then(function (doc) {
            if (doc.exists) {

              var seller = "<div class='block'><p>Seller of this product is: " + doc.data().email + "</p></div>";

              $$('.product-details > .dynamic-content').append(seller);


            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          }).catch(function (error) {
            console.log("Error getting document:", error);
          });


        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch(function (error) {
        console.log("Error getting document:", error);
      });

    },
    opened: function (popup) {
      //console.log(popup);
    },
    close: function (popup) {
      $$('.product-details > .dynamic-content').empty();
      $$('.product-details > .dynamic-content').append("<div class='preloader'></div>");
    }
  }
});

$$('body').on('click', '.product-details-modal', function () {
  var productTitle = $$(this).children('.img').children('img').attr('data-id');

  ProductDetails._id = productTitle;
  ProductDetails.open();
  // var productTitle = $$(this).children('.img').attr('data-id');


});


$$('body').on('click', '.sign-out-btn > p > a', function () {
  console.log("signed out!");
  firebase.auth().signOut();
  app.tab.show($$('#view-home'), false);
  // profileView.router.back({ignoreCache:false, animate:false, reload:true});
  
  // view.router.load({url:'index.html', ignoreCache:true, reload:true, force:true});
  // app.router.back();

});
$$('body').on('click', '.popup-choice-sale', function () {
console.log("sales clicked!");
app.tab.show($$('#view-home'), false);
app.popup.close($('.popup-choice'), true);

});
$$('body').on('click', '.popup-choice-game', function () {
  
  app.tab.show($$('#game-view'), false);
  app.popup.close($('.popup-choice'), true);

  // gameView.router.navigate({
  //   url: 'progression-screen',
  //   options: {
  //     reloadCurrent: true,
  //     animate: false,
  //     history: false,
  //     clearPreviousHistory: true
  //   }
  // });
  // app.popup.close($('.popup-choice'), true);
  // app.router.load('/progression-screen/');
  // this.$f7.mainView.router.load({url: "/progression-screen"});
  // views.router.load('/progression-screen/');
  // var f7View = this.$root.$children[0].$children[0].$children[0].f7View;
  // console.log('>>> f7View:', f7View);
  // f7View.loadPage('/progression-scree/');
  });