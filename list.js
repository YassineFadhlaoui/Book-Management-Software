const fs = require('fs');
const path= require('path');
var PDFImage = require("pdf-image").PDFImage;

const library = '/home/yassine/Documents/Books/Advanced';
const db_folder  = './db';
const thumbnails='./db/thumbnails'
const map='./db/map.json';

function createThumbnail(file_path,callback){
  var full_path=library+'/'+file_path;
  var pdfImage = new PDFImage(full_path);
  var thumbnail=file_path.split('.')[0];
  var thumbnail=thumbnail.replace(/\s/g,'')
  var full_thumbnail_path=thumbnails+'/'+thumbnail+".png";

  pdfImage.convertPage(0).then(
  	function (imagePath) { 
  if (fs.existsSync(imagePath)){
  	//console.log(imagePath)
  	oldPath=imagePath
  	newPath=full_thumbnail_path
  	thumbnail=newPath
  	fs.renameSync(oldPath, newPath)
  	//console.log("near")
  	callback(thumbnail,file_path);
  }
  	
});
  //console.log(full_thumbnail_path)
  
}

function add_entry(thumbnail,file){
	  	var new_book={};
  		new_book["book"]=file.toString();
  		new_book["link"]=library+"/"+file
  		new_book["thumbnail"]=thumbnail
  		db_books[file]=new_book
  		var db = JSON.stringify(db_books);
  		console.log(new_book)
  		fs.writeFileSync(map, db)

}
function verify(){
	if (!fs.existsSync(db_folder))
    fs.mkdirSync(db_folder);

if (!fs.existsSync(thumbnails))
    fs.mkdirSync(thumbnails);
fs.closeSync(fs.openSync(map, 'a'))

}

verify()

var db_books = JSON.parse(fs.readFileSync(map, 'utf8'));
	//console.log(db_books)
fs.readdirSync(library).forEach(file => {
name_fields=file.toString().split('.')
    if (name_fields[name_fields.length-1].indexOf('pdf') !== -1){
  		if(!db_books.hasOwnProperty(file))
  			createThumbnail(file,add_entry);
		  }
	})	


//console.log("now")