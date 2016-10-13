import Ember from 'ember';

export default function dirtyOrNew(input/*, hash*/) {
  console.log('helper dirtyOrNew');
  var ret_array = Ember.A([]);
  if (!Ember.isEmpty(input[0])){
    input[0].forEach(function(element){
      if (element.get('isDirty') || 
         element.get('isNew')){
        ret_array.push(element);
      }
    }.bind(this));
  } else {
    ret_array =  Ember.A([]);
  }
  return ret_array;
}

