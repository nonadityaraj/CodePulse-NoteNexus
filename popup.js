// Get elements
const fabBtn = document.getElementById('fabBtn');
const newNoteBtn = document.getElementById('newNoteBtn');

// Navigate to editor when clicking FAB or New Note card
fabBtn.addEventListener('click', () => {
    window.location.href = 'editor.html';
});

newNoteBtn.addEventListener('click', () => {
    window.location.href = 'editor.html';
});
logo.addEventListener('click', () => {
    window.location.href = 'popup.html';
});


