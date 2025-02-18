
$(document).ready(function () {
    const activeImage = $(".active-img");
    const otherImages = $(".image");
    const aboutImage = $(".img-about");
    const aboutText = $(".text-about");
    // const sideBar = $(".nav-item");
    // const closeIcon = $(".fa-xmark");
    // const openBar = $(".fa-bars")
    // const navBar = $(".navbar")







    activeImage.css({
        transform: "scale(1.1)",
        width: "+=100px",
        zIndex: 0,
    });
    otherImages.css({
        "filter": "grayscale(100%)"
    })


    activeImage.hover(
        function () {
            $(this).css("transform", "scale(1.1)");
        },
        function () {
            $(this).css("transform", "scale(1)");
        }
    );


    activeImage.hover(
        function () {
            otherImages.css("margin", "20px");
        },

        function () {
            activeImage.css("transform", "scale(0.9)");
        },
        function () {
            otherImages.css("margin", "0px");
        }
    );


    otherImages.hover(
        function () {
            $(this).css("transform", "scale(1.3)");
            $(this).css("filter", "grayscale(0%)")
        },
        function () {
            $(this).css("transform", "scale(1)");
            $(this).css("filter", "grayscale(100%)")
        }
    );


    aboutImage.hover(
        function () {
            $(this).animate({ left: "500px" });
            $(aboutText).animate({ right: "500px" });

        }
    );


    // sideBar.css({
    //     display: "none"
    // })
    // closeIcon.css({
    //     display: "none"
    // })
    // $(openBar).click(function () {
    //     $(this).hide();
    //     $(closeIcon).show();
    //     $(sideBar).slideDown("slow");
    // })
    // $(closeIcon).click(function () {
    //     $(sideBar).slideUp("slow");
    //     $(closeIcon).hide();
    //     $(openBar).show();
    // })
    // sideBar.hover(
    //     function () {
    //         $(this).css("transform", "scale(1.1)");
    //     },
    //     function () {
    //         $(this).css("transform", "scale(1)");
    //     }
    // );

    $(".history-text").hide();
    $(".history-h1").hover(function () {
        $(".history-text").slideDown("slow");
    })

    $(".whoare-text").hide();
    $(".whoare-h1").hover(function () {
        $(".whoare-text").slideDown("slow");
    });





});
