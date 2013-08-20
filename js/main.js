$('document').ready(function() {
	$('img').bind('dragstart', function(event) { event.preventDefault(); });
	$('a').bind('dragstart', function(event) { event.preventDefault(); });
});