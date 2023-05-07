function fetchUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 400) {
        const data = JSON.parse(xhr.responseText);
        const userList = document.getElementById('user-list');
        data.forEach(user => {
          const listItem = document.createElement('li');
          listItem.className = 'list-group-item';
          listItem.textContent = user.name;
          listItem.addEventListener('click', () => {
            alert(user.name);
          });
          userList.appendChild(listItem);
        });
      } else {
        console.error('Error:', xhr.status);
      }
    };

    xhr.onerror = function() {
      console.error('Request failed');
    };

    xhr.send();
  }

  fetchUsers();