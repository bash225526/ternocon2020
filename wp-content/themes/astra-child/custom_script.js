/**
Theme Name: Astra Child
Author: Brainstorm Force
Author URI: http://wpastra.com/about/
Description: Astra is the fastest, fully customizable & beautiful theme suitable for blogs, personal portfolios and business websites. It is very lightweight (less than 50KB on frontend) and offers unparalleled speed. Built with SEO in mind, Astra comes with schema.org code integrated so search engines will love your site. Astra offers plenty of sidebar options and widget areas giving you a full control for customizations. Furthermore, we have included special features and templates so feel free to choose any of your favorite page builder plugin to create pages flexibly. Some of the other features: # WooCommerce Ready # Responsive # Compatible with major plugins # Translation Ready # Extendible with premium addons # Regularly updated # Designed, Developed, Maintained & Supported by Brainstorm Force. Looking for a perfect base theme? Look no further. Astra is fast, fully customizable and beautiful theme!
Version: 1.0.0
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: astra-child
Template: astra
*/

$(document).ready(function () {
	var currAnchor;
	$('.top-section div div').addClass('active');
	$('#header-section').removeClass('header-transparent').addClass('header-non-transparent');
	$(window).scroll(function(){
	    var height = $(window).scrollTop();
	    var anchor = String;
	    var anchorOffset = 0;
	    var activeAnchor = '';	
	    if(height  > 70) {
	    	$('#header-section').removeClass('header-non-transparent').addClass("header-transparent");
	    }else{
	    	$('#header-section').removeClass('header-transparent').addClass('header-non-transparent');
	    }
	    $('.jet-menu-inner a').each(function () {
	    	var currLink = $(this);
	    	var refElement = currLink.attr('href');
	    	anchor = refElement.slice(2);
	    	if ($('#'+anchor).length) {
	    		$('.'+anchor+' div div').removeClass('active');
			    anchorOffset = $('#'+anchor).offset().top;
			    if(anchorOffset < height + 40){
			    	activeAnchor = anchor+'';
			    }
			}
		});
		if(activeAnchor == ''){ activeAnchor = 'top-section';}
		$('.'+activeAnchor+' div div').addClass('active');
	});
});