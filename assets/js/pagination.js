(function($) {
    // Function to handle page navigation
    function changePage(pageNumber) {
        // Hide all pages
        $('.page-content').hide();

        // Show the selected page
        $('#page-' + pageNumber).show();

        // Update active pagination link
        $('.pagination .page').removeClass('active');
        $('.pagination .page[data-page="' + pageNumber + '"]').addClass('active');
    }

    // On page load, show page 1 by default
    $(document).ready(function() {
        changePage(1); // Default to Page 1
    });

    // On pagination link click
    $('.pagination .page').on('click', function(e) {
        e.preventDefault();

        // Get the page number from the clicked link
        var pageNumber = $(this).data('page');
        
        // Change page
        changePage(pageNumber);
    });

    // Handle 'Next' button (optional)
    $('.pagination .next').on('click', function(e) {
        e.preventDefault();

        // Get the current active page
        var currentPage = $('.pagination .page.active').data('page');
        
        // If we're not on the last page, go to the next one
        if (currentPage < 3) { // Adjust '3' based on your number of pages
            changePage(currentPage + 1);
        }
    });

})(jQuery);
