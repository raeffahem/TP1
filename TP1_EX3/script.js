document.addEventListener("DOMContentLoaded", () => {
    const taskList = document.getElementById("taskList");
    const addButton = document.getElementById("addTodo");
    const dayInput = document.getElementById("day");
    const activityInput = document.getElementById("activity");

    addButton.addEventListener("click", () => {
        const day = dayInput.value.trim();
        const activity = activityInput.value.trim();

        if (day && activity) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `${day}: ${activity} <button class="delete-btn">🗑</button>`;

            listItem.querySelector(".delete-btn").addEventListener("click", () => {
                listItem.remove();
            });

            taskList.appendChild(listItem);
            dayInput.value = "";
            activityInput.value = "";
        }
    });
});
