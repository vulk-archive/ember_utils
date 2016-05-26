import Ember from 'ember';

export default function onSuccessReturnFirst(params/*, hash*/) {
  console.log('helper onSuccessReturnFirst');
  if (Ember.typeOf(params) === 'array'){
    return params[0];
  } else {
    return params;
  }
}

