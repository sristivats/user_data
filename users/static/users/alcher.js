document.addEventListener("DOMContentLoaded", function () {
    var menuButton = document.querySelector('.menu-button');
    var sidebar = document.getElementById('sidebar');
    var closeButton = document.getElementById('close-btn');

    function toggleSidebar() {
        sidebar.classList.toggle('show');
        document.querySelector('.main').classList.toggle('margin250');
    }

    function closeSidebar() {
        sidebar.classList.remove('show');
        document.querySelector('.main').classList.remove('margin250');
    }

    function toggleDropdown(dropdown) {
        dropdown.classList.toggle('show');
    }

    menuButton.addEventListener('click', toggleSidebar);
    closeButton.addEventListener('click', closeSidebar);

    var items = document.querySelectorAll('.items');

    items.forEach(function (item) {
        var subMenu = item.querySelector('.sub-menu');

        if (subMenu) {
            item.addEventListener('click', function (event) {
                event.preventDefault();
                event.stopPropagation();
                toggleDropdown(subMenu);
            });
        }
    });

    window.addEventListener('click', function (event) {
        if (!event.target.closest('.sidebar') && !event.target.closest('.menu-button')) {
            closeSidebar();
            document.querySelector('.main').classList.remove('margin250');
        }
    });
    var emailButton = document.querySelector('.mail');
    var emailDropdown = document.getElementById('idDropdown');

    emailButton.addEventListener('click', function (event) {
        event.stopPropagation();
        if (emailDropdown.style.display === "none" || emailDropdown.style.display === "") {
            emailDropdown.style.display = "block";
            setTimeout(function () {
                emailDropdown.classList.add("show");
            }, 10); 
        } else {
            emailDropdown.classList.remove("show");
            setTimeout(function () {
                emailDropdown.style.display = "none";
            }, 10); 
        }
    });

    window.addEventListener('click', function (event) {
        if (!event.target.closest('.mailid') && !event.target.closest('.options')) {
            emailDropdown.classList.remove("show");
            setTimeout(function () {
                emailDropdown.style.display = "none";
            }, 20); 
        }
    });

    fetchUserData();
});

// JavaScript to handle the "Add Profile" link
// document.addEventListener('DOMContentLoaded', function() {
//     const addProfileLink = document.querySelector('.add-profile');
//     if (addProfileLink) {
//         addProfileLink.addEventListener('click', function(event) {
//             event.preventDefault();  // Prevent default anchor behavior
//             window.location.href = '/adduser/';  // Redirect to the add profile page
//         });
//     }
// });
document.addEventListener('DOMContentLoaded', function() {
    const editLink = document.querySelector('.edit-btn');
    if (editLink) {
        editLink.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent default anchor behavior
            window.location.href = '/edituser/${{user.id}}';  // Redirect to the add profile page
        });
    }
});

// document.addEventListener('DOMContentLoaded', function() {
//     // Get all edit buttons on the page
//     const editButtons = document.querySelectorAll('.edit-btn');
    
//     // Add click event listener to each edit button
//     editButtons.forEach(button => {
//         button.addEventListener('click', function(event) {
//             event.preventDefault();  // Prevent default anchor behavior
            
//             // Get the user ID from the button's data attribute
//             const userId = button.getAttribute('data-user-id');
            
//             // Redirect to the edit user page with the user ID
//             if (userId) {
//                 window.location.href = `/edituser/${userId}/`;
//             }
//         });
//     });
// });

// function fetchUserData() {
//     const tableBody = document.getElementById('userdata');

//     fetch('https://dummyjson.com/users')
//         .then(response => response.json())
//         .then(data => {
//             console.log('Fetched data:', data);

//             const users = data.users;
//             users.slice(0, 30).forEach(user => {
//                 const row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td>${user.firstName} ${user.lastName}</td>
//                     <td>${user.username}</td>
//                     <td>${user.email}</td>
//                     <td>
//                         <button class="action-btn edit-btn" onclick="editRow(this)">Edit</button>
//                         <button class="action-btn delete-btn" onclick="deleteRow(this)">Delete</button>
//                     </td>
//                 `;
//                 tableBody.appendChild(row);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching user data', error);
//         });
// }

// function editRow(button) {
//     const row = button.closest('tr');
//     const cells = row.querySelectorAll('td:not(:last-child)'); 

//     if (button.textContent === 'Edit') {
//         cells.forEach(cell => {
//             const input = document.createElement('input');
//             input.type = 'text';
//             input.value = cell.textContent;
//             cell.innerHTML = '';
//             cell.appendChild(input);
//         });
//         button.textContent = 'Save';
//     } else {
//         cells.forEach(cell => {
//             const input = cell.querySelector('input');
//             cell.textContent = input.value;
//         });
//         button.textContent = 'Edit';
//     }
// }

// function deleteRow(button) {
//     var temp =confirm('Are you sure you want to delete this row?');
//     if(temp){
//     const row = button.closest('tr');
//     row.remove();}
// }
