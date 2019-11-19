/*
    post = document.createElement("iframe");
    iframe.src = file;
*/
/*
need to think about the order of things (the request, the append, etc)
*/
/*
var postData;

$.get(
    "posts",
    {}, //empty json parameter list
    function(data) {
        postData = data;
        //alert('page content: ' + data);
    }
);
*/


/*
$(function(){
    $('#posts').on("load", postDataDivLoad);
});
*/

//$(document).ready(postDataDivLoad);

function postDataDivLoad(){
    //var postIframe = document.createElement("iframe");
    //var postDataNode = document.createTextNode(postData); 
    //postIframe.append(postData);
    //posts.append(postIframe);


    var posts = document.getElementById("posts"); 
    var blogP = document.createElement("p");
    blogP.innerText = postData;
    posts.append(blogP);
    console.log("postDataDivLoad() executed");
}
/*
append file.text to div
*/
