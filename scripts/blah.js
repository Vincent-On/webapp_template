function sayHello() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            // Do something for the user here. 
            console.log(user.uid);
            db.collection("users").doc(user.uid)
                .get()
                .then(function (doc) {
                    var n = doc.data().name;
                    var m = doc.data().email;
                    var x = doc.data().phone_number;
                    console.log(n);
                    console.log(m);
                    console.log(x);
                    //using jquery
                    $("#username").text(n);
                    $("#email").text(m);
                    $("#number").text(x);
                    //using vanilla javascript
                    //document.getElementById("username").innerText = n;
                })
        } else {
            // No user is signed in.
        }
    });
}
sayHello();


// function getDetails() {
//     // https://some.site/?id=123
//     const parsedUrl = new URL(window.location.href);
//     console.log(parsedUrl.searchParams.get("id")); // "123"

//     // extract id from url, assign to variable
//     var id = parsedUrl.searchParams.get("id");
//     console.log(id);

//     // use this ID to read from firestore
//     db.collection("Restaurants")
//         .doc(id) //webcam ID that we extracted
//         .get()
//         .then(function (doc) { // display details!
//             var name = doc.data().fields.name;
//             //var geo_area = doc.data().fields.geo_local_area;
//             //var coord = doc.data().fields.geom.coordinates;
//             //var url = doc.data().fields.url;
//             $("#details-go-here").append("<h1> " + name + "</h1>");
//         /*  $("#details-go-here").append("<h1> " + geo_area + "</h1>");
//             $("#details-go-here").append("<h1> " + coord + "</h1>");
//             $("#details-go-here").append("<a href='" + url + "' > " + url);
//             var likeid = "like" + id;
//             //$("#details-go-here").append("<h1 id= '" + likeid + "'> CLICK HERE TO LIKE </h1>");
//             $("#details-go-here").append(" <br>  <i id= '" + likeid + "' class='fas fa-thumbs-up'></i>");
//             addLikeListener(id, likeid);     */
//         }) 
// }
// getDetails();
