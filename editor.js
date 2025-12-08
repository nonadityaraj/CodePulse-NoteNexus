// Get the back button
const backToNotesBtn = document.getElementById('backToNotesBtn');
const editorContent = document.getElementById('editorContent');

// Navigate back to notes page
backToNotesBtn.addEventListener('click', () => {
    window.location.href = 'popup.html';
});

// File menu to go back
const fileSelect = document.querySelector('.toolbar-select');
fileSelect.addEventListener('change', (e) => {
    if (e.target.value === 'Back to Notes') {
        window.location.href = 'popup.html';
    }
});

// Toolbar functionality
document.querySelectorAll('.toolbar-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const button = e.currentTarget;
        const icon = button.querySelector('i');
        
        // Execute formatting commands
        if (icon.classList.contains('bx-bold')) {
            document.execCommand('bold');
        } else if (icon.classList.contains('bx-italic')) {
            document.execCommand('italic');
        } else if (icon.classList.contains('bx-underline')) {
            document.execCommand('underline');
        } else if (icon.classList.contains('bx-strikethrough')) {
            document.execCommand('strikethrough');
        } else if (icon.classList.contains('bx-align-left')) {
            document.execCommand('justifyLeft');
        } else if (icon.classList.contains('bx-align-middle')) {
            document.execCommand('justifyCenter');
        } else if (icon.classList.contains('bx-align-right')) {
            document.execCommand('justifyRight');
        } else if (icon.classList.contains('bx-align-justify')) {
            document.execCommand('justifyFull');
        } else if (icon.classList.contains('bx-list-ul')) {
            document.execCommand('insertUnorderedList');
        } else if (icon.classList.contains('bx-list-ol')) {
            document.execCommand('insertOrderedList');
        } else if (icon.classList.contains('bx-link')) {
            const url = prompt('Enter URL:');
            if (url) document.execCommand('createLink', false, url);
        } else if (icon.classList.contains('bx-x')) {
            document.execCommand('removeFormat');
        } else if (icon.classList.contains('bx-undo')) {
            document.execCommand('undo');
        } else if (icon.classList.contains('bx-redo')) {
            document.execCommand('redo');
        }
        
        button.classList.toggle('active');
        setTimeout(() => button.classList.remove('active'), 200);
    });
});

// Color picker
const colorInput = document.querySelector('.color-input');
const colorPreview = document.querySelector('.color-preview');

colorInput.addEventListener('input', (e) => {
    const color = e.target.value;
    colorPreview.style.backgroundColor = color;
    document.execCommand('foreColor', false, color);
});

// Heading selector
const headingSelect = document.getElementById('headingSelect');
headingSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    if (value === 'H1') {
        document.execCommand('formatBlock', false, '<h1>');
    } else if (value === 'H2') {
        document.execCommand('formatBlock', false, '<h2>');
    } else if (value === 'H3') {
        document.execCommand('formatBlock', false, '<h3>');
    } else if (value === 'Paragraph') {
        document.execCommand('formatBlock', false, '<p>');
    }
});

// Font size selector
const fontSizeSelect = document.getElementById('fontSizeSelect');
fontSizeSelect.addEventListener('change', (e) => {
    const size = e.target.value;
    document.execCommand('fontSize', false, '7');
    const fontElements = editorContent.querySelectorAll('font[size="7"]');
    fontElements.forEach(el => {
        el.removeAttribute('size');
        el.style.fontSize = size;
    });
});
