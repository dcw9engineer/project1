/*
 * this page is where I write the jQuery code I am using
 */

//Create Global variables
var oneOrMany = 'one';
var alertOn = true;
//Create initial conditions
$('#oneBtn').hide();

//this is for the practice page
$( "span" ).click(function() {
  $( this ).fadeOut( 1000, function() {
    $( "div" ).text( "'" + $( this ).text() + "' has faded!" );
    $( this ).remove();
  });
});
$( "span" ).hover(function() {
  $( this ).addClass( "hilite" );
}, function() {
  $( this ).removeClass( "hilite" );
});

//this is for the html1 page

////this is the code for the options in the html1 page
$(".showBtn").click(function(){
	if(this.id == 'multipleBtn'){
		oneOrMany = 'many';
		$(this).hide();
		$('#oneBtn').show();
		$('#accordionStatus').text('You can now show multiple sections at once.');
	}else{
		oneOrMany = 'one';
		$('section div').slideUp(300);
		$(this).hide();
		$('#multipleBtn').show();
		$('#accordionStatus').text('You are only showing one section at a time.');
	}
});

////This is the accordion code for the html1 page
$("section > h2").click(function(){
    //$("section h2 div").hide();
    if((false == $(this).next().is(':visible')) && (oneOrMany == 'one')) {
	        $('section div').slideUp(300);
	    }
    $(this).next().slideToggle(300);
});
$('section div:eq(0)').show();

//this is the tabs ui for the AboutMeTabs page
$(function() {
	$( "#tabs" ).tabs();
});
