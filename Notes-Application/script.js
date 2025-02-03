const createBtn = document.querySelector("#create-btn");
const contentArea = document.querySelector(".contentArea");
const trashBtn = document.querySelectorAll(".trash-btn");

// Show notes from local storage
function show() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach(note => {
        const noteContainer = createNoteContainer(note.text);
        contentArea.appendChild(noteContainer);
    });
}
show();

// Update local storage with current notes
function updateStorage() {
    const notes = [];
    const noteContainers = contentArea.querySelectorAll(".note-container");
    noteContainers.forEach(container => {
        const textArea = container.querySelector(".input-box");
        notes.push({ text: textArea.value });
    });
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Creating Notes
createBtn.addEventListener('click', () => {
    // Text Area
    const textArea = document.createElement('textarea');
    textArea.setAttribute("cols", "25");
    textArea.setAttribute("rows", "3");
    textArea.className = "input-box";

    // Add Button
    const addBtn = document.createElement('button');
    addBtn.classList.add("add-btn");
    addBtn.innerHTML = "Add";

    // Trash Button
    const trash = document.createElement('button');
    trash.classList.add("ri-delete-bin-line");
    trash.classList.add("trash-btn");

    contentArea.appendChild(textArea);
    contentArea.appendChild(addBtn);
    contentArea.appendChild(trash);

    // Add event listener for text area changes
    textArea.addEventListener('input', updateStorage);
    return contentArea;
})

// Deleting Notes
contentArea.addEventListener('click', (e) => {
    if (e.target.classList.contains("trash-btn")) {
        e.target.previousElementSibling.remove(); // Removes the Add button
        e.target.previousElementSibling.remove(); // Removes the text area
        e.target.remove(); // Removes the Trash button
        updateStorage();
    }
    else if (e.target.tagName === "TEXTAREA") {
        const notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        })
    }
})