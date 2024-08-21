// Function to get the current timestamp
function getCurrentTimestamp() {
  return new Date().getTime()
}

// Function to check and manage the API rate limit
function checkApiRateLimit(maxCalls = 15, timeWindowMs = 3600000) {
  const now = getCurrentTimestamp()
  const apiCallData = JSON.parse(localStorage.getItem('apiCallData')) || {
    count: 0,
    firstCallTimestamp: now
  }

  // Check if the time window has expired
  if (now - apiCallData.firstCallTimestamp > timeWindowMs) {
    // Reset the count and timestamp
    apiCallData.count = 1
    apiCallData.firstCallTimestamp = now
  } else if (apiCallData.count < maxCalls) {
    // Increment the count
    apiCallData.count += 1
  } else {
    // If limit reached, return false to block the API call
    console.warn('API call limit reached. Please wait before making more requests.')
    return false
  }

  // Save the updated API call data
  localStorage.setItem('apiCallData', JSON.stringify(apiCallData))

  // Allow the API call
  return true
}

// Export the functions
export { checkApiRateLimit }
