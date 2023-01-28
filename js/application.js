// remove all button
$(document).ready(function(){
  $(".Action").click(function(){
    $(".Cart-Items").remove();
    $(".total-amount").empty() // to remove the subtotal
  });
});

// remove individual items
$(document).ready(function(){
  $(".remove").click(function(){
    $(this).closest(".Cart-Items").remove();
  });
});


