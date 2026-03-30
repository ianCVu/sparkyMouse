const mouse = document.createElement("img");
mouse.style.position = "fixed";
mouse.style.zIndex = 999999;
mouse.width = "50";
mouse.height = "50";
mouse.src = "https://github.com/ianCVu/sparkyMouse/blob/main/mouse.gif?raw=true";
mouse.style.pointerEvents = "none";
window.addEventListener("mousemove", function(event) {
  mouse.style.top = event.clientY - 20 + "px";
  mouse.style.left = event.clientX - 20 + "px";
});
document.body.appendChild(mouse);
document.body.style.cursor = 'none';
