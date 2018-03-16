//Force navbar to close when a route is selected
$(document).on('click','.navbar-collapse.show',function(e) {
	$(this).collapse('hide');
});

