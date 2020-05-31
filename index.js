    <script src='https://cdnjs.cloudflare.com/ajax/libs/tabletop.js/1.5.1/tabletop.min.js'></script>
    <script type='text/javascript'>    
      var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRURHOfPPygsi3KTkLl1hGvap5dtsgZrACkkPrLMJveEKHLp7b6wQOxy8BYwskOhCMkeNRZQdniU1LL/pubhtml';

      function init() {
        Tabletop.init( { key: publicSpreadsheetUrl,
                         callback: showInfo,
                         simpleSheet: true } )
      }

      function showInfo(data, tabletop) {
        alert('Successfully processed!')
        console.log(data);
      }

      window.addEventListener('DOMContentLoaded', init)
    </script>
