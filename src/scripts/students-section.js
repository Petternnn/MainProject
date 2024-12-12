// script.js

// Array containing class data

const classes = {
  "4C": [
    {
      id: 1,
      name: "Alice Johnson",
      level: 5,
      lastOnline: "01-10-2023",
      avatar: "./assets/AvatarSprite.gif",
      additionalInfo: "Enrolled in Advanced Mathematics.",
      isOnline: true,
      goldBalance: 150, //Gjøre om til tall
    },
    {
      id: 2,
      name: "Fredrik Madsø",
      level: 3,
      lastOnline: "02-10-2023",
      avatar: "./assets/AvatarSprite.gif",
      additionalInfo: "Excels in science experiments.",
      isOnline: false,
      goldBalance: 100,
    },
    {
      id: 3,
      name: "Sophia Williams",
      level: 4,
      lastOnline: "01-09-2023",
      avatar: "./assets/AvatarSprite.gif",
      additionalInfo: "Great at creative writing.",
      isOnline: true,
      goldBalance: 120,
    },
    {
      id: 4,
      name: "Michael Borg",
      level: 2,
      lastOnline: "05-10-2023",
      avatar: "./assets/AvatarSprite.gif",
      additionalInfo: "Interested in robotics.",
      isOnline: true,
      goldBalance: 90
    },
    {
      id: 5,
      name: "Emma Westerød",
      level: 1,
      lastOnline: "08-10-2023",
      avatar: "./assets/AvatarSprite.gif",
      additionalInfo: "Participates in debate club.",
      isOnline: false,
      goldBalance: 60
    },
    {
      id: 6,
      name: "Oliver Wilson",
      level: 3,
      lastOnline: "07-10-2023",
      avatar: "./assets/AvatarSprite.gif",
      additionalInfo: "Enjoys playing chess.",
      isOnline: false,
      goldBalance: 80
    },
  ],
  "7C": [
    {
      id: 7,
      name: "Sofie Berg",
      level: 2,
      lastOnline: "01-10-2023",
      avatar: "./assets/AvatarSprite.gif",
      additionalInfo: "Learning to play the piano.",
      isOnline: true,
      goldBalance: 90
    },
    {
      id: 8,
      name: "Liam Johnson",
      level: 4,
      lastOnline: "03-11-2024",
      avatar: "./assets/AvatarSprite.gif",
      additionalInfo: "Excels in sports.",
      isOnline: false,
      goldBalance: 130,
    },
    {
      id: 9,
      name: "Isabella Martin",
      level: 3,
      lastOnline: "06-11-2024",
      avatar: "./assets/AvatarSprite.gif",
      additionalInfo: "Avid reader.",
      isOnline: true,
      goldBalance: 100,
    },
    {
      id: 10,
      name: "Oda Bergensen",
      level: 5,
      lastOnline: "02-11-2024",
      avatar: "./assets/AvatarSprite.gif",
      additionalInfo: "Great at painting.",
      isOnline: true,
      goldBalance: 140,
    },
    {
      id: 11,
      name: "Mia Garcia",
      level: 1,
      lastOnline: "04-11-2024",
      avatar: "./assets/AvatarSprite.gif",
      additionalInfo: "Enjoys gardening.",
      isOnline: false,
      goldBalance: 50,
    },
    {
      id: 12,
      name: "Ethan Martinez",
      level: 3,
      lastOnline: "05-10-2024",
      avatar: "./assets/AvatarSprite.gif",
      additionalInfo: "Plays guitar.",
      isOnline: false,
      goldBalance: 70
    },
  ],
  "9A": [
    {
      id: 13,
      name: "Olivia Hansen",
      level: 5,
      lastOnline: "02-10-2024",
      avatar: "./assets/AvatarSprite.gif",
      additionalInfo: "Excellent in sports.",
      isOnline: true,
      goldBalance: 140
    },
    {
      id: 14,
      name: "Noah Kristiansen",
      level: 4,
      lastOnline: "03-10-2024",
      avatar: "./assets/AvatarSprite.gif",
      additionalInfo: "Enjoys coding.",
      isOnline: false,
      goldBalance: 110
    },
    {
      id: 15,
      name: "Amelia Rosenborg",
      level: 3,
      lastOnline: "05-10-2024",
      avatar: "./assets/AvatarSprite.gif",
      additionalInfo: "Plays basketball.",
      isOnline: true,
      goldBalance: 90
    },
    {
      id: 16,
      name: "Lucas Robinson",
      level: 2,
      lastOnline: "06-10-2024",
      avatar: "./assets/AvatarSprite.gif",
      additionalInfo: "Passionate about cooking.",
      isOnline: true,
      goldBalance: 80
    },
    {
      id: 17,
      name: "Charlotte Klark",
      level: 1,
      lastOnline: "04-10-2024",
      avatar: "./assets/AvatarSprite.gif",
      additionalInfo: "Writes poetry.",
      isOnline: false,
      goldBalance: 60,
    },
    {
      id: 18,
      name: "Henrik Sigvardson",
      level: 3,
      lastOnline: "07-10-2024",
      avatar: "./assets/AvatarSprite.gif",
      additionalInfo: "Enjoys hiking.",
      isOnline: false,
      goldBalance: 70,
    },
  ],
};

