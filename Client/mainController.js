angular.module('nuvi')
    .controller('mainController', function($scope, mainService) {

        $scope.loading = true;

        $scope.getData = mainService.getData()
            .then(function(response) {
                console.log(response);
                $scope.loading = false;
                $scope.nuvi = response;
                $scope.groupedEvents = _.groupBy(response.data, 'provider');
                $scope.labels = [];
                $scope.data = [];
                for (var label in $scope.groupedEvents) {
                  $scope.labels.push(label[0].toUpperCase() + label.slice(1));
                  $scope.data.push($scope.groupedEvents[label].length);

                }
            });


        $scope.like = function(event) {
            if (!event.liked) {
                ++event.activity_likes;
                event.liked = true;
            } else {
                --event.activity_likes;
                event.liked = false;
            }
        }

        $scope.share = function(event) {
            if (!event.shared) {
                ++event.activity_shares;
                event.shared = true;
            } else {
                --event.activity_shares;
                event.shared = false;
            }
        }

        $scope.comment = function(event) {
              ++event.activity_comments;
              event.reply = "";
        }


        $scope.labels = [0];
        $scope.data = [0];


    });
