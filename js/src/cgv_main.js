//filename

(function($){
//jQuery start
  var headBox = $('#headBox');
  var gnbBox = headBox.find('#globalNav');
  var gN = gnbBox.find('#globalNavBox');

  gN.hide();

  gnbBox.on('mouseenter',function(){
    gN.show();
  });
  
  gN.on('mouseleave',function(){
    gN.hide();
  });


})(jQuery);
//jQuery end
