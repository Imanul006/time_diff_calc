
# Timestamp Difference Calculator

This JavaScript utility calculates the difference between two given timestamps and returns the result in various formats.

## Features

- **Calculate Time Difference:** Easily calculate the time difference between two timestamps.
- **Multiple Formats:** The system supports returning the time difference in various formats, including seconds, minutes, hours, days, weeks, months, years, a combined format of days, hours, minutes, and seconds (DHMS), and a detailed format specifying years, days, hours, minutes, and seconds.

## Installation

To integrate the `@ask-imon/time_diff_calc` utility into your project, follow these steps:

1. **Ensure Node.js and npm are Installed**: Make sure Node.js and npm are installed on your system. If not, download them from [the official Node.js website](https://nodejs.org/).

2. **Install the Package**: In your project's root directory, run the following command:

   ```sh
   npm install @ask-imon/time_diff_calc
   ```

    This will download and install the time_diff_calc package and its dependencies.

3. **Verify Installation**: Check the node_modules folder in your project directory to ensure the package is installed.   

## Usage

The function `timeDiffCalc` can be used as follows:

```javascript
// Import the function and FormatTypes - assuming they are in the same file
const { timeDiffCalc, FormatTypes } = require('@ask-imon/time_diff_calc');

// Example timestamps
const timestamp1 = "2022-01-01T00:00:00Z";
const timestamp2 = "2023-01-02T12:30:45Z";

// Calculate the difference in a specific format

// To get the difference in Seconds
const differenceInSecond = timeDiffCalc(timestamp1, timestamp2, FormatTypes.SECOND);
console.log(`Difference in Seconds: ${differenceInSecond}`);

// To get the difference in Minutes
const differenceInMinutes = timeDiffCalc(timestamp1, timestamp2, FormatTypes.MINUTE);
console.log(`Difference in Minutes: ${differenceInMinutes}`);

// To get the difference in Hours (Approx.)
const differenceInHours = timeDiffCalc(timestamp1, timestamp2, FormatTypes.HOUR);
console.log(`Difference in Hours: ${differenceInHours}`);

// To get the difference in Day (Approx.)
const differenceInDays = timeDiffCalc(timestamp1, timestamp2, FormatTypes.DAY);
console.log(`Difference in Days: ${differenceInDays}`);

// To get the difference in Weeks (Approx.)
const differenceInWeeks = timeDiffCalc(timestamp1, timestamp2, FormatTypes.WEEK);
console.log(`Difference in Weeks: ${differenceInWeeks}`);

// To get the difference in Months (Approx.)
const differenceInMonths = timeDiffCalc(timestamp1, timestamp2, FormatTypes.MONTH);
console.log(`Difference in Months: ${differenceInMonths}`);

// To get the difference in Years (Approx.)
const differenceInYears = timeDiffCalc(timestamp1, timestamp2, FormatTypes.YEAR);
console.log(`Difference in Years: ${differenceInYears}`);

// To get the difference in DHMS (Days, Hours, Minutes, Seconds)
const differenceInDHMS = timeDiffCalc(timestamp1, timestamp2, FormatTypes.DHMS);
console.log(`Difference in DHMS: ${differenceInDHMS}`);

// To get a detailed breakdown
const detailedDifference = timeDiffCalc(timestamp1, timestamp2, FormatTypes.DETAIL);
console.log(`Detailed difference: ${detailedDifference}`);
```

## Outputs
```#
Difference in Seconds: 31667445
Difference in Minutes: 527790
Difference in Hours: 8796
Difference in Days: 366
Difference in Weeks: 52
Difference in Months: 12
Difference in Years: 1
Difference in DHMS: 366 Days, 12 Hours, 30 Minutes, 45 Seconds
Detailed difference: 1 Year, 1 Day, 12 Hours, 30 Minutes, 45 Seconds
```

## Parameters

- `timestamp1` (string): First timestamp.
- `timestamp2` (string): Second timestamp.
- `format` (Enum FormatTypes): The desired output format.

## Returns

- (number|string): The difference between the timestamps in the desired format.

## Exceptions

- Throws an error if an unsupported format is provided.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](link-to-issues-page) if you want to contribute.

## License

Distributed under the MIT License. See `LICENSE` for more information.
