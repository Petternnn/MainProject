// References to DOM elements
const addStudentBtn = document.querySelector(".add-student-btn");
const modal = document.querySelector(".modal");
const form = document.getElementById("add-student-form");
const formSteps = Array.from(form.querySelectorAll(".form-step"));
const nextStepBtns = form.querySelectorAll(".next-step-btn");
const prevStepBtns = form.querySelectorAll(".prev-step-btn");
let currentStep = 0; // Track the current step in the form

// Event listener to open the modal when 'Add Student' button is clicked
addStudentBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

// Event listener to close the modal when clicking outside of the modal content
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
    resetForm();
  }
});

// Function to reset the form and form steps
function resetForm() {
  form.reset();
  formSteps[currentStep].classList.remove("form-step-active");
  currentStep = 0;
  formSteps[currentStep].classList.add("form-step-active");
}

// Next step button functionality
nextStepBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Validate the current step before proceeding
    if (validateFormStep(currentStep)) {
      formSteps[currentStep].classList.remove("form-step-active");
      currentStep += 1;
      formSteps[currentStep].classList.add("form-step-active");
    }
  });
});

// Previous step button functionality
prevStepBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formSteps[currentStep].classList.remove("form-step-active");
    currentStep -= 1;
    formSteps[currentStep].classList.add("form-step-active");
  });
});

// Function to validate the current form step
function validateFormStep(step) {
  const inputs = formSteps[step].querySelectorAll("input");
  for (let input of inputs) {
    if (!input.checkValidity()) {
      input.reportValidity();
      return false;
    }
  }
  return true;
}


/////////////////////////////////////////
// Form submission to add new student //
///////////////////////////////////////


form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Collect form data
  const formData = new FormData(form);
  const newStudent = {
    id: students.length + 1,
    name: formData.get("name"),
    email: formData.get("email"),
    lastOnline: new Date().toISOString().split("T")[0], // Set lastOnline to today's date
    avatar: "./assets/studentimageplaceholder.png", // Using the placeholder avatar
    additionalInfo: "",
    isOnline: false, // New students are offline by default
    goldBalance: 0,
    level: 1,
  };

  // Add new student to the top of students array
  students.unshift(newStudent);

  // Re-render student cards
  renderStudents(students);

  // Reset form and close modal
  resetForm();
  modal.classList.add("hidden");
});
