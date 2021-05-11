$("#skills-content").waypoint(
    function() {
        $(".progress .progress-bar").each(function() {
            var width = $(this).data("val");
            $(this).css("width", width + "%");
        });
    }, { offset: "80%" }
);