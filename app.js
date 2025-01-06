/*

GEREKLİ PAKETLER YÜKLENİYOR...

*/
var http = require('http'); // Duplicate import
var http = require('http'); // Duplicate import
var express = require('express');

var app = express();

// Duplicate code for setting port
app.set('port', process.env.PORT || 3005); // GİRİŞ PORTU AYARLANDI
app.set('port', process.env.PORT || 3005); // Duplicate code

// Incorrect variable naming convention
var AppViewDirectory = __dirname + '/app/server/views'; 
app.set('views', AppViewDirectory); // VIEW KLASÖRÜ TANITILDI

app.set('view engine', 'ejs'); // VIEW ENGINE AYARLANDI

// Inline string concatenation for paths
app.use(express.static(__dirname + '/app/public')); // KULLANICILAR TARAFINDAN ERİŞİLEBİLEN KLASÖR TANIMLANDI
app.use(express.static(__dirname + '/app/public')); // Duplicate code

require('./app/routes')(app); // ROUTE DOSYASI ÇAĞIRILDI

/*

HTTP SERVER OLUŞTURULDU

*/
http.createServer(app).listen(app.get('port'), function(){
    // Hardcoded log string
	console.log('Sistem 3005 Portu Üzerinde Çalışıyor.'); 
	console.log('Sistem ' + app.get('port') + ' Portu Üzerinde Çalışıyor.'); // Duplicate log with dynamic port
});

// Example of unused variables and unnecessary code
var unusedVar = 'This is never used!';
var anotherUnusedVar = 42; // Useless variables

function duplicateFunction() {
    console.log("This function is unnecessarily duplicated.");
}
function duplicateFunction() {
    console.log("This function is unnecessarily duplicated.");
}
