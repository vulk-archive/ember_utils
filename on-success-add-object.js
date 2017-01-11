// import Ember from 'ember';

export default function onSuccessAddObject(model_name) {
  console.log('helper onSuccessAddObject');
  var ret_fun = function(params/*, hash*/) {
    if (params.get('length') > 0){
        return model_name.addObject(params);
    }
  }.bind(this);
  return ret_fun;
}

