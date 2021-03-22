/* eslint-disable */
/**
 * Trust All Scripts
 *
 * This is a dirty little script for iterating over script tags
 * of your Ghost posts and adding them to the document head.
 *
 * This works for any script that then injects content into the page
 * via ids/classnames etc.
 *
 */

const $ = require("jquery");
const  jQuery  = require("jquery")

/* --- To load the page from top on page reload starts --- */
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
/* --- To load the page from top on page reload ends--- */

var customScripts = function () {
    $(document).ready(function () {
        $(window).on('scroll', function(event) {
            if ($(this).scrollTop() > 0) {
                $('body').addClass('scroll');
            }else{
                $('body').removeClass('scroll');
            };    
        });

        $('.content_c a[href*="#"]').on('click', function (e) {
            e.preventDefault()

            $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top-200,
            },
            500,
            'linear'
            )
        })


        $('#searchcall').click(function(){
            $("#search").addClass("show");
            $("body").addClass("modal-open");
            $("#search").css("display", "block");
            // $(".modal-backdrop.show").addClass("modalback");
            $("#modalback").addClass("modal-backdrop");
            $("#modalback").addClass("fade");
            $("#modalback").addClass("show");
        })

        $('#search_close').click(function(){
            $("#search").css("display", "none");
            $("#search").removeClass("show");
            $("body").removeClass("modal-open");
            // $(".modal-backdrop").remove();
            $("#modalback").removeClass("modal-backdrop");
            $("#modalback").removeClass("fade");
            $("#modalback").removeClass("show");

        })
        $(".close-fd").click(function() {
            $(".floating_div").addClass("slideDown");
        });

        $('.pagination-location').click( function(e) {
            e.preventDefault(); // stops link from making page jump to the top
            e.stopPropagation(); // when you click the button, it stops the page from seeing it as clicking the body too
            $('#page-dropdown').toggle();
        });
        
        $('#page-dropdown').click( function(e) {
            e.stopPropagation(); // when you click within the content area, it stops the page from seeing it as clicking the body too  
        });
        
        $('body').click( function() {
            $('#page-dropdown').hide();
        });

        const showhellobar = sessionStorage.getItem('showhellobar');

        if(showhellobar !== 'false'){
          $('.hellobar-wrapper').addClass("barslideDown");
          $('header').addClass('main-container-pdn1');
          $('.main-container').addClass('main-container-pdn2');
          $('#sticky-section').css('top','11rem');
        }
        $(".hellobar-closebtn").click(function() {
            $(".hellobar-wrapper").addClass("barslideUp");
            $('.main-container-pdn1').removeClass('main-container-pdn1');
            $('.main-container-pdn2').removeClass('main-container-pdn2');
            sessionStorage.setItem('showhellobar', 'false');
        }); 
        if(showhellobar == 'false'){
          $('.hellobar-wrapper').hide();
          $('#sticky-section').css('top','7rem');
        }
        $(".mobile_listing").click(function(){
            $(this).find(".dropdownmenu").toggleClass("mobileMenuD");
        });
        $(".listingMenu > a").click(function(event){
            event.preventDefault();
        });
        $(".all").addClass("showTags");var IDs = [];
        $( ".categories_filtertags > li" ).on('click', function (){
            console.log("yes");
            $(".single-post").find(".all").removeClass("showTags").addClass("hideTag");
            $(".single-post").find(".all").addClass("hideTag");
            $("#all").removeClass("active");
            $(this).toggleClass("active");
            var nameId = $(".categories_filtertags").find(".active").map(function() { 
                return this.id; 

            }).get();
            for (var i = 0; i < nameId.length; i++) {
                $(".single-post").find("."+nameId[i]).addClass("showTags");
            }
            if(nameId== ""){ 
                $(".all").addClass("showTags");
                $("#all").addClass("active"); 
            }
        });
    });
    /* --- To show/hide social media icons --- */
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 500 && y < ($(document).height() * 0.95)) {
          $('.showHide').css({"opacity":"1"});
        } else {
          $('.showHide').css({"opacity":"0"});
        }
    });
    /* --- To show/hide social media icons --- */
    /* --- Attrition calculator script starts --- */
    function calculate(){
      var emp_begin= 0;
      var emp_joined = 0;
      var emp_left = 0;
      var emp_end = 0;
      var attri_rate= 0;

       
      emp_begin = parseInt(document.getElementById("emp_begin").value);
      emp_joined = parseInt(document.getElementById("emp_joined").value);
      emp_left = parseInt(document.getElementById("emp_left").value);

      emp_end = emp_begin+emp_joined-emp_left;
      document.getElementById("emp_end_result").innerHTML=emp_end;

      emp_avg = (emp_begin+emp_end)/2;
      document.getElementById("emp_avg_result").innerHTML=emp_avg;

      attri_rate = ((emp_left/emp_avg)*100).toFixed(2);
      document.getElementById("result").innerHTML=attri_rate;
       
   }
    //check that calc is not null before adding the event listener:
    var calc = document.getElementById('calc_click');
    if(calc){
        calc.addEventListener('click', calculate, false);
    }
    // document.getElementById("calc_click").addEventListener("click", calculate);
    /* --- Attrition calculator script ends --- */


};
/* --- Exit Intent Popup script starts --- */
$(document).on('mouseleave', leaveFromTop);
var showExitPopup;
$('#ouibounce-modal .modal').hide();
function leaveFromTop(e){
    if( e.clientY < 0 ) {
      
     const showExitPopup = sessionStorage.getItem('showExitPopup');
      if(showExitPopup !== 'false'){
        $('#ouibounce-modal').show();
        $('#ouibounce-modal .modal').show();
      }
      $("#ouibounce-modal .close").click(function() {
        $("#ouibounce-modal .modal").hide();
          sessionStorage.setItem('showExitPopup', 'false');
          $(".underlay").hide();
          $("#ouibounce-modal").hide();
      }); 
      if(showExitPopup == 'false'){
        $("#ouibounce-modal .modal").hide(); 
         $(".underlay").hide(); 
         $("#ouibounce-modal").hide();
      }
 
    }
}
/* --- Exit Intent Popup script ends --- */

