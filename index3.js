console.log("Hello from script")


document.getElementById("box").addEventListener("mouseover", function() {
    document.getElementById("box").style.backgroundColor = "blue";
});

document.getElementById("box").addEventListener("mouseout", function() {
    document.getElementById("box").style.backgroundColor = "green";
});


document.getElementById("box").addEventListener("click", function() {
    document.getElementById("box").style.backgroundColor = "red";
});






        function changeColor() {
            document.getElementById("box").style.backgroundColor = "red"
        };

        function changeText() {
            document.getElementById("text").innerHTML = "You hovered over me!"
        };

        function changeButton() {
            document.getElementById("button").innerHTML = "You clicked me!"
        };

        function changeImage() {
            document.getElementById("image").src = "https://via.placeholder.com/200"
        };

        function changeImageBack() {
            document.getElementById("image").src = "https://via.placeholder.com/150"
        };

        function changeList() {
            document.getElementById("list").innerHTML = "<li>Item changed!</li>"
        };

