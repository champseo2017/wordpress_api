var portfolioPostsBtn = document.getElementById("portfolio_posts_btn");
var portfolioPostsContainer = document.getElementById("portfolio-posts-container");



if(portfolioPostsBtn){
    portfolioPostsBtn.addEventListener("click",function(){
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET','http://localhost/ex_wordpress/wp-json/wp/v2/posts?&order=desc');
        ourRequest.onload = function(){
            if(ourRequest.status >=200 && ourRequest.status < 400){
                var data = JSON.parse(ourRequest.responseText);
                createHTML(data);
                console.log(data);
            }else{
                console.log("error connect");
            }
        };
        ourRequest.onerror = function(){
            console.log("Connection error");
        };

        ourRequest.send();
    });
}

function createHTML(postsData) {

    var ourHTMLString = '';
    for(i = 0; i < postsData.length; i++){
        ourHTMLString += '<h2>' + postsData[i].title.rendered + '</h2>';
        ourHTMLString += postsData[i].content.rendered;
        ourHTMLString += postsData[i].cats[0].name;
    }
    portfolioPostsContainer.innerHTML = ourHTMLString;

}
