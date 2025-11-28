export const Category = {
  "workStatusCategory": [
    { "id": "WS2", "name": "In Progress", "emoji": "🔄", "color": "#1E88E5" },
    { "id": "WS1", "name": "Pending", "emoji": "⏳", "color": "#7E57C2" },
    { "id": "WS3", "name": "Completed", "emoji": "✅", "color": "#43A047" },
    { "id": "WS4", "name": "Upcoming", "emoji": "⏭️", "color": "#FDD835" }
  ],

  "taskTypeCategories": [
    { "id": "TT1", "name": "Projects", "emoji": "📁", "color": "#0D47A1" },
    { "id": "TT2", "name": "Meetings", "emoji": "📊", "color": "#6A1B9A" },
    { "id": "TT3", "name": "Client Work", "emoji": "🤝", "color": "#2E7D32" },
    { "id": "TT4", "name": "Development", "emoji": "💻", "color": "#0097A7" },
    { "id": "TT5", "name": "Testing", "emoji": "🧪", "color": "#FFA000" },
    { "id": "TT6", "name": "Bug Fixes", "emoji": "🐞", "color": "#D32F2F" },
    { "id": "TT7", "name": "Home Routines", "emoji": "🧹", "color": "#81C784" },
    { "id": "TT8", "name": "Outside Tasks", "emoji": "🛒", "color": "#4FC3F7" },
    { "id": "TT9", "name": "Bills & Payments", "emoji": "💵", "color": "#00838F" },
    { "id": "TT10", "name": "Maintenance", "emoji": "🛠️", "color": "#6D4C41" },
    { "id": "TT11", "name": "Fitness & Exercise", "emoji": "🏋️‍♂️", "color": "#76FF03" },
    { "id": "TT12", "name": "General", "emoji": "🌀", "color": "#9E9E9E" }
  ],

  "priorityCategories": [
    { "id": "PR1", "name": "Urgent", "emoji": "🚨", "color": "#E53935" },
    { "id": "PR2", "name": "High Priority", "emoji": "🔥", "color": "#FB8C00" },
    { "id": "PR3", "name": "Medium Priority", "emoji": "⭐", "color": "#FBC02D" },
    { "id": "PR4", "name": "Low Priority", "emoji": "☘️", "color": "#7CB342" }
  ]
}




export const getTaskStatusColor = (statusName = 'Pending') => {
  const taskInfo = Category.workStatusCategory.find((item) => item.name.toLowerCase() === statusName.toLocaleLowerCase())
  return taskInfo.color
}


