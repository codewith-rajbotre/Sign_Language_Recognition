// Get Elements
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const output = document.getElementById('output');

// Access Webcam
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(error => {
        console.error("Error accessing webcam:", error);
    });

// Capture Frame and Recognize Sign
function captureFrame() {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    output.innerText = "Recognized Sign: Processing...";

    // Simulate Sign Recognition (Replace with ML model call)
    setTimeout(() => {
        const recognizedSigns = ["Hello", "Thank You", "Yes", "No", "I Love You"];
        const randomSign = recognizedSigns[Math.floor(Math.random() * recognizedSigns.length)];
        output.innerText = `Recognized Sign: ${randomSign}`;
    }, 2000);
}
