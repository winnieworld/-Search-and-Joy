const gotop =document.getElementById('gotop');
gotop.onclick=function(){
    window.scroll(0,0);
}
function goSearch(){
    var SEARVALUE = $("#txt_sch").val();
    if(!SEARVALUE){
        alert("먼저 검색어를 입력해주십시오");
        return false;
    }else{
    $.ajax({
        type: 'POST',
        datatype:'json',
        url:"naver_api.php",
        data:{'SEARVALUE':SEARVALUE},
        cache:false,
        async:false,
    })
    .done(function(result){
        var n_blog_html="";
        for(var i=0; i<result.items.length;i++){
            var row_html="";
            row_html+="<div style='width:100%;text-align:left;padding-left:50px; font-weight:bold'><a href='"+result.items[i].link+"'targer='_new'style='color:black; text-decoration:none'>"+(i+1)+"."+result.items[i].title+"("+result.items[i].postdate+")</a></div>";
            row_html+="<div style='width:100%;text-align:left;padding-left:70px; color:#888888;padding-rop:'4px'>"+result.items[i].description+"</div>";

            row_html+="<div style='width:100%;height:30px'></div>";
            n_blog_html+=row_html;
        }
    if(n_blog_html)
    {$("#blog_result").html(n_blog_html);}

    });}
}
$(document).ready(function(){

});
