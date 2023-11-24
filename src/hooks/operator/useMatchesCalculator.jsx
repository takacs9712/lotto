const useMatchesCalculator = () => {
  const calculateMatches = (ticketNumbers, drawnNumbers) => {
    let matchingCounts = {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
    };

    let totalPayout = 0;

    ticketNumbers.forEach((num) => {
      if (Array.isArray(num)) {
        const matchingNumbers = num.filter((n) =>
          drawnNumbers.includes(n)
        ).length;

        switch (matchingNumbers) {
          case 5:
            matchingCounts[5]++;
            totalPayout += 10000;
            break;
          case 4:
            matchingCounts[4]++;
            totalPayout += 1000;
            break;
          case 3:
            matchingCounts[3]++;
            totalPayout += 600;
            break;
          case 2:
            matchingCounts[2]++;
            totalPayout += 400;
            break;
          case 1:
            matchingCounts[2]++;
            totalPayout += 200;
            break;
          default:
            matchingCounts[0]++;
        }
      }
    });

    return { matchingCounts, totalPayout };
  };

  return calculateMatches;
};

export default useMatchesCalculator;
