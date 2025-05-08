// Scroll adjustment script
$(function () {
  $(window).scrollTop($(window).scrollTop() + 1);
})

// Contact words shuffle script
$(function () {
  /*
  * Shuffle jQuery array of elements - see Fisher-Yates algorithm
  */
  jQuery.fn.shuffle = function () {
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

    $els.each(function (i) {
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
