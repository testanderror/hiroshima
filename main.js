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

function generateCalendar(monthIndex) {
  // Clear existing days
  daysContainer.innerHTML = '';

  // Update month and year in the header
  const monthYearElement = document.getElementById('monthYear');
  monthYearElement.textContent = months[monthIndex] + ' 2024';

  // Determine number of days in the selected month
  const daysInMonth = new Date(2024, monthIndex + 1, 0).getDate();

  // Example unavailable dates for May 2024 (1-based index)
  const unavailableDates = [5, 6, 8, 9, 12, 19, 21, 22, 26];

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

function previousMonth() {
  currentMonth = (currentMonth - 1 + 12) % 12; // Wrap around to December if going back from January
  generateCalendar(currentMonth);
}

function nextMonth() {
  currentMonth = (currentMonth + 1) % 12; // Wrap around to January if going forward from December
  generateCalendar(currentMonth);
}

// Initial calendar generation for May 2024
generateCalendar(currentMonth);
