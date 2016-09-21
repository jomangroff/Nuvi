angular.module('nuvi')
  .service('mainService', function($http){

    this.getData = function(){
      return $http({
        method: 'GET',
        url: 'https://nuvi-challenge.herokuapp.com/activities'
      }).then(function(response){
        return response;
      })
      }

  });
