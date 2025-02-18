
$(document).ready(function () {
    const activeImage = $(".active-img");
    const otherImages = $(".image");
    const aboutImage = $(".img-about");
    const aboutText = $(".text-about");
    // const sideBar = $(".nav-item");
    // const closeIcon = $(".fa-xmark");
    // const openBar = $(".fa-bars")
    // const navBar = $(".navbar")

   

    function setupHoverEffect(imgClass, headingClass) {
        $(headingClass).hide(); // Hide the heading initially
        $(imgClass).hover(
            function () {
                $(this).siblings(headingClass).fadeIn(300); // Show heading on hover
            },
            function () {
                $(this).siblings(headingClass).fadeOut(300); // Hide heading on hover out
            }
        );
    }

    // Array of classes to apply the hover effect
    const classes = [
        { img: ".img-1", heading: ".h-1" },
        { img: ".img-2", heading: ".h-2" },
        { img: ".img-5", heading: ".h-5" },
        { img: ".img-6", heading: ".h-6" },
        { img: ".img-7", heading: ".h-7" }
    ];

    // Loop through the array and set up the hover effect for each pair
    classes.forEach(({ img, heading }) => {
        setupHoverEffect(img, heading);
    });




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
