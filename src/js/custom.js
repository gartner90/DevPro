//Menu 
jQuery(document).ready(function(){
        var itemsMenu,
            positions = [];

        //Anchors
        jQuery('.content-menu').click(function(){ 
            itemsMenu = 0;

            //number of items menu
            jQuery( ".uk-nav-sub .btn-menu" ).each(function() {
                itemsMenu++;
            });

            //Id div to Anchors 
            jQuery( ".uk-nav-sub .btn-menu" ).each(function() {
                var id = jQuery(this).attr('id').replace('M-','');
                var PosTop = jQuery('#' + id).offset().top;
                if(positions.length < itemsMenu){
                    positions.push(PosTop);
                }
            });
        });
        
        //Scroll position  
        jQuery('.btn-menu').click(function(){
            var number = jQuery(this).attr('number');

            jQuery( ".uk-close" ).trigger( "click" );
            
            setTimeout(function(){
                jQuery("html, body").animate({
                    scrollTop: positions[number]
                }, 1000);
            },500);     

        });      
    });