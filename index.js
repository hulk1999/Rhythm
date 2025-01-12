/*
  <head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>60 BPM</title>
    <link rel="shortcut icon" href="TemplateData/corgi.png">
    <link rel="stylesheet" href="TemplateData/style.css">
    <link rel="manifest" href="manifest.webmanifest">
    <link rel="stylesheet" href="index.css">
    <div id="pw-container"></div>
    <script src="sha256.min.js"></script>
    <script src="index.js"></script>
  </head>
  <body>
*/
//console.log(sha256("abc"));

var prompt = document.createElement("div");
prompt.className = "pw_prompt";

var input = document.createElement("input");
input.type = "password";
input.style.fontSize = "24px";
input.addEventListener("keyup", function(e) {
    if (e.keyCode == 13 && sha256(input.value) == "70c9e03a8e9c9828baa3db65da6c2deabb5aee999dc8b6cc8eaef52cf48faa9a"){
    	var unityContainer = document.getElementById("unity-container");
    	unityContainer.style.width = "100%";
    	unityContainer.style.height = "100%";
    	unityContainer.style.overflow = "visible";
        input.remove();
    }
}, false);
prompt.appendChild(input);
document.getElementById("pw-container").appendChild(prompt);
