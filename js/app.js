"use strict";

var app = {
    init: function(){
        let $menuToggle = $(".btn-menu-toggle");
        let $btnGallery = $(".title");
        let $btnCloseGallery = $(".btn-close");
        let $btnNextImage = $(".btn-arrow-right");
        let $btnPrevImage = $(".btn-arrow-left");
        
        $menuToggle.on("click", navbar.toggle);
        $btnGallery.on("click", gallery.init);
        $btnCloseGallery.on("click", gallery.hide);
        $btnNextImage.on("click",gallery.navigation);
        $btnPrevImage.on("click",gallery.navigation);
    }
}
var navbar = {
    toggle: function(){
        let $navbar = $(".navbar");
        if ($navbar.hasClass("active"))
        {
            navbar.hideMenu($navbar);
        }
        else
        {
            navbar.showMenu($navbar);
        }
    },
    hideMenu: function(navbar){
        let menuToggle = $(".btn-menu-toggle");

        navbar.removeClass("active");
        menuToggle.removeClass("active");
    },
    showMenu: function(navbar){
        let menuToggle = $(".btn-menu-toggle");

        navbar.addClass("active");  
        menuToggle.addClass("active");
    }
}
var gallery = {
    init: function(e){
        let el = gallery.image[e.target.innerHTML];
 
        $(".img-mini").remove();

        let arrayPath = gallery.objToArray(el);
        gallery.appendToDom(arrayPath);
        gallery.showImage(arrayPath, 0);

        $(".img-title").text(e.target.innerHTML);
    
        gallery.show();
    },
    show: function(){
       return $(".gallery-img").addClass("active");
    },
    hide: function(){
        return $(".gallery-img").removeClass("active");
    },
    objToArray: function(el){
        let arrayImage = []
        el.forEach(function(element,x){
            arrayImage[x] = element.src;
        });

        return arrayImage;
    },
    appendToDom: function(arrayPath){
        arrayPath.forEach(function(el){
            let string = "<img class='img-mini' src="+el+"></img>"
            return $(".preview span").append(string);
        });
    },
    showImage: function(arrayPath, x){
        let backgroundImage = arrayPath[x];
        $(".gallery-img .img").attr("src",backgroundImage);
        
        gallery.focus(x);
    },
    navigation: function(e){
        let el = gallery.image[$(".img-title").text()]
        let arrayPath = gallery.objToArray(el)
        let actImage = $(".img").attr("src");
        let x = arrayPath.indexOf(actImage);
        let eventName = e.target.className;

        if (eventName == "btn-arrow-right")
        {
            gallery.next(arrayPath, x)
        }
        else
        {
            gallery.prev(arrayPath, x)
        }
    },
    next: function(arrayPath, x){
        if (x < arrayPath.length-1)
        {
            x = x + 1;
        }
        else
        {
            x = 0;
        }
        gallery.showImage(arrayPath,x)

    },
    prev: function(arrayPath,x){
        if (x == 0)
        {
            x = arrayPath.length-1;
        }
        else
        {
            x = x - 1;
        }
        gallery.showImage(arrayPath,x)

    },
    focus: function(x){
        $(".img-mini")[$(".img-mini").length - 1].style.opacity = "1"; 
        $(".img-mini")[x].style.opacity = "0.2";
        if (x >= 1)
        {
            $(".img-mini")[x-1].style.opacity = "1";
        }
    },
    image: {
            "Texture": [{"src":"img/texture/decoration-1.JPG"},
                        {"src":"img/texture/decoration-2.JPG"},
                        {"src":"img/texture/decoration-3.png"},
                        {"src":"img/texture/decoration-4.JPG"},
                        {"src":"img/texture/decoration-5.JPG"},
                        {"src":"img/texture/decoration-6.JPG"},
                        {"src":"img/texture/decoration-7.JPG"},
                        {"src":"img/texture/decoration-8.png"}],
            
            "Interni": [{"src":"img/interni/arte-porta.png"},
                        {"src":"img/interni/camera-da-letto.png"},
                        {"src":"img/interni/parete-grey.JPG"},
                        {"src":"img/interni/parete-yellowSmoke.JPG"},
                        {"src":"img/interni/salotto.jpg"},
                        {"src":"img/interni/stucco-veneziano.JPG"}],
        
            "Industriale":[{"src":"img/industriale/decorazione-colonne.png"},
                            {"src":"img/industriale/lampadario-resina.jpg"},
                            {"src":"img/industriale/macchinari.jpg"},
                            {"src":"img/industriale/trattamento_alluminio.png"}]
            }
}