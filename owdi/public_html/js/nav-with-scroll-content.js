//Mission Products
function navWithScrollContent(arr) {
    var out = "";
    var i;
    for (i = 0; i < arr.length; i++) {
        out += '<div class="scrollspy smooth-scroll col-md-4 col-sm-6 custom-mt-20" style="min-height:300px;>';
        out += '<div class="ph-20 feature-box text-center object-non-visible" data-animation-effect="fadeInDownSmall" data-effect-delay="100">';
        out += '<a href="' + arr[i].href + '" target="' + arr[i].linkTarget + '">';
        out += '<i class="fa fa-' + arr[i].fontAwesome + ' fa-4x" style="color:#3697d9;"></i>';
        out += '</a>';
        out += '<h3>' + arr[i].productTitle + '</h3>';
        out += '<div class="separator clearfix"></div>';
        out += '<p class="text-muted">' + arr[i].description + '</p>';
        out += '<a class="link-dark" href="' + arr[i].href + '" target="' + arr[i].linkTarget + '">View file<i class="pl-5 fa fa-angle-double-right"></i></a>';
        out += '</div>';
        out += '</div>';
    }
    document.getElementById("nav-with-scroll-content").innerHTML = out;
}