export function checkValidAge (age) {
    if (age > 1 && age < 120) {
        return true
    }
    return false
}

export function checkValidWeight (weight) {
    if (weight > 15 && weight < 300) {
        return true
    }
    return false
}

export function checkValidHeight (height) {
    if (height > 50 && height < 230) {
        return true
    }
    return false
}

export function checkValidSex (sex) {
    if (sex === "male" || sex === "female") {
        return true
    }
    return false
}

export function checkValidActivity (activity) {
    if (activity == "1.2" || 
        activity == "1.375" || 
        activity == "1.55" || 
        activity == "1.725" || 
        activity == "1.9") 
    {
        return true
    }
    return false
}

export function checkValidGoal (goal) {
    if (goal == "g-1" || goal == "g-2" || goal == "g-3") {
        return true
    }
    return false
}