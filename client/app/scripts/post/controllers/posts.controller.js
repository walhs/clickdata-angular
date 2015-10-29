(function () {
  'use strict';

  angular.module('trackerApp.post').controller('PostsCtrl', PostsCtrl);

  PostsCtrl.$inject = ['$scope'];

  // Lugar errado - @Refactoring
  function PostsCtrl($scope) {
    var vc = this;

    vc.columns = [];

    render($scope.posts);

    activate();

    function activate() {
      // $scope.$watchCollection(function () { return $scope.posts; }, render);
      // $scope.$watch(function () { return $(window).width(); }, render);
    }

    function calculateNumberOfColumns() {
      var width = $(window).width();

      if (width >= 1200) {
        return 4;
      } else if (width >= 992) {
        return 3;
      } else if (width >= 768) {
        return 2;
      } else {
        return 1;
      }
    }

    function approximateShortestColumn() {
      var scores = vc.columns.map(columnMapFn);

      return scores.indexOf(Math.min.apply(this, scores));

      function columnMapFn(column) {
        var lengths = column.map(function (element) {
          return element.content.length;
        });

        return lengths.reduce(sum, 0) * column.length;
      }

      function sum(m, n) {
        return m + n;
      }
    }

    function render(current, original) {
      if (current !== original) {
        vc.columns = [];

        for (var i = 0; i < calculateNumberOfColumns(); ++i) {
          vc.columns.push([]);
        }

        for (var i = 0; i < current.length; ++i) {
          var column = approximateShortestColumn();

          vc.columns[column].push(current[i]);
        }
      }
    }
  }
})();