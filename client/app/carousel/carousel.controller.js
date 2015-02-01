'use strict';

angular.module('ecomovaJsApp')
  .controller('CarouselCtrl', function ($scope) {
    $scope.interval = 100000;
  	$scope.slides = [{
  		backgroundClass: 'background-everyday',
      image: 'assets/images/iphone.png',
  		text: 'todos os dias',
  		header: 'Caronas para'
  	},
  	{
  		backgroundClass: 'background-college',
      image: 'assets/images/student.png',
  		text: 'a faculdade',
  		header: 'Caronas para'
  	},
  	{
  		backgroundClass: 'background-work',
      image: 'assets/images/businessman.png',
  		text: 'o trabalho',
  		header: 'Caronas para'
  	}];
  });
