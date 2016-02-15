# file-metadata
## Free Code Camp File Metadata Microservice Project

This app provides a dialog that allows the user to choose a local file, upload it, and receive JSON-formatted text:

```
{"file":"Screenshot.png","size-bytes":717460}
```

Internally, the client-side script (public/includes/send.js) packages the file as multipart/form-data (FormData object)
and posts it to /api/filesize, which responds with the JSON data.

##### Reference:
##### https://www.npmjs.com/package/multer
##### http://www.abeautifulsite.net/whipping-file-inputs-into-shape-with-bootstrap-3/
##### https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects
##### On GitHub:
##### https://github.com/nicolefffe/file-metadata
