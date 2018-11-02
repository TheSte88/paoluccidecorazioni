"use strict";

/* shared */
var $navbar,$menuToggle,$menuBar1,$menuBar2,$menuBar3,$menuList,
$mainBox,$yPos,$hHeight,$titleBackground,$bufferImg,$areaBuffer,$windowWidth,$windowHeight;
var app = {};
app.name = "PAOLUCCI DECORAZIONI";
app.init = function ()
{
    $navbar = $(".navbar");
    $menuToggle =$(".menu-toggle");
    $menuBar1 = $(".menu-bar1");
    $menuBar2 = $(".menu-bar2"); 
    $menuBar3 = $(".menu-bar3");
    $menuList = $(".menu-list");
    $mainBox = $(".box");
    $titleBackground = $(".title-background")
    $areaBuffer = $(".area-buffer")
    $bufferImg = $(".area.img-1")


    // navbar
    $navbar.find($menuToggle).on("click",app.toggleNavbar);
    // Scroll header and fixed it
    $(window).scroll(app.headerCompact);
    // Change image in the buffer
    $areaBuffer.find(".btn-arrow-left").on("click",app.prvImg);
    $areaBuffer.find(".btn-arrow-right").on("click",app.nxtImg);
    
    // $window = $(window);
    // alert($yPos.value());
}

// navbar
app.toggleNavbar = function ()
{    
    if ($menuToggle.hasClass("active"))
        app.hideMenu();
    else
        if ($yPos > 20)
        app.showMenuAppending();
        else
        app.showMenu();        
};
app.showMenu = function ()
{
    $menuToggle.addClass("active");
    $menuList.addClass("active");
    // $mainBox.addClass("active");
    
};
app.showMenuAppending = function ()
{
    $menuToggle.addClass("active");
    $menuList.addClass("active appending");
    // $mainBox.addClass("active");  
};
 app.hideMenu = function ()
{
    $menuToggle.removeClass("active");
    $menuList.removeClass("active");
    $menuList.removeClass("appending");
    // $mainBox.removeClass("active");
};

// Scroll header and fixed it 
app.headerCompact = function()
{
    $yPos = $(window).scrollTop();
    $windowWidth = $(window).width();
    $windowHeight = $(window).height();

    if ($windowWidth >= 1024) 
        $titleBackground.addClass('active');
        else
            if ($yPos > 20) 
            app.headerCompactSize();
            else 
            app.headerBigSize();   
    
};

app.headerBigSize = function ()
{
    $titleBackground.removeClass('active');
    $menuList.removeClass("appending");
};

app.headerCompactSize = function()
{
    $titleBackground.addClass('active');
    if ($menuList.hasClass("active")) $menuList.addClass("appending");
};

