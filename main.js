//Array of Objects
//Each attendance entry has multiple attributes. An object is perfect for grouping them. An array lets us store multiple records and iterate easily.
let records = [
  { student: "Student A", date: "2025-09-18", status: "Present" }
];

// Storage helpers
//- localStorage is simple and persistent across sessions.
// - JSON lets us store structured data as strings.
// - These helpers abstract the logic so we don’t repeat ourselves.
function loadRecords() {
  const raw = localStorage.getItem("attendance");
  records = raw ? JSON.parse(raw) : [];
}
function saveRecords() {
  localStorage.setItem("attendance", JSON.stringify(records));
}

//Utility functions
//- todayISO() gives a consistent date format.
// - normalizeDate() ensures we always have a valid date, even if the user leaves it blank
function todayISO() {
  return new Date().toISOString().split("T")[0];
}
function normalizeDate(input) {
  return input && input.length ? input : todayISO();
}
