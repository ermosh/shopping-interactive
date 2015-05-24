$('document').ready(function () {

	function deleteItem() {
		$(this).parent().remove();
	};

	function addItem() {
		$(this).parent().css({'text-decoration':'line-through', 'color':'#C0C0C0'});
		$(this).removeClass('btn-success');
		$(this).parent().appendTo('#cart');
	};

	// When the #add-button is pressed
	// append a list item with buttons and the input's text to #shelf
	// and clear the #add-field for the next entry
	$('#add-button').click(function() {
		var buttons = "<li><button class='btn btn-xs btn-success'><span class='glyphicon glyphicon-ok'></span></button>" + " " + "<button class='btn btn-xs btn-danger'><span class='glyphicon glyphicon-remove'></button>";
		$('#shelf').append( buttons + " " + $('#add-field').val());
		$('#add-field').val('');
	});

	// Prevent the creation of empty list items
	$('#add-button').click(function(event) {
    	if ($.trim($('#add-field').val()) === '') {
    		event.preventDefault();
	      alert('Add something to your list.');
	      // return false;
    }
	});

	// Pressing Enter has same functionality as pressing #add-button
	$('#add-field').keyup(function(event) {
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#add-button').click();
		};
	});

	$(document).on('click', '.btn-danger', deleteItem);

	$(document).on('click', '.btn-success', addItem);
}); // end of document.ready

// Fix the buttons in #cart
// Even though the alert works, it still makes an empty list item
// Change the alert to a dialog box on the page