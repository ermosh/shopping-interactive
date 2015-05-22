$('document').ready(function () {

	function deleteItem() {
		$(this).parent().remove();
	};

	function addItem() {
		$(this).parent().css({'text-decoration':'line-through', 'color':'#C0C0C0'});
		$(this).parent().appendTo('#cart');
	};

	// When the #add-button is pressed
	// append a list item with a checkbox and the input's text to #shelf
	$('#add-button').click(function() {
		var item = $('#add-field').val();
		var buttons = "<li><button class='btn btn-xs btn-success'><span class='glyphicon glyphicon-ok'></span></button>" + " " + "<button class='btn btn-xs btn-danger'><span class='glyphicon glyphicon-remove'></button>";
		$('#shelf').append( buttons + " " + item);
		$(item).val('');
	});

	// When the checkbox in #shelf is pressed, add the list item text to #cart
	// remove the list item from #shelf and append it to the last-child in #cart

	$(document).on('click', '.btn-danger', deleteItem);

	$(document).on('click', '.btn-success', addItem);
}); // end of document.ready

// Make it so that pressing enter will add an item
// Prevent the creation of empty list items
// Get rid of or lighten the buttons once they're in #cart