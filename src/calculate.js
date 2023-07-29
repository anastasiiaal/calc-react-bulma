function countBMR (weight, height, age, sex) {
    return 10 * weight + 6.25 * height - 5 * age + sex
}

export default function calculate ({age, sex, weight, height, activity, goal}) {

    sex === "male" ? sex = 5 : sex = -161

    // BMR = Basal Metabolic Rate
    let BMR = countBMR(weight, height, age, sex)

    // TDEE = Total Daily Energy Expenditure
    let TDEE = BMR * activity
    
    return Math.round(TDEE)
}