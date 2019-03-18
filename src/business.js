export class GalacticAge {
  constructor(age, ethnicity) {
    this.age = age;
    this.ethnicity = ethnicity;
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
      this.age + 20;
    } else if (this.ethnicity === "Caucasian") {
      this.age + 10;
    } else if (this.ethnicity === "African-American") {
      this.age + 5;
    } else if (this.ethnicity === "Indian") {
      this.age + 15;
    } else if (this.ethnicity === "Middle-Eastern") {
      this.age + 5;
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
