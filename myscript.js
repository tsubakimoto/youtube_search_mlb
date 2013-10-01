var mainCtrl = function($scope, $http) {
    var today = dateFormat(new Date());
    console.log(today);
    
    var url = 'https://gdata.youtube.com/feeds/api/videos?'
        + [
            'q=' + today + '+Recap',
            'author=MLBGlobal13',
            'alt=json',
            'max-results=15',
            'orderby=published',
            'v=2',
            'callback=JSON_CALLBACK'
        ].join('&');
        
    $http.jsonp(url).success(function(data) {
        $scope.results = data.feed.entry;
    });
}

function dateFormat(date) {
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  var d = date.getDate();

  m = ('0' + m).slice(-2);
  d = ('0' + d).slice(-2);

  // フォーマット整形済みの文字列を戻り値にする
  return y + '/' + m + '/' + d;
}