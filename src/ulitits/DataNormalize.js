export function NormalizeYear(year) {
    let movieYear = year.slice(0, 4);
    return movieYear
}

export function NormalizeScore(score) {
    let userScore = Math.trunc((score * 100) / 10)
    return userScore
}
