$(document).ready(function () {

  var host = 'http://127.0.0.1:8080';

  var apiurl = host + '/api/filesize';

  // when the user chooses a file, the truncated file name is displayed in the #showChosen read-only text field

  $('#chooseFile').change(function() {
    var chosen = $('#chooseFile').prop('value');
    var showChosen = chosen.slice(chosen.lastIndexOf('\\') + 1);
    $('#showFile').text(showChosen);
  });

  // when the user presses 'submit', grab the chosen file from the #chooseFile input and use it to create a FormData object

  $('#submitFile').click(function() {
    console.log($('#chooseFile').prop('files'));

    function success(data) {
      $('#output').text(JSON.stringify(data));
    }

    var formdata = new FormData();
    var files = $('#chooseFile').prop('files');
    formdata.append('filetosize',files[0]);

    // console.log(formdata);

    // post file to /api/filesize on Node server - the server will respond with JSON-formatted text including
    // the file's original name and file size in bytes

    $.ajax({
      url: apiurl,
      method: 'POST',
      data: formdata,
      contentType: false,
      mimeType: 'multipart/form-data',
      dataType: 'json',
      processData: false,
      success: success
    });
  });

});
