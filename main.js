let currentMonth = 4; // May is the 5th month (0-indexed)
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const daysContainer = document.querySelector('.days');

// Function to get unavailable dates for a given month
// Function to get unavailable dates for a given month
function getUnavailableDates(monthIndex) {
  switch (monthIndex) {
    case 0: // January
      return [2, 3, 5, 8, 15, 16, 22]; // Example unavailable dates for January
    case 1: // February
      return [5, 7, 9, 11, 12, 13, 14, 25]; // Example unavailable dates for February
    case 2: // March
      return [1, 4, 5, 6, 12, 13, 21, 22, 23, 27]; // Example unavailable dates for March
    case 3: // April
      return [2, 5, 6, 7, 9, 11, 12, 13, 16, 23, 24]; // Example unavailable dates for April
    case 4: // May
      return [6, 7, 8, 9, 13, 14, , 20, 21, 22, 26, 27, 28]; // Example unavailable dates for May
    case 5: // June
      return [3, 4, 5, 10, 11, 12, 13, 17, 18, 21, 24]; // Example unavailable dates for June
    case 6: // July
      return [1, 2, 3, , 5, 6, 7, 8, 15, 16, 20, 22, 29]; // Example unavailable dates for July
    case 7: // August
      return [5, 7, 8, 9, 12, 13, 14, 19, , 22, 23, 2426]; // Example unavailable dates for August
    case 8: // September
      return [4, 5, 6, 7, 8, 11, 12, 13, 14, 18, 19, 20, 21, 25]; // Example unavailable dates for September
    case 9: // October
      return [2, 3, 4, 5, 6, 9, 10, 11, 12, 16, 17, 23, 24, 30]; // Example unavailable dates for October
    case 10: // November
      return [6, 7, 8, 11, 13, 20, 21, 22, 28, 27]; // Example unavailable dates for November
    default:
      return []; // Default to no unavailable dates
  }
}

// Function to generate calendar for a given month
function generateCalendar(monthIndex) {
  // Clear existing days
  daysContainer.innerHTML = '';

  // Update month and year in the header
  const monthYearElement = document.getElementById('monthYear');
  monthYearElement.textContent = months[monthIndex] + ' 2024';

  // Determine number of days in the selected month
  const daysInMonth = new Date(2024, monthIndex + 1, 0).getDate();

  // Get unavailable dates for the selected month
  const unavailableDates = getUnavailableDates(monthIndex);

  // Generate calendar days
  for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement('div');
    dayElement.textContent = i;
    dayElement.classList.add('day');

    if (unavailableDates.includes(i)) {
      dayElement.classList.add('unavailable');
    }

    daysContainer.appendChild(dayElement);
  }
}

// Function to navigate to the previous month
function previousMonth() {
  currentMonth = (currentMonth - 1 + 12) % 12; // Wrap around to December if going back from January
  generateCalendar(currentMonth);
}

// Function to navigate to the next month
function nextMonth() {
  currentMonth = (currentMonth + 1) % 12; // Wrap around to January if going forward from December
  generateCalendar(currentMonth);
}

// Initial calendar generation for the current month (May 2024)
generateCalendar(currentMonth);