/* --- To Disable Disqus ads script starts --- */
(function($){
    setInterval(() => {
        $.each($('iframe'), (arr,x) => {
            let src = $(x).attr('src');
            if (src && src.match(/(ads-iframe)|(disqusads)/gi)) {
                $(x).remove();
            }
        });
    }, 300);
})(jQuery);
/* --- To Disable Disqus ads script ends --- */

$.when(
    $.getScript( "/GhostSearch.min.js" ),
    $.getScript( "/content.min.js" ),
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
).done(function(){
    
    setTimeout(function(){ 

        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        
        let ghostSearch = new GhostSearch({
        url: `https://vantagecircle.ghost.io`,
        key: `035ae7fb3097139833e66054a6`,
        input: '#search-field',
        results: '#results',
        api: {
            parameters: { 
                fields: ['title', 'slug', 'published_at', 'primary_tag', 'id', 'feature_image'],
                include: 'tags',
            },
        },
        on: {
            afterDisplay: function(results){
                console.log(results)
        
                if (results.length) {
        
                    $('#results').empty();
                    
                    var tags = [];
                    $.each(results, function(index, val) {
                        if (val.obj.primary_tag) {
                            // console.log('tag ase')
                            if ($.inArray(val.obj.primary_tag.name, tags) === -1) {
                                tags.push(val.obj.primary_tag.name);
                            };
                        }else{
                            // console.log('tag nai')
                            if ($.inArray('Other', tags) === -1) {
                                // console.log('tag nai jodiu')
                                tags.push('Other');
                            };
                        };
                    });
                    // console.log(tags)
                    tags.sort();
        
                    $.each(tags, function(index, val) {
                        var tag = val;
                        // console.log(val)
                        if (val === 'Other') {
                            tag = $('#results').attr('data-other');
                        };
        
                        $('#results').append('<h3>'+ val +'</h3><ul data-tag="'+ val +'" class="list-box loop row"></ul>');
                    });
                    // return;
        
                    $.each(results, function(index, val) {
                        var feature_image = '';
                        var classes = '';
                        var dateSplit = val.obj.published_at.split('T');
                        dateSplit = dateSplit[0].split('-');
                        var month = monthNames[dateSplit[1]-1];
                        // console.log(dateSplit)
                        var date = dateSplit[2]+'-'+dateSplit[1]+'-'+dateSplit[0];
                        // var date = moment(dateSplit[2]+'-'+month+'-'+dateSplit[1], "DD-MM-YYYY").format('DD MMM YYYY');
                        if (val.obj.feature_image) {
                            if (val.obj.feature_image.substring(0, 4) == 'http') {
                                // console.log('dd')
                                feature_image = 'style="background-image: url('+ val.obj.feature_image +');"';
                            }else{
                                // val.obj.feature_image = val.obj.feature_image.replace("/images/", "/images/size/w167h125/");
                                feature_image = 'style="background-image: url('+ url + val.obj.feature_image +');"';
                            };
                            classes += 'featured-image';
                            classes += ' image_search';
        
                            
                        }else{
                            classes += 'excerpt';
                        };
                        if (val.obj.primary_tag) {
                            $('#results ul[data-tag="'+ val.obj.primary_tag.name +'"]').append('<li class="col-md-4 item"><article class="post"><div class="post-inner-content"><div class="img-holder"> <a href="/'+ val.obj.slug +'/" class="'+ classes +'" title="'+ val.obj.title +'"' + feature_image + '></a> </div><div class="inner"><h2><a href="/'+ val.obj.slug +'/">'+ val.obj.title +'</a></h2><time>'+ date +'</time></div></div></article></li>');
                        }else{
                            $('#results ul[data-tag="Other"]').append('<li class="col-md-4 item"><article class="post"><div class="post-inner-content"><div class="img-holder"> <a href="/'+ val.obj.slug +'/" class="'+ classes +'" title="'+ val.obj.title +'"' + feature_image + '></a> </div><div class="inner"><h2><a href="/'+ val.obj.slug +'/">'+ val.obj.title +'</a></h2><time>'+ date +'</time></div></div></article></li>');
                        };
                    });
                
                }else if($('#search-field').val().length && !results.length){
                    $('#results').append('<h3>'+ $('#results').attr('data-no-results') +'</h3><ul class="list-box loop row"><li class="col-md-12 item">'+ $('#results').attr('data-no-results-description') +'</li></ul>');
                };
        
            },
        }
        })
        
        }, 1000);
    
});

