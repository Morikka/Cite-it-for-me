chrome.tabs.getSelected(null,function(tab) {
  var tablink = tab.url;
  document.getElementById("url").value = tablink;
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('generate');
    link.addEventListener('click', function() {
      var author = document.getElementById("author").value;
      var title = document.getElementById("title").value;
      var month = document.getElementById("month").value;
      var year = document.getElementById("year").value;
      var url = document.getElementById("url").value;
      var result = "@misc{website:,\n"
      +"author = \"" + author + "\",\n"
      +"title = \"" + title + "\",\n"
      +"month = \"" + month + "\",\n"
      +"year = \"" + year + "\",\n"
      +"url = \"" + url + "\"\n"
      +"}"

      document.getElementById("result").value = result;
      document.getElementById("result").focus();
      document.execCommand('selectAll');
      document.execCommand('copy');
    });
});