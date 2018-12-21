

$(document).ready(function () {


    firebase.auth().onAuthStateChanged(function (user) {
        var user = firebase.auth().currentUser;

        if (user) {
            $('.content-block').append("<p>Du er logget ind som:" + user.email + " </p>")
        } else {
            $('.content-block').append("<p>Du er ikke logget ind</p>")
        }
    })

    $('.tester > div > .sign-up').click(function () {
        // var provider = new firebase.auth.FacebookAuthProvider();

        email = $("input[name='email']").val(),
            password = $("input[name='password']").val()

        firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
            location.reload();
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
    $('.tester > div > .log-in').click(function () {
        console.log("clicked!");
        // var provider = new firebase.auth.FacebookAuthProvider();
        // provider.addScope('user_birthday');

        email = $("input[name='email']").val(),
            password = $("input[name='password']").val()

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function (user) {
                location.reload();
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