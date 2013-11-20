require(['$views/scroller#Scroller'], function(Scroller) {
  var makeSlider = function(){
debugger;
    var scroller = new Scroller(HTMLElement, {
      scrollbar: true
    });

    scroller.addEventListener("scroll", function(event) {
      var scrollTop = event.scrollTop;
    });

    scroller.attach();
    //document.querySelector('#slider').attach(scroller);
  };

  exports.makeSlider = makeSlider;
});