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
      curScrollPos = $( window ).scrollTop();
      var pageBottom = $( document ).height() - $( window ).height();
      
      //$( "#progress" ).css("width", (100 * ( curScrollPos / pageBottom )) + "vw" );
      $( "#progress-top" ).css("width", (100 * ( curScrollPos / pageBottom )) + "vw" );
      
      /***** CHANGE HEADER TITLE *****/
      if( $( window ).scrollTop() >= overviewPos ){
          $( "#doc-header" ).show(); // y this no work
          //$( "#doc-header" ).replaceWith( "<h2 id='#doc-header'>Overview</h2>" );
          $( "#doc-header" ).html( "Overview" );
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
      if( $( window ).scrollTop() >= informedPos ){
          $( "#doc-header" ).html( "Informed Consent" );
      }
      if( $( window ).scrollTop() >= procedurePos ){
          $( "#doc-header" ).html( "Procedure" );
      }
      if( $( window ).scrollTop() >= risksPos ){
          $( "#doc-header" ).html( "Risks & Benefits" );
      }
      /*if( $( window ).scrollTop() >= benefitsPos ){
          $( "#doc-header" ).html( "Benefits" );
      }*/
      if( $( window ).scrollTop() >= disclosurePos ){
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