<img class="mySlides" src="http://i.imgur.com/B8Msr12.jpg"> <!-- Lantern -->
<img class="mySlides" src="http://i.imgur.com/ckMvmnA.jpg"> <!-- Nike Back -->
<img class="mySlides" src="http://i.imgur.com/MJoJy5Y.png"> <!-- Tounge 2 phone -->
<img class="mySlides" src="http://i.imgur.com/bUMAmTx.jpg"> <!-- Thrasher Extreme -->
<img class="mySlides" src="http://i.imgur.com/BPKyMyh.jpg"> <!-- Sauce Jr. -->
<img class="mySlides" src="http://i.imgur.com/l4tcqD2.jpg"> <!-- Faisal looks like poo -->
<img class="mySlides" src="http://i.imgur.com/wpDMUyq.jpg"> <!-- Suit Stan 1 -->
<img class="mySlides" src="http://i.imgur.com/QYl2UHE.jpg"> <!-- ATM -->
<img class="mySlides" src="http://i.imgur.com/75d7hE7.jpg"> <!-- Cooking EMojji -->
<img class="mySlides" src="http://i.imgur.com/ZQGhIgN.jpg"> <!-- Kylie is BAE -->
<img class="mySlides" src="http://i.imgur.com/aIq8NiG.jpg"> <!-- Waiting for text back -->
<img class="mySlides" src="http://i.imgur.com/yHD3YXb.jpg"> <!-- Faisal Poo 2 -->
<img class="mySlides" src="http://i.imgur.com/5saGHeV.jpg"> <!-- Gang -->
<img class="mySlides" src="http://i.imgur.com/hNfkCuX.jpg"> <!-- Vintage Car -->
<img class="mySlides" src="http://i.imgur.com/dOLKc95.jpg"> <!-- Walk or Die -->
<img class="mySlides" src="http://i.imgur.com/4zhQ2Gr.jpg"> <!-- Hats down -->
<img class="mySlides" src="http://i.imgur.com/U2KmAM6.jpg"> <!-- Dont Fall -->
<img class="mySlides" src="http://i.imgur.com/aylZJRU.png"> <!-- S4 -->
<img class="mySlides" src="http://i.imgur.com/5saGHeV.jpg"> <!-- Gang -->
<img class="mySlides" src="http://i.imgur.com/uBwTMKe.jpg"> <!-- Lil Fuad -->
<img class="mySlides" src="http://i.imgur.com/SGAFFFw.jpg"> <!-- ! 1 SS -->
<img class="mySlides" src="http://i.imgur.com/6xk8MYY.jpg"> <!-- Smokers Only -->
<img class="mySlides" src="http://i.imgur.com/ClfKB2A.jpg"> <!-- Fake Friends -->
<img class="mySlides" src="http://i.imgur.com/s6vfw3u.png"> <!-- Lost -->
<img class="mySlides" src="http://i.imgur.com/ujQunFh.jpg"> <!-- Hookie POokie -->
<img class="mySlides" src="http://i.imgur.com/cR5bzoc.jpg"> <!-- Get ur Clout Up -->
<img class="mySlides" src="http://i.imgur.com/o7J03nW.jpg"> <!-- EWWW -->
<img class="mySlides" src="http://i.imgur.com/GGREcKH.jpg"> <!-- * Ball -->
<img class="mySlides" src="http://i.imgur.com/QTd55u9.jpg"> <!-- Flex on ur ex Bitch -->
<img class="mySlides" src="http://i.imgur.com/ojBRDJQ.jpg"> <!-- Rims on da Ambulance -->
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}