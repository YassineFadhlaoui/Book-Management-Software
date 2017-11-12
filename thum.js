  var gm = require('gm');
  const fs = require('fs');
const path= require('path');
    var image = "fff" + '.png';
        var pathToFile = path.join(__dirname, "Mastering Proxmox.pdf ")
        , pathToSnapshot = path.join(__dirname, '/thumbnails/' + image);
        gm(pathToFile).thumb(150, // Width
                            150, // Height
                            pathToSnapshot, // Output file name
                            40, // Quality from 0 to 100
        function (error, stdout, stderr, command) {
            if (!error) {
                        console.log(command);
                    }
                    else {
                        console.log(error);
                    }
                });