$("document").ready(function() {
var currPage = 0;
var pageList = ["pr7.html","pr10.html", "pr9.html"];
var totalPages = pageList.length;
$(".btn").on("click",function(){
   //if we are at the last page set currpage = 0 else increment currPage.
   currPage = currPage < (totalPages - 1) ? ++currPage : 0;
   var page = pageList[currPage];
   $().load(currPage);


});
});


