var apiUrl = 'https://gdata.youtube.com/feeds/api/videos?';

// dailyRecapCtrl
var dailyRecapCtrl = function($scope, $http) {
    var today = dateFormat(new Date());
    
    var url = apiUrl
        + [
            'q=Recap+' + today,
            'author=MLBGlobal13',
            'alt=json',
            'max-results=15',
            'orderby=relevance',
            'v=2',
            'callback=JSON_CALLBACK'
        ].join('&');
        
    $http.jsonp(url).success(function(data) {
        $scope.results = data.feed.entry;
    });
};

// recapCtrl
var recapCtrl = function($scope, $http) {
    $scope.doSearch = function() {
        var q = encodeURIComponent($scope.date).replace('-', '/').replace('-', '/');
        
        if ($scope.query != null) {
            q = q + '+' + encodeURIComponent($scope.query);
        }
        
        var url = apiUrl
            + [
                'q=Recap+' + q,
                'author=MLBGlobal13',
                'alt=json',
                'max-results=15',
                'orderby=relevance',
                'v=2',
                'callback=JSON_CALLBACK'
            ].join('&');
            
        $http.jsonp(url).success(function(data) {
            $scope.results = data.feed.entry;
        });
    }
};

function dateFormat(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();

    m = ('0' + m).slice(-2);
    d = ('0' + d).slice(-2);

    // フォーマット整形済みの文字列を戻り値にする
    return y + '/' + m + '/' + d;
}