"use strict";

$('ul.slimmenu').slimmenu({
    resizeWidth: '992',
    collapserTitle: 'Main Menu',
    animSpeed: 250,
    indentChildren: true,
    childrenIndenter: ''
});


// Countdown
$('.countdown').each(function() {
    var count = $(this);
    $(this).countdown({
        zeroCallback: function(options) {
            var newDate = new Date(),
                newDate = newDate.setHours(newDate.getHours() + 130);

            $(count).attr("data-countdown", newDate);
            $(count).countdown({
                unixFormat: true
            });
        }
    });
});


$('.btn').button();

$("[rel='tooltip']").tooltip();

$('.form-group').each(function() {
    var self = $(this),
        input = self.find('input');

    input.focus(function() {
        self.addClass('form-group-focus');
    })

    input.blur(function() {
        if (input.val()) {
            self.addClass('form-group-filled');
        } else {
            self.removeClass('form-group-filled');
        }
        self.removeClass('form-group-focus');
    });
});

$('.typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 3,
    limit: 8
}, {
    source: function(q, cb) {
        return $.ajax({
            dataType: 'json',
            type: 'get',
            url: 'http://gd.geobytes.com/AutoCompleteCity?callback=?&q=' + q,
            chache: false,
            success: function(data) {
                var result = [];
                $.each(data, function(index, val) {
                    result.push({
                        value: val
                    });
                });
                cb(result);
            }
        });
    }
});


$('input.date-pick, .input-daterange, .date-pick-inline').datepicker({
    todayHighlight: true
});



$('input.date-pick, .input-daterange input[name="start"]').datepicker('setDate', 'today');
$('.input-daterange input[name="end"]').datepicker('setDate', '+7d');

$('input.time-pick').timepicker({
    minuteStep: 15,
    showInpunts: false
})

$('input.date-pick-years').datepicker({
    startView: 2
});




$('.booking-item-price-calc .checkbox label').click(function() {
    var checkbox = $(this).find('input'),
        // checked = $(checkboxDiv).hasClass('checked'),
        checked = $(checkbox).prop('checked'),
        price = parseInt($(this).find('span.pull-right').html().replace('$', '')),
        eqPrice = $('#car-equipment-total'),
        tPrice = $('#car-total'),
        eqPriceInt = parseInt(eqPrice.attr('data-value')),
        tPriceInt = parseInt(tPrice.attr('data-value')),
        value,
        animateInt = function(val, el, plus) {
            value = function() {
                if (plus) {
                    return el.attr('data-value', val + price);
                } else {
                    return el.attr('data-value', val - price);
                }
            };
            return $({
                val: val
            }).animate({
                val: parseInt(value().attr('data-value'))
            }, {
                duration: 500,
                easing: 'swing',
                step: function() {
                    if (plus) {
                        el.text(Math.ceil(this.val));
                    } else {
                        el.text(Math.floor(this.val));
                    }
                }
            });
        };
    if (!checked) {
        animateInt(eqPriceInt, eqPrice, true);
        animateInt(tPriceInt, tPrice, true);
    } else {
        animateInt(eqPriceInt, eqPrice, false);
        animateInt(tPriceInt, tPrice, false);
    }
});


$('div.bg-parallax').each(function() {
    var $obj = $(this);
    if($(window).width() > 992 ){
        $(window).scroll(function() {
            var animSpeed;
            if ($obj.hasClass('bg-blur')) {
                animSpeed = 10;
            } else {
                animSpeed = 15;
            }
            var yPos = -($(window).scrollTop() / animSpeed);
            var bgpos = '50% ' + yPos + 'px';
            $obj.css('background-position', bgpos);

        });
    }
});



$(document).ready(
    function() {

    $('html').niceScroll({
        cursorcolor: "#000",
        cursorborder: "0px solid #fff",
        railpadding: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
        },
        cursorwidth: "10px",
        cursorborderradius: "0px",
        cursoropacitymin: 0.2,
        cursoropacitymax: 0.8,
        boxzoom: true,
        horizrailenabled: false,
        zindex: 9999
    });


    // footer always on bottom
    var docHeight = $(window).height();
   var footerHeight = $('#main-footer').height();
   var footerTop = $('#main-footer').position().top + footerHeight;
   
   if (footerTop < docHeight) {
    $('#main-footer').css('margin-top', (docHeight - footerTop) + 'px');
   }
    }


);


$('.nav-drop').dropit();


$(function($) {
    $("#twitter").tweet({
        username: "remtsoy", //!paste here your twitter username!
        count: 3
    });
});

$(function($) {
    $("#twitter-ticker").tweet({
        username: "remtsoy", //!paste here your twitter username!
        page: 1,
        count: 20
    });
});

$(document).ready(function() {
    var ul = $('#twitter-ticker').find(".tweet-list");
    var ticker = function() {
        setTimeout(function() {
            ul.find('li:first').animate({
                marginTop: '-4.7em'
            }, 850, function() {
                $(this).detach().appendTo(ul).removeAttr('style');
            });
            ticker();
        }, 5000);
    };
    ticker();
});

$(function() {
    $('#ri-grid-no-animation').gridrotator({
        rows: 4,
        columns: 16,
        slideshow: false,
        w1024: {
            rows: 4,
            columns: 16
        },
        w768: {
            rows: 3,
            columns: 3
        },
        w480: {
            rows: 4,
            columns: 4
        },
        w320: {
            rows: 5,
            columns: 4
        },
        w240: {
            rows: 6,
            columns: 4
        }
    });

});

var tid = setInterval(tagline_vertical_slide, 2500);

// vertical slide
function tagline_vertical_slide() {
    var curr = $("#tagline ul li.active");
    curr.removeClass("active").addClass("vs-out");
    setTimeout(function() {
        curr.removeClass("vs-out");
    }, 500);

    var nextTag = curr.next('li');
    if (!nextTag.length) {
        nextTag = $("#tagline ul li").first();
    }
    nextTag.addClass("active");
}

function abortTimer() { // to be called when you want to stop the timer
    clearInterval(tid);
}