$('document').ready(function(){ 
	
//	$('.navbar li').click(function(e) {
//		$('.navbar li').removeClass('active');
//		var $this = $(this);
//		if (!$this.hasClass('active')) {
//		$this.addClass('active');
//		}
//		e.preventDefault();
//		});
	
	$(document).ready(function () {
        $('ul.nav > li').click(function (e) {
            e.preventDefault();
            $('ul.nav > li').removeClass('active');
            $(this).addClass('active');                
        });            
    });
	
});