var MenuTop = document.createElement('button'), 
    MenuTopCollapse = document.createElement('button'), 
    Menu = document.createElement('div');
    Game = window.location.href.replace(^(http|https)://, '');
     
MenuTop.innerText = "Hacks for "+Game;
MenuTop.style.left = "10px";
MenuTop.style.top = "10px";
MenuTop.style.backgroundColor = "rgba(0, 0, 0, 
MenuTopCollapse.innerText = "-";
MenuTopCollapse.onclick = toggleCollapse;
function toggleCollapse(){
  collapsed = !collapsed;
  element.style.height = collapsed ? "0px" : "initial";
} 
function toggleVisibility(){
  visible = !visible;
  element.style.display = visible ? "block" : "none;
}
document.addEventListener('keyup', function(e){
  if (e.key === "-"){
    toggleCollapse();
  }else if(e.key === "`"){
    toggleVisibility();
  }
});

document.body.appendChild(MenuTop);
MenuTop.appendChild(MenuTopCollapse);
MenuTopCollapse.appendChild(Menu);
