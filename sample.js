

const sample = [
    { "taskName": "a", "status": "g", "category": "m", "priority": "s" },
    { "taskName": "b", "status": "h", "category": "n", "priority": "t" },
    { "taskName": "c", "status": "i", "category": "o", "priority": "u" },
    { "taskName": "d", "status": "j", "category": "p", "priority": "v" },
    { "taskName": "e", "status": "k", "category": "q", "priority": "w" },
    { "taskName": "f", "status": "l", "category": "r", "priority": "x" }
]


// console.log(sample)


const data = sample.filter(((item) => ["a"].includes(item.taskName)) && ((item) => ["h"].includes(item.status)) && ((item) => ["o"].includes(item.category)) && ((item) => ["v"].includes(item.category)))

// console.log(data)


const sample1 = [
    { "taskName": "a", "status": "g", "category": "m", "priority": "s" },
    { "taskName": "b", "status": "h", "category": "n", "priority": "t" }
]


const sample2 = [

    { "taskName": "b", "status": "h", "category": "n", "priority": "t" },
    { "taskName": "c", "status": "i", "category": "o", "priority": "u" }
]

const sample3 = [
    { "taskName": "a", "status": "g", "category": "m", "priority": "s" },
    { "taskName": "b", "status": "h", "category": "n", "priority": "t" },
    { "taskName": "c", "status": "i", "category": "o", "priority": "u" },
    { "taskName": "d", "status": "j", "category": "p", "priority": "v" },
    { "taskName": "e", "status": "k", "category": "q", "priority": "w" },
    { "taskName": "f", "status": "l", "category": "r", "priority": "x" }
]



const sample4 = [
    { "taskName": "a", "status": "g", "category": "m", "priority": "s" },
    { "taskName": "b", "status": "h", "category": "n", "priority": "t" },
    { "taskName": "c", "status": "i", "category": "o", "priority": "u" },
    { "taskName": "d", "status": "j", "category": "p", "priority": "v" },
    { "taskName": "e", "status": "k", "category": "q", "priority": "w" },
    { "taskName": "f", "status": "l", "category": "r", "priority": "x" }
]




sample2 = [
    { "taskName": "one", "status": "In Progress", "category": "Projects", "priority": "Urgent" },
    { "taskName": "two", "status": "Pending", "category": "Meetings", "priority": "High Priority" },
    { "taskName": "three", "status": "Completed", "category": "Client Work", "priority": "Medium Priority" },
    { "taskName": "four", "status": "Upcoming", "category": "Development", "priority": "Low Priority" },
    { "taskName": "five", "status": "In Progress", "category": "Testing", "priority": "Urgent" },
    { "taskName": "six", "status": "Pending", "category": "Bug Fixes", "priority": "High Priority" },
    { "taskName": "seven", "status": "Completed", "category": "Home Routines", "priority": "Medium Priority" },
    { "taskName": "eight", "status": "Upcoming", "category": "Outside Tasks", "priority": "Low Priority" },
    { "taskName": "nine", "status": "In Progress", "category": "Bills & Payments", "priority": "Urgent" },
    { "taskName": "ten", "status": "Pending", "category": "Maintenance", "priority": "High Priority" },
    { "taskName": "eleven", "status": "Pending", "category": "General", "priority": "Medium Priority" }
]