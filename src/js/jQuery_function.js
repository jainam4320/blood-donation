$(window).load(function(){
    var h1 = $(document).height();
    var h2 = $(document).width();
    $("#loader").css("height",h1);
    $("#loader").css("width",h2);
    h1 = $(document).height()/2;
    h1 = h1 - 70;
    h1 = h1 + "px";
    $(".spinner").css("margin-top",h1);
    h2 = $(document).width()/2;
    h2 = h2 - 50;
    h2 = h2 + "px";
    $(".spinner").css("margin-left",h2);
    setTimeout(function(){
    $("#loader").fadeOut("slow");
    }, 3000);
});

// function alert_req(a)
// {
//     var retVal = confirm("Are you sure you want to leave the Registration Process ?");
//     if( retVal == true ) {
//         var str = './' + a;
//         window.location.replace(str);
//     }
// }

$(document).ready(function(){
    var h1 = $(window).height();
    h1 = h1 - 310;
    h1 = h1 + "px";
    $(".container-login100").css("height",h1);
});

jQuery(document).ready(function($) {
 
    // $('.counter').counterUp({
    //     delay: 10,
    //     time: 1000
    // });

    $.fn.extend({
        Segment: function ( ) {
            $(this).each(function (){
                var self = $(this);
                var onchange = self.attr('onchange');
                var wrapper = $("<div>",{class: "ui-segment"});
                $(this).find("option").each(function (){
                    var option = $("<span>",{class: 'option',onclick:onchange,text: $(this).text(),value: $(this).val()});
                    if ($(this).is(":selected")){
                        option.addClass("active");
                    }
                    wrapper.append(option);
                });
                wrapper.find("span.option").click(function (){
                    wrapper.find("span.option").removeClass("active");
                    $(this).addClass("active");
                    self.val($(this).attr('value'));
                });
                $(this).after(wrapper);
                $(this).hide();
            });
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });
 
    $("#header").sticky({
        topSpacing: 0,
        zIndex: '50'
    });

    $(".segment-select").Segment();

    $('.next-page').click(function(){
        $('#hidden-button').click();
    });

    (function ($) {
        "use strict";
    
    
         /*==================================================================
        [ Focus input ]*/
        $('.input100').each(function(){
            $(this).on('blur', function(){
                if($(this).val().trim() != "") {
                    $(this).addClass('has-val');
                }
                else {
                    $(this).removeClass('has-val');
                }
            })    
        })
      
        /*==================================================================
        [ Validate ]*/
        var input = $('.validate-input .input100');
    
        $('.validate-form').on('submit',function(){
            var check = true;
    
            for(var i=0; i<input.length; i++) {
                if(validate(input[i]) == false){
                    showValidate(input[i]);
                    check=false;
                }
            }
            return check;
        });
    
    
        $('.validate-form .input100').each(function(){
            $(this).focus(function(){
               hideValidate(this);
            });
        });
    
        function validate (input) {
            if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
                if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                    return false;
                }
            }
            else {
                if($(input).val().trim() == ''){
                    return false;
                }
            }
        }
    
        function showValidate(input) {
            var thisAlert = $(input).parent();
    
            $(thisAlert).addClass('alert-validate');
        }
    
        function hideValidate(input) {
            var thisAlert = $(input).parent();
    
            $(thisAlert).removeClass('alert-validate');
        }
    })(jQuery);
 
    // $(".nav-menu").superfish({
    //     animation: {
    //         opacity: 'show'
    //     },
    //     speed: 400
    // });
 
    if ($('#nav-menu-container').length) {
        var $mobile_nav = $('#nav-menu-container').clone().prop({
            id: 'mobile-nav'
        });
        $mobile_nav.find('> ul').attr({
            'class': '',
            'id': ''
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
        $('body').append('<div id="mobile-body-overly"></div>');
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

        $(document).on('click', '.menu-has-children i', function(e) {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("fa-chevron-up fa-chevron-down");
        });

        $(document).on('click', '#mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-body-overly').toggle();
        });

        $(document).click(function(e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
            }
        });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }
 
    $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                var top_space = 0;

                if ($('#header').length) {
                    top_space = $('#header').outerHeight();

                    if (!$('#header').hasClass('header-fixed')) {
                        top_space = top_space - 20;
                    }
                }

                $('html, body').animate({
                    scrollTop: target.offset().top - top_space
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu').length) {
                    $('.nav-menu .menu-active').removeClass('menu-active');
                    $(this).closest('li').addClass('menu-active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
                return false;
            }
        }
    });

 
    


});