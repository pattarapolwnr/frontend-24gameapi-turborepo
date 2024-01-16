function shuffleFourDigitNumber(inputNumber: number): number[] | null {
  // Check if the input is a 4-digit number
  if (inputNumber < 1000 || inputNumber > 9999) {
    console.error('Invalid input. Please provide a 4-digit number.');
    return null;
  }

  // Convert the number to an array of digits
  const digitsArray = Array.from(String(inputNumber), Number);

  // Shuffle the array of digits
  for (let i = digitsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [digitsArray[i], digitsArray[j]] = [digitsArray[j], digitsArray[i]];
  }

  // Ensure the shuffled number does not start with zero
  while (digitsArray[0] === 0) {
    // Reshuffle if the first digit is zero
    digitsArray.sort(() => Math.random() - 0.5);
  }

  // Convert the array of digits back to a number
  const shuffledNumber = parseInt(digitsArray.join(''), 10);

  return [digitsArray[0], digitsArray[1], digitsArray[2], digitsArray[3]];
}
