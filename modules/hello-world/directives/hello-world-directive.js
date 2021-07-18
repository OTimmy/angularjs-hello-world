angular
    .module('helloWorldModule')
    .directive('helloWorld', helloWorld);

function helloWorld() {
    return {
        restrict: 'E',
        templateUrl: 'modules/hello-world/views/hello-world.html',
        controller: 'helloWorldController',
        scope:{},
        controllerAs: 'vm',
        bindToController: true
    }
}