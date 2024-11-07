function logError(functionName, error, additionalInfo = {}) {
  console.error({
    timestamp: new Date().toISOString(),
    function: functionName,
    error: error.toString(),
    stack: error.stack,
    ...additionalInfo
  });
}
