import Ember from 'ember';

export default function onFailure404Create(store, model_name, defaults ) {
  console.log('helper onFailure404Create');
  var ret_fun = function(params/*, hash*/) {
    console.log('helper onFailure404Create callback');
    if (params.status === 500){
      return alert('Internal server error. Contact administrator');
    }  else if (params.status === 404) {
      if (Ember.isEmpty(defaults)){
        return store.createRecord(model_name);
      } else {
        return store.createRecord(model_name, defaults);
      }
    }  else if (params.status === 401) {
      errors = Ember.$.parseJSON(params.responseText).errors;
      if (!Ember.isEmpty(errors)){
        return alert(errors);
      } else{
        return alert('You are not authorized to access that item.');
      }
    }  else if (params.status === 422) {
      errors = Ember.$.parseJSON(params.responseText).errors;
      return alert(errors);
    }  else if (params.status === 0) {
      errors = params.errorThrown.stack;
      return alert(errors);
    } else {
      var errors = Ember.$.parseJSON(params.responseText).errors;
      return alert(errors);
    }
  }.bind(this);
  return ret_fun;
}

