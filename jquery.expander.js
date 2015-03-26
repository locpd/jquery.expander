/**
 * Expander jquery plugin
 * Author: Pham Loc
 * admin@taigame.org
 * 
 * Add 'read more...' link to a content block
 * Styles for content block: position: relative, overflow: none, max-height: {custom max height}
 */
(function( $ ){
	$.fn.expander = function(options) {
		var settings = $.extend({
			moreText: 'Xem thêm...',
            click: null // callback function on clicking "show more"
        }, options );
		
		return this.each(function() {
			var el = this;
			if ($(el)[0].offsetHeight < $(el)[0].scrollHeight) {
				$('<div class="expander-more"><a href="javascript:;">'+settings.moreText+'</a></div>').appendTo(this).find('a').click(function() {
					if (settings.click === null) {
						$(this).parent().hide();
						$(el).css('max-height', 'none');
					} else if (typeof(settings.click) === 'function') {
						settings.click.call(el);
					}
				});
			}
		});
	};
})( jQuery );