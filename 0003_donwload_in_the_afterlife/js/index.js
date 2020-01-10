$(document).ready(function() {
  $("#downloadButton").click(function() {
    setInterval(function() {
      let diff = moment('9999-01-01').diff(moment())
      let duration = moment.duration(diff);
      let years = duration.years();
      let months = duration.months();
      let days = duration.days();
      let hours   = duration.hours();
      let minutes = duration.minutes();
      let seconds = duration.seconds();
      let countDown = years + '年' + months + 'ヶ月' + days + '日' +  hours + '時' + minutes + '分' + seconds + '秒';
      $("#downloadButton").text('ダウンロード開始まであと' + countDown + '..')
    }, 100);
  });
});

