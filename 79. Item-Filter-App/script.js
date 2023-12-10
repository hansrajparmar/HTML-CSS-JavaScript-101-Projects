var itemTypes = {};
var filter = document.getElementById('filter');

function addFilterItem(items, filterItemId) {
  var item = document.getElementById(filterItemId);
  
  item.addEventListener('click', function(event) {
    setSelectedType(event.target.innerText);
  });
  
}

addFilterItem(itemTypes, 'filter-all');
addFilterItem(itemTypes, 'filter-small');
addFilterItem(itemTypes, 'filter-medium');
addFilterItem(itemTypes, 'filter-large');
addFilterItem(itemTypes, 'filter-xtralarge');

function setSelectedType(newSelection) {
  document.body.className = `selected-filter-${newSelection.toLowerCase()}`;
  return newSelection;
}
