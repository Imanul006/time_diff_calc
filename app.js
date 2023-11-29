/**
 * Calculate the difference between two timestamps and return it in a specified format.
 *
 * @param {string} timestamp1 - First timestamp.
 * @param {string} timestamp2 - Second timestamp.
 * @param {string} format - The desired output format ('sec' for seconds or 'dhms' for days, hours, minutes, and seconds).
 * @returns {number|string} - Difference between the timestamps in the desired format.
 * @throws {Error} - Throws an error if an unsupported format is provided.
 */
function timeDiffCalc(timestamp1, timestamp2, format = 'sec') {
    // Convert the given timestamps to Date objects
    const date1 = new Date(timestamp1);
    const date2 = new Date(timestamp2);
  
    // Calculate the absolute difference in milliseconds between the two timestamps
    const differenceInMilliseconds = Math.abs(date1 - date2);
  
    // Return difference in seconds
    if (format === 'sec') {
      return differenceInMilliseconds / 1000;
    } 
    // Return difference in a formatted string of days, hours, minutes, and seconds
    else if (format === 'dhms') {
      const seconds = Math.floor(differenceInMilliseconds / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
  
      let formattedDifference = '';
  
      // Add days to the string if applicable
      if (days > 0) {
        formattedDifference += days === 1 ? `${days} Day, ` : `${days} Days, `;
      }
  
      // Add hours to the string if applicable
      if (hours % 24 > 0) {
        formattedDifference += (hours % 24 === 1) ? `${hours % 24} Hour, ` : `${hours % 24} Hours, `;
      }
  
      // Add minutes to the string if applicable
      if (minutes % 60 > 0) {
        formattedDifference += (minutes % 60 === 1) ? `${minutes % 60} Minute, ` : `${minutes % 60} Minutes, `;
      }
  
      // Add seconds to the string if applicable
      if (seconds % 60 > 0 || formattedDifference === '') {
        formattedDifference += (seconds % 60 === 1) ? `${seconds % 60} Second` : `${seconds % 60} Seconds`;
      }
  
      return formattedDifference.trim(); // Remove any trailing spaces or commas
    } 
    // If an unsupported format is provided, throw an error
    else {
      throw new Error('Invalid format. Supported formats: "sec" or "dhms".');
    }
  }
  
  module.exports = timeDiffCalc;
  