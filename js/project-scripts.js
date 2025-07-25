// Web Font Loader
WebFont.load({
    google: {
        families: ["Work Sans:200,regular", "Work Sans:regular,500,700,800"]
    }
});

// Webflow class detection
!function(o, c) {
    var n = c.documentElement,
        t = " w-mod-";
    n.className += t + "js",
    ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
}(window, document);

// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-139135203-1', {
    'anonymize_ip': false
});
gtag('set', 'developer_id.dZGVlNj', true);
gtag('config', 'G-R0PPLZ7DYQ');

// Webflow post navigation
var Webflow = Webflow || [];
Webflow.push(function() {
    var next_href = $('#post_list .w--current').parent().next().find('a').attr('href');
    var previous_href = $('#post_list .w--current').parent().prev().find('a').attr('href');

    var next_title = $('#post_list .w--current').parent().next().find('a').text();
    var previous_title = $('#post_list .w--current').parent().prev().find('a').text();

    //if last post in list
    if (next_href == undefined) {
        next_href = $('#post_list').children().children().first().find('a').attr('href');
        $('#next_button').fadeOut(); //optional - remove if you want to loop to beginning
    }

    //if first post in list
    if (previous_href == undefined) {
        previous_href = $('#post_list').children().children().last().find('a').attr('href');
        $('#previous_button').fadeOut(); //optional - remove if you want to loop to end
    }

    //apply hrefs to next / previous buttons
    $('#next_button').attr('href', next_href);
    $('#previous_button').attr('href', previous_href);
    $('#next_title').text(next_title);
    $('#previous_title').text(previous_title);
});

// Scroll fix
$(function() {
    $(window).scrollTop($(window).scrollTop() + 1);
});

// Contact words animation
$(function() {
    /*
    * Shuffle jQuery array of elements - see Fisher-Yates algorithm
    */
    jQuery.fn.shuffle = function() {
        var j;
        for (var i = 0; i < this.length; i++) {
            j = Math.floor(Math.random() * this.length);
            $(this[i]).before($(this[j]));
        }
        return this;
    };
    $('.contact-words').shuffle();

    const $els = $('.contact-words');

    function getNextIndex(arr, i) {
        return (i + 1) % arr.length;
    }
    function next() {
        let activeIndex;

        $els.each(function(i) {
            const $el = $(this);
            if (!$el.hasClass('hide')) {
                activeIndex = i;
            }
        });
        $els.addClass('hide');
        if (typeof activeIndex !== "number") {
            activeIndex = $els.length - 1;
        }
        const nextIndex = getNextIndex($els, activeIndex);
        const $nextItem = $els.eq(nextIndex);
        $nextItem.removeClass('hide');
        window.setTimeout(next, 1400);
    }

    next();
});
