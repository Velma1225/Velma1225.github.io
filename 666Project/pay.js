$(function() {
    if ($(".tabs_container .tabs").length > 0) {
      var active_tab = $(".product_info .tabs li:first-child").data("tab");
      $("#" + active_tab).show();
      $(".product_info .tabs li:first-child").addClass("active");
  
      $(".product_info .tabs li").click(function(e) {
        var active_tab = $(this).data("tab");
        $(".product_info .text").hide();
        $("#" + active_tab).show();
        $(".product_info .tabs li").removeClass("active");
        $(this).addClass("active");
      });
    }
  });
  