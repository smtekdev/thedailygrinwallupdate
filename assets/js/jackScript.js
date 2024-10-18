// this is for post Script

function openPopup(type) {
    const popup = document.getElementById('popup');
    const title = document.getElementById('popup-title');
    const fileInput = document.getElementById('popup-file-input');
    const textarea = document.getElementById('popup-textarea');

    popup.style.display = 'flex';

    // Configure popup based on the type of button clicked
    if (type === 'photo') {
        title.innerText = 'Upload Photo';
        fileInput.style.display = 'block';
        textarea.style.display = 'none';
    } else if (type === 'video') {
        title.innerText = 'Upload Video';
        fileInput.style.display = 'block';
        textarea.style.display = 'none';
    } else if (type === 'event') {
        title.innerText = 'Add Event Details';
        fileInput.style.display = 'none';
        textarea.style.display = 'block';
    } else {
        title.innerText = 'Other';
        fileInput.style.display = 'none';
        textarea.style.display = 'block';
    }
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    // Clear the content of the popup when closed
    document.getElementById('popup-title').innerText = '';
    document.getElementById('popup-file-input').style.display = 'none';
    document.getElementById('popup-textarea').value = ''; // Clear textarea
}

function submitPost() {
    // Your code to submit the post
    alert("Post submitted!");
}

function uploadMedia() {
    // Your code to handle file uploads
    alert("Media uploaded!");
}

//End  this is for post Script


/* Start Quote Section Script  */

function toggleQuoteOptions(element) {
    const options = element.nextElementSibling; // Get the options element
    if (options.style.display === "none" || options.style.display === "") {
        options.style.display = "block"; // Show options
    } else {
        options.style.display = "none"; // Hide options
    }
}



/* End Quote Section Script  */