function countBMR (weight, height, age, sex) {
    return 10 * weight + 6.25 * height - 5 * age + sex
}

function distributeMacros (kcal) {
    // let macros = {
    //     carbs: {
    //         grams: "",
    //         percent: ""
    //     },
    //     fats: {
    //         grams: "",
    //         percent: ""
    //     },
    //     proteins: {
    //         grams: "",
    //         percent: 30
    //     }
    // }

    let macros = {
        total: kcal,
        carbs: Math.round(kcal * 0.5 / 4),
        fats: Math.round(kcal * 0.3 / 9),
        protein: Math.round(kcal * 0.2 / 4)
    }

    return macros
}

export default function calculate ({age, sex, weight, height, activity, goal}) {

    sex === "male" ? sex = 5 : sex = -161

    // BMR = Basal Metabolic Rate
    let BMR = countBMR(weight, height, age, sex)

    // TDEE = Total Daily Energy Expenditure
    let TDEE = BMR * activity

    let result

    if (goal === "g-1") {
        result = TDEE - (TDEE / 10)
    } else if (goal === "g-3") {
        result = TDEE + (TDEE / 10)
    } else {
        result = TDEE
    }

    return distributeMacros(Math.round(result))
}