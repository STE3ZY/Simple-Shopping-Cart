// remove all button
$(document).ready(function(){
  $(".Action").click(function(){
    // $(".Cart-Items").hide();
    $(".Cart-Items").empty();
    $(".total-amount").empty();
    $(".empty-message").show();
  });
});


// remove individual items
$(document).on('click', '.remove', function(){
  $(this).closest('.Cart-Items').remove();
});


//calculate price based on quantity
$(document).ready(function(){
  $(document).on('change', "input[name='quantity']", function(){
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

// adding custom products to cart
$(document).ready(function() {
  $("#addProductForm").submit(function(event) {
    event.preventDefault(); // prevent form from submitting and refreshing the page
    var productName = $("#productName").val();
    var productPrice = $("#productPrice").val();
    var newProduct = '<div class="Cart-Items pad">' +
                      '<div class="about">' +
                        '<h1 class="title">' + productName + '</h1>' +
                      '</div>' +
                      '<div class="price">' +
                        '<div class="default-price">$' + productPrice + '</div>' +
                      '</div>' +
                      '<div class="quantity">' +
                        '<input type="number" name="quantity" min="1" max="10" value="1" placeholder="Quantity">' +
                      '</div>' +
                      '<div class="prices">' +
                        '<div class="amount">$' + productPrice + '</div>' +
                        '<div class="remove">🗑️</div>' +
                      '</div>' +
                    '</div>';
    $(".empty-message").hide();
    $(".Cart-Items:last").after(newProduct); // add the new product after the last existing product
    $("#productName").val(""); // reset the form inputs
    $("#productPrice").val("");
    
  });
});

// Increase the height of the CartContainer to show the new item
$(".CartContainer").height($(".CartContainer").height() + $(".Cart-Items").last().height());




