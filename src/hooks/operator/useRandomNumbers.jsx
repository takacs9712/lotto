const useRandomNumbers = () => {
  const generateRandomNumbers = () => {
    const numbers = [];

    while (numbers.length < 5) {
      const randomNum = Math.floor(Math.random() * 39) + 1;

      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }

    return numbers;
  };

  return generateRandomNumbers;
};

export default useRandomNumbers;
