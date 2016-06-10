
(function ($) {
  module.controller('reservation', function ($scope) {
    $scope.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    todayDate();
    function todayDate(){
      var today = new Date();
      var dd = today.getDate();
      var dddd = dd + 1;
      var mm = today.getMonth();
      var yyyy = today.getFullYear();
      var datenow = $scope.months[mm] +" "+dd+", "+yyyy +" - "+$scope.months[mm] +" "+dddd+", "+yyyy;
      $('.reservation_dateranger').val(datenow);
    }

  	var $input = $('.datepicker').pickadate({
      today: '',
      clear: '',
      close: 'Close',
  		format: 'dd/mm/yy',
      onClose: function() {
        console.log('Closed now '+this.get('id'));
        console.log('set values '+this.get('select'));
        var pickerObjt = this.get('select')
        /*;
        $('.'+this.get('id')+'-month').html("<small>"+pickerObjt['year']+"</small>")
        $('.'+this.get('id')+'-date-year').html(pickerObjt['date']+" "+$scope.months[pickerObjt['month']])
        this.clear();*/
        var monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var date = monthsShort[pickerObjt['month']]+" "+pickerObjt['date']+", "+pickerObjt['year'];
        $('.reservation_dateranger').val(date);
        
      },
      onSet: function(context) {
        console.log('Just set stuff:', context)

      }
  	});



  });
})(jQuery);
