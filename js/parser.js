/**
 * parses any RSS/XML feed through Google and returns JSON data
 * source: http://stackoverflow.com/a/6271906/477958
 */
function parseRSS(url, container) {
  $.ajax({
    //Ajax call to encode url
    url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
    dataType: 'json',
    //Data includes the data we get in the json format
    success: function(data) {
      $(container).html('<h2>'+data.responseData.feed.title+ '</h2>');
      $.each(data.responseData.feed.entries, function(key, value){
        var thehtml = '<h3><a href="'+value.link+'" target="_blank">'+value.title+'</a></h3>';
        var image = value.content;
        $(container).append(thehtml);
        $(container).append(image);
      });
    }
  });
}

