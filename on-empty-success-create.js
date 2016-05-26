import Ember from 'ember';

export default function onEmptySuccessAlert(store, model_name, defaults ) {
  console.log('helper onSuccessAlert');
  var ret_fun = function(params/*, hash*/) {
    if (params.get('length') === 0){
      if (Ember.isEmpty(defaults)){
        return store.createRecord(model_name);
      } else {
        return store.createRecord(model_name, defaults);
      }
    } else {
      return params;
    }
  }.bind(this);
  return ret_fun;
}

