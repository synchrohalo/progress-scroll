var drawCircles = function(){
  var pageWidth = $( ".circle-progress-bar" ).outerWidth(true);
  var circleDiv = "<div class='circle'></div>";
  
  $( ".circle-progress-bar" ).prepend( circleDiv );
  
  var circleWidth = $( ".circle" ).outerWidth(true);
  var circleNum = 0;
  
  //console.log( circleWidth );
  
  for( var i = 0; i < ( pageWidth / circleWidth ) - 2; i++ ){
    $( ".circle-progress-bar" ).prepend( circleDiv );
    
    circleNum++;
  }
  
  //console.log(circleNum);
  
  //console.log( pageWidth );
  
  //console.log( $( ".circle" ).width() );
}


$( document ).ready( function() {
  //drawCircles();

  var curScrollPos = 0;

  $( window ).scroll(
    function(){
      curScrollPos = $( window ).scrollTop();
      var pageBottom = $( document ).height() - $( window ).height();
      
      $( "#progress" ).css("width", (100 * ( curScrollPos / pageBottom )) + "vw" );
      
      if( $( window ).scrollTop() == pageBottom ){
        $( "#footer-msg" ).hide();
        $( "#footer-contents .button" ).show();

        console.log( "FINISHED" );
      }
    }
  );

});