export default function onSuccessFilter(filter, filter_text ) {
  console.log('helper onSuccessFilter');
  var ret_fun = function(params/*, hash*/) {
    if (params.get('length') === 0){
      return params;
    } else {
      return params.filterBy(filter, filter_text);
    }
  }.bind(this);
  return ret_fun;
}

