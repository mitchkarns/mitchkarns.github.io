jQuery(document).ready(function(){ 
					if ( typeof jQuery().superfish != "function" )
						return false;

					jQuery(".block-original-b8s54d83ffe5e9ff").find("ul.menu").superfish({
						delay: 200,
						animation: {opacity:"show"},
						speed: 'fast',
						onBeforeShow: function() {
							var parent = jQuery(this).parent();
							
							var subMenuParentLink = jQuery(this).siblings('a');
							var subMenuParents = jQuery(this).parents('.sub-menu');

							if ( subMenuParents.length > 0 || jQuery(this).parents('.nav-vertical').length > 0 ) {
								jQuery(this).css('marginLeft',  parent.outerWidth());
								jQuery(this).css('marginTop',  -subMenuParentLink.outerHeight());
							}
						}
					});		
				});



