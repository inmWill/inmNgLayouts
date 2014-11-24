(function () {
    'use strict';

    angular
        .module('devEtlApp')
        .controller('auditCtrl', ['$location', auditCtrl]);

    function auditCtrl($location) {
        var vm = this;
        vm.title = 'auditCtrl';
        vm.reauditIneligible = false;

        activate();

        function activate() { }
    }
})();
