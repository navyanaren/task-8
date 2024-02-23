function suggestion(weatherCondition) {
    let transportationSuggestion;
  
    if (weatherCondition === 'sunny') {
      transportationSuggestion = 'Consider using a bicycle or walking for a healthy and environment-friendly option.';
    } else if (weatherCondition === 'rainy') {
      transportationSuggestion = 'Take a car or use public transportation for a comfortable and dry ride.';
    } else if (weatherCondition === 'windy') {
      transportationSuggestion = 'Use public transportation or drive cautiously to avoid accidents.';
    } else if (weatherCondition === 'snowy') {
      transportationSuggestion = 'Use a car or opt for public transportation if available.';
    } else {
      transportationSuggestion = 'Invalid weather condition. Please enter a valid weather condition.';
    }
  
    return transportationSuggestion;
  }
  
  const currentWeather = 'rainy';
  const Option = suggestion(currentWeather);
  console.log(Option);