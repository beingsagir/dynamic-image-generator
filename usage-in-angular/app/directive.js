'use strict';

angular.module('myApp.directive', [])

.directive('fooImg', function () {
    return {
        template: '<div id="foo" class="foo"></div>'
    }
});