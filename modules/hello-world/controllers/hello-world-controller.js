(function () {
    'use strict';

    angular
        .module('helloWorldModule')
        .controller('helloWorldController', helloWorldController);

    helloWorldController.$inject = ['helloWorldService'];

    function helloWorldController(helloWorldService) {
        var vm = this;
        //functions
        vm.$onInit = onInit;

        //variables
        vm.helloFromController = "hello from controller";
        vm.helloFromService = "";
        vm.isLoading = false;

        function onInit() {
            vm.isLoading = true;
            loadHelloWorldFromService()
                .then(function () {
                    vm.isLoading = false;
                });
        }

        function loadHelloWorldFromService() {
            return helloWorldService.getHelloWorldAsPromise()
                .then(function (response) {
                    vm.helloFromService = response;
                });
        }
    }
})();