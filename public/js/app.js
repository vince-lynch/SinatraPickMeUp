$(function() {
    console.log( "ready!" );

// move BLINKER to end of <textarea>

    var textarea = $("textarea")
        
        // save old value as we need to clear it
        val = textarea.val();
    
  // focus textarea, clear value, re-apply
    textarea.focus().val("").val(val);
    var text = $('textarea').val();
    
 /*  var intro = "Am I ________ enough?"
    //text is split up to letters
    $.each(intro.split(''), function(i, letter){
      //we add 100*i ms delay to each letter 
        setTimeout(function(){
             // save the current textarea text
             
            //add the current textarea text + current letter in foreach
            $('textarea').val(letter);

        }, 100*i);
    });*/

// take the textarea message and put it into an array of individual letters
  
    $('textarea').val("");

    //text is split up to letters
    $.each(text.split(''), function(i, letter){
      //we add 100*i ms delay to each letter 
        setTimeout(function(){
             // save the current textarea text
             var currenttext = $('textarea').val();
            //add the current textarea text + current letter in foreach
            $('textarea').val(currenttext + letter);
        }, 100*i);
    });

  //  for (var i = 0, len = text.length; i < len; i++) {
    //console.log(text[i]);

   //   $('textarea').val(text[i]).delay( 800 ); // need this to do this slowly
   // }


 var  color_num = Math.floor(Math.random() * 6) + 1  
    switch(color_num) {
        case 1:
        $('body,html').css('background-color','#00B0FF');
            break;
        case 2:
        $('body,html').css('background-color','#ff0083');
            break;
        case 3:
        $('body,html').css('background-color','#ffc300');
         break;
         case 4:
         $('body,html').css('background-color','#ff0035');
             break;
         case 5:
         $('body,html').css('background-color','#aa52ff');
             break;
         case 6:
         $('body,html').css('background-color','#0bee43');
          break;         
    }
    $( ".clickme" ).click(function() {
 
      window.location.reload()
    });

 ////// ON THEM PRESSING THE RETURN KEY
    $(document).keypress(function(e) {
        if(e.which == 13) {
            console.log("enter key pressed");
       
            var text = $('textarea').val();
            var initialPage = location.pathname;
            $go = text;
            location.replace("/" + text);

           
        }
    });

});


