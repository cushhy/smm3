$(function(){
	$( ".formes" ).submit(function( event ) {
		var name = $( this ).find( "input[name=name]" );
		var phone = $( this ).find( "input[name=tel]" );
        


		dataString = {
			'name' : name.val(),
			'tel' : phone.val(),
		};
		 
		$.ajax({
			type: "POST",
			url: "/mail.php",
			data: dataString,
			success: function() {
             
						$(popup).addClass('hide');					
						$(thankyou).addClass('show');
						$('#name').val('');
						$('#tel').val('');

			}
		});
		return false;
		event.preventDefault();
	});
    
   
});
$(function(){
	$( ".form2" ).submit(function( event ) {
		var name = $( this ).find( "input[name=name]" );
		var phone = $( this ).find( "input[name=tel]" );
        


		dataString = {
			'name' : name.val(),
			'tel' : phone.val(),
		};
		 
		$.ajax({
			type: "POST",
			url: "/mail.php",
			data: dataString,
			success: function() {
             				
						$(thankyou).addClass('show');
						popup.classList.remove('show');
						$('#namepopup').val('');
						$('#telpopup').val('');

			}
		});
		return false;
		event.preventDefault();
	});
    
   
});