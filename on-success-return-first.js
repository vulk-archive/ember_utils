import Ember from 'ember';

export default function onSuccessReturnFirst(params/*, hash*/) {
  console.log('helper onSuccessReturnFirst');
  if (Ember.typeOf(params) === 'array')  {
    return params[0];
  } else if (params.get('length')) {
    return params.get('firstObject');
  } else {
    return params;
  }
}

