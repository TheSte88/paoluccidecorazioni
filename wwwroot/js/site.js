"use strict"
var app = {
    init: function(){
        $(window).on("scroll", app.fixToolbar);
        
        //Sidebar
        $('div.toolbar div.btn-menu-toggle').on("click", app.toggleSidebar);

        //Display gallery
        $('h3 + ul + section h4 + ul li').on("click", gallery.init);
        
        //Gallery navigation
        $(document).on("click", "div.gallery ul.navigation li", gallery.navigation);

        //Close gallery
        $('div.gallery span.close').on("click", gallery.close);

        //Send contact
        $('.btn-submit').on('click', contact.submit);
        $('section.error span.btn-close').on('click',contact.closeError)
    },
    fixToolbar: function(){
        var $scrollY = $(window).scrollTop();
        if($scrollY >= 150){
            $('.toolbar').addClass('fixed')
        } else {
            $('.toolbar').removeClass('fixed')
        }
    }, 
    toggleSidebar: function(){
        $('div.toolbar').toggleClass('active');
        $('div.btn-menu-toggle').toggleClass('active');


    }
}

var gallery = {
    init: function(e){
        var album, selected;
        
        //Get image selected
        selected = $(e.target).css('background-image');

        //Get album selected
        if($(e.target).hasClass('interni')){
            album = 'h3 + ul + section h4 + ul li.interni'
        } else if($(e.target).hasClass('industriale')){
            album = 'h3 + ul + section h4 + ul li.industriale'
        } else {
            album = 'h3 + ul + section h4 + ul li.texture'
        }
        
        //Populate navigation
        gallery.createNavigation(album);

        //Display gallery
        gallery.displayImage(selected);

    },
    createNavigation: function(album){    
        $(album).each(function(i,element){
            $('div.gallery ul.navigation').append($(element).clone());
        })
    },
    navigation: function(e){
        var image = $(e.target).css('background-image');
        $('div.gallery section.image').css('background-image', image);
    },
    displayImage: function(image){
        $('div.gallery section.image').css('background-image', image);
        $('div.gallery').addClass('show');
    },
    close: function(){

        //Hide gallery
        $('div.gallery').removeClass('show');

        //Remove element for navigation
        $('div.gallery ul.navigation li').remove();
    }
}

var contact = {
    submit: function(){
        $('form.contact').submit(function(e){
            e.preventDefault();
            var send = $('input + span').hasClass('field-validation-error') || $('input + span').hasClass('field-validation-error');

            if(!send){
                contact.sendData()
            }

        });
    },
    sendData: function(e){
        $.ajax({
            cache: false,
            type: "POST",
            url: "Contatti",
            data:  $('form.contact').serialize(),
            success: function(data){
                if($('form.contact').hasClass('error')){
                    $('form.contact').removeClass('error');
                }
                
                $('div.form-container').addClass('hidden');
                $('section.success').removeClass('hidden');
            },
            error: function(xhr, ajaxOptions, thrownError){
                console.log({xhr: xhr},{ajaxOptions: ajaxOptions},{thrownError: thrownError});
                $('form.contact').addClass('error hidden');
                $('section.success').addClass('hidden');
                $('section.error').removeClass('hidden');
                
            }
        })
    },
    closeError: function(){
        $('section.error').addClass('hidden');
        $('form.contact').removeClass('hidden');
    }
}