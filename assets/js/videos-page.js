$(function whenDomIsReady(){
  $('.the-list-of-videos .loading').show();     //#A
  setTimeout(function afterRetrievingVideos() { //#B
    var videos = [{
      title: 'PSY - GANGNAM STYLE (강남스타일) M/V',
      src: 'https://www.youtube.com/embed/9bZkp7q19f0'
    }, {
      title: 'Justin Bieber - Baby ft. Ludacris',
      src: 'https://www.youtube.com/embed/kffacxfA7G4'
    }, {
      title: 'Charlie bit my finger - again !',
      src: 'https://www.youtube.com/embed/_OBlgSz8sSM'
    }];
    $('.loading').hide();   //#C
    var videosHtml = _.reduce(videos, function(html, video){  //#D
      html += '<li class="video">' +
        '  <h2>' + video.title + '</h2>' +
        '  <iframe width="640" height="390" src="' + video.src + '" frameborder="0" allowfullscreen></iframe>' +
        '</li>';
      return html;
    }, '');
      $('.the-list-of-videos ul').replaceWith(videosHtml);        //#E
    }, 1000);

  $('.submit-video-form').submit(function (e){  //#A
    e.preventDefault();
    var newVideo = {
          title: $('.submit-video-form input[name="title"]').val(), //#B
          src: $('.submit-video-form input[name="src"]').val()
    };
    $('.submit-video-form input').val('');              //#C
    $('.submit-video-form button').text('Submitting...');
    $('.submit-video-form button').prop('disabled', true);
    var parser = document.createElement('a');
    parser.href = newVideo.src            //#D
    var youtubeID = parser.search.substring(parser.search.indexOf("=")+1, parser.search.length);
    newVideo.src = 'https://www.youtube.com/embed/'+youtubeID;
    setTimeout(function (){
      var newVideoHtml = '<li class="video">'+  //#E
      '  <h2>' + newVideo.title + '</h2>'+
      '  <iframe width="640" height="390" src="'+newVideo.src+'" frameborder="0" allowfullscreen></iframe>'+
      '</li>';
      $('.the-list-of-videos').prepend(newVideoHtml);   //#F
      $('.submit-video-form button').text('Submit Video');
      $('.submit-video-form button').prop('disabled', false);
    }, 750);
  });
});
