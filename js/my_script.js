$(document).ready(function () {
    // set the background colours to be different
    //$(".fillers:odd > td").css("background-color","#fee12b");
    //$(".fillers:even > td").css("background-color","#fada5e");

    // highlighting rows
    $("th").click(function () {
        $("tr").children().removeClass("highlight");
        $(this).siblings().addClass("highlight");
    });
})