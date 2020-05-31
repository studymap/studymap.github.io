function init() {
Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/1DtWo_Yi53PQRfQk3pyIpK0_NrKkYK54c09oHs2a4VZo/pubhtml',
callback: function(data, tabletop) {
console.log(data)
},
simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)

for (var i = 0; i < array.length; i++) {
array[i]
}

for (var i = 0; i < data.length; i++) {
$(‘.post’).append(
‘<div class=”article” style=”background-image: url( ‘ +
data[i].img + ‘.jpg)”>’ +
‘<div class=”text”>’ +
‘<h1>’ + data[i].title + ‘</h1>’+
data[i].body +
‘</div> ‘ + ‘<div class=”meta-info”>’ + ‘<img src =”’ + data[i].img + ‘.jpg”>’+
‘<div class=”date”>’ + data[i].date + ‘</div>’ +
‘</div>’ +
‘</div>’);
}
