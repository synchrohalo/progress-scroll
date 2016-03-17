var drawCircles = function(){
  var circleNum = 0;
  var pageWidth = $( ".circle-progress-bar" ).outerWidth(true);
  var circleDiv = "<div class='circle' id='circle-" + circleNum + "'></div>";
  
  $( ".circle-progress-bar" ).prepend( circleDiv );
  
  var circleWidth = $( ".circle" ).outerWidth(true);

  circleNum = 1;
  
  //console.log( circleWidth );
  
  for( var i = 0; i < ( pageWidth / circleWidth ) - 2; i++ ){
    circleDiv = "<div class='circle' id='circle-" + circleNum + "'></div>";

    $( ".circle-progress-bar" ).prepend( circleDiv );
    
    circleNum++;
  }

  return circleNum;
  
  //console.log(circleNum);
  
  //console.log( pageWidth );
  
  //console.log( $( ".circle" ).width() );
}


$( document ).ready( function() {
  var circleNum = drawCircles();
  //console.log(circleNum);

  var prevScrollPos = 0;
  var curScrollPos = 0;
  var overviewPos = $( "a[href='#overview'" ).offset().top;
  var purposePos = $( "a[href='#purpose'" ).offset().top;
  var randomPos = $( "a[href='#randomization'" ).offset().top;
  var discontPos = $( "a[href='#discontinue'" ).offset().top;
  var informedPos = $( "a[href='#informed'" ).offset().top;
  var procedurePos = $( "a[href='#procedure'" ).offset().top;
  var risksPos = $( "a[href='#risks'" ).offset().top;
  var benefitsPos = $( "a[href='#benefits'" ).offset().top;
  var disclosurePos = $( "a[href='#disclosure'" ).offset().top;
  var costsPos = $( "a[href='#costs'" ).offset().top;
  var participationPos = $( "a[href='#participation'" ).offset().top;

  //console.log( anchorPos )

  $( window ).scroll(
    function(){
      curScrollPos = $( this ).scrollTop();
      var pageBottom = $( document ).height() - $( window ).height();

      // scroll down
      if( curScrollPos > prevScrollPos ){
        for(var i = 0; i <= ( circleNum * curScrollPos / pageBottom ); i++ ){
          $( "#circle-" + (circleNum - i).toString() ).addClass( "circle-filled" );
        }
      }
      // scroll up
      else{
        for(var i = circleNum; i >= ( circleNum * curScrollPos / pageBottom ); i-- ){
          $( "#circle-" + (circleNum - i).toString() ).removeClass( "circle-filled" );
        }
      }

      prevScrollPos = curScrollPos;

      //$( "#progress-top" ).css("width", (100 * ( curScrollPos / pageBottom )) + "vw" );
      
      /***** CHANGE HEADER TITLE *****/
      if( $( window ).scrollTop() > ( overviewPos - 1) ){
          $( "#section" ).show(); // y this no work
          $( "#doc-header" ).show(); // y this no work
          //$( "#doc-header" ).replaceWith( "<h2 id='#doc-header'>Overview</h2>" );
          $( "#doc-header" ).html( "Overview" );
      }
      else{
        $( "#doc-header" ).hide();
      }
      /*if( $( window ).scrollTop() >= purposePos ){
          $( "#doc-header" ).html( "Purpose" );
      }
      if( $( window ).scrollTop() >= randomPos ){
          $( "#doc-header" ).html( "Randomization" );
      }
      if( $( window ).scrollTop() >= discontPos ){
          $( "#doc-header" ).html( "Discontinue" );
      }*/
      if( $( window ).scrollTop() > ( informedPos - 1 ) ){
          $( "#doc-header" ).html( "Informed Consent" );
      }
      if( $( window ).scrollTop() > ( procedurePos - 1 ) ){
          $( "#doc-header" ).html( "Procedure" );
      }
      if( $( window ).scrollTop() > ( risksPos - 1 ) ){
          $( "#doc-header" ).html( "Risks & Benefits" );
      }
      /*if( $( window ).scrollTop() >= benefitsPos ){
          $( "#doc-header" ).html( "Benefits" );
      }*/
      if( $( window ).scrollTop() > ( disclosurePos  - 1 ) ){
          $( "#doc-header" ).html( "Disclosure, Costs, & Participation" );
      }
      /*if( $( window ).scrollTop() >= costsPos ){
          $( "#doc-header" ).html( "Costs" );
      }
      if( $( window ).scrollTop() >= participationPos ){
          $( "#doc-header" ).html( "Participation" );
      }*/

      /***** SHOW CONTINUE BUTTON *****/
      if( $( window ).scrollTop() == pageBottom ){
        $( "#footer-msg" ).hide();
        $( "#footer-contents .button" ).show();

        console.log( "FINISHED" );
      }
    }
  );

});