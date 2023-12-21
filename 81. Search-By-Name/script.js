var gurucodes = Array.from(document.getElementsByClassName('item-group'));

function searchHandler(event) {
  var searchText = new RegExp(event.target.value, 'i');
  gurucodes.forEach(function(item) {
    item.style.display = (item.dataset.name.match(searchText)) ? 'flex' : 'none';
  });
}

document.getElementById('search').addEventListener('keyup', searchHandler);

