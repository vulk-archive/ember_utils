export default function onSuccessAlert(msg) {
  console.log('helper onSuccessAlert');
  var ret_fun = function(params/*, hash*/) {
        alert(msg);   
        return params;
  }.bind(this);
  return ret_fun;
}

