/**
 * index.js
 * - All our useful JS goes here, awesome!
 */
 
 $(document).ready(function(){
     
    $( document ).on( 'keydown', function ( e ) {
        if ( e.keyCode === 27 ) { // ESC
            $('.img>img').hide();
            $('.body2').hide();
        }
    });
    $('.item').click(function(){
        $('.body2').show();
    });

     $('.item1').click(function() {
         $('.img>img').hide();
         $('.img1>img').show();
     });
     $('.item2').click(function() {
         $('.img>img').hide();
         $('.img2>img').show();
     });
     $('.item3').click(function() {
         $('.img>img').hide();
         $('.img3>img').show();
     });
     $('.item4').click(function() {
         $('.img>img').hide();
         $('.img4>img').show();
     });
     $('.item5').click(function() {
         $('.img>img').hide();
         $('.img5>img').show();
     });
     $('.item6').click(function() {
         $('.img>img').hide();
         $('.img6>img').show();
     });
     $('.item7').click(function() {
         $('.img>img').hide();
         $('.img7>img').show();
     });
     $('.item8').click(function() {
         $('.img>img').hide();
         $('.img8>img').show();
     });
     $('.item9').click(function() {
         $('.img>img').hide();
         $('.img9>img').show();
     });
     $('.item10').click(function() {
         $('.img>img').hide();
         $('.img10>img').show();
     });
     $('.item11').click(function() {
         $('.img>img').hide();
         $('.img11>img').show();
     });
     $('.item12').click(function() {
         $('.img>img').hide();
         $('.img12>img').show();
     });
     $('.item13').click(function() {
         $('.img>img').hide();
         $('.img13>img').show();
     });
     $('.item14').click(function() {
         $('.img>img').hide();
         $('.img14>img').show();
     });
     $('.item15').click(function() {
         $('.img>img').hide();
         $('.img15>img').show();
     });
     $('.item16').click(function() {
         $('.img>img').hide();
         $('.img16>img').show();
     });
 });