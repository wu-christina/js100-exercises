let today = new Date();

today.getYear(); // deprecated; no longer recommended
today.getFullYear();

// getYear() returns the year for this date according to local time minus 1900
// getYear() does not return full years
// a date in 2023 will return 123

// getFullYear() gives the full year for this date according to local time
// a date in 2023 will return 2023