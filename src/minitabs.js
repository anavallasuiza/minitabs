/* global jQuery*/

/**
 * minitabs
 */

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(jQuery);
    }
}(function($) {
    var pluginName = 'tabs',
        defaults = {
            indexSelector: '> ul a',
            contentSelector: '> :not(ul)',
            activeClass: 'is-active',
            clickFirst: false
        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);

        this.init();
    }

    Plugin.prototype = {
        init: function() {

            this.$element = $(this.element);

            this.$tabs = this.$element.find(this.settings.indexSelector);
            this.$contents = this.$element.find(this.settings.contentSelector);

            if (!this.$tabs.length || !this.$tabs.length) {
                throw new Error('No tabs indexes or content selected. Check your configuration.');
            }

            var that = this;

            this.$tabs.on('click.tabs', function(e, parameters) {
                var $this = $(this),
                    id = $this.attr('href');

                that.$contents
                    .not(id)
                    .removeClass(that.settings.activeClass)
                    .trigger('hide.tabs');

                that.$contents
                    .filter(id)
                    .addClass(that.settings.activeClass)
                    .trigger('show.tabs');

                that.$tabs
                    .not($this)
                    .removeClass(that.settings.activeClass);

                $this.addClass(that.settings.activeClass);

                if (!parameters && $.isFunction(window.history.replaceState)) {
                    window.history.replaceState(null, null, id);
                }

                e.preventDefault();
            });

            var $tab = this.$tabs.filter('.' + this.settings.activeClass);

            if (!$tab.length && location.hash) {
                $tab = this.$tabs.filter('[href="' + location.hash + '"]');
            }

            if (!$tab.length && this.settings.clickFirst) {
                $tab = this.$tabs.first();
            }

            $tab.trigger('click', true);
        },
        destroy: function() {
            this.$tabs.off('.tabs');
            this.$contents.off('.tabs');
        }
    };

    $.fn[pluginName] = function(options) {
        if ((options === undefined) || (typeof options === 'object')) {
            return this.each(function() {
                if (!$.data(this, 'plugin_' + pluginName)) {
                    $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
                }
            });
        }

        if ((typeof options === 'string') && (options[0] !== '_') && (options !== 'init')) {
            var returns, args = arguments;

            this.each(function() {
                var instance = $.data(this, 'plugin_' + pluginName);

                if ((instance instanceof Plugin) && (typeof instance[options] === 'function')) {
                    returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                }

                if (options === 'destroy') {
                    $.data(this, 'plugin_' + pluginName, null);
                }
            });

            return returns !== undefined ? returns : this;
        }
    };
}));