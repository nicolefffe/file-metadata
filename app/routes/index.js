var fs = require("fs");
var path = require("path");
var multer = require('multer');
var upload = multer({dest: path.join(__dirname,'../..','uploads/')});
var jade = require('jade');
var renderme = require('renderme');

module.exports = function (app) {

  app.set('views',path.join(__dirname,'../..','views/'));

  app.locals.basedir = path.join(process.env.PWD,'views');

  app.set('view engine', 'jade');

  app.get('/', function(request, response) {
    response.render('pages/index');
  });

  app.route("/README").
    get(function(req,res) {
      renderme({
        readme: fs.readFileSync(path.join(__dirname,"../..","README.md"),'utf-8'),
        readmeFilename: 'README.md'
        },
        function rendered(err, html) {
          if (err) { throw err; }
          else {
            res.end(html);
          }
        }
      );
    });

  app.post('/api/filesize', upload.single('filetosize'), function(req,res,next) {
    console.log(req.file);
    var reply = {
      "file": req.file.originalname,
      "size-bytes": req.file.size
    };
    res.end(JSON.stringify(reply));
  });
};
