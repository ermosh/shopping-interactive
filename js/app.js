$(document).ready(function () {

	function deleteItem() {
		$(this).parent().remove()
	};

	function addItem() {
		$(this).parent().css({'text-decoration':'line-through', 'color':'#C0C0C0'});
		$(this).removeClass('btn-success');
		$(this).parent().appendTo('#cart');
	};

	$('#add-button').click(function (event) {
		var buttons = "<li><button class='btn btn-xs btn-success'><span class='glyphicon glyphicon-ok'></span></button>" + " " + "<button class='btn btn-xs btn-danger'><span class='glyphicon glyphicon-remove'></button>";
		event.preventDefault();

		if ($.trim($('#add-field').val()) == '') {
			event.preventDefault();
			alert("Add something to your list.");
		} else {
			$('#shelf').append( buttons + " " + $('#add-field').val());
			$('#add-field').val('');
		}
		});

	$('#add-field').keyup(function(event) {
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#add-button').click();
		};
	});

	$('#clear').click(function() {
		$('#shelf').empty();
		$('#cart').empty();
	});

	// Instead of document, bind the event to .btn-danger and .btn-success
	$(document).on('click', '.btn-danger', deleteItem);

	$(document).on('click', '.btn-success', addItem);

}); // end of document.ready

// Fix the buttons in #cart
// Change the alert to a dialog box on the page