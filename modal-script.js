$(document).ready(()=>{
			$('.btn-modal').click(function(){
				$('.modal-overlay').css({"display":"flex","align-items":"center"});
			});
			// button click close modal
			$('.close,.ok,.cancel').click(function(){
				$(".modal-overlay").delay(50).fadeOut();
			});
			//click anywhere outside of the content div
			$(".modal-overlay").click(function(e){
	        var content = $("#md-content"); 
			if(e.target.id != content.attr('id') && !content.has(e.target).length)
        	{
            $(".modal-overlay").delay(50).fadeOut();
        	}
    		});
	   	    //when press esc key
	   	    $(document).on( 'keydown', function ( e ) {
    		if ( e.keyCode === 27 ) {
        		$('.modal-overlay').delay(50).fadeOut();
    		}
			});
		
	});