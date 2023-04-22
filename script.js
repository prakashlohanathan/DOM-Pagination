var names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Henry', 'Isabel', 'Jack', 'Kate', 'Liam', 'Mia', 'Nina', 'Oliver', 'Pamela', 'Quincy', 'Rachel', 'Samantha', 'Thomas', 'Ursula', 'Victor', 'William', 'Xavier', 'Yvonne', 'Zara'];

var itemsPerPage = 5; // Number of names per page
var pageCount = Math.ceil(names.length / itemsPerPage); // Number of pages needed

var pagination = document.getElementById('pagination');
var namesList = document.getElementById('names');

// Create a function to display the names for the given page
function showNames(page) {
  namesList.innerHTML = '';
  var start = (page - 1) * itemsPerPage;
  var end = start + itemsPerPage;
  var pageNames = names.slice(start, end);
  pageNames.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    namesList.appendChild(li);
  });
}

// Create the pagination buttons
for (let i = 1; i <= pageCount; i++) {
  var button = document.createElement('button');
  button.textContent = i;
  button.addEventListener('click', () => {
    showNames(i);
  });
  pagination.appendChild(button);
}

showNames(1);