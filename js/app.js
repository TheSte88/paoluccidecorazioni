"use strict";

/* global tag*/
var $navbar,$menuToggle,$menuList,
$mainBox,$yPos,$hHeight,$titleBackground,$bufferImg,$areaBuffer,$windowWidth,$windowHeight;

var app = {};
app.name = "PAOLUCCI DECORAZIONI";
app.init = function ()
{
    $menuToggle =$(".btn-menu-toggle");
    $navbar = $(".navbar");
    $menuList = $(".menu-list");
    $mainBox = $(".box");
    $titleBackground = $(".title-background")
    $areaBuffer = $(".area-buffer")
    $bufferImg = $(".area.img-1")


    $menuToggle.on("click", app.toggleNavbar)


}

// navbar
app.toggleNavbar = function ()
{    
    if ($navbar.hasClass("active"))
        app.hideMenu();
    else
        app.showMenu();        
};
app.showMenu = function ()
{
    $navbar.addClass("active");  
    $menuToggle.addClass("active");
};
 app.hideMenu = function ()
{
    $navbar.removeClass("active");
    $menuToggle.removeClass("active");
};


