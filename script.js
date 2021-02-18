$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").show();
        $(".stream1").show('slow');
        $(".stream1").show('medium');
        $(".stream1").show('fast');
        $(".stream1").show(1000);
        or 
        $(".stream1").hide();
        $(".stream1").hide('slow');
        $(".stream1").hide('medium');
        $(".stream1").hide('fast');
        $(".stream1").hide(1000);
        or         
        $(".stream1").toggle();
        $(".stream1").toggle(1000);
        or
        $(".stream1").slideDown();
        $(".stream1").slideDown(1000);
        or
        $(".stream1").slideUp();
        $(".stream1").slideUp(1000);
        or
        $(".stream1").fadeTo(1000, 0.5);
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
}); 