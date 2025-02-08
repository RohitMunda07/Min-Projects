const createBtn = document.querySelector("#create-btn");
const contentArea = document.querySelector(".contentArea");

// Show notes from local storage
function show() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    contentArea.innerHTML = ''; // Clear existing notes to prevent duplicates on reload
    notes.forEach(note => {
        const noteContainer = createNoteContainer(note.text);
        contentArea.appendChild(noteContainer);
    });
}

// Create Note Container
function createNoteContainer(text) {
    const noteContainer = document.createElement('div'); // Container for note elements
    noteContainer.classList.add('note-container'); // Add a class for styling and selection

    const textArea = document.createElement('textarea');
    textArea.setAttribute("cols", "25");
    textArea.setAttribute("rows", "3");
    textArea.className = "input-box";
    textArea.value = text;  // Set the text from local storage

    const trash = document.createElement('button');
    trash.classList.add("ri-delete-bin-line");
    trash.classList.add("trash-btn");

    noteContainer.appendChild(textArea);
    noteContainer.appendChild(trash);

    textArea.addEventListener('input', updateStorage); // Attach listener here

    return noteContainer;
}

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
    const noteContainer = createNoteContainer(""); // Create with empty text
    contentArea.appendChild(noteContainer);
});

// Deleting Notes
contentArea.addEventListener('click', (e) => {
    if (e.target.classList.contains("trash-btn")) {
        const noteContainer = e.target.parentNode; // Get the parent container
        noteContainer.remove();
        updateStorage();
    }
});

show(); // Call show() initially to load notes