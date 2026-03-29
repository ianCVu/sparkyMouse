const mouse = document.createElement("img");
mouse.style.position = "fixed";
mouse.style.zIndex = 999999;
mouse.width = "50";
mouse.height = "50";
mouse.src = "https://github.com/ianCVu/sparkyMouse/blob/main/mouse.gif?raw=true";
mouse.style.pointerEvents = "none";
window.addEventListener("mousemove", function(event) {
  mouse.style.top = event.clientY + "px";
  mouse.style.left = event.clientX + "px";
});
window.addEventListener("mousedown", function(event) {
  mouse.width = "100";
  mouse.height = "100";
});
window.addEventListener("mouseup", function(event) {
  mouse.width = "50";
  mouse.height = "50";
});
document.body.appendChild(mouse);
