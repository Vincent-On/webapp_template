
function sayHello(){
    firebase.auth().onAuthStateChanged(function(somebody){
        if(somebody){
            console.log(somebody.uid);
            db.collection("users").doc(somebody.uid)
            .get()
            .then(function(doc){
                console.log(doc.data().name);
                var n = doc.data().name;
                $("#username").text(n);
            })

        }
    })
}
sayHello();

function writeCategories() {
    var categoriesRef = db.collection("categories");
    categoriesRef.add({
        name: "Samurai Sushi",
		Japanese: true,             //
        Asian: true,
        American: false,
        BBQ: false
    });
}