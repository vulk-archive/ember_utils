// import Ember from 'ember';

export default function onSuccessReplaceObject(model_name) {
  console.log('helper onSuccessReplaceObject');
  var ret_fun = function(params/*, hash*/) {
    if (params.get('length') > 0){
        return model_name.set('content', params);
    }
  }.bind(this);
  return ret_fun;
}

