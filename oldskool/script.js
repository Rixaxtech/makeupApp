// Select the video element to display the camera preview
const videoElement = document.querySelector('#camera');

// Select the heading, image, and paragraph elements for the makeup guide
const stepHeading = document.querySelector('#step-heading');
const exampleImage = document.querySelector('#example-image');
const stepInstructions = document.querySelector('#step-instructions');

// Select the image element for the overlay
const overlayImage = document.querySelector('#overlay-image');

// Array of objects representing the steps in the makeup guide
const steps = [
  {
    heading: 'Step 1: Apply foundation',
    image: 'example-1.jpg',
    instructions: 'Use a sponge or brush to apply foundation evenly over your face.',
    overlay: 'overlay-1.png'
  },
  {
    heading: 'Step 2: Apply concealer',
    image: 'example-2.jpg',
    instructions: 'Use a brush or your finger to apply concealer to any blemishes or dark circles.',
    overlay: 'overlay-2.png'
  },
  // Add more steps as needed
];

// Index of the current step in the steps array
let currentStep = 0;

// Request access to the camera
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    // Set the video element's source to the camera stream
    videoElement.srcObject = stream;
  })
  .catch(error => {
    // Handle error
  });

// Function to update the makeup guide with the current step
function updateMakeupGuide() {
  // Update the heading, image, and paragraph elements with the current step
  stepHeading.textContent = steps[currentStep].heading;
  exampleImage.src = steps[currentStep].image;
  stepInstructions.textContent = steps[currentStep].instructions;

  // Update the overlay image
  overlayImage.src = steps[currentStep].overlay;
}

// Function to advance to the next step in the makeup guide
function nextStep() {
  // Increment the current step
  currentStep++;

  // If the current step is the last step, go back to the first step
  if (currentStep >= steps.length) {
    currentStep = 0;
  }

  // Update the makeup guide with the new step
  updateMakeupGuide();
}

// Function to go back to the previous step in the makeup guide
function previousStep() {
  // Decrement the current step
  currentStep--;

  // If the current step is the first step, go to the last step
  if (currentStep < 0) {
    currentStep = steps.length - 1;
 
}

// Update the makeup guide with the new step
updateMakeupGuide();
}

// Add event listeners for the next and previous buttons
const nextButton = document.querySelector('#next-button');
nextButton.addEventListener('click', nextStep);

const previousButton = document.querySelector('#previous-button');
previousButton.addEventListener('click', previousStep);