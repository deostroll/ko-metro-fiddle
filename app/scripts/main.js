function ViewModel(date) {
  var model = this;
  model.date = ko.observable(date);
  model.set = function() {
    model.date(new Date());
  }
}

ko.bindingHandlers.datepicker = {
  init: function(el, va, ba, model, ctx) {
    console.log('init');
    var j = $(el);
    var prop = va();
    var val = ko.unwrap(prop);
    //debugger;
    if(val) {
      j.datepicker({
        preset: val,
        onSelect: function(text, date) {
          prop(date);
        }
      });
    }
    else {
      j.datepicker({
        onSelect: function(text, date) {
          prop(date);
        }
      });
    }

    // console.log(q);
  },
  update: function(el, va, ba, model, ctx) {
    console.log('update');
    var prop = va();
    $(el).datepicker('destroy');
  }
}

var m = new ViewModel(null);

$(function(){
  ko.applyBindings(m);
});
