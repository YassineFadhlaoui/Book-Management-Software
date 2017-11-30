# E-books manager
A simple cross-platform application that allows you to manage your e-books.
![Alt text](/screenshots/app.png?raw=true "Books management open source software")
You can easily manage and view your e-books.
This application is based on nodejs and the trending module electron.

![Alt text](/screenshots/bar.png?raw=true "Books management open source software pdf viewer menu bar")
## How it works?
This application is built with the electron module which guarantees portability. The pdf viewer is based on the Mozilla Firefox pdf reader and inherits all its features.
![Alt text](/screenshots/book.png?raw=true "Books management open source software pdf viewer")
## Getting started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.:
### requirements
* Nodejs installed
* Image Magick [How to install Image Magick](https://www.imagemagick.org/script/download.php)
### starting the application
```
git clone https://github.com/YassineFadhlaoui/Book-Management-Software.git
cd Book-Management-Software
npm install
```
**npm will install all requirements and locally install electron**

* change the path to your ebooks folder in the **listall.js** file
* run the **listall.js** file to create a local database of your ebooks and create thumbnails.
```
node listall.js
```
* start the application by issuing the following command:
```
electron main.js
```
## Programming language
**Javascript**

## Author
* **Yassine Fadhlaoui** - *initial work* [Yassine Fadhlaoui](https://github.com/YassineFadhlaoui)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/YassineFadhlaoui/Book-Management-Software/blob/master/LICENSE) file for details

## NOTE:
This project still needs a lot of enhancement please contribute.
