angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.forum', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/forum.html',
        controller: 'forumCtrl'
      }
    }
  })

  .state('tabsController.funding', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/funding.html',
        controller: 'fundingCtrl'
      }
    }
  })

  .state('tabsController.mentorship', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/mentorship.html',
        controller: 'mentorshipCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('landing', {
    url: '/page5',
    templateUrl: 'templates/landing.html',
    controller: 'landingCtrl'
  })

  .state('login', {
    url: '/page9',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/page1/page2')


});