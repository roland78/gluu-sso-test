/*  FOR > DevMgr.Frontend > code JS Version: 1011 (date of: 12 OCT 2022) */
/*  code JS file (radukam@gmail.com) */
const domainURL = 'https://euw-app-selobligationnewgen-dev-ma3css.azurewebsites.net';
const winHeight = window.innerHeight;
function insertExtScript(){
    // jQuery insert
    var jquery_script = document.createElement('script');
    jquery_script.classList.add("jquery_script");
    jquery_script.setAttribute("defer", "defer");
    jquery_script.setAttribute("crossorigin", "anonymous");
    jquery_script.setAttribute("referrerpolicy", "no-referrer");
    jquery_script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
    if(document.getElementsByClassName('jquery_script').length < 1){
        document.getElementsByTagName('head')[0].appendChild(jquery_script);
    };
}
insertExtScript();
function styleDetect(){
    if(
        document.getElementsByClassName('newstyle').length &&
        document.getElementsByTagName('head').length
    ){
        document.getElementsByTagName('head')[0].appendChild(document.getElementsByClassName('newstyle')[0]);
    }
};
styleDetect();
function elementsFix(){
    if(document.getElementsByTagName('app-root').length){
        if (document.getElementById('wrapPaginator') != null){
            let = get_wrapPaginator = document.getElementById('wrapPaginator').clientHeight;        
            document.getElementsByTagName('app-root')[0].style.minHeight = winHeight-get_wrapPaginator+'px';
        }
        // document.getElementsByTagName('app-root')[0].style.paddingBottom = get_wrapPaginator+'px';
    }
    /*
    if(document.getElementsByTagName('mat-sidenav-container').length){
        let = toolbarHeight = document.getElementsByTagName('mat-toolbar')[0].clientHeight;
        let = shortcutsHeight = document.getElementsByClassName('shortcuts-line')[0].clientHeight;
        document.getElementsByTagName('mat-sidenav-container')[0].style.display = "block";
        document.getElementsByTagName('mat-sidenav-container')[0].style.position = "relative";
        document.getElementsByTagName('mat-sidenav-container')[0].style.minHeight = (winHeight-(shortcutsHeight+toolbarHeight))+'px';
    }
    */
};
/*
document.addEventListener("DOMContentLoaded", function(event) { 
    
});
*/
window.addEventListener("load", () => {
    // move at the bottom, just for reading priority (the latest from the bottom CSS has priority)
    setTimeout(function(){
        styleDetect();
    },500);
    setTimeout(function(){
        styleDetect();
    },1000);
    elementsFix();
});
/*

const mat_icon_button = document.querySelectorAll(".mat-button-wrapper");
//var mat_icon_button = document.getElementById('[data-class="main-logo"]');
mat_icon_button.addEventListener("click", function () {
    mat_icon_button.style.color = "blue";
});


if(mat_icon_button){
    for(var i = 0; i<mat_icon_button.length; i++) {
        mat_icon_button[i].addEventListener("click",function(e){
            console.log(333);
        },false);
    }
}

mat_icon_button.onclick = function(event){
    alert('Hello world');
};

*/