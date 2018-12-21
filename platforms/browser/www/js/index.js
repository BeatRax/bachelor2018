var config = {
    apiKey: "AIzaSyBB5FrvVkgwLiRw0-oBG0s2sd5SlffYeTI",
    authDomain: "usedtoys-e4d2b.firebaseapp.com",
    databaseURL: "https://usedtoys-e4d2b.firebaseio.com",
    projectId: "usedtoys-e4d2b"
 };
var firebase = firebase.initializeApp(config);
console.log(firebase.name);

$(document).ready(function () {
   
    firebase.auth().onAuthStateChanged(function (user) {
        var user = firebase.auth().currentUser;

        if (user) {
            // $('.views').append("<p>Du er logget ind som:" + user.email + " </p>")
            // myApp.closeModal('.login-screen');
            $('html').fadeTo( "fast", 1 );

        } else {
            // $('.views').append("<p>Du er ikke logget ind</p>")
            console.log("not logged in");
            $('.hide-when-logged-in').show();
            $('html').fadeTo( "fast", 1 );
            
        }
    })
    $('.close-popup.back').click(function() {
        // myApp.closeModal('.login-screen');
    })
    
    $('p.sign-up').click(function () {
        // var provider = new firebase.auth.FacebookAuthProvider();

        email = $("input[name='email']").val();
        password = $("input[name='password']").val();

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function (user) {
            console.log(user.email);
            // myApp.closeModal('.login-screen');
            // location.reload();
        })
            .catch(function (err) {
                console.log("register error: " + err);
            });

        // $.ajax({
        //     type: 'POST',
        //     crossDomain: true,
        //     async: true,
        //     cache : false,
        //     data: {
        //         action: 'createUser',
        //         username: $( "input[name='username']" ).val(),
        //         password: $( "input[name='password']" ).val()
        //     },
        //     url: "http://jeppejulius.dk/LastChance/index.php",
        //     dataType: 'JSONc',
        //     success: function() {
        //         alert("Worked!!!");
        //     }
        // })

    })
    $('p.log-in').click(function () {
        console.log("clicked!");
        // var provider = new firebase.auth.FacebookAuthProvider();
        // provider.addScope('user_birthday');

        email = $("input[name='email']").val();
        password = $("input[name='password']").val();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function (user) {
                console.log(user.email);
                // myApp.closeModal('.login-screen');
                // window.location("/index.html");
            })
            .catch(function (err) {
                console.log("register error: " + err);
            });

        // $.ajax({
        //     type: 'POST',
        //     crossDomain: true,
        //     async: true,
        //     cache : false,
        //     data: {
        //         action: 'createUser',
        //         username: $( "input[name='username']" ).val(),
        //         password: $( "input[name='password']" ).val()
        //     },
        //     url: "http://jeppejulius.dk/LastChance/index.php",
        //     dataType: 'JSONc',
        //     success: function() {
        //         alert("Worked!!!");
        //     }
        // })

    })
    $('.tester > div > .log-out').click(function () {
        firebase.auth().signOut();
        location.reload();
        
    });
    $('.tester > div > button').click(function () {

        $.ajax({
            type: 'POST',
            crossDomain: true,
            async: true,
            cache: false,
            data: {
                action: 'getUser',
                username: $("input[name='username']").val(),
                password: $("input[name='password']").val()
            },
            url: "http://jeppejulius.dk/LastChance/index.php",
            dataType: 'JSONc',
            success: function () {
                alert("Worked!!!");
            }
        })

    })
})