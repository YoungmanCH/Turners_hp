document.getElementById("open_panel").onclick = function(){
  document.getElementById("close_panel").style.display="block";
  document.getElementById("nav_menu_overlay_panel_id").style.left=0;
  document.getElementById("nav_overlay_panel_background").style.display="block";
  this.style.display="none";
};
document.getElementById("close_panel").onclick = function(){
  document.getElementById("open_panel").style.display="block";
  document.getElementById("nav_menu_overlay_panel_id").style.left="-400px";
  document.getElementById("nav_overlay_panel_background").style.display="none";
  this.style.display="none";
};
document.getElementById("img_bn_clear").onclick = function(){
  document.getElementById("banner_fadeInUp").style.display="none";
};
document.getElementById('reload').onclick = function(){
  window.location.reload();
};
window.onload = function(){
  document.getElementById('banner_fadeInUp').style.opacity='1';
  document.getElementById('banner_fadeInUp').style.visibility='visible';
  document.getElementById('banner_fadeInUp').style.transform='translateY(0)';
};
document.getElementById("img_clear_nav_detail").onclick = function(){
  document.getElementById("nav_menu_overlay_panel_id").style.left="-400px";
  document.getElementById("nav_overlay_panel_background").style.display="none";
  document.getElementById("close_panel").style.display="none";
  document.getElementById("open_panel").style.display="block";
}
document.getElementById("nav_overlay_panel_background").onclick = function(){
  document.getElementById("nav_menu_overlay_panel_id").style.left="-400px";
  this.style.display="none";
  document.getElementById("close_panel").style.display="none";
  document.getElementById("open_panel") .style.display="block";
}
document.getElementById("google_form_link").onclick = function(){
  window.open("https://forms.gle/7YinhDdxGr6GMg4r8", "_blank");
}