const fs = require('fs');
const path = require('path');
var PDFImage = require("pdf-image").PDFImage;
const db_folder = './db';
const thumbnails = './db/thumbnails'
const map = './db/map.json';

var walkSync = function(dir, filelist) {
 var path = path || require('path');
 var fs = fs || require('fs'),
  files = fs.readdirSync(dir);
 filelist = filelist || [];
 files.forEach(function(file) {
  if (fs.statSync(path.join(dir, file)).isDirectory()) {
   filelist = walkSync(path.join(dir, file), filelist);
  } else {
   filelist.push(path.join(dir, file));
  }
 });
 return filelist;
};

filelist = []
walkSync("/home/yassine/Documents/Books/", filelist)

if (!fs.existsSync(db_folder))
 fs.mkdirSync(db_folder);

if (!fs.existsSync(thumbnails))
 fs.mkdirSync(thumbnails);
fs.closeSync(fs.openSync(map, 'a'))

function createThumbnail(file_path, callback) {
 var pdfImage = new PDFImage(file_path);
 var basename = path.basename(file_path)
 var ebook_name = basename.split('.')[0];
 var thumbnail = ebook_name.replace(/\s/g, '')
 var full_thumbnail_path = thumbnails + '/' + thumbnail + ".png";

 pdfImage.convertPage(0).then(
  function(imagePath) {

   if (fs.existsSync(imagePath)) {
    oldPath = imagePath
    fs.renameSync(oldPath, full_thumbnail_path)
     //ebook=fs.readFileSync(full_path)
    parent_node = path.resolve(file_path, '..')
    category = path.basename(parent_node)
    callback(full_thumbnail_path, ebook_name, file_path, category)

   }
  });
}

function add_entry(thumbnail, ebook, file, ebook_category) {
 var new_book = {};
 new_book["book"] = ebook;
 new_book["link"] = file
 new_book["thumbnail"] = thumbnail
 new_book["category"] = ebook_category
 db_books[file] = new_book
 var db = JSON.stringify(db_books);
 fs.writeFileSync(map, db)
}

var db_books = JSON.parse(fs.readFileSync(map, 'utf8'));
//console.log(db_books)
filelist.forEach(function(file) {
 name_fields = file.toString().split('.')
 if (name_fields[name_fields.length - 1].indexOf('pdf') !== -1) {
  if (!db_books.hasOwnProperty(file))
   createThumbnail(file, add_entry);
 }
})