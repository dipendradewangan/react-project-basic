// export const Category = {
//   "workStatusCategory": [
//     { "id": "WS2", "name": "In Progress", "emoji": "🔄", "color": "#1E88E5" },
//     { "id": "WS1", "name": "Pending", "emoji": "⏳", "color": "#7E57C2" },
//     { "id": "WS3", "name": "Completed", "emoji": "✅", "color": "#43A047" },
//     { "id": "WS4", "name": "Upcoming", "emoji": "⏭️", "color": "#FDD835" }
//   ],

//   "taskTypeCategories": [
//     { "id": "TT1", "name": "Projects", "emoji": "📁", "color": "#0D47A1" },
//     { "id": "TT2", "name": "Meetings", "emoji": "📊", "color": "#6A1B9A" },
//     { "id": "TT3", "name": "Client Work", "emoji": "🤝", "color": "#2E7D32" },
//     { "id": "TT4", "name": "Development", "emoji": "💻", "color": "#0097A7" },
//     { "id": "TT5", "name": "Testing", "emoji": "🧪", "color": "#FFA000" },
//     { "id": "TT6", "name": "Bug Fixes", "emoji": "🐞", "color": "#D32F2F" },
//     { "id": "TT7", "name": "Home Routines", "emoji": "🧹", "color": "#81C784" },
//     { "id": "TT8", "name": "Outside Tasks", "emoji": "🛒", "color": "#4FC3F7" },
//     { "id": "TT9", "name": "Bills & Payments", "emoji": "💵", "color": "#00838F" },
//     { "id": "TT10", "name": "Maintenance", "emoji": "🛠️", "color": "#6D4C41" },
//     { "id": "TT11", "name": "Fitness & Exercise", "emoji": "🏋️‍♂️", "color": "#76FF03" },
//     { "id": "TT12", "name": "General", "emoji": "🌀", "color": "#9E9E9E" }
//   ],

//   "priorityCategories": [
//     { "id": "PR1", "name": "Urgent", "emoji": "🚨", "color": "#E53935" },
//     { "id": "PR2", "name": "High Priority", "emoji": "🔥", "color": "#FB8C00" },
//     { "id": "PR3", "name": "Medium Priority", "emoji": "⭐", "color": "#FBC02D" },
//     { "id": "PR4", "name": "Low Priority", "emoji": "☘️", "color": "#7CB342" }
//   ]
// }



export const Category = {
  "workStatusCategory": [
    { "id": "WS2", "name": "In Progress", "emoji": "🔄", "color": "#1E88E5", "textColor": "#FFFFFF" },
    { "id": "WS1", "name": "Pending", "emoji": "⏳", "color": "#7E57C2", "textColor": "#FFFFFF" },
    { "id": "WS3", "name": "Completed", "emoji": "✅", "color": "#43A047", "textColor": "#FFFFFF" },
    { "id": "WS4", "name": "Upcoming", "emoji": "⏭️", "color": "#FDD835", "textColor": "blue" }
  ],

  "taskTypeCategories": [
    { "id": "TT1", "name": "Projects", "emoji": "📁", "color": "#0D47A1", "textColor": "#FFFFFF" },
    { "id": "TT2", "name": "Meetings", "emoji": "📊", "color": "#6A1B9A", "textColor": "#FFFFFF" },
    { "id": "TT3", "name": "Client Work", "emoji": "🤝", "color": "#2E7D32", "textColor": "#FFFFFF" },
    { "id": "TT4", "name": "Development", "emoji": "💻", "color": "#0097A7", "textColor": "#FFFFFF" },
    { "id": "TT5", "name": "Testing", "emoji": "🧪", "color": "#FFA000", "textColor": "#000000" },
    { "id": "TT6", "name": "Bug Fixes", "emoji": "🐞", "color": "#D32F2F", "textColor": "#FFFFFF" },
    { "id": "TT7", "name": "Home Routines", "emoji": "🧹", "color": "#81C784", "textColor": "#000000" },
    { "id": "TT8", "name": "Outside Tasks", "emoji": "🛒", "color": "#4FC3F7", "textColor": "#000000" },
    { "id": "TT9", "name": "Bills & Payments", "emoji": "💵", "color": "#00838F", "textColor": "#FFFFFF" },
    { "id": "TT10", "name": "Maintenance", "emoji": "🛠️", "color": "#6D4C41", "textColor": "#FFFFFF" },
    { "id": "TT11", "name": "Fitness & Exercise", "emoji": "🏋️‍♂️", "color": "#76FF03", "textColor": "#000000" },
    { "id": "TT12", "name": "General", "emoji": "🌀", "color": "#9E9E9E", "textColor": "#000000" }
  ],

  "priorityCategories": [
    { "id": "PR1", "name": "Urgent", "emoji": "🚨", "color": "#E53935", "textColor": "#FFFFFF" },
    { "id": "PR2", "name": "High Priority", "emoji": "🔥", "color": "#FB8C00", "textColor": "#000000" },
    { "id": "PR3", "name": "Medium Priority", "emoji": "⭐", "color": "#FBC02D", "textColor": "#000000" },
    { "id": "PR4", "name": "Low Priority", "emoji": "☘️", "color": "#7CB342", "textColor": "#000000" }
  ]
}




export const getTaskStatusColor = (statusName = 'Pending') => {
  const taskInfo = Category.workStatusCategory.find((item) => item.name.toLowerCase() === statusName.toLocaleLowerCase())
  return { color: taskInfo.color, textColor: taskInfo.textColor, emoji: taskInfo.emoji }
}



export const getTaskDecorationValues = (group="priorityCategories", name="Urgent")=>{
  return Category[group].find((item)=>item.name == name)
}



const abc = [1,2,1,1,1,3]


console.log(abc)