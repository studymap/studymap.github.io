$ git clone https://github.com/jsoma/tabletop.git
function init() {
          Papa.parse('https://docs.google.com/spreadsheets/d/1DtWo_Yi53PQRfQk3pyIpK0_NrKkYK54c09oHs2a4VZo/pub?output=csv', {
          download: true,
          header: true,
          complete: function(results) {
            var data = results.data
            console.log(data)
          }
        })
