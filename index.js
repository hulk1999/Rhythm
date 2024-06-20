/*
    <link rel="stylesheet" href="index.css">
    <div id="pw-container"></div>
    <script src="sha256.min.js"></script>
    <script src="index.js"></script>
*/
//console.log(sha256("abc"));

var prompt = document.createElement("div");
prompt.className = "pw_prompt";

var input = document.createElement("input");
input.type = "password";
input.style.fontSize = "24px";
input.addEventListener("keyup", function(e) {
    if (e.keyCode == 13 && sha256(input.value) == "3a38f42cfb8f4ad7419c4c4a5bdbbf2f447ebf05d6dce5de5daa670469dc0e56"){
    	var unityContainer = document.getElementById("unity-container");
    	unityContainer.style.width = "100%";
    	unityContainer.style.height = "100%";
    	unityContainer.style.overflow = "visible";
    }
}, false);
prompt.appendChild(input);
document.getElementById("pw-container").appendChild(prompt);
