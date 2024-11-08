localStorage.clear();

const employees = [
    {
        "id": 1,
        "firstName": "Alice",
        "name": "Alice Johnson",
        "email": "e@e.com",
        "password": "e",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Task 1",
                "description": "Complete the first phase of the project",
                "date": "2024-11-07",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Task 2",
                "description": "Submit project proposal",
                "date": "2024-10-20",
                "category": "Documentation"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Task 3",
                "description": "Update project status report",
                "date": "2024-11-08",
                "category": "Reporting"
            }
        ],
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstName": "Bob",
        "name": "Bob Smith",
        "email": "employee2@example.com",
        "password": "password123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Task 1",
                "description": "Review team progress",
                "date": "2024-11-07",
                "category": "Management"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Task 2",
                "description": "Organize meeting with stakeholders",
                "date": "2024-11-06",
                "category": "Meetings"
            }
        ],
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 3,
        "firstName": "Charlie",
        "name": "Charlie Lee",
        "email": "employee3@example.com",
        "password": "password123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Task 1",
                "description": "Prepare financial report",
                "date": "2024-11-10",
                "category": "Finance"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Task 2",
                "description": "Reconcile bank statements",
                "date": "2024-11-05",
                "category": "Finance"
            }
        ],
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        }
    },
    {
        "id": 4,
        "firstName": "Daisy",
        "name": "Daisy White",
        "email": "employee4@example.com",
        "password": "password123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Task 1",
                "description": "Update client database",
                "date": "2024-11-08",
                "category": "Data Management"
            }
        ],
        "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 5,
        "firstName": "Evan",
        "name": "Evan Black",
        "email": "employee5@example.com",
        "password": "password123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Task 1",
                "description": "Assist in preparing annual report",
                "date": "2024-11-09",
                "category": "Documentation"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Task 2",
                "description": "Schedule team meetings",
                "date": "2024-11-02",
                "category": "Scheduling"
            }
        ],
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    }
];

const admin = [
    {
        "id": 1,
        "firstName": "Admin",
        "name": "Admin User",
        "email": "admin@example.com",
        "password": "password123"
    }
];

// Setting and getting data from local storage
export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    console.log(employees, admin);

    return { employees, admin }
}
