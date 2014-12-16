/* global jQuery*/

/**
 * minitabs
 * [version 0.1.3]
 */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else {
    factory(jQuery);
  }
}(function ($) {
    var pluginName = "tabs",
    defaults = {
        indexSelector: '> ul a',
        contentSelector: '> section',
        activeClass: 'tab-active'
    };

    function Plugin (element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);

        this.init();
    }

    Plugin.prototype = {
        init: function () {

            this.$element = $(this.element);

            this.$tabs = this.$element.find(this.settings.indexSelector);
            this.$contents = this.$element.find(this.settings.contentSelector).hide();

            if(!this.$tabs.length || !this.$tabs.length) {
                throw new Error('No tabs indexes or content selected. Check your configuration.');
            }

            var that = this;

            this.$tabs.on('click.tabs', function (e, parameters) {
                var $this = $(this), id = $this.attr('href');

                that.$contents.not(id).hide().trigger('hide.tabs');
                that.$contents.filter(id).show().trigger('show.tabs');
                that.$tabs.removeClass(that.settings.activeClass);

                $this.addClass(that.settings.activeClass);

                if (!parameters && $.isFunction(window.history.replaceState)) {
                    window.history.replaceState(null, null, id);
                }

                e.preventDefault();
            });

            var $tab = this.$tabs.filter('.' + this.settings.activeClass);

            if (!$tab.length) {
                if (location.hash) {
                    $tab = this.$tabs.filter('[href=' + location.hash + ']');
                }

                if (!$tab || !$tab.length) {
                    $tab = this.$tabs.first();
                }
            }

            $tab.trigger('click', true);
        },
        destroy: function () {
            this.$tabs.off('.tabs');
            this.$contents.off('.tabs');
        }
    };

    $.fn[pluginName] = function (options) {
        if ((options === undefined) || (typeof options === 'object')) {
            return this.each(function () {
                if (!$.data(this, "plugin_" + pluginName)) {
                    $.data(this, "plugin_" + pluginName, new Plugin(this, options));
                }
            });
        }

        if ((typeof options === 'string') && (options[0] !== '_') && (options !== 'init')) {
            var returns, args = arguments;

            this.each(function () {
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