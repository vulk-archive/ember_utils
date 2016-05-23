import Ember from 'ember';

export default function onFailure(params/*, hash*/) {
  console.log('helper onFailure');
  if (params.status === 500){
    return alert('Internal server error. Contact administrator');
  }  else if (params.status === 404) {
    return alert('That item does not exist.');
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
}

