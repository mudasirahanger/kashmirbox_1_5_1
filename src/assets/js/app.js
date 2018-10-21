
// counter input
jQuery(document).ready(function($){

  $(document).on('click', '.counter-input .increment', function(){
    var input = $(this).closest('.counter-input').find('input');
    var inputVal = parseFloat(input.val());
    if(isNaN(inputVal)) {
      input.val(1);
    } else {
      input.val(inputVal+1);
    }
    input.trigger('change');
  });

  $(document).on('click', '.counter-input .decrement', function(){
    var input = $(this).closest('.counter-input').find('input');
    var inputVal = parseFloat(input.val());
    if(isNaN(inputVal)) {
      input.val(1);
    } else {
      if(inputVal > 1)
        input.val(inputVal-1);
    }
    input.trigger('change');
  });

  $(document).on('change', '.counter-input input', function(){
    var inputVal = $(this).val();
    if(isNaN(inputVal) || inputVal <= 0) { 
      $(this).val(1);
      $(this).trigger('change');
    }
  });

});

/*******************************************************************************
Global Helper Functions
********************************************************************************/

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


