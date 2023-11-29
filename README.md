
# Timestamp Difference Calculator

This JavaScript utility calculates the difference between two given timestamps and returns the result in various formats.

## Features

- **Calculate Time Difference:** Easily calculate the time difference between two timestamps.
- **Multiple Formats:** Supports returning the difference in seconds or a formatted string with days, hours, minutes, and seconds.

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
const timeDiffCalc = require('@ask-imon/time_diff_calc');

// Example usage
const timestamp1 = '2023-01-01T00:00:00Z';
const timestamp2 = '2023-01-02T01:02:03Z';

// Get difference in seconds
console.log(timeDiffCalc(timestamp1, timestamp2, 'sec'));

// Get difference in days, hours, minutes, and seconds
console.log(timeDiffCalc(timestamp1, timestamp2, 'dhms'));
```

## Parameters

- `timestamp1` (string): First timestamp.
- `timestamp2` (string): Second timestamp.
- `format` (string): The desired output format ('sec' for seconds or 'dhms' for days, hours, minutes, and seconds).

## Returns

- (number|string): The difference between the timestamps in the desired format.

## Exceptions

- Throws an error if an unsupported format is provided.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](link-to-issues-page) if you want to contribute.

## License

Distributed under the MIT License. See `LICENSE` for more information.
