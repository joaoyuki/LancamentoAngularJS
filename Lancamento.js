angular.module('ExtratoLancamento', [])
.controller('Extrato', function($scope, $http) {
    $http.get('http://localhost:8080/extrato/formatado').
        then(function(response) {
            $scope.lancamentos = response.data;
        });
});