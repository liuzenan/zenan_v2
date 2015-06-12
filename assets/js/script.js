$(document).ready(function(){

  $main = $('#main');
  $sidebar = $('#sidebar');
  $tagnav = $('#tagnav');
  $backbtn = $('#backbtn');

  // Make sure content height is bigger than sidebar

  if ($main.height() <= $sidebar.height()) {
    $main.height($sidebar.height() + 30);
  }

  // Set current highlight tag

  var tag  = $tagnav.data('tag');
  if (tag) {
    $tagnav.children().each(function(e){
      var current = $(this);
      current.removeClass('btn-tag--active');
      if (current.html().toLowerCase() == tag) {
          current.addClass('btn-tag--active');
      }
    });
  } else {
    $tagnav.children().first().addClass('btn-tag--active');
  }

  // Hide first page top navigation

  $('.extra-pagination').each(function(e){
      var current = $(this);
      var data = current.data('page');
      if (data != 1) {
        current.show();
      }
  });
  
  $("#sidebar").stick_in_parent();


});
