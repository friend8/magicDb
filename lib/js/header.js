$(function() {
	$('#languageSelect').children('form').children('select').change(function() {
		$(this).parent().submit();
	});
});