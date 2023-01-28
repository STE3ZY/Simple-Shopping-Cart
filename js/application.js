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

//calculate price based on quantity
$(document).ready(function(){
  $('.quantity input').change(function(){
    var quantity = $(this).val();
    var price = $(this).closest('.Cart-Items').find('.default-price').text();
    var total = (quantity * parseFloat(price.substring(1))).toFixed(2);
    $(this).closest('.Cart-Items').find('.amount').text('$' + total);
  });
});

// calculate total price
$(document).ready(function(){
  $('.button').click(function(){
    var subtotal = 0;
    $('.amount').each(function(){
      subtotal += parseFloat($(this).text().substring(1));
    });
    $('.total-amount').text("Cart-Total: " + '$' + subtotal.toFixed(2));
  });
});
