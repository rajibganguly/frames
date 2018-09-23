// JavaScript Document

//$(function() {
	$(document).ready(function() {
		$( ".f-btn" )
			.click(function( event ) {
				event.toggleClass("active");
				debugger;
				//event.preventDefault();
			});
			
			
			
	//Autocomplete text
	$(function() {
		var names = [ "Zeba Akhthar", "Scott Manual", "American Walter", "Becan Holding", "Clodio Menas", "Derad Hegan", "Quoten Swerry" ];
		/*var names = [ "Jörn Zaefferer", "Scott González", "John Resig" ];

		var accentMap = {
			"á": "a",
			"ö": "o"
		};*/
		var normalize = function( term ) {
			var ret = "";
			/*for ( var i = 0; i < term.length; i++ ) {
				ret += accentMap[ term.charAt(i) ] || term.charAt(i);
			}
			return ret;*/
		};

		$( "#developer" ).autocomplete({
			source: function( request, response ) {
				var matcher = new RegExp( $.ui.autocomplete.escapeRegex( request.term ), "i" );
				response( $.grep( names, function( value ) {
					value = value.label || value.value || value;
					return matcher.test( value ) || matcher.test( normalize( value ) );
				}) );
			}
		});
	});
	
	//Date calender
	$(function() {
		$( "#datepicker" ).datepicker({
				showOn: "button",
				buttonImage: "style/images/calendar.gif",
				buttonImageOnly: true
		});
		$( "#datepickfrom" ).datepicker({
			defaultDate: "+1w",
			changeMonth: true,
			numberOfMonths: 2,
			onClose: function( selectedDate ) {
				$( "#datepickto" ).datepicker( "option", "minDate", selectedDate );
			}
		});
		$( "#datepickto" ).datepicker({
			defaultDate: "+1w",
			changeMonth: true,
			numberOfMonths: 2,
			onClose: function( selectedDate ) {
				$( "#datepickfrom" ).datepicker( "option", "maxDate", selectedDate );
			}
		});
	});
	
	
	
	//ColorPicker
	//Option1
	$('.color-box, .colorpicker').colpick({
		layout:'rgbhex',
		color:'ff8800',
		onSubmit:function(hsb,hex,rgb,el) {
			$(el).css('background-color', '#'+hex);
			$(el).colpickHide();
		}
	})
	.css('background-color', '#ff8800');
	//Option2
	$('.colorpicker').colpick({
		layout:'hex',
		submit:0,
		colorScheme:'dark',
		onChange:function(hsb,hex,rgb,el,bySetColor) {
			$(el).css('border-color','#'+hex);
			// Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
			if(!bySetColor) $(el).val(hex);
		}
	}).keyup(function(){
		$(this).colpickSetColor(this.value);
	});
		
});


//Dropdown jquery
		$('.dropdown').ddslick({
		data:ddData,
		width:300,
		selectText: "Select your preferred social network",
		imagePosition:"right",
		onSelected: function(selectedData){
			//callback function: do something with selectedData;
		}
	});
	
	