var tabsScroll = function() {
    $.fn.horizontalTabs = function() {
        // Variable creation
        var $elem = $(this),
        widthOfReducedList = $elem.find('.nav-tabs-horizontal').width(),
        widthOfList = 0,
        currentPos = 0,
        adjustScroll = function () {
            widthOfList = 0;
            $elem.find('.nav-tabs-horizontal li').each(function(index, item) {
                widthOfList += $(item).width();
            });

            widthAvailale = $elem.width();

            if (widthOfList > widthAvailale) {
                $elem.find('.scroller').show();
                updateArrowStyle(currentPos);
                widthOfReducedList = $elem.find('.nav-tabs-horizontal').width();
            } else {
                $elem.find('.scroller').hide();
            }
        },
        scrollLeft = function () {
            $elem.find('.nav-tabs-horizontal').animate({
                scrollLeft: currentPos - widthOfReducedList
            }, 500);

            if (currentPos - widthOfReducedList > 0) {
                currentPos -= widthOfReducedList;
            } else {
                currentPos = 0;
            }
        },
        scrollRight = function () {
            $elem.find('.nav-tabs-horizontal').animate({
                scrollLeft: currentPos + widthOfReducedList
            }, 500);

            if ( (currentPos + widthOfReducedList) < (widthOfList - widthOfReducedList)) {
                currentPos += widthOfReducedList;
            } else {
                currentPos = (widthOfList - widthOfReducedList);
            }
        },
        manualScroll = function () {
            currentPos = $elem.find('.nav-tabs-horizontal').scrollLeft();

            updateArrowStyle(currentPos);
        },
        updateArrowStyle = function (position) {
            if (position >= (widthOfList - widthOfReducedList)) {
                $elem.find('.arrow-right').addClass('disabled');
            } else {
                $elem.find('.arrow-right').removeClass('disabled');
            };

            if (position <= 0) {
                $elem.find('.arrow-left').addClass('disabled');
            } else {
                $elem.find('.arrow-left').removeClass('disabled');
            };
        };

        // Event binding
        $(window).resize( function () {
            adjustScroll();
        });

        $elem.find('.arrow-left').on('click.horizontalTabs', function (){
            scrollLeft();
        });

        $elem.find('.arrow-right').on('click.horizontalTabs', function (){
            scrollRight();
        });

        $elem.find('.nav-tabs-horizontal').scroll( function (){
            manualScroll();
        });

        // Initial Call
        adjustScroll();

        return this;
    }

    $("#js_image_selection").horizontalTabs();

};

var trustAllScripts = function () {
    var scriptNodes = document.querySelectorAll('.load-external-scripts script');

    for (var i = 0; i < scriptNodes.length; i += 1) {
        var node = scriptNodes[i];
        var s = document.createElement('script');
        s.type = node.type || 'text/javascript';

        if (node.attributes.src) {
            s.src = node.attributes.src.value;
        } else {
            s.innerHTML = node.innerHTML;
        }

        document.getElementsByTagName('head')[0].appendChild(s);
    }
};

exports.onRouteUpdate = function () {
    trustAllScripts();
    customScripts();
    tabsScroll();
};
