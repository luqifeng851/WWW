$(".jspop").addClass("box");
console.log($(".jspop>li"));

$(".jspop>li").mouseenter(function () {
    console.log("++++");

    $(".pop").removeClass("pop1")
    $(this).addClass("item").siblings().removeClass("item");
    $(this).find(".pop").addClass("pop1");
})
$(".jspop").mouseleave(function () {
    console.log("mouseleave");

    $(".pop").removeClass("pop1");
    $(".jspop>li").removeClass("item");
})