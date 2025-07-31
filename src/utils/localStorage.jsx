
const employees = [
    {
        "id": 1,
        "firstName": "Arjun",
        "email": "employee1@gmail.com",
        "password": "123",
        "taskCounts": {
            "active":2,
            "newTask": 1,
            "completed" : 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update homepage",
                "taskDescription": "Redesign the hero section of the homepage.",
                "taskDate": "2025-07-01",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Fix login bug",
                "taskDescription": "Resolve user authentication issue.",
                "taskDate": "2025-06-20",
                "category": "Development"
            },
            {
                "active": true,
               "newTask": true,
               "completed": false,
              "failed": false,
                "taskTitle": "Create wireframes",
                "taskDescription": "Wireframes for the new pricing page.",
                "taskDate": "2025-07-10",
                "category": "Design"
            },
            {
               "active": true,
               "newTask": false,
               "completed": false,
               "failed": false,
                "taskTitle": "Implement API",
                 "taskDescription": "Integrate new payment gateway API.",
                "taskDate": "2025-07-12",
                "category": "Development"
            },
            {
               "active": false,
                "newTask": false,
                "completed": false,
               "failed": true,
                 "taskTitle": "Write unit tests",
                  "taskDescription": "Add tests for user profile module.",
                "taskDate": "2025-06-28",
              "category": "Testing"
            },
            {
              "active": true,
               "newTask": true,
                "completed": false,
            "failed": false,
               "taskTitle": "Deploy to staging",
                 "taskDescription": "Push latest code to staging environment.",
                "taskDate": "2025-07-15",
                 "category": "DevOps"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Optimize images",
                "taskDescription": "Reduce image sizes on product pages.",
                "taskDate": "2025-06-22",
                "category": "Performance"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare report",
                "taskDescription": "Weekly status report for team progress.",
                "taskDate": "2025-07-20",
                "category": "Documentation"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Review pull requests",
                "taskDescription": "Code reviews for open PRs in repo.",
                "taskDate": "2025-07-25",
                "category": "Code Review"
            }
        ]
    }
];

const admin = [
    {
        id: 1,
        email: "admin@gmail.com",
        password: "123"
    }
];

export const setLocalStorage = () => {
 localStorage.setItem("employees", JSON.stringify(employees))
 localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {
 const employees = JSON.parse(localStorage.getItem("employees"))
//  console.log(JSON.parse(data))
const admin = JSON.parse(localStorage.getItem("admin"))
return {employees,admin}
// console.log(employees,admin)
}