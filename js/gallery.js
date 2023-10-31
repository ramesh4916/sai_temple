$(document).ready(function() {
    // Define an array of image URLs
    var imageUrls = [
        "url1.jpg",
        "url2.jpg",
        "url3.jpg",
        // Add more image URLs here
    ];

    var $imageContainer = $("#image-container");

    // Populate the image container with dynamic image elements
    imageUrls.forEach(function(imageUrl) {
        var $item = $("<div class='item col-lg-3 col-md-4 col-6 col-sm'></div>");
        var $link = $("<a href='" + imageUrl + "' class='fancylight popup-btn' data-fancybox-group='light'></a>");
        var $img = $("<img class='img-fluid' src='" + imageUrl + "' alt=''>");
        $link.append($img);
        $item.append($link);
        $imageContainer.append($item);
    });

    // Initialize Isotope
    $('.portfolio-item').isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('.portfolio-menu ul li').click(function() {
        $('.portfolio-menu ul li').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).data('filter');
        $('.portfolio-item').isotope({
            filter: selector
        });
        return false;
    });

    var popup_btn = $('.popup-btn');
    popup_btn.magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
