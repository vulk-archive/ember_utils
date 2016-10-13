import Ember from 'ember';
export default function onFailure404Ok(params/*, hash*/) {
  console.log('helper onFailure404Ok');
  console.log('helper onFailure404Ok params: ' + params);
  if (params.status === 500){
    return alert('Internal server error. Contact administrator');
  }  else if (params.status === 404) {
    return true;
  }  else if (Ember.isEmpty(params.status)) {
    errors = params.message + " " + params.stack;
    return alert(errors);
  } else {
    var errors = Ember.$.parseJSON(params.responseText).errors;
    return alert(errors);
  }
}
