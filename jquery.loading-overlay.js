(function($){
    var defaultConfig = {
        opacity     : 0.8,
        image       : 'image/loader.gif',
        zIndex      : 5000,
        imageHeight : 32,
        text        : ''
    };

    var loader = {
        show : function(config){
            var conf = $.extend({}, defaultConfig, config);
            return this.each(function(){
                var container = $(this),
                    overlay   = $('<div><br><span>'+conf.text+'</span></div>'),
                    image     = $('<img>');

                container.css('position', 'relative');
                overlay.css({
                    position        :'absolute',
                    top             : 0,
                    left            : 0,
                    height          : container.outerHeight(),
                    width           : container.outerWidth(),
                    opacity         : conf.opacity,
                    zIndex          : conf.zIndex,
                    backgroundColor : '#000000',
                    textAlign       : 'center',
                    color           : '#ffffff'
                }).addClass('xsanisty-loading-overlay');

                image.attr('src', conf.image).css({
                    zIndex      : conf.zIndex+10,
                    height      : conf.imageHeight,
                    marginTop   : (container.height()/2) - (conf.imageHeight/2)
                });

                overlay.prepend(image);
                container.append(overlay);

            });
        },
        hide : function(){
            return this.each(function(){
                $(this).find('.xsanisty-loading-overlay').remove();
            });
        }
    }

    $.fn.loader = function($action){
        if (loader[$action]) {
            return loader[$action].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof($action) == 'object' || typeof($action) == 'undefined') {
            var $loader = loader.show.apply(this, arguments);
            return $loader;
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.loader');
        }
    }
})(jQuery)