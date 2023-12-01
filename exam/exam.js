function addSpecific() {
    var inputValue = document.getElementById('input').value.trim();
    var radioValue = document.querySelector('input[name="check"]:checked');

    if (!inputValue || !radioValue) {
        alert("Please make sure that you enter all the details!");
        return;
    }

    radioValue = radioValue.value;

    if (radioValue === 'Fruits') {
        document.getElementById('fruitsList').innerHTML += `<div class="alert alert-danger" role="alert">
        Fruits!- ${inputValue}</div>`;
    } else {
        document.getElementById('legList').innerHTML += `<div class="alert alert-warning" role="alert">
        Legumes!- ${inputValue}</div>`;
    }

    document.getElementById('input').value = '';
}


function addGeneral(){
    var inputValue = document.getElementById('input').value.trim();
    var radioValue = document.querySelector('input[name="check"]:checked');

    if (!inputValue || !radioValue) {
        alert("Please make sure that you enter all the details!");
        return;
    }
    radioValue = radioValue.value;

    if (radioValue === 'Fruits'){
        document.getElementById('both').innerHTML += `<div class="alert alert-info" role="alert">
        Fruits!- ${inputValue}</div>`;
    }
    else{
        document.getElementById('both').innerHTML += `<div class="alert alert-info" role="alert">
        Legumes!- ${inputValue}</div>`;
    }
    document.getElementById('input').value = '';

}

function search() {
    var searchInputValue = document.getElementById('searchInput').value.toLowerCase();
    clearStyles('fruitsList');
    clearStyles('legList');
    clearStyles('both');

    searchInList('fruitsList', searchInputValue, 'alert-danger');
    searchInList('legList', searchInputValue, 'alert-warning');
    searchInList('both', searchInputValue, 'alert-info');
}

function searchInList(listId, searchTerm, highlightClass) {
    var listDiv = document.getElementById(listId);
    var items = listDiv.getElementsByClassName('alert');

    for (var i = 0; i < items.length; i++) {
        var itemText = items[i].textContent.toLowerCase();

        if (itemText.includes(searchTerm)) {
            items[i].style.backgroundColor = 'red';
            items[i].classList.add(highlightClass);
        } 
    }
}

function clearStyles(listId) {
    var listDiv = document.getElementById(listId);
    var items = listDiv.getElementsByClassName('alert');

    for (var i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = '';
    }
}


function deleteS() {
    deleteItems('fruitsList');
    deleteItems('legList');
    deleteItems('both');
}

function deleteItems(listId) {
    var listDiv = document.getElementById(listId);
    var items = listDiv.getElementsByClassName('alert');
    var itemsToDelete = [];

    for (var i = 0; i < items.length; i++) {
        if (items[i].style.backgroundColor === 'red') {
            itemsToDelete.push(items[i]);
        }
    }
    itemsToDelete.forEach(function (item) {
        item.remove();
    });
}

document.getElementById('both').addEventListener('click', function (event) {
    var clickedAlert = event.target;

    if (clickedAlert.classList.contains('alert-info')) {
        var alertText = clickedAlert.textContent;

        if (alertText.includes('Fruits')) {
            var newAlert = document.createElement('div');
            newAlert.className = 'alert alert-danger';
            newAlert.role = 'alert';
            newAlert.textContent = alertText;
            document.getElementById('fruitsList').appendChild(newAlert);

        } else if (alertText.includes('Legumes')) {
            var newAlert = document.createElement('div');
            newAlert.className = 'alert alert-warning';
            newAlert.role = 'alert';
            newAlert.textContent = alertText;
            document.getElementById('legList').appendChild(newAlert);
        }

        clickedAlert.remove();
    }
});



