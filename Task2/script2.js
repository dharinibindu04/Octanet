document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    
    if (todoInput.value.trim() === '') {
      alert('Please enter a valid to-do item.');
      return;
    }
    
    const newItem = document.createElement('li');
    newItem.textContent = todoInput.value;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    newItem.appendChild(deleteButton);
    todoList.appendChild(newItem);
    todoInput.value = ''; 
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(newItem);
      });
  });