import React, { useState, useMemo } from "react";

const sample2 = [
    { taskName: "one", status: "In Progress", category: "Projects", priority: "Urgent" },
    { taskName: "two", status: "Pending", category: "Meetings", priority: "High Priority" },
    { taskName: "three", status: "Completed", category: "Client Work", priority: "Medium Priority" },
    { taskName: "four", status: "Upcoming", category: "Development", priority: "Low Priority" },
    { taskName: "five", status: "In Progress", category: "Testing", priority: "Urgent" },
    { taskName: "six", status: "Pending", category: "Bug Fixes", priority: "High Priority" },
    { taskName: "seven", status: "Completed", category: "Home Routines", priority: "Medium Priority" },
    { taskName: "eight", status: "Upcoming", category: "Outside Tasks", priority: "Low Priority" },
    { taskName: "nine", status: "In Progress", category: "Bills & Payments", priority: "Urgent" },
    { taskName: "ten", status: "Pending", category: "Maintenance", priority: "High Priority" },
    { taskName: "eleven", status: "Pending", category: "General", priority: "Medium Priority" }
];

export default function TaskPage() {
    // multiple selection filters
    const [filters, setFilters] = useState({
        status: [],
        category: [],
        priority: []
    });

    // unique options for checkbox
    const statusOptions = [...new Set(sample2.map(t => t.status))];
    const categoryOptions = [...new Set(sample2.map(t => t.category))];
    const priorityOptions = [...new Set(sample2.map(t => t.priority))];

    const handleCheckboxChange = (group, value) => {
        setFilters(prev => {
            const exists = prev[group].includes(value);
            if (exists) {
                // remove
                return {
                    ...prev,
                    [group]: prev[group].filter(v => v !== value)
                };
            }
            // add
            return {
                ...prev,
                [group]: [...prev[group], value]
            };
        });
    };

    // filtered data
    const filteredData = useMemo(() => {
        return sample2.filter(item => {
            const matchStatus =
                filters.status.length === 0 || filters.status.includes(item.status);
            const matchCategory =
                filters.category.length === 0 || filters.category.includes(item.category);
            const matchPriority =
                filters.priority.length === 0 || filters.priority.includes(item.priority);

            return matchStatus && matchCategory && matchPriority;
        });
    }, [filters]);

    const clearFilters = () => {
        setFilters({ status: [], category: [], priority: [] });
    };

    return (
        <div style={{ padding: 20, fontFamily: "sans-serif" }}>
            <h2>📋 Tasks with Filters</h2>

            {/* FILTERS SECTION  */}
            <div
                style={{
                    display: "flex",
                    gap: 40,
                    padding: 16,
                    marginBottom: 20,
                    border: "1px solid #ddd",
                    borderRadius: 8
                }}
            >
                {/* Status Filter */}
                <div>
                    <h4>Status</h4>
                    {statusOptions.map(status => (
                        <label key={status} style={{ display: "block" }}>
                            <input
                                type="checkbox"
                                checked={filters.status.includes(status)}
                                onChange={() => handleCheckboxChange("status", status)}
                            />
                            {" "}{status}
                        </label>
                    ))}
                </div>

                {/* Category Filter */}
                <div>
                    <h4>Category</h4>
                    {categoryOptions.map(cat => (
                        <label key={cat} style={{ display: "block" }}>
                            <input
                                type="checkbox"
                                checked={filters.category.includes(cat)}
                                onChange={() => handleCheckboxChange("category", cat)}
                            />
                            {" "}{cat}
                        </label>
                    ))}
                </div>

                {/* Priority Filter */}
                <div>
                    <h4>Priority</h4>
                    {priorityOptions.map(p => (
                        <label key={p} style={{ display: "block" }}>
                            <input
                                type="checkbox"
                                checked={filters.priority.includes(p)}
                                onChange={() => handleCheckboxChange("priority", p)}
                            />
                            {" "}{p}
                        </label>
                    ))}
                </div>
            </div>

            <button onClick={clearFilters} style={{ marginBottom: 16 }}>
                Clear All Filters
            </button>

            {/* TABLE SECTION */}
            <h3>Result ({filteredData.length})</h3>
            <table
                border="1"
                cellPadding="8"
                cellSpacing="0"
                style={{ borderCollapse: "collapse", width: "100%" }}
            >
                <thead style={{ background: "#f0f0f0" }}>
                    <tr>
                        <th>Task Name</th>
                        <th>Status</th>
                        <th>Category</th>
                        <th>Priority</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((task, index) => (
                        <tr key={index}>
                            <td>{task.taskName}</td>
                            <td>{task.status}</td>
                            <td>{task.category}</td>
                            <td>{task.priority}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {filteredData.length === 0 && <p>No tasks found 😅</p>}
        </div>
    );
}