// Students array to hold the currently selected class
let students = [];

// References to DOM elements using your class names and IDs

const classSelect = document.querySelector(".class-dropdown");
const studentsList = document.querySelector(".students-list");
const searchBar = document.querySelector(".search-bar");
const filterSelect = document.getElementById("filter");

// Function to render student cards dynamically
function renderStudents(studentList) {
  // Clear existing content
  studentsList.innerHTML = "";

  // Iterate over each student and create card elements
  studentList.forEach((student) => {
    // Create card container with 'student-card' class and 'card-container' class
    const card = document.createElement("div");
    card.classList.add("student-card", "card-container");
    // Ensure .student-card has position: relative for status dot positioning
    card.style.position = "relative";

    // Status dot to indicate online/offline status
    const statusDot = document.createElement("span");
    statusDot.classList.add("status-dot");
    if (student.isOnline) {
      statusDot.classList.add("status-online"); // Green dot for online
    } else {
      statusDot.classList.add("status-offline"); // Grey dot for offline
    }

    // Create Divider
    const dividerline = document.createElement("hr");

    //Add class to devider
    dividerline.classList.add("card-divider");

    // Create card wrapper
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("card-wrapper");

    // Avatar container
    const avatarContainer = document.createElement("div");
    if (student.isOnline) {
      avatarContainer.classList.add("avatar-placeholder");
    }
    else  {
      avatarContainer.classList.add("avatar-placeholder");
    }


    // Avatar image
    const avatar = document.createElement("img");
    avatar.src = student.avatar;
    avatar.alt = `${student.name}'s avatar`;
    avatar.classList.add("avatar");

    // Add avatar image to avatar container
    avatarContainer.appendChild(avatar);

    // Student details container
    const studentDetails = document.createElement("div");
    studentDetails.classList.add("student-details");

    // Student info container
    const studentInfo = document.createElement("div");
    studentInfo.classList.add("student-info");

    // Name and status container
    const nameStatus = document.createElement("div");
    nameStatus.classList.add("name-status");

    // Student name
    const name = document.createElement("div");
    name.classList.add("student-name");
    name.textContent = student.name;

    // Online status
    //const onlineStatus = document.createElement('div');
    //onlineStatus.classList.add('online-icon');

    // Toggle written status
    //onlineStatus.textContent = student.isOnline ? 'Online' : 'Offline';

    // Add name and online status to nameStatus container
    card.appendChild(name);
    // Append the divider to the card
    card.appendChild(dividerline);
    //card.appendChild(onlineStatus);

    // Additional stats container
    const additionalStats = document.createElement("div");
    additionalStats.classList.add("additional-stats");

    // Last online
    const lastOnline = document.createElement("div");
    lastOnline.classList.add("last-online");
    lastOnline.textContent = `Last Online: ${student.lastOnline}`;

    // Gold balance
    const goldBalance = document.createElement("div");
    goldBalance.classList.add("gold");
    goldBalance.textContent = `Gold: 💰 ${student.goldBalance} g`;

    // Level
    const level = document.createElement("div");
    level.classList.add("level");
    level.textContent = `Level: ${student.level}`;

    // Add stats to additionalStats container
    additionalStats.appendChild(lastOnline);
    additionalStats.appendChild(goldBalance);
    nameStatus.appendChild(level);

    // Assemble student info
    studentInfo.appendChild(nameStatus);
    studentInfo.appendChild(additionalStats);

    const dividerLine = document.createElement("div");
    dividerLine.classList.add("divider-line");

    // Toggle button
    const toggleBtn = document.createElement("button");
    toggleBtn.classList.add("toggle-btn");
    toggleBtn.textContent = "▼"; // Down arrow icon

    toggleBtn.addEventListener("click", () => {
      additionalInfo.classList.toggle("hidden"); // Toggle visibility
      deleteBtn.classList.toggle(`hidden`);
    });

    // Additional info (textarea)
    const additionalInfo = document.createElement("textarea");
    additionalInfo.classList.add("additional-info", "hidden"); // Hidden by default

    // Retrieve saved notes from localStorage, or use default
    const savedNotes = localStorage.getItem(`student-${student.id}-notes`);
    additionalInfo.value = savedNotes ? savedNotes : student.additionalInfo;

    // Event listener to save notes to localStorage when changed
    additionalInfo.addEventListener("input", () => {
      localStorage.setItem(`student-${student.id}-notes`, additionalInfo.value);
    });

    // Assemble student details
    studentDetails.appendChild(studentInfo);

    // Assemble card wrapper
    cardWrapper.appendChild(avatarContainer);
    cardWrapper.appendChild(studentDetails);

    // Add status dot and card wrapper to card container
    card.appendChild(statusDot); // Position status dot within the card
    card.appendChild(cardWrapper);
    // // Add divider line to divider
    // card.appendChild(dividerLine);

    // Append the toggle button to card
    card.appendChild(toggleBtn);
    card.appendChild(additionalInfo);
    // Add card to the students list
    studentsList.appendChild(card);
    // Create Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn", "hidden"); // Hidden by default
    deleteBtn.textContent = "Delete"; // Button text

    // Add event listener to handle delete action
    deleteBtn.addEventListener("click", () => {
      // Find the index of the student in the array by matching the id
      const studentIndex = students.findIndex((s) => s.id === student.id);
      if (studentIndex !== -1) {
        // Remove the student from the array
        students.splice(studentIndex, 1);
        // Re-render the students list
        renderStudents(students);
      }
    });

    // Append the delete button to the card
    card.appendChild(deleteBtn);
  });
}

