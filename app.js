// A pseudo-enum for format types
const FormatTypes = {
    SECOND: 'sec',
    MINUTE: 'min',
    HOUR: 'hr',
    DAY: 'day',
    WEEK: 'wk',
    MONTH: 'mon',
    YEAR: 'yr',
    DHMS: 'dhms',
    DETAIL: 'detail'
};

/**
 * Calculate the difference between two timestamps and return it in various formats.
 *
 * @param {string} timestamp1 - First timestamp.
 * @param {string} timestamp2 - Second timestamp.
 * @param {string} format - The desired output format. Options are 'sec' (seconds), 'min' (minutes), 'hr' (hours),
 *                          'day' (days), 'wk' (weeks), 'mon' (months), 'yr' (years), 'dhms' (days, hours, minutes, seconds),
 *                          'detail' (detailed breakdown including all units).
 * @returns {number|string} - Difference between the timestamps in the desired format.
 * @throws {Error} - Throws an error if an unsupported format is provided.
 */
function timeDiffCalc(timestamp1, timestamp2, format = 'sec') {
    // Convert the given timestamps to Date objects
    const date1 = new Date(timestamp1);
    const date2 = new Date(timestamp2);

    // Calculate the absolute difference in milliseconds between the two timestamps
    const differenceInMilliseconds = Math.abs(date1 - date2);

    switch (format) {
        case FormatTypes.SECOND:
            // Return difference in seconds
            return differenceInMilliseconds / 1000;

        case FormatTypes.MINUTE:
            // Return difference in minutes
            return Math.floor(differenceInMilliseconds / 1000 / 60);

        case FormatTypes.HOUR:
            // Return difference in hours
            return Math.floor(differenceInMilliseconds / 1000 / 60 / 60);

        case FormatTypes.DAY:
            // Return difference in days
            return Math.floor(differenceInMilliseconds / 1000 / 60 / 60 / 24);

        case FormatTypes.WEEK:
            // Return difference in weeks
            return Math.floor(differenceInMilliseconds / 1000 / 60 / 60 / 24 / 7);

        case FormatTypes.MONTH:
            // Return an estimated difference in months (considering an average month length)
            return Math.floor(differenceInMilliseconds / 1000 / 60 / 60 / 24 / 30);

        case FormatTypes.YEAR:
            // Return an estimated difference in years
            return Math.floor(differenceInMilliseconds / 1000 / 60 / 60 / 24 / 365);

        case FormatTypes.DHMS:
            // Existing 'dhms' format code...
            // Calculating days, hours, minutes, and seconds
            const seconds = Math.floor(differenceInMilliseconds / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);

            let formattedDifference = '';

            if (days > 0) formattedDifference += `${days} Day${days > 1 ? 's' : ''}, `;
            if (hours % 24 > 0) formattedDifference += `${hours % 24} Hour${hours % 24 > 1 ? 's' : ''}, `;
            if (minutes % 60 > 0) formattedDifference += `${minutes % 60} Minute${minutes % 60 > 1 ? 's' : ''}, `;
            if (seconds % 60 > 0) formattedDifference += `${seconds % 60} Second${seconds % 60 > 1 ? 's' : ''}`;

            return formattedDifference.trim();

        case FormatTypes.DETAIL:
            // Detailed breakdown calculation
            const totalSeconds = Math.floor(differenceInMilliseconds / 1000);
            const totalMinutes = Math.floor(totalSeconds / 60);
            const totalHours = Math.floor(totalMinutes / 60);
            const totalDays = Math.floor(totalHours / 24);
            const totalWeeks = Math.floor(totalDays / 7);

            // Approximate the number of months and years
            const totalMonths = Math.floor(totalDays / 30);
            const totalYears = Math.floor(totalDays / 365);

            // Calculate remaining time after subtracting each larger unit
            const remainingDays = totalDays % 365 % 30; // Days remaining after accounting for years and months
            const remainingHours = totalHours % 24; // Hours remaining after accounting for whole days
            const remainingMinutes = totalMinutes % 60; // Minutes remaining after accounting for whole hours
            const remainingSeconds = totalSeconds % 60; // Seconds remaining after accounting for whole minutes

            let detailedBreakdown = '';

            // Add each time unit to the breakdown if it's greater than zero
            if (totalYears > 0) detailedBreakdown += `${totalYears} Year${totalYears > 1 ? 's' : ''}, `;
            if (totalMonths % 12 > 0) detailedBreakdown += `${totalMonths % 12} Month${totalMonths % 12 > 1 ? 's' : ''}, `;
            if (remainingDays > 0) detailedBreakdown += `${remainingDays} Day${remainingDays > 1 ? 's' : ''}, `;
            if (remainingHours > 0) detailedBreakdown += `${remainingHours} Hour${remainingHours > 1 ? 's' : ''}, `;
            if (remainingMinutes > 0) detailedBreakdown += `${remainingMinutes} Minute${remainingMinutes > 1 ? 's' : ''}, `;
            if (remainingSeconds > 0) detailedBreakdown += `${remainingSeconds} Second${remainingSeconds > 1 ? 's' : ''}`;

            return detailedBreakdown.trim();

        default:
            throw new Error('Invalid format. Supported formats: "sec", "min", "hr", "day", "wk", "mon", "yr", "dhms", "detail".');
    }
}

module.exports = { timeDiffCalc, FormatTypes };
