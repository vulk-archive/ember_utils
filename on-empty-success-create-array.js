import Ember from 'ember';

export default function onEmptySuccessCreateArray(store, model_name, defaults ) {
  console.log('helper onSuccessAlert');
  var ret_fun = function(params/*, hash*/) {
    if (params.get('length') === 0){
      if (Ember.isEmpty(defaults)){
        return Ember.A([store.createRecord(model_name)]);
      } else {
        return Ember.A([store.createRecord(model_name, defaults)]);
      }
    } else {
      return params;
    }
  }.bind(this);
  return ret_fun;
}

