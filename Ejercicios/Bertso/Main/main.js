


// Activate top menu on scroll------------------------------------------------------------------------

// $("#td_id").attr('class', 'newClass');

// function scrollFunction() {
//     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//       document.getElementById("navbar").classList.toggle (".navDisplay");
//     } else {
//       document.getElementById("navbar").classList.toggle (".navNone");
//     }
//   }

// scrollFunction();



// Carousel-Fade------------------------------------------------------------------------

  $('#carousel').carousel();


// ------------------------------Prueba jquery

// $("document").ready(function(){
//     $(".subtitle").append("<p>The page just loaded</p>")
// })

// add
// remove
// toggle
// contains

// Change searchIcon Class on hover --------------------------------
$("document").ready(function(){
    $(".topSearchButton").hover(function(){
        $("#searchIcon").toggleClass("searchIconHover");
    })
});


// Scroll ----------------------------------------------------------
$(window).scroll(function(){
    if($(this).scrollTop()>50) {
        $('#navbar').slideDown("500");
        }
    else{$('#navbar').slideUp();
}
});

// https://developer.mozilla.org/en-US/docs/Mozilla/Performance/Scroll-linked_effects
// no funciona por la lectura asíncrona del navegador
// usar show y hide o fadein fadeout slideUp slideDown de animation api jquery

// $("#navBar").css("background-color", "#2982D0");



//------------------------------------------------------------------

//Make disapear navbar
// $("document").ready(function(){
//     $("#navbar").toggleClass("nav-grid-ready")
// });

// Ejemplo para aplicar filtros con jquery en resultados de búsqueda----------------------------------------------------

// $(function () {
//     $("#products h2.product-name[data-type='mineralwater']").css("background-color", "#2982D0");
//     $("#products h2.product-name[data-type='vitamin']").css("background-color", "#12500F");
//     $("#products h2.product-name[data-type='proteinbar']").css("background-color", "#4E0F50");

//     document.querySelector('#cbVitamins').addEventListener('change',function (evt) {
//         updateProductView("vitamins", evt.target.checked);
//     });
//     document.querySelector('#cbMineralWater').addEventListener('change',function (evt) {
//         updateProductView("mineralwater", evt.target.checked);
//     });
//     document.querySelector('#cbProtein').addEventListener('change',function (evt) {
//         updateProductView("proteinbar", evt.target.checked);
//     });

//     $(".product-item").each(function () {
//         var prodName = encodeURIComponent($(this).children("h2").text());
//         var prodID = encodeURIComponent($(this).data("prod_id"));

//         var link = $("<a href='product.html?prodName=" + prodName + "&prodID=" + prodID + "'/>");
//         $(this).children("img").wrap(link);
//     })
    
// })

// function updateProductView(categoryName, bVisible) {
//     // get a list of the product items for the given category.
//     // Use the data attributes to narrow the list
//     var dataSelectorVal = "";
//     switch (categoryName) {
//     case "vitamins":
//         dataSelectorVal = "h2[data-type='vitamin']";
//         break;
//     case "mineralwater":
//         dataSelectorVal = "h2[data-type='mineralwater']";
//         break;
//     case "proteinbar":
//         dataSelectorVal = "h2[data-type='proteinbar']";
//         break;
//     }
//     // use the has() function to select the li tags that are product items
//     // that contain the h2 tag with the corresponding data attribute value
//     $(".product-item").has(dataSelectorVal).css('display', bVisible ? "" : "none");
// }

// -------------------------------------------------------------------------------------------------------------------