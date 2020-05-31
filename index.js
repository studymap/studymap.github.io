function init() {
Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/1DtWo_Yi53PQRfQk3pyIpK0_NrKkYK54c09oHs2a4VZo/pubhtml',
callback: function(data, tabletop) {
console.log(data)
},
simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
