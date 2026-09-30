const toxinLevels = [2.5, 4.7, 3.2, 5.8, 1.9];

function calculateMean (numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum / numbers.length;
}
const mean = calculateMean (toxinLevels);

const roundedMean = Math.round(mean * 100) / 100;

const message = "The mean toxin level is " + roundedMean;
 console.log(message);