var buttons = document.querySelector("#button");
let div = document.createElement("div");
var inner = document.getElementById("addid").innerHTML

buttons.addEventListener("click", function () {
    count = document.querySelector("#input").value;

    if (count) {
        document.getElementById("addid").innerHTML = inner;

        for (var i = 0; i < count; i++) {

            div.innerHTML = document.getElementById("addid").innerHTML

            document.getElementById("addid").appendChild(div)

        }
    }

})




