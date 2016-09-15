define([
    'jquery',
    'jquery/ui'
], function($) {
    'use strict';

    $.widget('drgz.togglePasswordVisibility', {
        options: {},

        _create: function () {
            var self = this;

            self._assignRoles();
            self._bindEvents();
        },

        _assignRoles: function () {
            var self = this;

            self.field = self.element;
            self.control = self.element.siblings('.password-control').length ?
                self.element.siblings('.password-controlpassword-control') :
                $('<a class="password-control hidden">show</a>').insertAfter(self.element);
        },

        _bindEvents: function () {
            var self = this;

            self.control.on('click', function (event) {
                event.preventDefault();

                if (self.control.hasClass('hidden')) {
                    /* Show password */
                    self.field.attr('type', 'text');
                    self.control
                        .removeClass('hidden')
                        .addClass('visible')
                        .text('hide');
                } else {
                    /* Hide password */
                    self.field.attr('type', 'password');
                    self.control
                        .removeClass('visible')
                        .addClass('hidden')
                        .text('show');
                }
            });
        }
    });

    return $.drgz.togglePasswordVisibility;
});
