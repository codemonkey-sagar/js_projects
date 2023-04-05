// 5. Filter the items by typing in the filter field
// 6. Add localStorage to persist items
// 7. Click on an item to put into "edit mode" and add to form
// 8. Update item
// 9. Deploy To Netlify

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const filter = document.getElementById('filter');

// Cache the DOM elements
const buttonClasses = 'remove-item btn-link text-red';
const iconClasses = 'fa-solid fa-xmark';

// 1. Add items to the list via the form
function addItem(e) {
  e.preventDefault();
  const newItem = itemInput.value;

  // Simple Validation
  if (!newItem) {
    alert('Please Add an Item');
    return;
  }

  // Create List Item
  const li = document.createElement('LI');
  li.textContent = newItem;

  const button = createButton(buttonClasses);
  const icon = createIcon(iconClasses);

  button.appendChild(icon);
  li.appendChild(button);

  itemList.appendChild(li);
  checkUI();

  itemInput.value = '';
}

function createButton(classes) {
  const button = document.createElement('BUTTON');
  button.className = classes;
  return button;
}

function createIcon(classes) {
  const i = document.createElement('I');
  i.className = classes;
  return i;
}

// 2. Remove item from list by clicking the 'X' button
function removeItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
  checkUI();
}

// 3. Clear all the item with clear button
function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  checkUI();
}

// 4. Remove filter item and clear btn dynamically form UI
function checkUI() {
  const items = itemList.querySelectorAll('LI');
  const displayStyle = items.length === 0 ? 'none' : 'block';

  clearBtn.style.display = displayStyle;
  filter.style.display = displayStyle;
}

// 5. Filter the item by typing in the filter field
function filterItems(e) {
  const text = e.target.value.toLowerCase();
  const items = itemList.querySelectorAll('LI');

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();
    const displayStyle = itemName.indexOf(text) != -1 ? 'flex' : 'none';
    item.sytle.display = displayStyle;
  });
}

// Event Listener
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
filter.addEventListener('input', filterItems);

checkUI();
