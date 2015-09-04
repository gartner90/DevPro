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

//Validar
	jQuery('.form-services').on('submit',function() {	
        var idFormulario = jQuery(this).attr('id').replace('-',' ');
        console.log(idFormulario);
		var name    =  jQuery("#name").val();
		var email   =  jQuery("#email").val();
        var phone   =  jQuery("#subject").val();
        var message =  jQuery("#message").val();
        
		jQuery.ajax({
			url:'./src/Php/send.php',
data:'name='+name+'&email='+email+'&phone='+phone+'&message='+message+'&idFormulario='+idFormulario,
			type:'POST',
			dataType:'HTML',

			success : function(res) {
				UIkit.modal.alert("gracias por contactarnos, tu mensaje ha sido enviado, apreciamos tu  interés en este sitio.");
                jQuery('input').attr('value',' ');
			},
			error : function(jqXHR, status, error) {
				alert('Disculpe, existio un problema');
			},
		});
	});