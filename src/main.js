var qs = require('qs');

var queryString = location.search || "?bbb=c";
queryString = queryString.substr(1, queryString.length);
var params = qs.parse(queryString);
var json_text = JSON.stringify(params);
document.getElementsByTagName("body")[0].innerText = json_text;