function loadClass(classId) {
  // Update students array
  students = classes[classId] || [];
  // Re-render students
  renderStudents(students);
}

// Default to the first class (e.g., "4C")
loadClass("Select class");

classSelect.addEventListener("change", (event) => {
  const selectedClass = event.target.value;
  loadClass(selectedClass);
});

// Initial render of students
renderStudents(students);

// Search functionality class name 'search-bar'
searchBar.addEventListener("input", () => {
  const searchTerm = searchBar.value.toLowerCase();
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm)
  );
  renderStudents(filteredStudents);
});

// Filter functionality with select ID 'filter'
filterSelect.addEventListener("change", () => {
  const filterValue = filterSelect.value;
  let filteredStudents = [...students];

  if (filterValue === "name") {
    // Sort by name
    filteredStudents.sort((a, b) => a.name.localeCompare(b.name));
  } else if (filterValue === "level") {
    // Sort by level (highest level at top)
    filteredStudents.sort((a, b) => b.level - a.level);
  } else if (filterValue === "lastOnline") {
    // Sort by last online (most recent at top)
    filteredStudents.sort(
      (a, b) => new Date(b.lastOnline) - new Date(a.lastOnline)
    );
  } else if (filterValue === "active") {
    // Filter only active (online) users
    filteredStudents = students.filter((student) => student.isOnline);
  } 

  renderStudents(filteredStudents);
});


