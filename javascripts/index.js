(function() {

  $('.show-vote').on('click', function(e) {
    $(this).hide();
    $(this).siblings('.vote-container').slideDown();
    return e.preventDefault();
  });

}).call(this);
