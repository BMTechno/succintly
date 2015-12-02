(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
         $(document).on("click", ".uib_w_5", function(evt)
        {
         activate_page("#videos"); 
        });
        $(document).on("click", "#hme", function(evt)
        {
         activate_page("#mainpage"); 
        });
}
 $(document).ready(register_event_handlers);
})();
