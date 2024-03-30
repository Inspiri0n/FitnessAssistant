const BMI_INFO = [
    {
        status: "UNDERWEIGHT",
        interpretation: "You have a lower than normal body weight.\nTry to exercise more."
    },
    {
        status: "NORMAL",
        interpretation: "You have a normal body weight.\nGood job!"
    },
    {
        status: "OVERWEIGHT",
        interpretation: "You have a higher than normal body weight.\nTry to exercise more."
    }
]

export function calculateBMI(weight, height) {
    const point = weight / (height / 100) ** 2;

    switch (point) {
        case point < 18.5:
            return {point: point, info: BMI_INFO[0]};
        case point > 25:
            return {point: point, info: BMI_INFO[2]};
        default:
            return {point: point, info: BMI_INFO[1]};
    }
}