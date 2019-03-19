export class GalacticAge {
  constructor(age, ethnicity) {
    this.age = age;
    this.ethnicity = ethnicity;
    this.averageLifeExpectancy = 80;
  }
  ageOnMercury() {
    const mercuryAge = (this.age * 365) / 88;
    return mercuryAge;
  }
  ageOnVenus() {
    const venusAge = (this.age * 365) / 226;
    return venusAge;
  }
  ageOnMars() {
    const marsAge = (this.age * 365) / 686;
    return marsAge;
  }
  ageOnJupiter() {
    const jupiterAge = (this.age * 365) / 4328;
    return jupiterAge;
  }
  lifeExpectancy() {
    if (this.ethnicity === "Asian") {
      const avgAsianAge = this.averageLifeExpectancy + 12;
      return avgAsianAge;
    } else if (this.ethnicity === "Caucasian") {
      const avgCaucasianAge = this.averageLifeExpectancy + 10;
      return avgCaucasianAge;
    } else if (this.ethnicity === "African-American") {
      const avgAfricanAge = this.averageLifeExpectancy + 9;
      return avgAfricanAge;
    } else if (this.ethnicity === "Indian") {
      const avgIndianAge = this.averageLifeExpectancy + 12;
      return avgIndianAge;
    } else if (this.ethnicity === "Middle-Eastern") {
      const avgMiddleAge = this.averageLifeExpectancy + 9;
      return avgMiddleAge;
    }
  }
}
















// function ageOnMercury(age) {
//   const mercuryAge = (age * 365) / 88;
//   return mercuryAge;
// }
// function ageOnVenus(age) {
//   const venusAge = (age * 365) / 88;
//   return venusAge;
// }
// function ageOnMars(age) {
//   const marsAge = (age * 365) / 88;
//   return marsAge;
// }
// function ageOnJupiter(age) {
//   const jupiterAge = (age * 365) / 88;
//   return jupiterAge;
// }
