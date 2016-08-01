var main = function(){

  $('.smooth').on('click', function() {
      $.smoothScroll({
          scrollElement: $('body'),
          scrollTarget: '#' + this.id
      });

      return false;
  });
};

$(document).ready(main)
