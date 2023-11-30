const useMatchesCalculator = () => {
  const calculateMatches = (playerNumbers, drawnNumbers) => {
    const matchingCounts = {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
      0: 0,
    };

    playerNumbers.forEach((numbers) => {
      const matches = numbers.filter((num) =>
        drawnNumbers.includes(num)
      ).length;
      matchingCounts[matches]++;
    });

    const totalPayout =
      matchingCounts[5] * 10000 +
      matchingCounts[4] * 1000 +
      matchingCounts[3] * 600 +
      matchingCounts[2] * 400;
    matchingCounts[1] * 200;

    return { matchingCounts, totalPayout };
  };

  return calculateMatches;
};

export default useMatchesCalculator;
