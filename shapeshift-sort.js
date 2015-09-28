import Ember from 'ember';
var $ = Ember.$;
// params: {containter: ?, containerItem: ?, sortItemId: ?}
// container and container-item should be a css selector
// sort-item-id should not have a . (it is a data element)
export default function shapeshiftSort(params/*, hash*/) {
  console.log('util shapeshift-sort');
  var orderArray;
  // var c1 = $(params.container +".grid .ss-active-child .grid-item");
  var c1 = $(params.container + " .ss-active-child " + params.containerItem);
  orderArray = c1.map(function(index, val){
    // return val.getAttribute('data-item-id') ;
    return val.getAttribute(params.sortItemId) ;
  }).toArray();
  // console.log("This container:", $(this));
  // console.log("Has rearranged this item:", $(selected));
  // console.log("Into this position:", $(selected).index());
  // this.get('controller').send('shapeShiftSort', orderArray);
  return orderArray;
}
