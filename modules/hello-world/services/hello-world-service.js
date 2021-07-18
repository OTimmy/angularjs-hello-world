(function () {
    'use strict';
    angular
        .module('helloWorldModule', [])
        .service('helloWorldService', helloWorld);

    helloWorld.$inject = ['$timeout'];
    function helloWorld($timeout) {
        return {
            getHelloWorldAsPromise: getHelloWorldAsPromise
        }


        function getHelloWorldAsPromise(){
            return $timeout(function(){
                return "hello world from service"
            },5000);
        }
    }

})();
