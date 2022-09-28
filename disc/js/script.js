$(document).ready(function () {
    // display home page
    $(".display-page").load("./pages/home.html");
    // This method does the do of showing and hiding the sidebar
    $(".btn-toggle-side").click(function () {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(".app").addClass("active");
            //Item location by page orientation
            if($('body').css('direction') == "ltr"){
                $(this).css("left" , parseInt($('.offcanvas-start').css("width")) + 10 );
            }else{
                $(this).css("right" , parseInt($('.offcanvas-start').css("width")) + 10 );
            } 
            //Run the animation for the sidebar header
            setTimeout(animatedLaunch, 600);
            //Show and hide the placeholder in small screens
            if(window.innerWidth <= 549){
                $(".placeholder-dark").css("visibility" , "visible");
                $(".btn-toggle-projects").css("left" , parseInt($('.offcanvas-start').css("width")) + 10 );          
            }   
        } else {
            $(".app").removeClass("active");
            if($('body').css('direction') == "ltr"){
                $(this).css("left" ,  10 );
            }else{
                $(this).css("right" ,  10 );
            }  
            setTimeout(animatedShowdown, 50);
            if(window.innerWidth <= 549)
            {
                $(".placeholder-dark").css("visibility" , "hidden");
                $(".btn-toggle-projects").css("left" ,  10 );
            }    
        }
    });
    // this function do show and hide page all projects
    $(".btn-toggle-projects").click(function () {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(".display-page").load("./pages/all-work.html");
        } else {
            $(".display-page").load("./pages/work.html");
        }
    });
    // this function add active to li menu
    $(".offcanvas-body > ul.menu li").hover(function () {
            $(this).addClass("active").parent().addClass('showBg');
        }, function () {
            $(this).removeClass("active").parent().removeClass('showBg');
        }
    );
    //change pages by list aside
    $(".menu li").click(function(){
        let namePage = this.dataset.url;
        if(namePage == "./pages/work.html"){
            $(".btn-toggle-projects").removeClass("active").removeClass("d-none");
        }else{
            $(".btn-toggle-projects").addClass("d-none");
        }
        $(".display-page").load(`${namePage}`); 
    });
    // function animate header in aside 
    function animatedLaunch(){
        $(".offcanvas-header > span").addClass("showAnimate"); 
        $(".circle-hide").addClass("showCircal"); 
        $(".offcanvas-title").addClass("showCircal"); 
    }
    function animatedShowdown(){
        $(".offcanvas-header > span").removeClass("showAnimate"); 
        $(".circle-hide").removeClass("showCircal"); 
        $(".offcanvas-title").removeClass("showCircal"); 
    }
    //dirction website
    $(".form-check-input").change(function () {
		$('body').hide();
        window.location.reload();
        if($(".form-check-input").val() == "true"){
            $(".form-check-input").val("false");
            $("body").css("direction" , "ltr");
            $('link[href*="bootstrap"]').attr("href", "./assets/css/bootstrap.min.css");
            $('link[href*="disc"]').attr("href", "./disc/css/style.css");
            setDataStorge("dirWeb" , "direction: ltr");
        }else{
            $(".form-check-input").val("true");
            $("body").css("direction" , "rtl");
            $('link[href*="bootstrap"]').attr("href", "./assets/css/bootstrap.rtl.min.css");
            $('link[href*="disc"]').attr("href", "./disc/css/style-rtl.css");
            setDataStorge("dirWeb" , "direction: rtl");
        }
    });
    // localStorge it save dir in storage
    function setDataStorge(name,value){
        window.localStorage.setItem(name , value);
    }
    //get Dir rtl or ltr
    if(window.localStorage.getItem("dirWeb")){
        if(window.localStorage.getItem("dirWeb") == 'direction: rtl'){
            $(".form-check-input").val("true");
            $("body").css("direction" , "rtl");
            $('link[href*="bootstrap"]').attr("href", "./assets/css/bootstrap.rtl.min.css");
            $('link[href*="disc"]').attr("href", "./disc/css/style-rtl.css");
            $(".form-check-input").attr("checked" , "checked");
        }else{
            $(".form-check-input").val("false");
            $("body").css("direction" , "ltr");
            $('link[href*="bootstrap"]').attr("href", "./assets/css/bootstrap.min.css");
            $('link[href*="disc"]').attr("href", "./disc/css/style.css");
            $(".form-check-input").removeAttr("checked");
        }
    }
});
//display pages
function goPage(val){
    if(val == "./pages/work.html"){
        $(".btn-toggle-projects").removeClass("d-none");
    }else{
        $(".btn-toggle-projects").addClass("d-none");
    }
    $(".display-page").load(val); 
}
