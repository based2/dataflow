( function(Dataflow) {

var NAME = "if"

var INPUTS = [
    { id: "test", type: "string"}
  ];

var OUTPUTS = [
    { id: "true", type: "boolean"},
    { id: "false", type: "boolean"},
  ];

  // Dependencies
  var BaseResizable = Dataflow.prototype.node("base-resizable");
  var Test = Dataflow.prototype.node(NAME);
  Test.description = NAME + " component";

  Test.Model = BaseResizable.Model.extend({
    defaults: function(){
      var defaults = BaseResizable.Model.prototype.defaults.call(this);
      defaults.type = NAME;
      defaults.w = 120;
      defaults.h = 100;
      return defaults;
    },
    inputstring: function(value){
      this.send("output", value + " " + NAME);
    },
    inputs:INPUTS,
    outputs:OUTPUTS
  });

  Test.View = BaseResizable.View.extend({
    initialize: function(options){
      BaseResizable.View.prototype.initialize.call(this, options);
     // this.$inner.text("view.$inner");
    }
  });
}(Dataflow) );
