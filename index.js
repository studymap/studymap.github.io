    <script src='https://cdnjs.cloudflare.com/ajax/libs/tabletop.js/1.5.1/tabletop.min.js'></script>
    <script type='text/javascript'>    
      var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTZSYtvEbKtx8ktFapoewsBmyZPdOIoSC6OOZUDmr38p-h81IvyfOMbHMP7R9Cxc-3HZwVGR-ASIwj4/pubhtml';

      function init() {
        Tabletop.init( { key: https://docs.google.com/spreadsheets/d/1DtWo_Yi53PQRfQk3pyIpK0_NrKkYK54c09oHs2a4VZo/edit?usp=sharing,
                         callback: showInfo,
                         simpleSheet: true } )
      }

      function showInfo(data, tabletop) {
        alert('Successfully processed!')
        console.log(data);
      }

      window.addEventListener('DOMContentLoaded', init)
    </script>
