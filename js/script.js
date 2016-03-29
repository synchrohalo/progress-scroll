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
  /*var overviewPos = $( "a[href='#overview'" ).offset().top;
  var purposePos = $( "a[href='#purpose'" ).offset().top;
  var randomPos = $( "a[href='#randomization'" ).offset().top;
  var discontPos = $( "a[href='#discontinue'" ).offset().top;
  var informedPos = $( "a[href='#informed'" ).offset().top;
  var procedurePos = $( "a[href='#procedure'" ).offset().top;
  var risksPos = $( "a[href='#risks'" ).offset().top;
  var benefitsPos = $( "a[href='#benefits'" ).offset().top;
  var disclosurePos = $( "a[href='#disclosure'" ).offset().top;
  var costsPos = $( "a[href='#costs'" ).offset().top;
  var participationPos = $( "a[href='#participation'" ).offset().top;*/

  //console.log( anchorPos )

  var modalOn = false;
  var qMarked = false;

  // question modal
  if( !modalOn ){ 
    $( "#overview-q" ).click( function() {
      $( "#no-content" ).fadeIn( "fast", function(){
        $( "#question-panel" ).slideToggle( "fast", function() {
        });
      });
    });

    modalOn = true;
  }

  if( modalOn ){
    $( "#q-modal" ).click( function() {
      if( !qMarked ) $( "#question-panel" ).slideToggle( "fast" ); 
      $( "#q-modal" ).fadeOut( "fast" );
    });

    $( ".close" ).click( function() {
      $( "#question-panel" ).slideToggle( "fast", function() {
        $( ".modal" ).fadeOut( "fast" )
      });
    });

    $( ".confusing" ).click( function() {
      qMarked = true;
      $( ".modal" ).fadeOut( "fast" );
      $( "#overview-q" ).addClass( "question-marked" );
      $( "#question-panel" ).slideToggle( "fast", function() {
        $( "#q-modal" ).fadeIn( "fast", function() {
          //$( "#question-modal" ).fadeOut( "fast" );
        });
      });
    });

    modalOn = false;
  }

  // question direct manipulation
  /*$( "#purpose-q" ).click( function() {
      $( "#question-modal" ).fadeIn( "fast", function(){
        $( "#question-panel" ).slideToggle( "fast", function() {
          //modalOn = true;

          //console.log(modalOn);
        });
      });
    });*/

  var label1Off = false;
  var label2Off = true;

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
      /*if( $( window ).scrollTop() > ( overviewPos - 1) ){
          $( "#section" ).show(); // y this no work
          $( "#doc-header" ).show(); // y this no work
          //$( "#section .question" ).show(); // y this no work
          //$( "#doc-header" ).replaceWith( "<h2 id='#doc-header'>Overview</h2>" );
          $( "#doc-header" ).html( "Overview" );
      }
      else{
        $( "#section" ).hide();
      }*/

      /*if( $( window ).scrollTop() > purposePos ){
          //$( "#doc-header" ).html( "Purpose" );
          
          if( label2Off ){
              $( "#label-2" ).animate({ 
                left:"+=23vw"
              }, 500 );
              $( "#label-1" ).animate({
                left:"-=23vw"
              }, 500 );

              label2Off = false;
          }
      }
      if( $( window ).scrollTop() > randomPos ){
          $( "#doc-header" ).html( "Randomization" );
      }
      if( $( window ).scrollTop() > discontPos ){
          $( "#doc-header" ).html( "Discontinue" );
      }
      if( $( window ).scrollTop() > ( informedPos - 1 ) ){
          $( "#doc-header" ).html( "Informed Consent" );
      }
      if( $( window ).scrollTop() > ( procedurePos - 1 ) ){
          $( "#doc-header" ).html( "Procedure" );
      }
      if( $( window ).scrollTop() > ( risksPos - 1 ) ){
          $( "#doc-header" ).html( "Risks & Benefits" );
      }
      if( $( window ).scrollTop() > benefitsPos ){
          $( "#doc-header" ).html( "Benefits" );
      }
      if( $( window ).scrollTop() > ( disclosurePos  - 1 ) ){
          $( "#doc-header" ).html( "Disclosure, Costs, & Participation" );
      }
      if( $( window ).scrollTop() > costsPos ){
          $( "#doc-header" ).html( "Costs" );
      }
      if( $( window ).scrollTop() > participationPos ){
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