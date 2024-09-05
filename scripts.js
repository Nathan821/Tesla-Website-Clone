let header = document.getElementById("header");
let ms = document.getElementById("modelS");
let m3 = document.getElementById("model3");
let mx = document.getElementById("modelX");
let my = document.getElementById("modelY");
let model = document.getElementById("model");
let s = document.getElementById("s");
let mp = document.getElementById("pm");
let mph = document.getElementById("mph");
let mi = document.getElementById("mi");
let mxr = document.getElementById("MaxRan");

ms.onclick = function(){
  header.style.backgroundImage = "url(imags/image-1.png)";
  model.innerHTML = "Model S";
  mph.innerHTML = "670";
  mi.innerHTML = "402 mph";
  mxr.innerHTML = "Top Speed";
}

m3.onclick = function(){
  header.style.backgroundImage = "url(imags/image-2.png)";
  model.innerHTML = "Model 3"
  mph.innerHTML = "1,020"
  mi.innerHTML = "363 mph"
}

mx.onclick = function(){
  header.style.backgroundImage = "url(imags/image-3.png)";
  model.innerHTML = "Model X";
  mph.innerHTML = "1,080";
  mi.innerHTML = "335 mph";
}

my.onclick = function(){
  header.style.backgroundImage = "url(imags/image-4.png)";
  model.innerHTML = "Model Y";
  mph.innerHTML = "1,090";
  mi.innerHTML = "320 mph";
}