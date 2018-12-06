"use strict";

/* global tag*/
var $navbar,$menuToggle,$menuList, $btnGallery, 
    $galleryImg, $imgMini;

var app = {};
app.name = "PAOLUCCI DECORAZIONI";
app.init = function ()
{
    $menuToggle =$(".btn-menu-toggle");
    $navbar = $(".navbar");
    $menuList = $(".menu-list");
    $btnGallery = $(".title");
    $galleryImg = $(".gallery-img");
    $imgMini = $(".img-mini");


    $menuToggle.on("click", app.toggleNavbar);
    //$btnTexture.on("click", app.getJson().then(app.readImg));
    $btnGallery.on("click",app.eventName);
}

// navbar
app.toggleNavbar = function(){
    if ($navbar.hasClass("active"))
        app.hideMenu();
    else
        app.showMenu();        
};
app.showMenu = function(){
    $navbar.addClass("active");  
    $menuToggle.addClass("active");
};
 app.hideMenu = function(){
    $navbar.removeClass("active");
    $menuToggle.removeClass("active");
};

//Gallery
app.eventName = function(e){
    app.getData(e)

    /*app.getJson().then(app.readJson);*/

}
app.getData = function(e){
    var event = e.target.innerHTML;
    event =event.toLowerCase();
    return app.getJson()
                .then(function(res){return res;})
                .forEach(function(el){console.log(typeof(el));return el;})
                .filter(function(item){console.log(item);})

    /*
    return app.getJson()
                .then(function(res){res
                .forEach(function(el){console.log(el[event])})})*/

}
app.getJson = function(){
    return $.get("json/img.json");
}
app.readJson = function(res){
    console.log({result:res})
    res.forEach(function(el){console.log({element:el})})
}

app.image = function(e){
    return app.getJson().filter(function(item){return item === e.target.innerHTML})
}
app.filterImg = function(item){
    return item === e.target.innerHTML;
}


app.showGallery = function(){
    if ($galleryImg.hasClass("active"))
    {
        app.hideGallery();
    }
    else
    {
        app.showGallery();
    }
}
app.hideGallery = function(){
    $galleryImg.removeClass("active");
}
app.showGallery = function(){
    $galleryImg.addClass("active");
}

